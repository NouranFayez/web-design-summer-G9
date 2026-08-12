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


