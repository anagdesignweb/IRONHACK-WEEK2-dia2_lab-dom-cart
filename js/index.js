// ITERATION 1
function updateSubtotal(product) {
	// console.log('Calculating subtotal, yey!');

	const price = product.querySelector('.price span');
	const cuantity = product.querySelector('.quantity input');
	const subtotal = product.querySelector('.subtotal span');


	let priceValue = price.innerHTML;
	let cuantityValue = cuantity.value;
	let subtotalValue = priceValue * cuantityValue;
	// console.log(priceValue, cuantityValue)
	// console.log(subtotalValue);

	subtotal.innerHTML = Number(subtotalValue).toFixed(0);
	return subtotalValue;

  }
  
  function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
			// const singleProduct = document.querySelector('.product');
			// updateSubtotal(singleProduct);
	// end of test
  
	const sumaPrecios = [];
	// ITERATION 2

	const allProducts =  document.querySelectorAll('#cart .product');

	for (let i = 0; i < allProducts.length; i++){
		updateSubtotal(allProducts[i]);
		sumaPrecios.push(updateSubtotal(allProducts[i]));

	}
		
	// ITERATION 3

	function sumNumbers(array) {

			let suma= 0;		
			for(let i=0; i<array.length; i++){
			  suma = suma + array[i];
			}	
		  return suma;
		  //console.log(suma);		
		}

	//	console.log(sumNumbers(sumaPrecios));
		document.querySelector('#total-value span').innerHTML = Number(sumNumbers(sumaPrecios)).toFixed(0);

  }
  
  // ITERATION 4
  
  function removeProduct(event) {
	const target = event.currentTarget;
	// console.log('The target in remove is:', target);
	// console.log("por finnnn");
	target.parentNode.parentNode.remove();

	//... your code goes here
  }

  // ITERATION 5
  
  function createProduct() {
	//... your code goes here
	console.log("funciona");

	let name = document.querySelectorAll('.create-product td')[0].value;

	let price = document.querySelectorAll('.create-product td')[1].value;

	let caja = document.querySelector('#cart tbody');
	caja.insertAdjacentHTML("beforeend", `<tr class="product">
	<td class="name">
	  <span>${name}</span>
	</td>
	<td class="price">$<span>${price}</span></td>
	<td class="quantity">
	  <input type="number" value="0" min="0" placeholder="Quantity" />
	</td>
	<td class="subtotal">$<span>0</span></td>
	<td class="action">
	  <button class="btn btn-remove">Remove</button>
	</td>
  </tr>`);
	




  }
  
  window.addEventListener('load', () => {

	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);
    document.getElementById('create').addEventListener('click', createProduct);
	//... your code goes here
    const todoList = document.querySelectorAll('.product .action .btn-remove');
    for (let i = 0; i < todoList.length; i++) {
        const element = todoList[i];
        // Agregamos el evento de click para cada boton de la lista de tareas
        element.addEventListener('click', removeProduct);
    }
  });



