$(document).ready(init);

function init(){
	console.log('inside init of createItem.js');	
	$('#create-item-btn').on('click', createItemBtn);
}

function createItemBtn(){
	console.log('inside createItemBtn() in createItem.js');
	var name = $('#input-name').val();
	var description = $('#input-description').val();
	var image = $('#input-image').val();
	var price = $('#input-price').val();
	var quantity = $('#input-quantity').val();
	
	var itemObject={
				name:name,
	  		description:description,
	  		image:image, 
	  		price:parseFloat(price), 
	  		quantity:parseFloat(quantity)
	  	};
	console.log('item object to post', itemObject);

  $.post('/transactions', itemObject)
	.success(function(data) {
		console.log('item objected posted', itemObject);
		location.href = '/';
  }).fail(function(err) {
    alert('something went wrong :(')
  });	
}