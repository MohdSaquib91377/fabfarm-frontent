import React from 'react'

const Addcart = () => {
//     <script>
//     $('#add-to-cart-button').click(function(){
//       addItemToCart(949931647, 1, "1", "Months")
//     });
//   </script>
//   <script>
//     function addItemToCart(variant_id, qty, frequency, unit_type) {
//       data = {
//         "id": variant_id,
//         "quantity": qty,
//         "properties": {
//           "shipping_interval_frequency": frequency,
//           "shipping_interval_unit_type": unit_type
//         }
//       }
//       jQuery.ajax({
//         type: 'POST',
//         url: '/cart/add.js',
//         data: data,
//         dataType: 'json',
//         success: function() { 
//           window.location.href = '/cart'; 
//         }
//       });
//       window.location = '/checkout';
//     }
//   </script>

//   <button id="add-to-cart-button">AddToCart</button>

//   <input type="button" id="add-to-cart-button" value="ADD TO CART" onClick="addItemToCart(36807328039071, 1, {{product.selling_plan_groups[0].selling_plans[0].id}})">       
// <script>  
// function addItemToCart(variant_id, qty, selling_plan) {

//     data = {
//       "id": variant_id,
//       "quantity": qty,
//       "selling_plan": selling_plan
//     }
//     jQuery.ajax({
//       type: 'POST',
//       url: '/cart/add.js',
//       data: data,
//       dataType: 'json',
//       success: function() { 
//         window.location.href = '/cart'; 
//       }
//     });
//   }
// </script>  
// <form onsubmit=""></form>  
  return (
    <div>Addcart</div>
  )
}

export default Addcart