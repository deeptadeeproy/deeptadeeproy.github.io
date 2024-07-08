import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticlePoints = () => {
  const sphereRef = useRef();

  const scale = 1;

  // Generate sphere points
  const points = useMemo(() => {
    const sphereGeometry = new THREE.SphereGeometry(1, 55, 15);
    const positions = [];
    const positionAttribute = sphereGeometry.attributes.position;

    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positionAttribute, i);
      positions.push(vertex.x*scale, vertex.y*scale, vertex.z*scale);
    }

    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.rotation.x += 0.003;
    }
  });

  return (
    <Points ref={sphereRef} positions={points}>
      <PointMaterial size={0.02} color="cyan" />
    </Points>
  );
};

export default ParticlePoints;
