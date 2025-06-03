import { AxiosError } from 'axios';

type ErrorResponse = {
    message?: string;
    errors?: {
        msg: string;
        param?: string;
        value?: string;
    }[];
};

export const handleAxiosError = (
    err: unknown,
    showError: (msg: string) => void
) => {
    const axiosError = err as AxiosError;

    if (axiosError.response && axiosError.response.data) {
        const resData = axiosError.response.data as ErrorResponse;

        if (resData.errors && resData.errors.length > 0) {
            showError(resData.errors[0].msg);
        } else if (resData.message) {
            showError(resData.message);
        } else {
            showError("Đã xảy ra lỗi không xác định.");
        }
    } else {
        showError("Lỗi kết nối hoặc máy chủ không phản hồi.");
    }
};