import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { routes } from "./routes/routesConfig";
import viVN from "antd/es/locale/vi_VN";
import "./css/tailwind-override.css"
import React from 'react';

function App() {
  return (
    <>
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
    </>
  )
}

export default App
