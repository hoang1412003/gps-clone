import { useMapContext } from '../../../../contexts/MapContext';
import mapType1 from '../../../../assets/images/map/maptype-1.png'
const BottomTool = () => {
    const { map } = useMapContext();

    const handleZoomIn = () => {
        console.log("map layou: ", map)
        map?.zoomIn();
    };

    const handleZoomOut = () => {
        map?.zoomOut();
    };

    return (
        <div style={{
            height: '5%',
            width: '100%',
            background: '#001628',
            zIndex: '1000'
        }} className='flex items-center'>
            <div>
                <div className='flex items-center gap-3 h-full px-4'>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer">
                        <img src={mapType1} className="w-full h-full object-cover" />
                    </div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer">
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg className='text-white group-hover:text-blue-500 transition-colors duration-300' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M128,58a30,30,0,1,0,30,30A30,30,0,0,0,128,58Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm0,32a30,30,0,1,0,30,30A30,30,0,0,0,128,138Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,186Zm88-40H198V78h18a6,6,0,0,0,0-12H198V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V66H40a6,6,0,0,0,0,12H58v68H40a6,6,0,0,0,0,12H58v58a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,70a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z"></path></svg></span>
                    </div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer" onClick={handleZoomOut}>
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg className='text-white group-hover:text-blue-500 transition-colors duration-300' stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M15 8v1h-13v-1h13z"></path></svg></span>
                    </div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer" onClick={handleZoomIn}>
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg className='text-white group-hover:text-blue-500 transition-colors duration-300' stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"></path></svg></span>
                    </div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer">
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg className='text-white group-hover:text-blue-500 transition-colors duration-300' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"></path></svg></span>
                    </div>
                    <div className="border-r border-r-root_bg_gray h-[28px] text-white"></div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer">
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg className='text-white group-hover:text-blue-500 transition-colors duration-300' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M200,156c0,6.5-7.33,12-16,12s-16-5.5-16-12,7.33-12,16-12S200,149.5,200,156ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM143.37,172.88l-44-104a8,8,0,0,0-14.74,0l-44,104a8,8,0,0,0,14.74,6.24L66.84,152h50.32l11.47,27.12a8,8,0,0,0,14.74-6.24ZM216,124c0-15.44-14.36-28-32-28a34.86,34.86,0,0,0-20.78,6.68,8,8,0,0,0,9.56,12.83A18.84,18.84,0,0,1,184,112c8.56,0,15.8,5.36,16,11.76v8A35.24,35.24,0,0,0,184,128c-17.64,0-32,12.56-32,28s14.36,28,32,28a35.13,35.13,0,0,0,16.93-4.26A8,8,0,0,0,216,176ZM73.61,136h36.78L92,92.53Z"></path></svg></span>
                    </div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer">
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg className='text-white group-hover:text-blue-500 transition-colors duration-300' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M232,72v92a44,44,0,0,1-87.81,4H111.81A44,44,0,0,1,24,164V72A32,32,0,0,1,56,40a8,8,0,0,1,0,16A16,16,0,0,0,40,72v58.08A44,44,0,0,1,110.32,152h35.36A44,44,0,0,1,216,130.08V72a16,16,0,0,0-16-16,8,8,0,0,1,0-16A32,32,0,0,1,232,72Z"></path></svg></span>
                    </div>
                    <div className="border-r border-r-root_bg_gray h-[28px] text-white"></div>
                    <div className="group hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300 w-7 h-7 rounded-full border border-white overflow-hidden cursor-pointer">
                        <span className="ant-btn-icon flex items-center justify-center w-full h-full"><svg stroke="currentColor" className='text-white group-hover:text-blue-500 transition-colors duration-300' fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5z"></path><path d="M19 14c-1.654 0-3 1.346-3 3 0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5z"></path></svg></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomTool