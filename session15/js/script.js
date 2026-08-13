// var let const 

/// var ==> global scope // function scope
/// let , const ==> block scope

// var ==> redeclare , reassign
// let ==> reassign

// var firstName = "Mai"
// var firstName = "Zein"
// firstName = "Tamer"

// let address = "Maadi"
// let address = "October"
// address = "new cairo"

// console.log(firstName)
// console.log(address)

// DOM ==> document object model ==> document 
// BOM ==> browser object model ==> window

// window.prompt()

// window.setInterval()

// const age = 20
// const age = 30
// age = 30

// console.log(age)

let email = "nouran@email.com"
function test() {
    var num = 10
    if (true) {
        var x = 30
        let y = 40
    }
    // console.log(x)
    // // console.log(y)
    // console.log(email)
}
test()

// console.log(num)


// let test = "lorem"

// let test : number = 20


// let obj = {
//     name : "sara",
//     age : 20 ,
//     address : "Nasr city",
//     isGraduated : true
// }

// console.log(obj.name)
// console.log(obj['name'])
// for(let i = 0 ; i<10 ; i++){

// }
// for(let item in obj){
//     console.log(obj[item])
// }


// let obj = {
//     name : "sara",
//     age : 20 ,
//     address : "Nasr city",
//     isGraduated : true
// }

// let isGraduated = obj.isGraduated
// let age = obj.age
// let address = obj.address
// let name = obj.name

//////// destructuring
// let {name , age , isGraduated , address} = obj

// console.log(isGraduated)

///////////////// spread operator
// let obj = {
//     name : "sara",
//     age : 20 ,
//     address : "Nasr city",
//     isGraduated : true
// }
// let user = {
//     email:'user@email',
//     phone : "010000000",
//     ...obj
// }

// let arr = ['html' , 'css']
// let courses = ['js' , 'bootstrap' , ...arr]

// console.log(courses)



/////////////////// Date

let date = new Date()

// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth()) // 0:11 
var month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

//  console.log(month[date.getMonth()])  
//  console.log(date.getDate())         
//  console.log(date.getDay())  //0:6  start ==> sunday       
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// console.log(date.toLocaleDateString("en-US" , {
//     weekday : "short" , month : "short" , year : "numeric"
// }))

// console.log(date.toLocaleDateString("ar-EG" , {
//     weekday : "short" , month : "short" , year : "numeric"
// }))

let scrollDiv = document.getElementById('scroll-div')
scrollDiv.addEventListener('scroll', () => {
    // console.log('scrolling')
    // console.log(scrollDiv.scrollTop)
})



window.addEventListener('scroll', () => {
    let upArrow = document.getElementById('up-arrow')

    // console.log('window is scrolling')
    console.log(window.scrollY) ;
        (window.scrollY > 300) ?
        upArrow.classList.remove('d-none')
        :  upArrow.classList.add('d-none')
})




