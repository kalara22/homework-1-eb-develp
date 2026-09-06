const clickButton = document.querySelector("#submit-button");
clickButton.addEventListener("click", () => {
    textContent = "Message submitted";
})





const 



styleTextBox = document.querySelector("#name-id-input")
styleTextBox.addEventListener("input", () => {
    styleTextBox.classList.add("text-input")
})

const styleTextBox2 = document.querySelector("#email-id-input")
styleTextBox2.addEventListener("input", () => {
    styleTextBox2.classList.add("text-input2")
})

const styleTextBox3 = document.querySelector("#message-id-input")
styleTextBox3.addEventListener("input", () => {
    styleTextBox3.classList.add("text-input3")
})

const phoneInput = document.querySelector("#phone-id-input");
const addPhoneButton = document.querySelector("#phone-number-button");
const phoneList = document.querySelector("#phone-number-list");

addPhoneButton.addEventListener("click", () => {
    const newphoneNumberValue = phoneInput.value;

    const newPhoneItem = document.createElement("li");
    newPhoneItem.textContent = newphoneNumberValue;
    phoneList.append(newPhoneItem);
})

const contactForm = document.querySelector("form");


const nameInput = document.querySelector("#name-id-input");
const nameError = document.querySelector("#name-error");

const emailInput = document.querySelector("#email-id-input");
const emailError = document.querySelector("#email-error");

const phoneInput2 = document.querySelector("#phone-id-input");
const phoneError = document.querySelector("#phone-error");

const messageInput = document.querySelector("#message-id-input");
const messageError = document.querySelector("#message-error");


const submissionMessage = document.querySelector("#message-submitted");


contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }

    nameInput.value
} ) ; 

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (emailInput.value === "") {
            emailError.textContent = "Email is required";
        } else {
            emailError.textContent = "";
        }
   } );

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (phoneInput2.value === "") {
        phoneError.textContent = "Phone number is required";
    } else {
        phoneError.textContent = "";
    }
} );

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (messageInput.value === "") {
        messageError.textContent = "Message is required";
    } else {
        messageError.textContent = "";
    }
} );

const inputBoxes = [nameInput, emailInput, phoneInput2, messageInput];
const errorLabels = [nameError, emailError, phoneError, messageError];
const errorMessages = ["Name is required", "Email is required", "Phone number is required", "Message is required"];

const validateForm = (inputBox, errorlabel, errorMessage) => {
    if (inputBox.value.trim() === "") {
        errorlabel.textContent = errorMessage;
        return false;
    } else {
        errorlabel.textContent = "";
        return true;
    }
};

contactForm.addEventListener("submit",(event)=>{
    event.preventDefault();

   const isNameValid = validateForm(nameInput, nameError, "Name is required");
    const isEmailValid = validateForm(emailInput, emailError, "Email is required");
    const isPhoneValid = validateForm(phoneInput2, phoneError, "Phone number is required");
    const isMessageValid = validateForm(messageInput, messageError, "Message is required");

    if(isNameValid && isEmailValid && isPhoneValid && isMessageValid){
        submissionMessage.textContent = "Message submitted";
        contactForm.reset();
    }else{
        submissionMessage.textContent = "";
    }
});

const validateEmail = () => {
if (emailInput.value.trim() === "") {
        emailError.textContent = errorMessage;
        return false;
}

if(!emailInput.value.includes("@")) {
        emailError.textContent = "email requires an '@' sign";
        return false;
    }
    }