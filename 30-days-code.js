// // Day 1:
//  // Declare second integer, double, and String variables.
//  let w;
//  let f;
//  let st;
//      // Read and save an integer, double, and String to your variables.
//     //  did not know at first what readLine was. still getting used to hackerrank
//      // console.log(i)
//      // console.log(d)
//      // console.log(s)
//      w = parseInt(readLine())
//      f = parseFloat(readLine())
//      st = readLine()

//      // Print the sum of both integer variables on a new line.
//      console.log(w+i)


//      // Print the sum of the double variables on a new line.
//      let newNum = (f+d).toFixed(1)
//      console.log(newNum)

//      // Concatenate and print the String variables on a new line
//      console.log(s + st)
//      // The 's' variable above should be printed first.

// // DAY 2
// // Complete the solve function below.
// function solve(meal_cost, tip_percent, tax_percent) {
//   let tip = meal_cost * (tip_percent * .01)
//   let tax = meal_cost * (tax_percent * .01)
//   console.log(Math.round(meal_cost + tip + tax))

// }
// // the code below was provided by hackerrank, is intended to be used with function solve above
// function main() {
//   const meal_cost = parseFloat(readLine());

//   const tip_percent = parseInt(readLine(), 10);

//   const tax_percent = parseInt(readLine(), 10);

//   solve(meal_cost, tip_percent, tax_percent);
// }

// // DAY 3
// // logic was pretty easy to implement, altho i learned after much frustration that the code belongs inside the "stub code" function as already provided by hackerrank
// function main() {
//   const N = parseInt(readLine(), 10);
//   console.log(N % 2 === 0 && N > 20 || N === 2 || N === 4 ? "Not Weird" :"Weird")
// }

// // DAY 4
// // found this one very frustrating. instructions were to create a Class with a constructor, but the starter code was a function with no constructor and this.amIOld. i am not used to seeing functions built with the this keyword, only invoked with the this keyword. Either the code wasn't well written for JS or I have much more to learn about building classes in JS.

// function Person(initialAge){
//   let age = initialAge
//   // Add some more code to run some checks on initialAge
//   if(age < 0) {
//       age = 0
//       console.log("Age is not valid, setting age to 0.")
//   }
  
// this.amIOld=function(){
//     if(age < 13) {
//         console.log("You are young.")
//     } else if(age >= 18) {
//         console.log ("You are old.")
//     } else {
//         console.log("You are a teenager.")
//     }
//  // Do some computations in here and print out the correct statement to the console

// };
//  this.yearPasses=function(){
//        return age++ // Increment the age of the person in here
//  };
// }

// // DAY 5
// // finally an easy to compile solution! i did have to look up string interpolation. going back to basic basics felt a little weird but is clearly beneficial.

// function main() {
//   const n = parseInt(readLine(), 10);
//   let result;
//   for(let i = 1; i <= 10; i++) {
//       console.log(`${n} x ${i} = ${n * i}`)
//   }
// }




