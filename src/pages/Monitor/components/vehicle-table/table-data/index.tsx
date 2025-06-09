import { Select, Table, type TableColumnsType } from "antd";
import { createStyles } from "antd-style";
import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
interface VehicleData {
  key: string;
  imei: string;
  vehicle_name: string;
  latitude: string;
  longitude: string;
  speed: number;
  status_device: number;
  time: number;
}

interface TableDataProps {
    vehicles: VehicleData[];
    onSelectVehicle: (vehicle: LatLngTuple) => void;
    setVehicleDetail: (vehicle: VehicleData) => void
}

const columns: TableColumnsType<VehicleData> = [
  { title: 'Biển số xe', dataIndex: 'vehicle_name', key: 'vehicle_name' },
  { title: 'Tốc độ (km/h)', dataIndex: 'speed', key: 'speed' },
  { title: 'IMEI', dataIndex: 'imei', key: 'imei', fixed: 'left' },
];
const useStyle = createStyles(({ css }) => {
  const antCls = '.ant';
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});
const TableData: React.FC<TableDataProps> = ({onSelectVehicle, vehicles, setVehicleDetail})  => {
    const { styles } = useStyle();
      const [dataSource, setDataSource] = useState<VehicleData[]>([]);
      useEffect(() => {
          const formattedData = vehicles.map((vehicle, index) => ({
            ...vehicle,
            key: `${vehicle.imei}-${index}`,
          }));
          console.log("formattedData: ", formattedData)
          setDataSource(formattedData);
        }, [vehicles]);
    return (
        <div className="p-1 w-full">
          <Select
            className="w-full mb-2"
            showSearch
            placeholder="Chọn phương tiện"
            optionFilterProp="label"
            // onChange={onChange}
            // onSearch={onSearch}
            options={vehicles.map(v => ({ value: v.imei, label: v.vehicle_name }))}
          />
          <Table
            className={styles.customTable}
            columns={columns}
            dataSource={dataSource}
            scroll={{ x: 1000, y: 400 }}
            size="small"
            pagination={false}
            onRow={(record) => {
              return {
                onClick: () => {
                  console.log("check click", record.latitude, record.longitude)
                  onSelectVehicle([parseFloat(record.latitude), parseFloat(record.longitude)]);
                  setVehicleDetail(record)
                },
              };
            }}
          />
        </div>
    )
}
export default TableData