// // Day 1:
//  // Declare second integer, double, and String variables.
//  let w;
//  let f;
//  let st;
//      // Read and save an integer, double, and String to your variables.
//     //  did not know at first what readLine was. still getting used to hackerrank 
// NOTE: following up - - - - readLine() was the function created by HR in their stubcode!!!!!

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

// // DAY 6

// // take a string, iterate thru and output even indices, + ' ' + odd indices so each string looks like "secret/scrambled code"

// // i hate that i needed so much help with this. had to split input into separate lines and remove the first input which was an integer. i couldn't use a typeof 'string' conditional to only work with strings.  had to iterate thru the list of inputs and then iterate thru each string

// function processData(input) {
//   let newInput = input.split('\n').slice(1)

//   newInput.forEach(str => {
//       let evenStr = []
//       let oddStr = []
//       for(let i = 0; i < str.length; i++) {
//             [i]%2 === 0? evenStr.push(str[i]) : oddStr.push(str[i])  
//   }   
//   console.log(evenStr.join('') + (' ') + oddStr.join(''))
//   })    
// } 

// DAY 7
// Print the elements of array in reverse order as a single line of space-separated numbers.

// // pre-provided code to do some initial formatting of  the input 
// // const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

// // SOLUTION - this one was super easy:
//     console.log(arr.reverse().join(" "))

// // DAY 8 - Dictionaries and Maps

// // Task
// // Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

// // Note: Your phone book should be a Dictionary/Map/HashMap data structure.

// // tbh this one was too difficult for me, the solution was provided by another code taker. i need to learn more about new Map and its associated functions

// function processData(input) {

//   let tempArray = input.split("\n");
//   let entriesLength = tempArray.splice(0, 1); //removes and returns the number of entries from the array - this becomes the num that we will iterate thru
//   let queries = tempArray.splice(entriesLength); //puts the queries into their own array

//   for (let i = 0; i < entriesLength; i++) {
//     tempArray[i] = tempArray[i].split(" ");//split the names from the phones to prepare for mapping
//   }

//   let phoneBookMap = new Map(tempArray);//turn the array into a map
//   for (var i = 0; i < queries.length; i++) {
//     if (phoneBookMap.has(queries[i])) {//check if the query (name) exists in the phone book 
//       console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
//     } else {
//       console.log("Not found");
//     }
//   }
// }

// // DAY 9
// // recursion! which we just learned in CS's algo course. return a factorial using a recursive function. requires base case and calling factorial(n-1), in this case. multiplying n * factorial(n - 1) takes us to n = 1, at which point the function returns 1 and ends. Everything multiplied returns the factorial. being careful to end before 0 because anything * 0 === 0

// function factorial(n) {
//   if(n === 1) return 1;
//   return n * factorial(n - 1)

//   }

// // DAY 10
// // convert base 10 number to binary maybe use sliding window approach to find max consecutive 1s in binary number? -- NOT


// function main(n) {
//   // first convert to binary, call .split() and remove the 0s, the resulting array will be grouped by 1s
//   let binaryNum = n.toString(2).split('0')
//   // take the longest of the groupings within the array
//   let binaryNumLongest = Math.max(...binaryNum)
//   // call .toString() again because Math.max() takes the largest number and also converts to an integer - once it is converted back to a string we can call .length() on it
//   return binaryNumLongest.toString().length
// }

// console.log(main(100))

// // DAY 11 - again i was utterly unable to figure out this solution on my own. i only partially understand what this code is doing. i DO understand that in the second/third for loops you go thru each quarter of the "board" , hence i (or j) < 4. i also understand that you are adding each index to find out the hourglass sum.

// but i am confused...i thought we were to avoid nested loops as much as humanly possible due to the time complexity.

// function main() {
//   let arr = [];
//   for(let arr_i = 0; arr_i < 6; arr_i++){
//      arr[arr_i] = readLine().split(' ');
//      arr[arr_i] = arr[arr_i].map(Number);
//   }

//   //setting highestSum initially to -63 because that is lowest possible outcome for hourglass.
//   //-9 -9 -9
//   //   -9
//   //-9 -9 -9
//   // = -63
//   var highestSum = -63;
//   var tempSum = 0;
//   for(let i = 0; i < 4; i++) {
//       for(let j = 0; j < 4; j++) {           
//           tempSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
//           if(tempSum > highestSum) {
//               highestSum = tempSum;           
//           }
//       }
//   }

//   console.log(highestSum);
// }

// // DAY 12
// You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

// Complete the Student class by writing the following:

// A Student class constructor, which has  parameters:
// A string, firstName.
// A string, lastName.
// An integer, idNumber.
// An integer array (or vector) of test scores, scores.
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:

// Note: something about how i wrote my switch statement was wrong or the pre-existing code just didn't like it. the if/else worked just fine.

// // Write your constructor here
// NOTE: super takes properties from inherited class and implements them in child
// constructor(firstName, lastName, idNumber, scores) {
//   super(firstName, lastName, idNumber)
//   this.scores = scores
// }
// NOTE: we leave out the function keyword inside of Classes.
// calculate() {
//   let total = this.scores.reduce((accumulator, currentValue) => accumulator + currentValue)

