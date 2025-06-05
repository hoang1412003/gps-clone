import { createContext, useContext } from 'react';
import L from 'leaflet';

type MapContextType = {
  map: L.Map | null;
  setMap: (map: L.Map) => void;
};

export const MapContext = createContext<MapContextType>({
  map: null,
  setMap: () => {},
});

export const useMapContext = () => useContext(MapContext);
