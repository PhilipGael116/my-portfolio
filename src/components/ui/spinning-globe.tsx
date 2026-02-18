"use client";
import { Globe3D, type GlobeMarker } from "./3d-globe";

const sampleMarkers: GlobeMarker[] = [
    {
        lat: 40.7128,
        lng: -74.006,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "New York",
    },
    {
        lat: 51.5074,
        lng: -0.1278,
        src: "https://assets.aceternity.com/avatars/2.webp",
        label: "London",
    },
    {
        lat: 35.6762,
        lng: 139.6503,
        src: "https://assets.aceternity.com/avatars/3.webp",
        label: "Tokyo",
    },
    {
        lat: -33.8688,
        lng: 151.2093,
        src: "https://assets.aceternity.com/avatars/4.webp",
        label: "Sydney",
    },
];

export function SpinningGlobe() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-xl sm:p-8 p-3 shadow-sm ring-1 shadow-black/10 ring-black/10 bg-gray-800/70 border border-white/5 sm:min-w-[340px] min-h-[300px]">
            <h2 className="relative z-10 mb-4 text-xl sm:text-2xl font-bold text-gray-300 pointer-events-none">
                I'm very flexible with time zone communications
            </h2>
            <Globe3D
                className="absolute -bottom-96 left-0 h-[700px]"
                markers={sampleMarkers}
                config={{
                    radius: 2,
                    atmosphereColor: "#ffffff",
                    showAtmosphere: true,
                    atmosphereIntensity: 0,
                    atmosphereBlur: 4,
                    autoRotateSpeed: 0.8,
                    initialRotation: { x: 0.2, y: 0.5 },
                    showWireframe: false,
                    wireframeColor: "#ffffff",
                    ambientIntensity: 0.8,
                    pointLightIntensity: 2.2,
                }}
            />
        </div>
    );
}
