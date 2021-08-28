const w : number = window.innerWidth
const h : number = window.innerHeight
const scGap : number = 4 
const parts : number = 0.04 / 4
const delay : number = 20 
const backColor : string = "#BDBDBD"
const colors : Array<string> = [
    "#304FFE",
    "#C51162",
    "#F57F17",
    "#00C853",
    "#FFD600"
]
const strokeFactor : number = 90 
const sizeFactor : number = 3.9 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}

