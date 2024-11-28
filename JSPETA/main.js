function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$(document).ready(function() {
    let cart = [];
    let totalPrice = 0;


    $('.bcart').click(function() {
       productName = $(this).data('name');  
       productPrice = parseFloat($(this).data('price')); 

       alert( productName + " has been added to cart!");

       let productFound = false;
       for (let i = 0; i < cart.length; i++) {
         if (cart[i].name === productName) {
           cart[i].quantity++;  
           productFound = true;
           break;
         }
       }

       if (!productFound) {
         cart.push({ name: productName, price: productPrice, quantity: 1 });
       }

       totalPrice += productPrice;


  
      $('#carti-count').text(cart.length);
      $('#carti-total').text("Total: ₱" + totalPrice.toFixed(2));

   
      $('#carti-items').html("");
      cart.forEach(item => {
        $('#carti-items').append("<li>" + "(" + item.quantity + "x)"  +"\n" + item.name + " - ₱" + item.price.toFixed(2) + "</li>" + "<li> </li>");
      });
    });

       $('#checkout-buttun').click(function() {
        if (cart.length == 0) {
            alert("Your cart is empty.... Idiot."); 
        }
        else {
            alert("Thank you for using PCSTI for your gaming needs!\nYour total is: ₱" + totalPrice.toFixed(2));
    
            cart = [];
            totalPrice = 0;

            $('#carti-count').text(cart.length);
            $('#carti-total').text('Total: ₱0.00');
            $('#carti-items').html(''); 
        }
        
      });
  });

  