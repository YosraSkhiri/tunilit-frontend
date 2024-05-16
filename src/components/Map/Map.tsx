// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { divIcon } from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from './Map.module.scss'
import MapProps from './Map.types.ts'
import Pin from './Pin.tsx'

export default function Map({ locations }: MapProps) {
  return (
    <MapContainer
      center={[33.8869, 9.5375]}
      className={styles['map-container']}
      preferCanvas={true}
      scrollWheelZoom={true}
      zoom={6}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        locations && locations.map(l => (
          <Marker 
            icon={
              divIcon({
                html: renderToStaticMarkup(<Pin />)
              })
            }
            position={[l.latitude, l.longitude]}
          >
            <Popup>
              {l.address}
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  );
}