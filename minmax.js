let inputArray= [2,6,4,5,9]


function printMinMax(arr){
    arr.sort((a,b)=>a-b)
    let max=arr.slice(1).reduce((a,v)=> a+v)
    let min=arr.slice(0,arr.length-1).reduce((a,v)=> a+v)
    return`min= ${min} and max= ${max} `
}
document.write(printMinMax(inputArray))