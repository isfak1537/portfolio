import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GridPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle dynamic wave
      meshRef.current.rotation.x =
        -Math.PI / 2.2 + Math.sin(state.clock.elapsedTime * 0.35) * 0.02;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, -3.2, -6]}
      rotation={[-Math.PI / 2.2, 0, 0]}
    >
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial
        color="#000000"
        wireframe
        transparent
        opacity={0.09}
      />
    </mesh>
  );
}

function FloatingPolyhedron({
  position,
  geomType = "icosa",
  speed = 0.2,
}: {
  position: [number, number, number];
  geomType?: "icosa" | "octa";
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * (speed * 1.3);
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.25;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {geomType === "icosa" ? (
        <icosahedronGeometry args={[1.3, 1]} />
      ) : (
        <octahedronGeometry args={[1.1, 1]} />
      )}
      <meshBasicMaterial
        color="#000000"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return false;

    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function ThreeBackground() {
  const [canRender] = useState<boolean>(checkWebGLSupport);

  if (!canRender) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 58 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.8} />
        {/* Perspective Wireframe Ground Plane matching Image 4 */}
        <GridPlane />
        {/* 3D Floating Geometry for enhanced 3D animation */}
        <FloatingPolyhedron position={[5, 1.5, -4]} geomType="icosa" speed={0.18} />
        <FloatingPolyhedron position={[-5.2, 2.2, -5]} geomType="octa" speed={0.14} />
      </Canvas>
    </div>
  );
}
