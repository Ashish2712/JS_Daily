// function printToScreen() {
//     console.log("hello world!");
// }


// setTimeout(printToScreen, 1*1000);

// let sum = 0;
// for(let i=0; i<1000; i++){
//     sum += i;
// } 

// console.log(sum); // paraelle execution of the code using call backs


// setInterval usage

// var counter = 1;

// function printCounter() {
//     console.clear()
//     console.log(counter);
//     counter = counter + 1;
// }

// setInterval(printCounter, 3000) 



// **** callbacks ****
// function medicine2Get(){
//     console.log("medicine 2 received")
// }


// function medicine1Get(){
//     console.log("medicine 1 received");
//     setTimeout(medicine2Get, 2000)
// }

// setTimeout(medicine1Get, 1000)


// **** promises *****
// function promiseBody(resolve){
//     setTimeout(resolve, 5000);
// }

// function medicine1Get(){
//     var answer = new Promise(promiseBody);
//     return answer;
// }

// function printThing(){
//     console.log("promise is completed!");
//     console.log("medicine 1 received");
// }

// var medicinePromise = medicine1Get();
// console.log(medicinePromise);
// medicinePromise.then(printThing);

// anagram function -> two strings should be equal -> logic -> sort the strings and then check if they are equal


function isAnagram(str1, str2){
    if(str1.split('').sort().join('') == str2.split('').sort().join('')){
        return true;
    } else{
        return false;
    }
}


var ans = isAnagram("rasp", "psar");
console.log(ans);