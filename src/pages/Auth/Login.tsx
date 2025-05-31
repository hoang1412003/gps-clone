import { Carousel } from 'antd';
import banner1 from '../../assets/images/login/banners/banner1.jpg'
import banner2 from '../../assets/images/login/banners/banner2.jpg';
import logo from '../../assets/images/login/logo/log-mid.png'
import as from '../../assets/images/login/qr/as.png'
import ch from '../../assets/images/login/qr/ch.png'
import zl from '../../assets/images/login/qr/zl.png'
import './login.css'
import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom'; // Nếu có điều hướng sau login
import Cookies from "js-cookie";



interface SubmitButtonProps {
    form: FormInstance;
}
interface LoginFormValues {
    username: string;
    password: string;
}
const domain = import.meta.env.VITE_MID_API_URL;
console.log("baseURL: ", domain)
const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState<boolean>(false);

    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            {children}
        </Button>
    );
};

const banners = [banner1, banner2]; // có thể mở rộng thêm ảnh
const qrs = [ch, as, zl];

const SignUp = () => {
    const navigate = useNavigate(); // nếu dùng react-router
    const handleLogin = async (values: LoginFormValues) => {
        try {

            console.log("values: ", values)
            const response = await axios.post(`${domain}/users/login`, {
                username: values.username,
                password: values.password,
            });
            console.log("response: ", response)
            const { result, message: msg, data } = response.data;
            console.log("result: ", result)
            if (result) {
                 console.log("check")
                localStorage.setItem("uid", data?.data[0]?.userId);
                localStorage.setItem("dp_id", data?.data[0]?.department_id);
                localStorage.setItem("role", data?.data[0]?.role);
                
                Cookies.set("accessToken", data?.data[0]?.token);
                Cookies.set("refreshToken", data?.data[0]?.refreshToken);
                message.success('Đăng nhập thành công!');
                console.log("check")
                navigate('/monitor'); // Điều hướng nếu cần
            } else {
                message.error(msg || 'Đăng nhập thất bại!');
            }
        } catch (error) {
            console.error(error);
            message.error('Có lỗi xảy ra khi đăng nhập!');
        }
    };

    const [form] = Form.useForm();
    return (
        <div className="flex w-full h-screen p-4 bg-gray-100">
            <div className="w-[70%] mr-2 h-full rounded-xl overflow-hidden">
                <Carousel autoplay autoplaySpeed={3000} effect="scrollx" className='h-full w-full'>
                    {banners.map((banner, index) => (
                        <div key={index} className="h-full py-20 px-8 relative">
                            {/* Lớp nền mờ */}
                            <div
                                className="absolute inset-0 bg-cover bg-center blur-3xl opacity-60 z-0"
                                style={{ backgroundImage: `url(${banner})` }}
                            ></div>

                            {/* Lớp foreground */}
                            <div
                                className="relative h-screen bg-contain bg-center bg-no-repeat h-full w-full"
                                style={{ backgroundImage: `url(${banner})` }}
                            ></div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="w-[30%] bg-white ml-2 rounded-xl">
                <div className='p-8 flex flex-col justify-center h-full gap-2 '>
                    <div className='flex items-center'>
                        <div className='logo'>
                            <img src={logo} alt="logo" className="h-full w-full" />
                        </div>
                        <div className='border-l-root_border_color border-l-2 h-[30px] mx-4 opacity-20'></div>
                        <div >
                            <div className='font-semibold text-lg text-login'>ĐĂNG NHẬP</div>
                            <div className='font-light text-size text-login'>GIÁM SÁT HÀNH TRÌNH</div>
                        </div>
                    </div>

                    <div className='w-full py-4'>
                        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleLogin}>
                            <Form.Item name="username" label="Tài khoản" rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}>
                                <Input placeholder="Nhập tài khoản" />
                            </Form.Item>
                            <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
                                <Input.Password placeholder="Nhập mật khẩu" />
                            </Form.Item>
                            <Form.Item>
                                <Space className='w-full'>
                                    <SubmitButton form={form}>Đăng nhập</SubmitButton>
                                </Space>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="ant-divider css-vj858a ant-divider-horizontal my-2 bg-gray-300 custom-divider" role="separator"></div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-size text-login text-center'>Tải App hoặc liên hệ hỗ trợ</div>
                        <div className="grid grid-cols-3 gap-4 qr">
                            {
                                qrs.map((qr, index) => (

                                    <div key={index}
                                        className="relative h-full bg-contain bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url(${qr})` }}
                                    ></div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="ant-divider css-vj858a ant-divider-horizontal my-2 bg-gray-300 custom-divider" role="separator"></div>
                    <div className="bg-white">
                        <div className="h-full overflow-auto">
                            <div className="flex flex-col gap-2">
                                <div className="font-semibold text-[16px] text-login">MIDVN</div>
                                <div className="flex">
                                    <div className="flex-1">
                                        <div className="flex gap-2">
                                            <div className="whitespace-nowrap text-login text-size">Số điện thoại:</div>
                                            <div className='text-login text-size'>0899191919</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="whitespace-nowrap text-login text-size">Địa chỉ:</div>
                                            <div className='text-login text-size'>52 Đ.Đông Du, P.Bến Nghé, Quận 1 - TP. Hồ Chí Minh</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
