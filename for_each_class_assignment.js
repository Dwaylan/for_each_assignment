'use strict'
// The callback tell us what to do for every element
function scratchForEach(array,callback){
    for(let i=0; i<array.length; i++){
        let element = array[i];
        callback(element, i)
    }
}

// Callback tells us if the element is in or out
function scratchFilter (array, callback){
    let result = [];
    for(let i=0; i<array.length;i++){
        let element = array[i];
        let inOrOut = callback(element, i);
        if(inOrOut == true){
            result.push(element);
        }
    }
    return undefined
}

// callback tells us how to transform every element
function scratchMap(array, callback){
    let result = [];
    for (let i=0; i<array.length; i++){
        let element = array [i];
        let transformed = callback(element, i);
        result.push(transformed);
    }
    return result
}

let numbers = [-1, 41,72,93,33, 612313];

scratchForEach(numbers, function(element){
    console.log(element)
})