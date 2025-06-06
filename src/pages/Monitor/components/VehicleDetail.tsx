interface VehicleDetailProps {
  showDetail: boolean;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({ showDetail }) => {
  return (
    <div
      className={`
    z-index-ct vehicle-dt-container
    fixed top-2 right-2 bg-white
    transition-transform duration-300 ease-in-out
    ${showDetail ? 'translate-x-0' : 'translate-x-[100vw]'}
  `}
    >
      <div className="flex px-2 justify-between bg-black items-center h-8">
        <div className="text-white">ten</div>
        <div>
          <svg
            stroke="currentColor"
            className="text-white"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            color="var(--white)"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
