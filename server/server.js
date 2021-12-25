// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const express = require('express');
const app = express()
const cors = require('cors');
const Razorpay = require('razorpay');
const bodyparser = require('body-parser');
const router = express();
router.use(cors({ origin: true }));
app.use(require("body-parser").json());
var instance = new Razorpay({
  key_id: "rzp_test_enRiibCpGvB8WA",
  key_secret: "7ep36eQ2Tf1Mq4YmeTWXeV7j"
});


// router.post("/createPayment", (req, res, next) => {
//   return admin
//     .firestore()
//     .collection("payments")
//     .add(req.body)
//     .then(payment => {


//       var options = {
//         amount: req.body.amount * 100,
//         currency: "INR",
//         receipt: payment.id,
//         payment_capture: 1
//       };
//       instance.orders.create(options, function(err, order) {
//         return res.status(201).send(order);
//       });
//     })
//     .catch(er => {
//       return res.status(400).send({ er });
//     });
// });

app.post('/create/orderId', (req, res) => {
  console.log("create oderId request", req.body);
  var options = {
    amount= req.body.amount,
    currency="INR",
    receipt="recp1"
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({ orderId: order.id })
  })
})


// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`API server listening on port ${port}`)
    })
  }
exports.razorpay = functions.https.onRequest(router);





