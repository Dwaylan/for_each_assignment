'use strict'

// forEach() calls a provided callback function once for each element in an array in ascending order.
//  It is not invoked for index properties that have been deleted or are uninitialized.


const myRelatives = ['Mom', 'Dad', 'Grandma', 'Grandpa']
// my scratch function is an array of string elements
// console.log(myRelatives)

myRelatives.forEach(function(myRelatives){
    console.log('I really miss seeing ' + myRelatives)
})
// I have my "myRelatives" function and I use dot notation to invoke the forEach method
// and I pass another function in the callback parenthesis.
// I put "element" in the parameter preceeding the function in order to access the elements
// in the array.
// my foeEach function should print " I really miss seeing [element]"

const myRelativesProfile = [
    { Mom: 'Brenda', Occupation: 'Nutritionist', Location:'Driscoll,TX' },
    {Dad: 'Henry', Occupation: 'Software Engineer', Location: 'Mansfield,TX'},
    {Brother: 'Gabriel', Occupation: 'Project management', Location: 'San Marcos,TX'},
    {Grandma: 'Pinkie', Occupation: 'retired', Location: 'Seguin,TX'},
    {Grandpa: 'Willie', Occupation:'retired', Location: 'Seguin,TX'}
]
// console.log(myRelativesProfile)

// I now have an array of objects. Is there any difference in the for each method?
// Not really. The only difference i've noticed is using further dot notation for specificity.
