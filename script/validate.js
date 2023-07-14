// validation
const validate=(event)=>{
    // picking input fields with their names or ids.
    let FirstName = document.registration.firstname
    let LastName = document.registration.lastname
    let phone = document.registration.phone
    let carType = document.getElementById("car-type")

// Picking error fields
let firstNameError = document.getElementById("firstname-error")
let lastNameError = document.getElementById("lastname-error")
let phoneError = document.getElementById("phone-error")
let carTypeError = document.getElementById("car-type-error")
let error=0


// validation fullname input fields.
// validating for emptyness errors
if(FirstName.value ==""){
   FirstName.style.border = "2px solid red";
   firstNameError.textContent = "first name is required";
   firstNameError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
   FirstName.focus();
   error++;
}

else if (FirstName.value.length <2 ){
    FirstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must be at least 2 characters";
    firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    FirstName.focus();
    error++;
}
else if (FirstName.value.length >15){
    FirstName.style.border = "1px solid red";
    firstNameError.textContent = "First name must no be greater than 15 characters";
    firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    FirstName.focus();
    error++;
}
else{
    FirstName.style.border = "1px solid green";
    firstNameError.textContent = "";
    LastName.focus(); 
}

if(LastName.value == ""){
    LastName.style.border = "1px solid red";
    lastNameError.textContent = "Last name is required";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    error++;
}
else if (LastName.value.length <2 ){
    LastName.style.border = "2px solid red";
    lastNameError.textContent = "First name must be at least 2 characters";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    error++;
}
else if (LastName.value.length >15){
    LastName.style.border = "1px solid red";
    lastNameError.textContent = "First name must no be greater than 15 characters";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    error++;
}
else{
    LastName.style.border = "1px solid green";
    lastNameError.textContent = "";
    LastName.focus(); 
}

// Validating Phone number.
if(phone.value == ""){
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number is required";
    phoneError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    error++;   
}
let phoneRegex =/^[+][2][5][6][0-9]{9}$/
// /^\+256\d{9}$/

if(!phoneRegex.test(phone.value)){
    phone.style.border = "1px solid red";
        phoneError.textContent = "Phone number should start with +256";
        phoneError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        phone.focus();
        error++;
}

// validation for car type.
if (carType.value == ""){
   carType.style.border = "1px solid red";
   carTypeError.textContent = "Select a car type";
   carTypeError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    carType.focus();
    error++;
}
// // Validating for NIN
// if(nin.value == ""){
//     nin.style.border = "1px solid red";
//     ninError.textContent = "NIN is required";
//     ninError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
//     nin.focus();
//     error++;
// }
// const ninRegex = /^CF([a-zA-Z0-9]{12})+$/
// const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/


// if(!(ninRegex.test(nin.value)|| ninRegex2.test(nin.value))){
//   nin.style.border = "1px solid red";
//       ninError.textContent = "NIN should look like CFXXXXXXX or CMXXXXXXX";
//       ninError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
//       nin.focus();
//       error++;
// }
// else{
//     nin.style.border = "1px solid green";
//     ninError.textContent = "";
// }
if(error > 0){
    event.preventDefault();
}


// Generating unique id numbers
 const boddanumberRegex = /^BB-([0-9]{3})+$/
 const carnumberRegex = /^CR-([0-9]{3})+$/
 const trucknumberRegex = /^TK-([0-9]{3})+$/
 const coasternumberRegex = /^CA-([0-9]{3})+$/
 const taxinumberRegex = /^TX-([0-9]{3})+$/
//  eg BB-001, BB-002, BB-003


}