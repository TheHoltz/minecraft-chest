/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Chest({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./coffre-minecraft.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone001} />
        <skinnedMesh
          castShadow
          material={materials.Material}
          geometry={nodes.Cube.geometry}
          skeleton={nodes.Cube.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/coffre-minecraft.glb");
