// ITERATION 1





function updateSubtotal(product) {
	console.log('Calculating subtotal, yey!');

	const price = product.querySelector('.price span');
	const quantity = product.querySelector('.quantity input');
	const subTotal = product.querySelector('.subtotal span');
	const sumPrice = Number(price.innerHTML * quantity.value.trim()).toFixed(2);
	subTotal.innerHTML = sumPrice;
	// alert(sumPrice);
	
	return sumPrice;

}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	const singleProduct = document.querySelector('.product');
	updateSubtotal(singleProduct);
	// end of test

	// ITERATION 2
	//... your code goes here

// hay qye hacer un bucle para contar cuantos productos hay 
// se le da a cada uno el evento de click
// y con ese evento que esta dentro del loop se guarda su indice y asi sabemos cual fue el del click





	// ITERATION 3
	//... your code goes here
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	console.log('The target in remove is:', target);
	//... your code goes here
}

// ITERATION 5

function createProduct() {
	//... your code goes here
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	//... your code goes here
});
