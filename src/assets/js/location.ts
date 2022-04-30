import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { getDOMElement } from './utilities';

export default function renderLocation(elem: string, lat: number, long: number, zoom: number) {
  const ACCESS_TOKEN = process.env.MAPBOX_TOKEN || '';

  console.log('renderLocation - ACCESS_TOKEN: ', process.env.MAPBOX_TOKEN);

  const mapElem = getDOMElement(elem);

  if (!mapElem) {
    return;
  }
  
  const map = L.map(elem, { zoomControl: false }).setView([lat, long], zoom);
  const markerIcon = L.icon({
    iconUrl: 'assets/images/shared/icon-marker.svg',
    iconSize: [66, 88],
    iconAnchor: [33, 88]
  });
  
  L.marker([lat, long], { icon: markerIcon }).addTo(map);

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
  }).addTo(map);
}
