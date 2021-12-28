<template>
  <div class="examples">
    <div>
      <div class="example">
        <div class="title">Static Example</div>
        <div class="demo">
          <google-pay-button
            environment="TEST"
            button-type="plain"
            button-color="black"
            v-bind:paymentRequest.prop="{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '100.00',
                currencyCode: 'USD',
                countryCode: 'US',
              },
            }"
            v-on:loadpaymentdata="onLoadPaymentData"
            v-on:error="onError"
          ></google-pay-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@google-pay/button-element';
export default {
  name: 'StaticExample',
  props: {},
  methods: {
    onLoadPaymentData: event => {
      console.log('load payment data', event.detail);
    },
    onError: event => {
      console.error('error', event.error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example {
  margin: 5px;
  display: flex;
  flex-direction: row;
}
.example > .title {
  width: 250px;
  align-items: center;
  display: inherit;
}
.example > .demo {
  flex: 1 0 0;
}
.example > .demo > * {
  margin: 1px;
}
</style>