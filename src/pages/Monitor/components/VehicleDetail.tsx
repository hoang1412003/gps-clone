import { SlArrowRight } from "react-icons/sl";
import type { VehicleData } from "./vehicle-table";
interface VehicleDetailProps {
  showDetail: boolean;
  setShowDetail: (show: boolean) => void
  vehicleDetail: VehicleData
}

const VehicleDetail:React.FC<VehicleDetailProps> = ({showDetail, setShowDetail, vehicleDetail}) => {
  //const [showDetail, setShowDetail] = useState(false)
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
        <div className="text-white">{vehicleDetail ? vehicleDetail.vehicle_name: 'No device picked'}</div>
        <div onClick={()=>setShowDetail(false)}>
          <SlArrowRight className="text-white cursor-pointer"/>
        </div>
      </div>

    </div>
  );
};

export default VehicleDetail;
