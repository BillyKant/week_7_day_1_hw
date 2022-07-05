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