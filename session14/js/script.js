var registerForm = document.getElementById('registerForm')


var nameValidation = (input) => {
    var inputValue = input.value.trim()
    console.log(inputValue.length)
    if (inputValue.length < 3) handleError(input, "enter at least 3 character")
    else handleError(input)


}
var emailValidation = (input) => {
    // femail format ==> userName@domain.subdomain
    // html pattern /// js regular experession

    var inputValue = input.value

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(emailRegex.test(inputValue))
    (emailRegex.test(inputValue))
        ? handleError(input)
        : handleError(input, "invalid email")


}
var passwordValidation = (input) => {
    // https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-password-using-regular-expressions/
    var inputValue = input.value

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    // console.log(regex.test(inputValue));
    (regex.test(inputValue))
        ? handleError(input)
        : handleError(input, "enter at least 1 lowecase , 1 uppercase , 1 digit , 1 special character .........")


}

var handleError = (element, msg = "") => {
    element.nextElementSibling.innerText = msg
}

registerForm.addEventListener('input', (e) => {
    // console.log(e.target)
    switch (e.target.id) {
        case "userName":
            nameValidation(e.target)
            break;
        case "userEmail":
            emailValidation(e.target)
            break;
        case "userPassword":
            passwordValidation(e.target)
            break;
    }
})



// name ==> 3 charater
// email ==> userName@domain.subdomain
// password ==> uppercase , lowecase , number , special character (!@#$%^*&)





// localStorage.setItem("FirstName" , "Zein")
// localStorage.setItem("age" , "10")
// localStorage.setItem("address" , "Maadi")
// localStorage.setItem("userName" , "Sara")

// localStorage.removeItem("userName")

// console.log(localStorage.getItem("address"))





var users = [
    {
        name: "Nouran",
        email: "Nouran@email.com"
    },
    {
        name: "Sara",
        email: "Sara@email.com"
    },
    {
        name: "Ahmed",
        email: "Ahmed@email.com"
    },

]

var course = ['html' , "css" , "js"]
console.log(course.toString())
console.log(users.toString())

localStorage.setItem('usersList' , JSON.stringify(users))

console.log(JSON.stringify(users))


var usersArray = JSON.parse(localStorage.getItem('usersList')) 

usersArray.push({
    name : "Tamer" , email:"tamer@email.com"
})



var h1 = document.getElementById('h1_element')
var i = 100


// / setInterval( callBkFunc , time)
var set = setInterval(()=>{
    // console.log('js')
    // console.log('web design')

    h1.innerText = i

    if(i == 50) clearInterval(set)


    i--

} , 100 )



var fruits = document.getElementsByClassName('fruits')
var veg = document.getElementsByClassName('vegetables')
var categories = document.getElementsByClassName('categoryFilter')

var handleFilter =(type)=>{
    for(var i = 0 ; i < categories.length ; i++){ 
        categories[i].style.display = "block"
    }
    if(type == "fr") {
        for(var i = 0 ; i < veg.length ; i++){
            veg[i].style.display = "none"
        }
    }
    else {
          for(var i = 0 ; i < fruits.length ; i++){
            fruits[i].style.display = "none"
        }  
    }
}


// document.querySelector('.owl-carousel')

// https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html

// https://kenwheeler.github.io/slick/

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 4 ,
    margin: 30,
    loop : true,
    nav : true,
    navText : ['<i class="fa-solid fa-arrow-left text-primary bg-warning"></i>' , '<i class="fa-solid fa-arrow-right"></i>']
  });
});
