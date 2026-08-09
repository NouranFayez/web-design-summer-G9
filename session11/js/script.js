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
// (lastName == "sara" && typeof lastName == "string") ? console.log('welcome sara') : console.log('invalid user')


//// truthy value // falsy value 
// var m = 20; // true
// var m = 0; // false
// var m = -30; // true
// var m = "dghh"; // true
// var m = ""; // false
var m = null; // false
var m = NaN; // false
var m; // undefined - false

(m) ? console.log('correct') : console.log('wrong')


// if Condition 

// if(condition/s){
//     true
// }
// else {
//     false
// }


var fName = "Zein"

// if(fName == "Zein") console.log('welcome zein')
//     // else console.log('invalid user')

// var job = prompt('enter your Job')

// Accountant  -- Acc
// Engineer  -- Eng
// developer  -- dev
// doctor -- dr - doc

// if(job == "Acc") console.log('accountant')
//     else if(job == "Eng") console.log('Engineer') 
//    else if(job == "Dev") console.log('Developer') 
//    else if(job == "doc" || job == 'dr') console.log('Doctor') 
// else console.log('invalid job')



// var userName = prompt('enter your name')
// userName = "" // empty string ==> please enter your name
// userName = null ==> please enter your name
// userName = zein ==> age , address
// userName = other user ==> invalid user

// console.log(userName)

// if (userName == "" || userName == null) {
//     alert("please enter your name")
// }
// else {
//     if(userName == 'zein') {
//         var age = prompt('enter your age')
//         var address = prompt('enter your address')
//         alert(`name = ${userName}
//             age = ${age}
//             address = ${address}`)
//     }
//     else {
//         alert('invalid user')
//     }
// }



// if (userName == "" || userName == null) {
//     alert("please enter your name")
// }
// else if(userName == 'zein') {
//     var age = prompt('enter your age')
//     var address = prompt('enter your address')
//     console.log(
//         `name = ${userName}
//         age = ${age}
//         address = ${address}`)
// }
// else {
//     console.log('invalid user')
// }



// degree 

// degree > 90 ==> A 
// degree 80:90 ==> B
// degree 70:80 ==> C
// degree < 70 ==> F



// switch case 

// switch(variable){
//     case 1: code 
//     case 2 : code 
//     case 3 : code 
//     default : code 
// }



var job = 20

switch (job) {
    case "dev":
        console.log('developer')

        break;
    case "dr":
    case "doc":    
        console.log('doctor')

        break;
    case 20 :
        console.log('num = 20')    
        break
    default:
        console.log('invalid')
}


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for looping 

// for(variable ; condition ; increment/decrement){
//     code 
// }

for(var i = 1 ; i <= 10 ;i++){
    // if(i == 3) console.log('number = 3')
    if(i == 3) continue
    else if(i == 8) break
    console.log(i)
    
}
