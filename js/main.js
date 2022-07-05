//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    teller = "No Matches";
    let len = arr.length
    for (let i=0; i < len; i++){
        if (str.includes(arr[i])){
            teller = "Matched dog_name"
        }
    }
    return teller
}

console.log(findWords(dog_string, dog_names))

// function findWords(str, arr){
//     arr.some(element => {if (str.includes(element)){
//         console.log('Matched dog_name')
//     } else {
//         console.log("No Matches")
        
//     }
// })};
//Call method here with parameters





//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array1){
    let len = array1.length
    for (let i=0; i < len; i++){
        if (i % 2 == 0){
            array1.splice(i,1,'even index')
        }
    }
    return array1
}

console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/**
 *    CODE WARS
 */

/**
 * Multiply
 * This code does not execute properly. Try to figure out why.
 * function multiply(a, b){
 *    a * b
 *   }
 */

function multiply(a, b){
    let answer = a * b;
    return answer;
}

/**
 * Even or Odd
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

function even_or_odd(number) {
    if (number % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    };
}

/**
 * Opposite Number
 * Very simple, given an integer or a floating-point number, find its opposite.
 */

function opposite(number) {
    return number * -1
}

/**
 * Convert Number to a String!
 * We need a function that can transform a number into a string.

What ways of achieving this do you know?
 */
function numberToString(num) {
    return num.toString()
}

/**
 * Convert boolean values to strings 'Yes' or 'No'.
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */
function boolToWord( bool ){
    if (bool == true){
        return 'Yes'
    } else {
        return 'No'
    };
}