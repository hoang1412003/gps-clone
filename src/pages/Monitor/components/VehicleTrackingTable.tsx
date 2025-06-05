import React, { useState, useEffect } from 'react';
import { Table, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { createStyles } from 'antd-style';

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

interface VehicleTrackingTableProps {
  vehicles: VehicleData[];
  toggleTable: () => void
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

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const VehicleTrackingTable: React.FC<VehicleTrackingTableProps> = ({ vehicles, toggleTable }) => {
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
    <div className='absolute top-2 left-2' style={{ zIndex: 500 }}>
      <div className="bg-white vehicle-tb">
        <div className="tb-head px-2 w-full h-8 flex items-center justify-between bg-gray-800 text-white">
          <div className="flex items-center gap-1 cursor-pointer ">
            <div>
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="15" width="15">
                <path d="M216,64V192H88V64Z" opacity="0.2"></path>
                <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
              </svg>
            </div>
            <div className="text-xs">Tất cả phương tiện</div>
          </div>
          <div className="flex items-center gap-1 cursor-pointer ">
            <div>
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="15" width="15">
                <path d="M224,72v48H160a32,32,0,0,1-64,0H32V72A16,16,0,0,1,48,56H208A16,16,0,0,1,224,72Z" opacity="0.2"></path>
                <path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.4,0H216v56A8,8,0,0,1,208,192Z"></path>
              </svg>
            </div>
            <div className="text-xs">Đang theo dõi (0)</div>
          </div>
          <div className='cursor-pointer '>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="18" width="18">
              <path d="M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z"></path>
            </svg>
          </div>
          <div className='cursor-pointer ' onClick={toggleTable}>
            <svg stroke="currentColor" className='text-white' fill="currentColor" stroke-width="0" viewBox="0 0 256 256" color="var(--white)" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M144,104V64a8,8,0,0,1,16,0V84.69l42.34-42.35a8,8,0,0,1,11.32,11.32L171.31,96H192a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0,0,16H84.69L42.34,202.34a8,8,0,0,0,11.32,11.32L96,171.31V192a8,8,0,0,0,16,0V152A8,8,0,0,0,104,144Zm67.31,16H192a8,8,0,0,0,0-16H152a8,8,0,0,0-8,8v40a8,8,0,0,0,16,0V171.31l42.34,42.35a8,8,0,0,0,11.32-11.32ZM104,56a8,8,0,0,0-8,8V84.69L53.66,42.34A8,8,0,0,0,42.34,53.66L84.69,96H64a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,104,56Z"></path></svg>
          </div>
        </div>
        <div className="p-1 w-full">
          <Select
            className="w-full mb-2"
            showSearch
            placeholder="Chọn phương tiện"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={vehicles.map(v => ({ value: v.imei, label: v.vehicle_name }))}
          />
          <Table
            className={styles.customTable}
            columns={columns}
            dataSource={dataSource}
            scroll={{ x: 1000, y: 400 }}
            size="small"
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleTrackingTable;
