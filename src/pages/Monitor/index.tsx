import { useLocation, useNavigate } from "react-router-dom";
import { message } from 'antd';
import { useEffect } from "react";
import MapView from "./components/MapView";
import VehicleTrackingTable from "./components/VehicleTrackingTable";

const Monitor = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const location = useLocation();
    const successMessage = location.state?.msg;
    const navigate = useNavigate();

    useEffect(() => {
        if (successMessage) {
            messageApi.success(successMessage);
            navigate(location.pathname, { replace: true });
        }
    }, [successMessage]);

    return (
        <div className="relative">
            {contextHolder}
            <MapView/>
            <VehicleTrackingTable/>
        </div>
    );
};

export default Monitor;
