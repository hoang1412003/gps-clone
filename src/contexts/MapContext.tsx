// MapContext.tsx
import { createContext, useContext } from "react";
import { Map } from "leaflet";

export const MapContext = createContext<Map | null>(null);
export const useMapContext = () => useContext(MapContext);
