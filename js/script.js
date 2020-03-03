
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
// Hide select theme option tag so users won't be able to select it or see it in the drop down menu.
// Hide the colors in the color drop down menu and update the “Color” field to read 
// “Please select a T-shirt theme” Until a theme is selected from the “Design” menu.
// Show the appropriate colors only in the “Color” drop down menu when one of the two themes 
// is selected, and the “Color” field should update to the first available color.
// Hide the color div until users select theme as an exceed expectations work.

let selectTheme = document.getElementById("design");
design.options[0].setAttribute("hidden",true);
const colorDiv=document.getElementById('colors-js-puns');
colorDiv.setAttribute("hidden",true);
const color=document.getElementById("color");
const firstColorOption=document.createElement("option");
    firstColorOption.textContent="please select a T-shirt theme";
    color.prepend(firstColorOption);
    firstColorOption.setAttribute("selected",true);

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
// Create an element to display the total activity cost.
// Listen for changes in the Activity section.
// create a variable to store the clicked checkbox.
// Create a variable to store the `data-type` attribute of the checkbox that was just clicked.
// Update and display the total activity cost.
// Create an `if` statement to check which items to disable/enable.
// Disable conflicting activities.
// keep the disabled checkbox disabled after checking anthor checkbox.
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
// Hide the paypal div and bitcoin div initially.
// set credit card option and it's section as a default.

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

