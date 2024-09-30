
let number = [2, 5, 7, 8, 9, 4]
let sum = 0;

function sumArray(number) {
    for (let i = 0; i < number.length; i++)
        sum += number[i];
    return sum;
}

const total = sumArray(number)
console.log(total)

let averageNum = sum / number.length;
console.log(averageNum);


 const string = (["say", "hello", "in", "the", "morning"], 3);
 
let long1 = [];
 function longerString(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      // long1 = arr[i].length;
      long1.push(arr[i].length)
    }
    
  }
  return long1;
}
console.log(longerString(string));


function printNumber(n) {
  if (n <= 0) {
    return
  }

  printNumber(n - 1)
  console.log(n);
}
console.log(printNumber(10));



const sortByAge = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];



sortByAge.sort((a, b) => a.age - b.age)
console.log(sortByAge)

const filterAge = sortByAge.filter((sortByAge) => sortByAge.age >= 50);
console.log(filterAge)


const myMap = new Map()
myMap.set("occupation", myMap.get("job"));
console.log(myMap.delete("occupation"));

const mapArray = sortByAge.map((sortByAge) => {
  sortByAge.age + 1;
});
console.log(mapArray);


const sumOfAge = sortByAge
  .map(Number)
  .reduce((sum, currentAge) => sum + currentAge, 0);

console.log(parseInt(sumOfAge))


const AverageAge = sumOfAge / sortByAge.length;
console.log(AverageAge)
console.log(sortByAge.age++);


function incrementByAge(sortByAge, age) {
  const person = sortByAge.find(s => s.age === age);
  let sumAge = 0;
  console.log(person);
  if (person) {
    sumAge = person.age++;
  }

  return sumAge;
}
console.log(incrementByAge(sortByAge, "25"));
console.log(sortByAge);

const copy = { ...sortByAge, copyOFAge: sortByAge.age + 1 };
//const copyOFAge = copy.age++;
console.log(copy)

function copyAndIncrement(sortByAge) {
  let convertToNumber = Number(sortByAge.age)
  let copy = { ...convertToNumber };
  
  if (copy !== undefined) {
    copy.age += 1;
  }

  return copy
}
let newObj = copyAndIncrement(sortByAge);
console.log(newObj);