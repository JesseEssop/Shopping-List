// shopping list factory function here
function ShopFactory(stuff) {
    var shopCart = stuff || {}
    var totalPrice = 0;
    var regex = /^[a-zA-Z]+/i;
    var error;
    var price = 0;


    function errorText (){
        return error;
    }


    function Cart() {
        var itemKey = Object.keys(shopCart);
    }


    function shopAddItem(newItem, newPrice) {
        error = "";
        var stuff = newItem.toUpperCase().trim();
        var wack = regex.test(stuff);
        price = newPrice

        if(wack === true){
            if(shopCart[newItem] === undefined && price === Number){
                ShopCart[newItem] = 0;
                newPrice += newPrice;
            }
            
        }
        if (wack === false){
            error = "Please enter valid item"
        }

    }
    
    function TotalTing (){
       totalPrice += price;
        return totalPrice
    }

    return {
        shopAddItem,
        TotalTing,
        errorText,
        Cart,
        TotalTing

    }

}