import React from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import data from "./trees.json";

const Map = () => {
  const INITIAL_VIEW_STATE = {
    longitude: -0.09,
    latitude: 51.5,
    zoom: 13,
    pitch: 0,
    bearing: 0,
  };

  const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

  const layer = new HexagonLayer({
    id: "hexagon-layer",
    data,
    pickable: true,
    extruded: true,
    radius: 50,
    elevationScale: 4,
    getPosition: (d) => [d.longitude, d.latitude],
  });

  return (
    <div>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layer}
      >
        <StaticMap attributionControl={true} mapStyle={MAP_STYLE} />
      </DeckGL>
    </div>
  );
};

export default Map;
