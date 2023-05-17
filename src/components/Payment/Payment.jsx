import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
// Замените 'YOUR_PUBLISHABLE_KEY' на ваш реальный публичный ключ Stripe
const stripePromise = loadStripe(
  "pk_test_51N8V55KRS1Hl9CiLsdCXRlhpW0m5MtiEUtEZLsQRcKgapmeLZ8yJYOVU7SUUsAru6HeNzSC1xwzjEEi8lmWoLAgH000OGwdE9g"
);

const Payment = () => {
  useEffect(() => {
    const initializeStripe = async () => {
      const stripe = await loadStripe("YOUR_PUBLISHABLE_KEY");

      const handlePayment = async () => {
        const session = await fetch("/create-payment-session", {
          method: "POST",
        }).then((response) => response.json());

        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error(error);
        }
      };

      const makePaymentHandler = async () => {
        handlePayment();
      };

      document
        .getElementById("makePayment")
        .addEventListener("click", makePaymentHandler);

      return () => {
        document
          .getElementById("makePayment")
          .removeEventListener("click", makePaymentHandler);
      };
    };

    initializeStripe();
  }, []);

  return (
    <div id="container">
      <aside id="info">
        <label htmlFor="paymentMethod">Payment Method</label>
        <select name="paymentMethod">
          <option>Visa</option>
          <option>MasterCard</option>
          <option>Elo</option>
        </select>

        <label htmlFor="cardNumber">Credit Card Number</label>
        <input type="text" name="cardNumber" />

        <label htmlFor="cardholderName">Cardholder Name</label>
        <input type="text" name="cardholderName" />

        <label htmlFor="cardDate">Expiration Date</label>
        <input type="text" name="cardDate" />

        <label htmlFor="cvv">CVV</label>
        <input type="text" name="cvv" />

        <button id="makePayment">MAKE A PAYMENT</button>
      </aside>
      <aside id="description">
        <h2>Original wayfarer classic</h2>
        <h3>Green classic g-15</h3>
        <img
          src="http://www.ray-ban.com/_repository/_resources/_collections/sun/RB4105/601/_default_500_300/601.png"
          alt="Product"
        />
        <h1>$150</h1>
        <button id="editOrder">Edit the Order</button>
      </aside>
    </div>
  );
};

export default Payment;
