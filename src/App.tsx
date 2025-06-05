import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { routes } from "./routes/routesConfig";
import viVN from "antd/es/locale/vi_VN";
import "./css/tailwind-override.css";
import './css/common.css'
import React, { useState } from 'react';
import { MapContext } from './contexts/MapContext';

function App() {
    const [map, setMap] = useState<L.Map | null>(null);
  return (
    <>
    <MapContext.Provider value={{ map, setMap }}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ConfigProvider locale={viVN}>
                  {typeof route.element === "function"
                    ? React.createElement(route.element)
                    : route.element}
                </ConfigProvider>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
      </MapContext.Provider>
    </>
  )
}

export default App
