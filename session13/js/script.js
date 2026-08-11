// DOM ==> document object model

var h2Elements = document.getElementsByTagName("h2")

console.log(h2Elements)
console.log(h2Elements[2].innerText)
h2Elements[2].innerText = "Javascript"
console.log(h2Elements[2].innerText)


var elements = document.getElementsByClassName('text-dark')
console.log(elements)

// Web design Summer G9

for (var i = 0; i < elements.length; i++) {
    elements[i].innerText = "Web design Summer G9"
    elements[i].style.backgroundColor = "lightgray"
    elements[i].style.color = "blue"
    elements[i].style.border = "2px solid"
}

// background-color


// var user = {
//     addressList : {
//         home : "Maadi",
//         office : 'October'
//     }
// }
// user.addressList.office


var h1 = document.getElementById('h1_element')
console.log(h1)
// document.getElementById('h1_element').style.color = "teal"

// h1.style.color = "red"

h1.classList.add("card", "m-auto")

h1.classList.remove('border')

// classList.toggle() ==> search

// document.querySelector() ==> search
// document.querySelectorAll() ==> search

function changeImg() {
    var img = document.getElementById('card-img')

    console.log(img.src)
    img.src = "images/2.jpg"
}

function handleClick(element){
        console.log(element.src)
}

// var userNameInput = document.getElementById('userName')

// userNameInput.addEventListener("input" , ()=>{
//             // console.log('typing......')
//             // console.log(userNameInput.value)
//           userNameInput.nextElementSibling.innerText = userNameInput.value  

// })













