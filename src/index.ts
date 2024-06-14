
/* ---------------------- Defining Type in Type Script--------------- */


// ------- Example of Defining number Type
const userId: number = 32434;

// -------- Example of Defining String Type
const userName: string = "Developer Shourav";

// -------- Example of Boolean type
let isActive: Boolean = true;
isActive = false

// -------- Example of Any type 

const userInfo: any = {
  contactInfo: {},
  activeStatus: true,
  age:56,

};

// ----------Example of Defining Array Type 

// Example of Number Type
let list: number[] = [1 , 2 ];

// Exam of String Type
const fruitsName: string[] =  ["Apple", "Mango", "Banana", "Wood Apple", "Ice Apple"];

// Example of Union Type 
const idAndName: (number | string)[] = [1, "Shourav", 2 , "Kashem", 3 , "Rohim"];



// -------------Example of Tuples Type

// [Note: Tuple type means fixed length array which each element has particular type]

const developer: [number, string] = [1250, "Shourav"];



