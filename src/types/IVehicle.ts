export interface IVehicle {
    vehicle_id: number;
    device_id: number;
    model_type_id: number;
    idx: number;
    imei: string;
    license_number: string | null;
    latitude: string;
    longitude: string;
    speed: number;
    rotation: number;
    signal_quality: number;
    status_device: number;
    status: number;
    acc: number;
    io: number;
    syn: number;
    time: number;
    distance: number;
    total_distance: number;
    max_speed: number;
    min_speed: number | null;
    fuel_lit: number | null;
    fuel_percent: number | null;
    temp: number;
    vehicle_name: string;
    vehicle_type_name: string;
    is_transmission_gps: number;
    is_transmission_image: number;
    tax_code: string | null;
    transport_business_unit: string | null;
    passenger_capacity: number | null;
    vehicle_load: number | null;
    business_type: string | null;
    total_volume: number | null;
    name_driver: string;
    phone_driver: string;
    lost_gps_time: number;
    s1: number;
    s2: number | null;
    s3: number | null;
    speed_device: number;
    vol: number;
    time_record: number;
    key: string
}

// export interface IVehiclePosition {
//     latitude: 
// }