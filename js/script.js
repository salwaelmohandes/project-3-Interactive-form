// Select the name input element and place focus on it.
const name = document.getElementById("name");   
name.focus();
// Target the other title and hide it until users choose it in the drop down menu.
const title = document.getElementById("title");
const otherTitle = document.getElementById("other-title");
otherTitle.parentNode.setAttribute("hidden",true);
title.addEventListener('change', (e) => {
    if(e.target.value === 'other') {
        otherTitle.parentNode.style.display='show';
        otherTitle.parentNode.removeAttribute("hidden");
    } else {
        otherTitle.parentNode.setAttribute("hidden", true);
    }
});
// Hide select theme option tag in the drop down menu.
// Hide the colors in the color menu and update it to read “Please select a T-shirt theme”.
// Update color menu & Show the appropriate colors only when one theme is selected.
// Hide the color div until users select theme as an exceed expectations work.
let selectTheme = document.getElementById("design");
design.options[0].setAttribute("hidden",true);
const colorDiv=document.getElementById('colors-js-puns');
const color=document.getElementById("color");
const firstColorOption=document.createElement("option");
firstColorOption.textContent="please select a T-shirt theme";
color.prepend(firstColorOption);
firstColorOption.setAttribute("selected",true);
colorDiv.setAttribute("hidden",true);

    color.options[1].setAttribute("hidden",true);
    color.options[2].setAttribute("hidden",true);
    color.options[3].setAttribute("hidden",true);
    color.options[4].setAttribute("hidden",true);
    color.options[5].setAttribute("hidden",true);
    color.options[6].setAttribute("hidden",true);

design.addEventListener('change',(e) => {
    if (e.target.value === 'js puns') {
        colorDiv.removeAttribute("hidden");
        color.options[0].setAttribute("hidden", true);

        color.options[1].setAttribute("selected", true);
        color.options[1].removeAttribute("hidden");
        color.options[2].removeAttribute("hidden");
        color.options[3].removeAttribute("hidden");

        color.options[4].setAttribute("hidden", true);
        color.options[5].setAttribute("hidden", true);
        color.options[6].setAttribute("hidden", true);
    
    } else if (e.target.value === 'heart js') {
        colorDiv.removeAttribute("hidden");
        color.options[0].setAttribute("hidden", true);
        color.options[1].setAttribute("hidden", true);
        color.options[2].setAttribute("hidden", true);
        color.options[3].setAttribute("hidden", true);

        color.options[4].setAttribute("selected", true);
        color.options[4].removeAttribute("hidden");
        color.options[5].removeAttribute("hidden");
        color.options[6].removeAttribute("hidden");  
    }
});
// Create an element to display the total activity cost and update it.
// Listen for changes in the Activity section.
// create a variable to store the clicked checkbox & data-type of the clicked one.
// Disable conflicting activities & keep it disabled after checking anothor checkbox.

const activities= document.querySelector(".activities");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
let totalCostdiv = document.createElement('div');
    totalCostdiv.textContent="Total Price = $0";
    activities.append(totalCostdiv);
let totalCost = 0;

activities.addEventListener('change', (event) => { 
    let clicked = event.target;
    let clickedCost = parseInt(clicked.getAttribute("data-cost"));
    let clickedTime = clicked.getAttribute("data-day-and-time");
    if(clicked.checked) {
        totalCost=clickedCost+totalCost;
    } else {
        totalCost=totalCost-clickedCost;
}
    for (let i=0; i<checkboxes.length; i+=1 ) {
        let timeType = checkboxes[i].getAttribute("data-day-and-time");
        if(clicked.checked) {
            if (clickedTime === timeType && clicked !== checkboxes[i]) {
                checkboxes[i].disabled=true;
            } else {
                if(checkboxes[i].disabled === true) {
                    checkboxes[i].disabled = true;
                }  
            }
        } else {
            if (clickedTime === timeType && clicked !== checkboxes[i]) {
                checkboxes[i].disabled=false;
            } else {
                if(checkboxes[i].disabled === false) {
                    checkboxes[i].disabled = false;
                }  
            }
        }
    }
    totalCostdiv.textContent="Total Price = $" + totalCost;
});
// Hide select payment from the drop down menu.
// Hide the paypal and bitcoin div initially and set credit card as a default.

const payment = document.getElementById("payment");
payment.removeChild(payment.options[0])
const paypalDiv = document.getElementById('paypal');
paypalDiv.setAttribute("hidden",true);
const bitcoinDiv = document.getElementById('bitcoin');
bitcoinDiv.setAttribute("hidden",true);
const creditCardDiv = document.getElementById('credit-card'); 
creditCardDiv.setAttribute(false,"hidden");
payment.addEventListener('change',(e)=>{
    for (i=0; i<=payment.length; i+=1){
        if (e.target.value==='paypal'){
            creditCardDiv.setAttribute("hidden",true);
            bitcoinDiv.setAttribute("hidden",true);
            paypalDiv.removeAttribute("hidden");
        }else if(e.target.value==='bitcoin'){
            creditCardDiv.setAttribute("hidden",true);
            paypalDiv.setAttribute("hidden",true);
            bitcoinDiv.removeAttribute("hidden");
        }else if(e.target.value==='credit card'){
            creditCardDiv.style.display='show'; 
            creditCardDiv.removeAttribute("hidden"); 
            paypalDiv.setAttribute("hidden",true);
            bitcoinDiv.setAttribute("hidden",true);     
        }
    }
});
// Create a validation function for each form field to check if the input value meets the requirements.
// Create a single master validation function to test them all with a single function call.
// Append an error messages element to the DOM near the input. 
// Submit event listener on the form element to prevent the default submission if any fields are invalid.

const form = document.querySelector("form");
const email = document.querySelector("#mail");
const cardNum = document.querySelector("#cc-num");
const cardZip = document.querySelector("#zip");
const cardCvv = document.querySelector("#cvv");

const nameValidator = () => {
    return name.value.length > 0;
}
const emailValidator = () => {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
}
const activitiesValidator = () => {
    for (let i=0; i<checkboxes.length; i+=1){
        if (checkboxes[i].checked){
        return true;
        }   
    }return false;
}
const cardNumValidator = () => {
    return 13<= cardNum.value.length<=16 && /^\d$/.test(cardNum.value);
}
const cardZipValidator = () => {
    return  /^\d{5}$/.test(cardZip.value);
}    
const cardCvvValidator = () => {
    return /^\d{3}$/.test(cardCvv.value);
}

form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!nameValidator()){
        name.style.backgroundColor = '#FFC300 ';
    }
        if (!emailValidator()){
        email.style.backgroundColor = '#FFC300 ';
    }
        if (!cardNumValidator()) {
        cardNum.style.backgroundColor = '#FFC300 ';
    }
        if (payment.value == "credit card"&&!cardZipValidator()) {
        cardZip.style.backgroundColor = '#FFC300 ';
    }
        if (payment.value == "credit card"&&!cardCvvValidator()) {
        cardCvv.style.backgroundColor = '#FFC300 ';
    }
    let errorMessage = document.createElement("span")
    errorMessage.textContent = "x please check at least one checkbox.";
    errorMessage.style.color='#FFC300 ';
    errorMessage.style.fontSize='1.5em';
    if (!activitiesValidator()){
        activities.append(errorMessage);
    }
});
 





