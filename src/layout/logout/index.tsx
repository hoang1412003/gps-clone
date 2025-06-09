import type React from "react"
import { logOutService } from '../../services/authService';
interface LogoutProps{
    setShowLogout: (shadowRoot: boolean) => void
}
const Logout: React.FC<LogoutProps> = ({setShowLogout}) => {
    return (
        <div className="w-full h-full bg-black/50 fixed flex justify-center items-center" style={{ zIndex: 502 }}>
            <div className="w-100 h-30 bg-white p-3">
                <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-medium ">Xác nhập đăng xuất?</h3>
                    <h4 className="text-xs">Đăng xuất khỏi tài khoản này</h4>
                </div>
                <div className="flex gap-2 justify-end mt-5">
                    <button onClick={() => setShowLogout(false)} className="text-xs px-4 py-2 cursor-pointer border border-gray-300 hover:opacity-70">Hủy</button>
                    <button onClick={() => {
                        logOutService()
                        setShowLogout(false)
                    }} className="text-xs px-6 py-2 cursor-pointer bg-blue-300 hover:opacity-70">Đăng xuất</button>
                </div>
            </div>
        </div>
    )
}

export default Logout