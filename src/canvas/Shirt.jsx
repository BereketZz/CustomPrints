import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from "../store"

function Shirt() {
    const snap= useSnapshot(state)
    const {nodes, materials}= useGLTF('/shirt_baked.glb')
    const logoTexture= useTexture(snap.logoDecal)
    const fullTexture= useTexture(snap.fullDecal)

    useFrame((state, delta)=>easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))
    const stateString= JSON.stringify(snap)

    // converting  string to image func
    const stringToImage = (str) => {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      // Set the canvas size to accommodate the text
      canvas.width = 256; // Adjust the width as needed
      canvas.height = 256; // Adjust the height as needed
      
      // Style the text
      context.font = '48px Arial'; // Adjust the font size and family as needed
      context.fillStyle = 'white'; // Adjust the text color as needed
      
      // Position the text in the center of the canvas
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      
      // Draw the text on the canvas
      context.fillText(str, x, y);
      
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL();
      
      // Return the data URL as the image
      return dataURL;
    };
  
    const text = 'Hello!'; // Replace with your desired string
    const image = stringToImage(text);
    // End of function


  return (
   <group key={stateString}>
    <mesh 
    castShadow
    geometry={nodes.T_Shirt_male.geometry}
    material={materials.lambert1}
    material-roughness={1}
    dispose={null}>
      {
        snap.isFullTexture&& (
      <Decal
       position= {[0,0,0]}
       rotation={[0,0,0]}
       scale={1}
       map={fullTexture}

      
      
      />
        ) }

        {
            snap.isLogoTexture && (
                <Decal
                position={[0,0.04,0.15]}
                rotation={[0,0,0]}
                scale={0.15}
                map={logoTexture}
                
               
                
                />

         ) }
    </mesh>
   </group>
  )
}

export default Shirt