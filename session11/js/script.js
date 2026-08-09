console.log("Javascript")

// var let const

// variableName = variableValue


var userFirstName = "Zein"
var userLastName = "Tamer"
var userFullName = userFirstName + " " + userLastName
var userAge = 20

var isUserGraduated = false

// "firsy name = Zein 
// last name = Tamer"

// concatenate
var text = "first name = " + userFirstName


// template string 
var text = `first name = ${userFirstName}


last name = ${userLastName}`





// console.log(userFirstName)
// console.log(userAge)
// console.log(isUserGraduated)
// console.log(text)


var num // undefined

var sum = null
// console.log(sum)

// var name = prompt("enter your name")

// console.log(name)

var n = 30
var x = 20

var s = n + x
var s = n - x

var s = 10 / 2

// console.log(s)

// ++ --

// ++ increment

var k = 10
// console.log(k++) // 10
// console.log(k) // 11
// console.log(++k) // 12

console.log("-------------------------")
/// -- decrement 
// console.log(k--) // 12
// console.log(k) // 11
// console.log(--k) //  10

var text = "lorem"
var num = 20
var res = text / num

// console.log(res) // NaN ==> Not a Number



var h = 20
// h = h + 5

// console.log(h+=5)

// console.log(typeof(h))
// console.log(typeof text) // string
// comparison operators ==> > >= < <= == === != !==

var t = 20
var b = 30
var a = 30


// console.log(t > b)
// console.log(a >= b)

// console.log(typeof text == "string")
// console.log(userfirstName)

var n = 20
var s = "20"

// console.log(n == s) // value
// console.log(n === s) // value , data type

// console.log(n != s) // value
// console.log(n !== s) // value , data type



var firstName = "Sara"
var age = 20

// console.log(firstName == "Sara")
// console.log(age > 10)
// console.log(typeof age == 'number')

//  logical operator ==> && || ! 

// console.log(firstName == "Sara" && age > 30 && typeof age == "number")
// console.log(firstName == "Sara" || age > 30 || typeof age == "Number")


// var x = 20;
// var x = 0 ;

// console.log(!x);

//    ternary operator ==> (condition/s) ? true : false

// var lastName = "Ahmed";
// var lastName = prompt('enter your name');
// (lastName == "sara") ? console.log('welcome sara') : console.log('invalid user')


//// truthy value // falsy value 
// var m = 20; // true
// var m = 0; // false
// var m = -30; // true
// var m = "dghh"; // true
// var m = ""; // false
var m = null ; // false
var m = NaN ; // false
var m ; // undefined - false

(!m) ? console.log('correct') : console.log('wrong')