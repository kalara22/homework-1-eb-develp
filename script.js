const clickedText = document.querySelector("p#message");
const clickedButton = document.querySelector("#submit-button");
clickedButton.addEventListener("click", () => {
    clickedText.textContent = "Message submitted!";
} )

const styleTextBox = document.querySelector("#name-id-input")
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