/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
// data

function SingaporeMap(props) {
  const { region, handlerSelectOption } = props;

  return (
    <div className="border border-solid border-gray-300 shadow">
      <MapContainer
        center={[1.3521, 103.8198]} // singapore
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "600px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {region.map((data, i) => (
          <Marker
            key={i}
            position={[
              data.label_location.latitude,
              data.label_location.longitude,
            ]}
            eventHandlers={{
              click: () => {
                handlerSelectOption(data.name);
              },
            }}
          >
            <Tooltip direction="top" offset={[0, -20]} opacity={1}>
              {data.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default SingaporeMap;
