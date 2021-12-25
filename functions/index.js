
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const Razorpay = require('razorpay')
const crypto = require('crypto')

admin.initializeApp()
const router = express()
router.use(cors({ origin: true }))

// Add your razorpay key and secret
const KEY_ID = 'rzp_test_enRiibCpGvB8WA'
const KEY_SECRET = '7ep36eQ2Tf1Mq4YmeTWXeV7j'

router.post('/createPayment', (req, res, next) => {
  // Saving payment data into firebase before passing to razorpay
  return admin
    .firestore()
    .collection('payments')
    .add(req.body)
    .then(payment => {
      const instance = new Razorpay({
        key_id: KEY_ID,
        key_secret: KEY_SECRET
      })

      const options = {
        amount: req.body.amount * 100,
        currency: 'INR',
        receipt: payment.id, // Unique value, here we are using payments collection document id
        payment_capture: 1
      }
      instance.orders.create(options, function (err, order) {
        return res.status(201).send(order)
      })
    })
    .catch(er => {
      return res.status(400).send({ er })
    })
})
router.post('/verifyPayment', (req, res, next) => {
  const order = req.body

  const text = order.razorpay_order_id + '|' + order.razorpay_payment_id
  const signature = crypto
    .createHmac('sha256', KEY_SECRET)
    .update(text)
    .digest('hex')

  if (signature === order.razorpay_signature) {
    // You can update payment details in your database here

    return res.status(201).send({ message: 'Successful payment' })
  } else {
    return res.status(400).send({ message: 'Payment verification failed' })
  }
})

exports.razorpay = functions.https.onRequest(router)
