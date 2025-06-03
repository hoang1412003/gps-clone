import { useLocation, useNavigate } from "react-router-dom";
import { message } from 'antd';
import { useEffect } from "react";
import MapView from "./components/MapView";

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
        <div>
            {contextHolder}
            <MapView/>
        </div>
    );
};

export default Monitor;
