// DOM ==> document object model

var h2Elements = document.getElementsByTagName("h2")

if (h2Elements.length > 0) {
    console.log(h2Elements)
    console.log(h2Elements[2].innerText)
    h2Elements[2].innerText = "Javascript"
    console.log(h2Elements[2].innerText)
}


var elements = document.getElementsByClassName('text-dark')
// console.log(elements)

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


if (document.getElementById('h1_element')) {
    var h1 = document.getElementById('h1_element')
    console.log(h1)
    // document.getElementById('h1_element').style.color = "teal"

    // h1.style.color = "red"

    h1.classList.add("card", "m-auto")

    h1.classList.remove('border')

    // classList.toggle() ==> search

    // document.querySelector() ==> search
    // document.querySelectorAll() ==> search
}

function changeImg() {
    var img = document.getElementById('card-img')

    console.log(img.src)
    img.src = "images/2.jpg"
}

function handleClick(element) {
    console.log(element.src)
}

// var userNameInput = document.getElementById('userName')

// userNameInput.addEventListener("input" , ()=>{
//             // console.log('typing......')
//             // console.log(userNameInput.value)
//           userNameInput.nextElementSibling.innerText = userNameInput.value

// })



///////////////////////////// About page Js 

var users = []

if (document.getElementById('userForm')) {
    var form = document.getElementById('userForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(e)
        // console.log('form is submitting')
        // console.log(e.target[0].value)
        // console.log(e.target[1].value)
        var obj = {
            name: e.target[0].value,
            email: e.target[1].value
        }
        users.push(obj)
        // users.push({
        //     name: e.target[0].value,
        //     email: e.target[1].value
        // })
        console.table(users)

        showUser()
    })



    // form.addEventListener('submit' , (event)=>{

    // })


}


function showUser() {
    var cardsCont = document.getElementById('cards-container')

    var divElement = document.createElement('div')
    var h4Name = document.createElement('h4')
    var h4Email = document.createElement('h4')

    h4Name.innerText = "Nouran"
    h4Email.innerText = "Nouran@email.com"

    divElement.appendChild(h4Name)
    divElement.appendChild(h4Email)

    divElement.classList.add('alert', 'alert-primary')

    cardsCont.appendChild(divElement)

    console.log(divElement)
}


//   <!-- <div class="alert alert-primary">
//                     <h4>Name : Nouran</h4>
//                     <h4>Email : Nouran@email.com</h4>
//                 </div> -->