//   let average = total / this.scores.length

//   if (average >= 90) {
//       return 'O'
//   } else if (average >= 80) {
//       return 'E'
//   } else if (average >= 70) {
//       return 'A'
//   } else if (average >= 55) {
//       return 'P'
//   } else if (average >= 40) {
//       return 'D'
//   } else {
//       return 'T'
//   } 
// }

//   // switch(average) {
//   // case average >= 90 && average <=100:
//   // return "O"
//   // break;
//   // case average >= 80 && average <90:
//   // return "E"
//   // break;
//   // case average >= 70 && average <80:
//   // return "A"
//   // break;
//   // case average >= 55 && average <70:
//   // return "P"
//   // break;
//   // case average >= 40 && average <55:
//   // return "D"
//   // break;
//   // case average > 40:
//   // return "T"
//   // }
// //     }

// // }

// // DAY 13 - thank God for video learning that is helping me recall that we were VERY briefly introduced to vanilla JS classes!!!

//  // Declare your class here.
//  class MyBook extends Book {
//   /**   
//   *   Class Constructor
//   *   
//   *   @param title The book's title.
//   *   @param author The book's author.
//   *   @param price The book's price.
//   **/
//   // Write your constructor here

//   constructor(title, author, price){
//       super(title, author, price)
//       this.title = title
//       this.author = author
//       this.price = price
//   }


//   /**   
//   *   Method Name: display
//   *   
//   *   Print the title, author, and price in the specified format.
//   **/
//   // Write your method here


// display() {
//     console.log(`Title: ${this.title}`)
//     console.log(`Author: ${this.author}`)
//     console.log(`Price: ${this.price}`) 
// }  


// // End class

// }

// DAY 14 - not available is Javascript so skipping!

// // DAY 15 - need more practice with linked lists, thank god for CS course!!!

// this.insert=function(head,data){
//   //complete this method
//   let newNode = new Node(data)
//   if(head == null) {
//       head = newNode
//   } else if (head.next == null){
//        head.next = newNode
//   } else  {
//     // recursion!!! don't forget about head.next or we hit max callstack!!!
//       this.insert(head.next, data)
      
//   }
//   return head
// };

// // DAY 16 try/catch
// // NOTE about console.log vs console.error: console. error() writes to stderr , whereas console. log() writes to stdout as described in the doc. In a default run of nodejs, both stdout and stderr go to the console, but obviously, they could be directed different places and could be used differently.

// // i love a ternary!!! however the instructions were not to use a conditional and isn't a ternary a conditional? as per MDN, YES.
// function main() {
//   const S = readLine();
  
//   try{
//       isNaN(Number(S)) ? error: console.log(parseInt(S))
//   } catch(error) {
//       console.log("Bad String")
//   }
// }

// // DAY 17 throw (error)
// // i keep forgetting about Math.pow() and keep using (n ** p). Math.pow() is sexier. Also using (n ** p) returned random undefineds.  not sure why...

// class Calculator{
//   constructor(n,p){
//       this.n = n;
//       this.p = p
//   }
  
//   power(n, p){
//       if(n < 0 || p < 0) {
//           throw "n and p should be non-negative"
//       } else return Math.pow(n,p)
//   }
// }

// // DAY 18 - .pop() .push() .shift() .unshift()
// // i'd have rather done this recursively but i guess this is a good exercise - would have been nice to know in advance that this was a class and thus needed the this keyword

// function Solution(){
//   //Write your code here
//   let stack = []
//   let queue = []
  
//   this.pushCharacter = char => stack.push(char)
//     //   pushes a character onto a stack.

  
//   this.enqueueCharacter = (char) => queue.push(char)
//     //   enqueues a character in the queue instance variable

  
//   this.popCharacter = () => stack.pop()
//     //   method that pops and returns the character at the top of the stack
  
  
// this.dequeueCharacter = () => queue.shift()
// //  dequeues and returns the first character in the queue instance variable.
 
// } DAY 19 - no solution for Javascript so skipping!

// //  DAY 20 implement bubble sort!! add total number of swaps to print to console. the code didn't care for an external/helper swap function so i went ahead and implemented it sort of anonymous function-style

// function main() {
    
//   var n = parseInt(readLine());
//   a = readLine().split(' ');
//   a = a.map(Number);
//   // Write Your Code Here
//   let numSwaps = 0;
//   for(let i = 0; i < n; i++){
//       let numberOfSwaps = 0;
//       for(let j = 0; j < n; j++){
//           if(a[j]> a[j+1]){
//             // internal swap "function"
//               let temp = a[j + 1];
//               a[j + 1] = a[j];
//               a[j] = temp;
//               numberOfSwaps++
//               numSwaps++
//           }
//       }
//       if(numberOfSwaps === 0) break
      
//   }
// console.log(`Array is sorted in ${numSwaps} swaps.`)
// console.log(`First Element: ${a[0]}`)
// console.log(`Last Element: ${a[n-1]}`)
// }

// } DAY 21 - no solution for Javascript so skipping!



