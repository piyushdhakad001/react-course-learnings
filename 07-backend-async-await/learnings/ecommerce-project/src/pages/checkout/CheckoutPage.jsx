import axios from 'axios'
import { useState, useEffect } from 'react'
import { PaymentSummary } from './PaymentSummary';
import { OrderSummary } from './OrderSummary';
import { CheckoutHeader } from './CheckoutHeader'
import "./CheckoutPage.css";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setpaymentSummary] = useState(null)

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')

      setDeliveryOptions(response.data)

      response = await axios.get('/api/payment-summary')
      setpaymentSummary(response.data)

    }
    fetchCheckoutData();
  }, [])
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.svg" />
      <title>Checkout</title>

      <CheckoutHeader cart={cart}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
