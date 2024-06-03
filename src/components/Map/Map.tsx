"use client"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { divIcon, latLngBounds } from 'leaflet'
import { nanoid } from 'nanoid';
import { renderToStaticMarkup } from 'react-dom/server'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from './Map.module.scss'
import MapProps, {coordsType} from './Map.types.ts'
import Pin from './Pin.tsx'

export default function Map({ locations }: MapProps) {
  const getBounds = () => {
    const markers: Array<coordsType> | undefined = locations?.map(l => [l.latitude, l.longitude])
    const b = latLngBounds([])
    markers && markers.forEach(coords => {
      b.extend(coords)
    })
    return b
  }

  return (
    <MapContainer
      {
        ...((!locations || locations.length === 0) && {
          center: [33.8869, 9.5375]
        })
      }
      bounds={locations && getBounds()}
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
            key={nanoid()}
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