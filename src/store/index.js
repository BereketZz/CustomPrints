import {proxy} from "valtio"


const state= proxy({
    intro:true,
    color:'red',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./jerri.png',
    fullDecal:'./threejs.png',
    logoScale:0.15,
    moveX:false,
    moveY:false
})

export default state