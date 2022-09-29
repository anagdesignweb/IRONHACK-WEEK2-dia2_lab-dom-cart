// ITERATION 1

let totalValue = 0;



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

	// const singleProduct = document.querySelector('.product');
	// updateSubtotal(singleProduct);
	// end of test


	// ITERATION 2
	//... your code goes here

// hay qye hacer un bucle para contar cuantos productos hay 
// se le da a cada uno el evento de click
// y con ese evento que esta dentro del loop se guarda su indice y asi sabemos cual fue el del click
	const allProducts =  document.querySelectorAll('#cart .product');

	for (let i = 0; i < allProducts.length; i++){
		updateSubtotal(allProducts[i])
		console.log(allProducts[i]);

		totalValue = Number(totalValue) + Number(updateSubtotal(allProducts[i]));
		allProducts[i].querySelector('.btn-remove').addEventListener('click', removeProduct);
		// allProducts[i].addEventListener('click', removeProduct);
	}


	// ITERATION 3
	console.log(totalValue.toFixed(2));
	document.querySelector('#total-value span').innerHTML = totalValue.toFixed(2);

}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	console.log('The target in remove is:', target);

	// totalValue = totalValue - target.querySelector('.subtotal span').innerHTML;
	// target.querySelector('.quantity input').value = 0;
	//  target.querySelector('.subtotal span').innerHTML='';

	
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



