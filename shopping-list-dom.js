// shopping-list dom code here
var textArea = document.querySelector(".textArea");
var price = document.querySelector(".totalPrice")
var shopList = document.querySelector("#shopList");
var updateBtn = document.querySelector(".updateBtn");
var addBtn = document.querySelector(".addBtn");
var Shop = ShopFactory();
var total = document.querySelector(".totalShop");
var Errormessage = document.querySelector(".Error");
var totalUpdate = document.querySelector(".totalUpdate");




 function ShopAdd (){
    var shoptotal = 0;
    var ting = textArea.value;
    var tingPrice = Number(price.value);
    var update = Number(totalUpdate.value)
    Shop.shopAddItem(ting, tingPrice)
    printFruit(ting + " "+ "R"+tingPrice)
    shoptotal = Shop.TotalTing(tingPrice)
    
    if(Number(shoptotal) >= update){
        Errormessage.innerHTML = "Bugdet exceeded!"
        addBtn.removeEventListener('click', ShopAdd);
    }
    else{
        addBtn.addEventListener('click', ShopAdd)
    }
   total.innerHTML = "R"+shoptotal

}
addBtn.addEventListener('click', ShopAdd)


    function printFruit(fruit) {
    var node = document.createElement("DIV");
    var fruity = document.createTextNode(fruit);
    node.appendChild(fruity);
    var currentReg = document.getElementById("shopList").appendChild(node);
}

function ShopBudget (){
    totalUpdate.value
    
}
updateBtn.addEventListener('click',ShopBudget)

