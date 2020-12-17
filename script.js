window.onload = function (){

const buy = document.getElementById('buy');
const clear = document.getElementById('clear');
let showTotalPrice = document.querySelector('#basketPrice');
const container = document.querySelector("#container");
let itemNames = document.querySelectorAll('h2');
let itemPrices = document.querySelectorAll('h3');
const adds = document.querySelectorAll(".add");

let itemCounter = 0;
let totalCost = 0;

// dodawanie elementów do koszyka

buy.addEventListener('click', function(){ 
    alert('Zakupy zrobione! Zapłacisz: ' + (totalCost/100) + 'zł.')
    showTotalPrice.textContent = '0 zł';
    totalCost = 0;
    itemCounter = 0;
    container.innerHTML = "";
});

for (let i=0; i< adds.length; i++) {
adds[i].addEventListener('click', function(){ 
    const itemInBasket = document.createElement("div");
    itemInBasket.classList.add("addStyle");
    itemCounter++;
    const deleteItem = document.createElement("button");
    deleteItem.classList.add("btnStyle");
    deleteItem.textContent = "Usuń";
   
    clear.addEventListener('click', function(){
        showTotalPrice.textContent = '0 zł';
        totalCost = 0;
        container.innerHTML = "";
        itemCounter = 0;
    });
    
for (let j = 0; j < 1; j++) {  
    let itemName = itemNames[i].textContent;
   // console.log(itemNames[i]);

for (let k = 0; k < 1; k++) {     
    let itemPrice = itemPrices[i].textContent;
   // console.log(itemPrices[i]);  
    itemInBasket.innerHTML = itemName + '<br/>' + "Cena: " + itemPrice;

    if (itemCounter <= 8){
   totalCost += parseFloat(itemPrice)*100};
    //console.log(itemPrice);
    // console.log(totalCost);

    deleteItem.addEventListener('click', function(){
        container.removeChild(itemInBasket);
       // container.removeChild(deleteItem);
        itemCounter--;
        totalCost -= parseFloat(itemPrice)*100;
        showTotalPrice.textContent = (totalCost/100) + "zł";
    });

    if (itemCounter<=8){
        container.appendChild(itemInBasket);
        itemInBasket.appendChild(deleteItem);
        showTotalPrice.textContent = (totalCost/100) + "zł";
       } else {
       alert('Liczba produktów w koszyku nie może przekroczyć 8!');
    }

}}})}




}