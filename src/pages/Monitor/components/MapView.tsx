import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker";
import RotatedMarker from "../components/RotatedMarker";
import { getGPSService } from "../../../services/gpsService";
import truckCar from "../../../assets/images/monitor/car/truck-car.png";

interface IVehicle {
    vehicle_name: string;
    latitude: string;
    longitude: string;
    speed: number;
    rotation: number;
}
const titleLayer = {
    name: "Bản đồ đường bộ",
    shortName: "Đường bộ",
    url: "https://{s}.google.com/vt/lyrs=m@167000000&hl=vi-VN&gl=en&x={x}&y={y}&z={z}",
    copyRight: "Google Map",
    icon: "fa-road",
    value: 1,
    image: "/assets/images/maptype-1.png",
    type: "roadmap",
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }

const REFRESH_INTERVAL = 10; // giây

const MapView = () => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [countdown, setCountdown] = useState(REFRESH_INTERVAL);

    const customIcon = L.icon({
        iconUrl: truckCar,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });

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
        fetchVehicles(); // lần đầu
        const fetchInterval = setInterval(() => {
            fetchVehicles();
            setCountdown(REFRESH_INTERVAL);
        }, REFRESH_INTERVAL * 1000);

        const countdownInterval = setInterval(() => {
            setCountdown((prev) => (prev === 0 ? REFRESH_INTERVAL : prev - 1));
        }, 1000);

        return () => {
            clearInterval(fetchInterval);
            clearInterval(countdownInterval);
        };
    }, []);

    return (
        <MapContainer
            center={[10.7769, 106.7009]} // TP.HCM
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100%" }}
        >
            <div className="absolute z-[998] bg-white top-0 left-0 right-0 flex justify-center">
                <div className="absolute -bottom-10 px-4">
                    <div data-show="true" className="ant-alert ant-alert-info ant-alert-no-icon py-1 css-vj858a" role="alert">
                        <div className="ant-alert-content">
                            <div className="ant-alert-message">
                                <div className="text-[12px]">
                                    <div>Làm mới sau <span className="font-bold">{countdown}</span> giây,{" "}
                                        <span
                                            className="underline text-prim cursor-pointer text-yellow-400"
                                            onClick={() => {
                                                fetchVehicles();
                                                setCountdown(REFRESH_INTERVAL);
                                            }}
                                        >
                                            Làm mới
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TileLayer
      key={titleLayer?.subdomains?.join(",")}
      maxZoom={30}
      url={titleLayer?.url}
      //attribution={titleLayer?.attribution}
      subdomains={titleLayer?.subdomains || []}
    />

            {vehicles.map((vehicle) => (
                <RotatedMarker
                    key={`${vehicle.vehicle_name}-${vehicle.latitude}-${vehicle.longitude}-${vehicle.rotation}`}
                    position={[parseFloat(vehicle.latitude), parseFloat(vehicle.longitude)]}
                    icon={customIcon}
                    rotationAngle={vehicle.rotation}
                >
                    <Popup>
                        <strong>{vehicle.vehicle_name}</strong><br />
                        Speed: {vehicle.speed} km/h
                    </Popup>
                </RotatedMarker>
            ))}
        </MapContainer>
    );
};

export default MapView;
