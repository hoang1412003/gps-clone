import type { LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MapCenterUpdater: React.FC<{ center: LatLngTuple | null }> = ({ center }) => {
  const map = useMap();

   useEffect(() => {
    if (center) {
      map.flyTo(center, 18); // Zoom tới mức 18
    }
  }, [center, map]);

  return null;
};
