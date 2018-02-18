var buttonElem = document.getElementById('new');

function Phone(brand, price, color, lenght, width) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.length = lenght;
	this.width = width;
};

Phone.prototype.printInfo = function() {
	console.log('The phone brand is (' + this.brand + '), color is (' + this.color + ') and the price is (' + this.price + ').');
};

Phone.prototype.show = function() {
	var itemList = document.getElementById('list');
    var newElem = document.createElement('p');
    newElem.innerHTML = this.brand;
	console.log(newElem);
    itemList.appendChild(newElem);
};

var SamsungGalaxyS6 = new Phone("Samsung", 1500, "pink", 154, 72);
var iPhone6s = new Phone("Apple", 2000, "black", 145, 68);
var OnePlusOne = new Phone("OnePlus", 1300, "silver", 149, 42);

iPhone6s.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
iPhone6s.show();
SamsungGalaxyS6.show();
OnePlusOne.show();

buttonElem.addEventListener('click', function () {
	newBrand = prompt('Please enter telephone brand', 'brand');
	newPrice = prompt('Please enter telephone price', 'price');
	newColor = prompt('Please enter telephone color', 'color');
	newLenght = prompt('Please enter telephone lenght', 'lenght');
	newWidth = prompt('Please enter telephone width', 'width');
	var newPhone = new Phone(newBrand, newPrice, newColor, newLenght, newWidth);
	newPhone.show()
});