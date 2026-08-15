"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.05);
    }
    if (wire.current) {
      wire.current.rotation.y = t * 0.25;
      wire.current.rotation.x = t * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#5c86ff" transparent opacity={0.25} />
      </mesh>
      <mesh ref={wire}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color="#8fb0ff" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <line>
        <primitive object={geometry} attach="geometry" />
        <lineBasicMaterial color="#5c86ff" transparent opacity={0.18} />
      </line>
    </group>
  );
}

export default function CoreScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.4, 3.6], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <Core />
      <OrbitRing radius={1.4} speed={0.18} tilt={0.5} />
      <OrbitRing radius={1.8} speed={-0.12} tilt={1.15} />
      <OrbitRing radius={2.2} speed={0.09} tilt={0.15} />
    </Canvas>
  );
}
