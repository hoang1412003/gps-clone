import { Menu } from "antd";
import type React from "react";
interface CustomMenuProps {
  setShowLogout: (showLogout: boolean) => void
}
const CustomMenu: React.FC<CustomMenuProps>= ({setShowLogout}) => {
    return(
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"></path></svg>,
              label: 'Giám sát',
            },
            {
              key: '2',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.298 22 8.69525 21.5748 7.29229 20.8248L2 22L3.17629 16.7097C2.42562 15.3063 2 13.7028 2 12C2 6.47715 6.47715 2 12 2ZM13 7H11V14H17V12H13V7Z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '3',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM135.5,131.56a8,8,0,0,1-7.87,6.61,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,87.52,115L129,122.29A8,8,0,0,1,135.5,131.56Zm47-24.18a8,8,0,0,1-7.86,6.61,7.55,7.55,0,0,1-1.41-.13l-83-14.65a8,8,0,0,1,2.79-15.76l83,14.66A8,8,0,0,1,182.53,107.38Zm5.55-31.52a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12l-83-14.66a8,8,0,1,1,2.78-15.75l83,14.65A8,8,0,0,1,188.08,75.86Z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '4',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8.59114 13.8089L7.59998 14.3812L8.59954 16.1124L9.59141 15.5397C9.98434 15.9114 10.4634 16.1929 10.9955 16.3513V17.4956H12.9945V16.3512C13.5266 16.1928 14.0057 15.9113 14.3986 15.5396L15.3905 16.1123L16.39 14.3811L15.3987 13.8088C15.4605 13.5485 15.4932 13.277 15.4932 12.9978C15.4932 12.7186 15.4605 12.447 15.3987 12.1867L16.39 11.6145L15.3904 9.88325L14.3985 10.4559C14.0056 10.0843 13.5265 9.80274 12.9944 9.64438V8.5H10.9954V9.64438C10.4633 9.80275 9.98424 10.0843 9.59133 10.456L8.59949 9.88335L7.59998 11.6146L8.59112 12.1868C8.52933 12.4471 8.49663 12.7186 8.49663 12.9978C8.49663 13.277 8.52934 13.5486 8.59114 13.8089ZM11.9949 14.4971C11.1669 14.4971 10.4957 13.8258 10.4957 12.9978C10.4957 12.1698 11.1669 11.4985 11.9949 11.4985C12.8229 11.4985 13.4942 12.1698 13.4942 12.9978C13.4942 13.8258 12.8229 14.4971 11.9949 14.4971Z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '5',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"></path><path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"></path><path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"></path><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '6',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29 448 448"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '7',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" className='icon-size-layout' enable-background="new 0 0 48 48" xmlns="http://www.w3.org/2000/svg"><polygon fill="#FF9800" points="24,37 19,31 19,25 29,25 29,31"></polygon><g fill="#FFA726"><circle cx="33" cy="19" r="2"></circle><circle cx="15" cy="19" r="2"></circle></g><path fill="#FFB74D" d="M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"></path><path fill="#424242" d="M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"></path><g fill="#784719"><circle cx="28" cy="19" r="1"></circle><circle cx="20" cy="19" r="1"></circle></g><polygon fill="#fff" points="24,43 19,31 24,32 29,31"></polygon><polygon fill="#D32F2F" points="23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"></polygon><path fill="#546E7A" d="M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '8',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="var(--warning)" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg" style={{ color: 'yellow' }}><path d="M449.07 399.08 278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17zm-198.6-1.83a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '9',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '10',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '11',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z"></path></svg>,
              label: 'nav 3',
            },
            {
              key: '12',
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" className="ant-menu-item-icon icon-size-layout" xmlns="http://www.w3.org/2000/svg"><path d="M 15 4 L 15 16 L 17 16 L 17 4 Z M 12 4.6875 C 7.347656 6.339844 4 10.785156 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 10.785156 24.652344 6.339844 20 4.6875 L 20 6.84375 C 23.527344 8.390625 26 11.910156 26 16 C 26 21.515625 21.515625 26 16 26 C 10.484375 26 6 21.515625 6 16 C 6 11.910156 8.472656 8.390625 12 6.84375 Z"></path></svg>,
              label: 'Đăng xuất',
              onClick: () => setShowLogout(true)
            },
          ]}
        />
    )
}
export default CustomMenu
