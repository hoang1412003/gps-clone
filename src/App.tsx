import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { ConfigProvider } from 'antd';
import { routes } from "./routes/routesConfig";
import viVN from "antd/es/locale/vi_VN";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                <ConfigProvider locale={viVN}>
                  {route.element}
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
