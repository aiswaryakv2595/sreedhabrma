import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Lamp = () => {
  const lamp = useGLTF('./oil_lamp/scene.gltf');
  return (
    <primitive
      scale={2.5} 
      object={lamp.scene}
      position-y={-1.5}
      rotation-y={0}
    />
  );
};


const LampCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position:[-4,3,6],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={0.8}
      />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Lamp />
      </Suspense>
    </Canvas>
  );
};

export default LampCanvas;
