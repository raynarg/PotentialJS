/**
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * wqhd 2560 x 1440
 * fhd 1920 x 1080
 * hd 1280 * 720
 */
function nombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320) {
        return "8K";
    }
    else if (ancho >= 3840 && alto >= 2160) {
        return "4K"
    }
    else if (ancho >= 2560 && alto >= 1440) {
        return "WQHD"
    }
    else if (ancho >= 1920 && alto >= 1080) {
        return "FHD";
    }
    else if(ancho >= 1280 && alto >= 720){
        return "HD";
    }
    else{
        return false;
    }
}

console.log(nombreResolucion(1920, 3000))