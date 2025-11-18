"use client";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars() {
  const positions = new Float32Array(Array.from({ length: 4000 }).flatMap(() => [
    THREE.MathUtils.randFloatSpread(800),
    THREE.MathUtils.randFloatSpread(800),
    THREE.MathUtils.randFloatSpread(800)
  ]));
  return (
    <Points positions={positions}>
      <PointMaterial transparent color="#9ea8ff" size={0.8} sizeAttenuation depthWrite={false} />
    </Points>
  );
}
export default function ParticlesBackground(){
  return (
    <Canvas className="fixed inset-0 -z-10" camera={{ position: [0,0,1] }}>
      <Stars />
    </Canvas>
  );
}
