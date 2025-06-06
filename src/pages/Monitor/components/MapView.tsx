import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, useMap } from "react-leaflet";
import L, { type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker";
import RotatedMarker from "../components/RotatedMarker";
import truckCar from "../../../assets/images/monitor/car/truck-car.png";
import { useMapContext } from "../../../contexts/MapContext";
import React from "react";
import { MapCenterUpdater } from "./MapCenterUpdater";

interface MapViewProps {
  vehicles: IVehicle[];
  onCountdownFinished: () => void;
  selectedVehicle: LatLngTuple | null;
}

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
const REFRESH_INTERVAL = 10;
const MapSetter = () => {
  const map = useMap();             
  const { setMap } = useMapContext();

  
  useEffect(() => {
    setMap(map);
  }, [map, setMap]);

  return null;                      
};

const MapView: React.FC<MapViewProps> = ({
  vehicles,
  onCountdownFinished,
  selectedVehicle,
}) => {
    //const [position, setPosition] = useState<LatLngTuple>([10.7769, 106.7009])
    const [countdown, setCountdown] = useState(REFRESH_INTERVAL);
    const customIcon = L.icon({
        iconUrl: truckCar,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });
    console.log("positon: ", selectedVehicle)
    useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev: number) => {
        if (prev === 1) {
          onCountdownFinished(); // gọi API từ Monitor
          return REFRESH_INTERVAL; // reset lại đếm
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [onCountdownFinished, REFRESH_INTERVAL]);
    return (
            <MapContainer
                center={[10.7769, 106.7009]} // TP.HCM
                zoom={12}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{ height: "100vh", width: "100%" }}
            >
                <MapSetter />   
                <MapCenterUpdater center={selectedVehicle} />
                <div className="absolute z-[998] bg-white top-0 left-0 right-0 flex justify-center" style={{zIndex: 400}}>
                    <div className="absolute -bottom-10 px-4">
                        <div data-show="true" className="ant-alert ant-alert-info ant-alert-no-icon py-1 css-vj858a" role="alert">
                            <div className="ant-alert-content">
                                <div className="ant-alert-message">
                                    <div className="text-[12px]">
                                        <div>Làm mới sau <span className="font-bold">{countdown}</span> giây,{" "}
                                            <span
                                                className="underline text-prim cursor-pointer text-yellow-400"
                                                onClick={()=>{
                                                    setCountdown(REFRESH_INTERVAL)
                                                    onCountdownFinished()
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
