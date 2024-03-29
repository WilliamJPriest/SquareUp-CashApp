import * as React from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';


const MyPaymentForm = () => (
  <PaymentForm
    applicationId="sandbox-sq0idb-ySKhL9Kz1jN68k0shcpXDQ"
    locationId="LAE3QRDQDVRRJ"
    cardTokenizeResponseReceived={ async (token, buyer) => {
      const response = await fetch('/api/v2/payments', {
        method:"POST",
        headers: {
          'Square-Version':'2022-06-16' ,
          'Content-Type': 'application/json' ,
          'CORS': "Access-Control-Allow-Origin"
        },
        body: JSON.stringify({
          sourceId: token
        })
      })
      alert(JSON.stringify(await response.json(), null, 2))
    }}
  
    
  >
    <CreditCard />
  </PaymentForm>
);

export default MyPaymentForm;