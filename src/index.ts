/* ---------------------- Defining Type in Type Script--------------- */

// 1.------- Example of Defining number Type
const userId: number = 32434;

// 2.-------- Example of Defining String Type
const userName: string = "Developer Shourav";

// 3.-------- Example of Boolean type
let isActive: Boolean = true;
isActive = false

// 4.-------- Example of Any type 

const userInfo: any = {
  contactInfo: {},
  activeStatus: true,
  age:56,

};

// 5.----------Example of Defining Array Type 

// 5.1 Example of Number Type
let list: number[] = [1 , 2 ];

// 5.2 Exam of String Type
const fruitsName: string[] =  ["Apple", "Mango", "Banana", "Wood Apple", "Ice Apple"];

// 5.3 Example of Union Type 
const idAndName: (number | string)[] = [1, "Shourav", 2 , "Kashem", 3 , "Rohim"];



// 6. -------------Example of Tuples Type

// [Note: Tuple type means fixed length array which each element has particular type]

const developer: [number, string] = [1250, "Shourav"];


// 7. --------------- Example of Enum Type

enum UserRole {
  user = "user Vai amar",
  admin = "admin Vai amar"
}

enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

// 7.1 Defining Enum using const key word for Make more optimized code 
  
const enum UserRoleInApp {
  user = "user",
  admin = "admin"
}

const enum BookSize {
  Small = "small",
  Medium = "medium",
  Large = "large"
}


// --------------8. Defining Argument type and Return Type in function ------


const calCulateBMI = (height: number, weight: number): number => {

  const userBMI = weight / Math.pow(height, 2) ;
  return parseFloat(userBMI.toFixed(2))
}
 
console.log(calCulateBMI(1.7, 79));


function fullName(firstName: string, lastName: string): string {
  
  return `${firstName} ${lastName}`
}

console.log(fullName("Shourav", "Rajbongshi"))
