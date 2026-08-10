// // function nameOfFunction(){
//     logic

// }

// nameOfFunction()


// function sum(number1 , number2 , number3 = 200 ){
//     console.log(number3)
//     var num1 = number1
//     var num2 = number2
//     var result = num1+num2+number3
//     return result
//     console.log(result)
// }

// var output = sum(100 , 50 , 70 )


// console.log(output)


// function checkUser(){
//     var p = prompt("enter your name")
//     if(p == 'sara') console.log("welcome sara");
//     else console.log('invalid user');

// }

// checkUser()


// function looping(startNum , endNum = 30){
//     if(endNum == 30){
//         for(var i = startNum ; i <= endNum ; i++){
//             console.log(i)
//         }

//     }
//     else{
//        console.log('invalid') 
//        return null
//     } 


// }

// var loop = looping(10 , 20)

// console.log(loop)


// function statment
// function getName() {
//     var p = prompt("enter your name")
//     if (p == "" || p == null) {
//         return "please enter user name"


//     }
//     else if (p == 'zein') {
//         return 'welcome zein'
//     }
//     else {
//         return 'invalid name'
//     }

// }

// var name = getName()
// // string 
// // empty string
// // null

// console.log(name);



// function experession
// var getName = function(){
//        var p = prompt("enter your name")
//     if (p == "" || p == null) {
//         return "please enter user name"


//     }
//     else if (p == 'zein') {
//         return 'welcome zein'
//     }
//     else {
//         return 'invalid name'
//     }
// }

// console.log(getName())


// arrow function 
// var getName = ()=>{

//        var p = prompt("enter your name")
//     if (p == "" || p == null) {
//         return "please enter user name"


//     }
//     else if (p == 'zein') {
//         return 'welcome zein'
//     }
//     else {
//         return 'invalid name'
//     }
// }

// console.log(getName())

// var firstName = (num)=>
//     {
//         return num > 20
//     } 



// var firstName = (num)=> num > 20



// console.log(firstName(10))


// var firstName = "zein"
// var age = 40
// var address = "october"
// var isGraduated = true


var userInfo = ["zein", "october", true, 20]
// console.log(userInfo[3]); // get item
userInfo[4] = "Egyptian"


console.log(userInfo.length)
userInfo[userInfo.length] = "Html"


userInfo.push("maadi", 10, false)

userInfo.pop()
userInfo.pop()

userInfo.shift()
userInfo.unshift("sara", "Aline")


// console.log(userInfo)



var courses = ["html", "css", "js"]

// splice(index , deletedCount , item/s) ==> add/remove item/s

courses.splice(1, 0, "Bootstrap", "Angular", "ts")
courses.splice(3, 1)
courses.splice(2, 1, "React", "Node")
// console.log(courses)

// console.log(courses.includes("Node"))
// console.log(courses.includes("hhhkkj"))

// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])
// console.log(courses[3])
// console.log(courses[4])
// console.log(courses[5])
// console.log(courses[6])

// length ==> 5
// index ==> 4
// for(var i = 0 ; i < courses.length ; i++){
//     console.log(courses[i])
// }


// console.log(courses)

// courses.forEach((element , i , allArray)=>{
//     // console.log('js')
//     console.log(`index = ${i} , element = ${element}`)
//     // console.log(allArray)
// })

// var h = ()=>{

// }


var nums = [3, 40, 10, 5, 2]
console.log(nums)

nums.forEach((item , i)=>{
    // if(item > 10) console.log(item)
    // if(item > 10) console.log(i)
})

var element = nums.find((item , i , arr)=>{
   return item > 10
})

var element = nums.find((item)=> item > 10)
var element = nums.find((item)=> item > 100) // undefined

var index = nums.findIndex(item => item > 10)
var index = nums.findIndex(item => item > 100) // -1 


var i = nums.findIndex(item => item == 10)

console.log(element)
console.log(index)

console.log(i)


















