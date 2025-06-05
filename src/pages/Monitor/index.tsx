import { useLocation, useNavigate } from "react-router-dom";
import { message } from 'antd';
import { useEffect, useState } from "react";
import MapView from "./components/MapView";
import VehicleTrackingTable from "./components/VehicleTrackingTable";
import type { IVehicle } from "../../types/IVehicle";
import { getGPSService } from "../../services/gpsService";

const REFRESH_INTERVAL = 10;

const Monitor = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const location = useLocation();
    const navigate = useNavigate();

    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [countdown, setCountdown] = useState(REFRESH_INTERVAL);

    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    const handleRefresh = () => {
        fetchVehicles();
        setCountdown(REFRESH_INTERVAL);
    };
    const fetchVehicles = async () => {
        try {
            const res = await getGPSService();
            if (res.result && res.data) {
                const vehicleList = Object.values(res.data) as IVehicle[];
                setVehicles(vehicleList);
            }
        } catch (err) {
            console.error("Lỗi khi tải dữ liệu GPS:", err);
        }
    };

    useEffect(() => {
        fetchVehicles();

        const fetchInterval = setInterval(() => {
            //   fetchVehicles();
            //   setCountdown(REFRESH_INTERVAL);
            handleRefresh()
        }, REFRESH_INTERVAL * 1000);

        const countdownInterval = setInterval(() => {
            setCountdown(prev => (prev === 0 ? REFRESH_INTERVAL : prev - 1));
        }, 1000);

        return () => {
            clearInterval(fetchInterval);
            clearInterval(countdownInterval);
        };
    }, []);

    useEffect(() => {
        const successMessage = location.state?.msg;
        if (successMessage) {
            messageApi.success(successMessage);
            navigate(location.pathname, { replace: true });
        }
    }, [location.state?.msg]);

    return (
        <div className="relative">
            {contextHolder}
            <MapView vehicles={vehicles} countdown={countdown} onRefresh={handleRefresh} />
            {!showTable && (
        <div
          className="absolute top-2 left-2 bg-black flex items-center p-2 cursor-pointer"
          style={{ zIndex: 501 }}
          onClick={toggleTable}
        >
          <div>
            <span className="ant-btn-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                color="var(--white)"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"></path>
              </svg>
            </span>
          </div>
        </div>
      )}

      {showTable && <VehicleTrackingTable vehicles={vehicles} toggleTable={toggleTable}/>}
        </div>
    );
};

export default Monitor;
