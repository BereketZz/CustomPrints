import {proxy} from "valtio"


const state= proxy({
    intro:false,
    color:'#283593',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./dog.png',
    fullDecal:'./threejs.png',
    logoScale:0.15,
    logoPosition:"middle",
    text:"",
    textColor:"black",
    textScale:0.05,
    textPosition:"top"
})

export default state