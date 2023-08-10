import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, OrbitControls, useGLTF, useTexture, Text,RenderTexture } from '@react-three/drei'
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

   var temp=[0,0.04,0.15]
   //
   
  return (
   <group  key={stateString} >
   
    <mesh 
  
    castShadow

    //geometry={nodes.Object_2.geometry}
    geometry={nodes.T_Shirt_male.geometry}
    material={materials.lambert1}
   //material={materials['Material.001']}
   //rotation={[-Math.PI /3, 0, 4]}
    material-roughness={1}
    dispose={null}>
      {
        snap.textPosition=="top" &&
        (
          <Decal  position={[0,0.09,0.15]}
          rotation={[0,0,0]}
          scale={1}>
            <meshStandardMaterial roughness={0.6} transparent polygonOffset polygonOffsetFactor={-10}>

<RenderTexture attach="map" anisotropy={16}>
 
<Text  fontSize={snap.textScale} color={snap.textColor}>{snap.text}</Text>
</RenderTexture>
</meshStandardMaterial>
          </Decal>
        )
      }
       {
        snap.textPosition=="middle" &&
        (
          <Decal  position={[0,-0.011,0.15]}
          rotation={[0,0,0]}
          scale={1}>
            <meshStandardMaterial roughness={0.6} transparent polygonOffset polygonOffsetFactor={-10}>

<RenderTexture attach="map" anisotropy={16}>
 
<Text  fontSize={snap.textScale} color={snap.textColor}>{snap.text}</Text>
</RenderTexture>
</meshStandardMaterial>
          </Decal>
        )
      }
       {
        snap.textPosition=="bottom" &&
        (
          <Decal  position={[0,-0.099,0.15]}
          rotation={[0,0,0]}
          scale={1}>
            <meshStandardMaterial roughness={0.6} transparent polygonOffset polygonOffsetFactor={-10}>

<RenderTexture attach="map" anisotropy={16}>
 
<Text  fontSize={snap.textScale} color={snap.textColor}>{snap.text}</Text>
</RenderTexture>
</meshStandardMaterial>
          </Decal>
        )
      }
      { snap.isLogoTexture && snap.logoPosition=="middle" &&
        (
          <Decal
          position={[0,0.005,0.15]}
               
                scale={`${snap.logoScale}`}
                 map={logoTexture}
          />
        )
      }
      { snap.isLogoTexture && snap.logoPosition=="left" &&
        (
          <Decal
                position={[0.09,0.08,0.15]}
                rotation={[0,0,0]}
                scale={`${snap.logoScale}`}
                map={logoTexture}
                
               
                
                />

        )
      }
      {  snap.isLogoTexture &&snap.logoPosition=="top" &&
        (
          <Decal
                position={[0,0.09,0.15]}
                rotation={[0,0,0]}
                scale={`${snap.logoScale}`}
                map={logoTexture}
                
               
                
                />

        )
      }
         { snap.isLogoTexture && snap.logoPosition=="bottom" &&
        (
          <Decal
                position={[0,-0.099,0.15]}
                rotation={[0,0,0]}
                scale={`${snap.logoScale}`}
                map={logoTexture}
                
               
                
                />

        )
      }
           
      {/* {
        snap.isFullTexture&& (
      <Decal
       position= {[0,0,0]}
       rotation={[0,0,0]}
       scale={1}
       map={fullTexture}

      
      
      />
        ) }

        {
            snap.isLogoTexture&&!snap.moveX&&!snap.moveY
             && (
                <Decal
                position={[0,0.05,0.15]}
               // rotation={[1.4,0.0,0.0]}
                // scale={[0.1, 0.25, 0.1]}
                 scale={`${snap.logoScale}`}
                 map={logoTexture}
                
              
                
                /> 
            

         ) }
        
             {
            snap.moveX && (
                <Decal
                position={[0.09,0.08,0.15]}
                rotation={[0,0,0]}
                scale={`${snap.logoScale}`}
                map={logoTexture}
                
               
                
                />

         ) }
           {
            snap.moveY && (
                <Decal
                position={[-0.088,0.08,0.15]}
                rotation={[0,0,0]}
                scale={`${snap.logoScale}`}
                map={logoTexture}
                
               
                
                />

         ) } */}
        
    </mesh>
   </group>
  )
}

export default Shirt
{/* <meshStandardMaterial roughness={0.6} transparent polygonOffset polygonOffsetFactor={-10}>

<RenderTexture attach="map" anisotropy={16}>
 
<Text  fontSize={0.01} color="white">I LOve You</Text>
</RenderTexture>
</meshStandardMaterial>

</Decal> */}