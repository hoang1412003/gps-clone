// src/components/RotatedMarker.tsx
import { Marker, type MarkerProps } from 'react-leaflet';
import { useRef, useEffect } from 'react';
import L from 'leaflet';

interface Props extends MarkerProps {
  rotationAngle: number;
}

const RotatedMarker = ({ rotationAngle, ...props }: Props) => {
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setRotationAngle(rotationAngle);
    }
  }, [rotationAngle]);

  return (
    <Marker
      {...props}
      ref={(marker) => {
        if (marker) {
          markerRef.current = marker as unknown as L.Marker;
        }
      }}
    />
  );
};

export default RotatedMarker;
