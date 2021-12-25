const Razorpay = require('razorpay')
const shortid = require('shortid')
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET
})

const generateOrder = async (amount, currency) => {
  const order = await razorpay.orders.create({
    amount,
    currency,
    receipt: `Receipt : ${shortid.generate()}`
  })
  return {
    id: order.id,
    amount: order.amount,
    currency: order.currency,
    receipt: order.receipt
  }
}

module.exports = {
  generateOrder
}

// var options = {
//     "key": "rzp_test_enRiibCpGvB8WA", // Enter the Key ID generated from the Dashboard
//     "amount": "99900", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Acme Corp",
//     "description": "Test Transaction",
//     // "image": "https://example.com/your_logo",
//     "order_id": "order_IaUgjXEqzYA3Pc", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "handler": function (response){
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature)
//     },
//     "prefill": {
//         "name": "Gaurav Kumar",
//         "email": "gaurav.kumar@example.com",
//         "contact": "9999999999"
//     },
//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
// };
// var rzp1 = new Razorpay(options);
// rzp1.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
// document.getElementById('rzp-button1').onclick = function(e){
//     rzp1.open();
//     e.preventDefault();
// }
