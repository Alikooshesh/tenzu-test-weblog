export const hslColorGen = (h : number,minS : number = 0,l:number,factor:number):string => {
    return `hsl(${h-factor}, ${factor + minS}%, ${l}%)`
}