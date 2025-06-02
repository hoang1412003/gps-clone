import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { ConfigProvider } from 'antd';
import { routes } from "./routes/routesConfig";
import viVN from "antd/es/locale/vi_VN";
import PrivateRoute from "./components/Route/PrivateRoute";
import PublicRoute from './components/Route/PublicRoute';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ConfigProvider locale={viVN}>
                  <PrivateRoute>
                    <MainLayout>
                      {route.element}
                    </MainLayout>

                  </PrivateRoute>
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
