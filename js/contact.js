// When user enters the firstname field play audio
// audio when click on the form (.inputs is the class on html)
let formInputs = document.querySelectorAll (".inputs");
console.log(formInputs)

let audio_1 = document.getElementById ("beep_1");
console.log (audio_1);

formInputs.forEach(
    function (thisInput) {
        thisInput.addEventListener("focus", function () {
            audio_1.play ()
        })
    } 
);

// audio when user leaves the form
let audio_2 = document.getElementById ("beep_2");
console.log (audio_2);

formInputs.forEach(
    function (thisInput) {
        thisInput.addEventListener("blur", function () {
            audio_2.play ()
        })
    }
);




// Change he style of the input when users enters the field
// to add focus when selecting the form
formInputs.forEach (thisInput => {
    thisInput.addEventListener ("focus", function (){
        thisInput.classList.add("focus");
    })
})
// to remove the focus after selecting it
formInputs.forEach (thisInput => {
    thisInput.addEventListener ("blur", function (){
        thisInput.classList.remove("focus");
    })
})




// Change the style of the label for each import when on focus
// this is the bold and colourful title of the form when selected
// to add focus
formInputs.forEach (thisInput => {
    thisInput.addEventListener ("focus", function (){
        thisInput.previousElementSibling.classList.add("label_on_focus");
    })
})
// to remove focus
formInputs.forEach (thisInput => {
    thisInput.addEventListener ("blur", function (){
        thisInput.classList.remove("error");
        thisInput.previousElementSibling.classList.remove ("label_on_focus");

        if (thisInput.value === "") {
            thisInput.classList.add("error");

        } else {
            thisInput.classList.remove("error");
        }
    })
})




// When user clikcs on the submit button, show the pop up
let popUpBox = document.getElementById ("confirmation");

function _showPopUp () {
    popUpBox.style.display = "flex";
}
function _hidePopUp (){
    popUpBox.style.display = "none";
}

formInputs.forEach(thisInput => {
    thisInput.addEventListener("keyup", function (e){
        e.preventDefault();
        console.log(e)

        // IF KEY IS ENTER DO SOMETHING
        if(e.key === "Enter") {
            _showPopUp ()
            // console.log("you pressed enter")
        }
    })
})

// To close the pop up
let close = document.getElementById("closeButton");
close.addEventListener("click", function (){
    _hidePopUp ()
})

let submit_button = document.getElementById("submit_button");



// If input is NOT EMPTY show pop up
submit_button.addEventListener("click", function (event){
    event.preventDefault();

    formInputs.forEach(thisInput => {
        console.log(thisInput.value);
        if (
            formInputs[0].value !== "" &&
            formInputs[1].value !== "" &&
            formInputs[2].value !== "" &&
            formInputs[3].value !== ""
        ){

            // Personalized message
            let text = `Hey ${formInputs[0].value}, your message have been received! Thank you for contacting me, I'm going to contact you as soon as possible by ${formInputs[1].value}.`

            let popUpText = document.getElementById("confirmationText");
            // place the text inside pop up text in html
            popUpText.innerHTML = text;

            _showPopUp ();
            thisInput.nextElementSibling.style.display = ("none");

        } else {
            
            // show error if one of the forms are empty
            formInputs.forEach(thisInput => {
                if (thisInput.value === "") {
                    // show error if its empty
                    thisInput.nextElementSibling.style.display = ("block");

                } else {
                    // if its not empty
                    // I have no idea why it is not disapparing
                    thisInput.nextElementSibling.style.display = ("none");
                }
            })
        }
    })
})