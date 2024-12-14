import React from "react";
// @ts-ignore
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json"

export function MapChart() {
  return (
        <ComposableMap
            projection="geoAlbersUsa"
            width='800' 
            height='800' 
            // className='border-4 border-rose-500'
            projectionConfig={{
                scale: 1100,
                center: [-850, 400]
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies}:{geographies:any}) =>
                    geographies.map((geo:any) => (
                    <Geography
                        key={geo.rsmKey} 
                        geography={geo}
                        fill="#724B3B"
                        stroke="#FFF1DF"
                        strokeWidth={.5}
                        style={{
                            hover: { fill: "#a78bfa" },
                            pressed: { fill: "#8b5cf6" }
                        }}
                    />
                ))
                }
            </Geographies>
        </ComposableMap>
  )
}

export default function Imperialism() {
    return (
        <body className="bg-orange-100/75 w-screen min-h-screen overflow-auto pt-16">
            <div className="flex justify-center items-center">
                <div className="m-auto w-6/12">
                    <MapChart />
                </div>
            </div>
        </body>
    )
}