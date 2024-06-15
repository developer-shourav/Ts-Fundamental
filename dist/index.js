"use strict";
const userId = 32434;
const userName = "Developer Shourav";
let isActive = true;
isActive = false;
const userInfo = {
    contactInfo: {},
    activeStatus: true,
    age: 56,
};
let list = [1, 2];
const fruitsName = ["Apple", "Mango", "Banana", "Wood Apple", "Ice Apple"];
const idAndName = [1, "Shourav", 2, "Kashem", 3, "Rohim"];
const developer = [1250, "Shourav"];
var UserRole;
(function (UserRole) {
    UserRole["user"] = "user Vai amar";
    UserRole["admin"] = "admin Vai amar";
})(UserRole || (UserRole = {}));
var Size;
(function (Size) {
    Size["Small"] = "small";
    Size["Medium"] = "medium";
    Size["Large"] = "large";
})(Size || (Size = {}));
const calCulateBMI = (height, weight) => {
    const userBMI = weight / Math.pow(height, 2);
    return parseFloat(userBMI.toFixed(2));
};
console.log(calCulateBMI(1.7, 79));
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Shourav", "Rajbongshi"));
//# sourceMappingURL=index.js.map