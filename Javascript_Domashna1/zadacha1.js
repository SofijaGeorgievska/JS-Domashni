let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

//Does the student have either tea or milk?
let result1 = hasTea || hasMilk
console.log(result1)

//Does the student have both coffee and tea?
let result2 = hasCoffee && hasTea
console.log(result2)

//Is it true that the student doesn't have tea?
let result3 = !hasTea
console.log(result3)

//Does the student have either coffee or milk, but not both?
let result4 = (hasCoffee || hasMilk) && !(hasCoffee && hasMilk)
console.log(result4)

//Is it true that the student has either tea and milk, or coffee and tea?
let result5 = (hasTea && hasMilk) || (hasCoffee && hasTea)
console.log(result5)

//Does the student have neither coffee nor tea?
let result6 = !hasCoffee && !hasTea
console.log(result6)
