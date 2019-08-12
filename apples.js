
function totalNumberSold(applesSoldList) {
	const sum = applesSoldList.map(applesSoldList => applesSoldList.qty).reduce((a, b) => a + b, 0);
	return sum;
}

function totalIncome(applesSoldList) {
	var incomeSum = applesSoldList.map(applesSoldList => applesSoldList.price * applesSoldList.qty).reduce((a, b) => a + b, 0)
	return incomeSum;
}

function totalIncomeGreenApples(applesSoldList){
	var green = applesSoldList.find(person => person.color === 'green');
	var greensum = applesSoldList.map(green => green.qty * green.price).reduce((a, b) => a + b, 0);
	console.log(green)
	return greensum;
	
}

function totalProfit(applesSoldList, applePriceMap){
	return 0;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, costMap) {
	return '';
}