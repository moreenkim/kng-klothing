import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HOfQdE5HQRzlx92i1yfe7OPP1bLmD2m4XxXXYoGzRMCY4Vivr1dszhsZHoDbNGVawKYdA4HLX34OuRqVawyBP5c00shhWIzum';

  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="KNG Klothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
