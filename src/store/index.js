import {proxy} from "valtio"


const state= proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./nike.png',
    fullDecal:'./threejs.png',
    logoScale:0.15,
    moveX:false,
    moveY:false
})

export default state