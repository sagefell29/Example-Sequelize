This file stores how the order is working.

1. User will call the order creation endpoint which will just create a keep an order in database after calculation of price and discounts.

2. Then the user will initiate the payment gateway with given amount.

3. Once the payment is completed the client must send the payment details to the order sucess or order failure endpoint.

## Points to remember

1. The gross amount stores the amount that is the base amount. It can be the direct calculated amount or it must be the amount after applying the discount.On this the GST is calculated.