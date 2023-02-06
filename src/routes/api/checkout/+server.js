import Stripe from "stripe";
import {
  PUBLIC_STRIPE_SECRET_KEY,
  PUBLIC_PRODUCT_ID,
} from "$env/static/public";

const stripe = new Stripe(PUBLIC_STRIPE_SECRET_KEY);

// const lineItems = [
//   {
//     id: 'price_1MKZPcAshxqgnb1shy2OZhUL',
//     title: 'Mens Casual Slim Fit',
//     price: 15.99
//   },
//   {
//     id: 'price_1MKZTFAshxqgnb1sRMZ53gxW',
//     title: 'Solid Gold Petite Micropave',
//     price: 168
//   }
// ]

const lineItems = [
  {
    price: 'price_1MKZPcAshxqgnb1shy2OZhUL',
    quantity: 2
  },
  {
    price: 'price_1MKZTFAshxqgnb1sRMZ53gxW',
    quantity: 1
  }
]

// export const GET = async () => {
//   const customer = await stripe.customers.create({
//     email: "stephenlai2015@gmail.com",
//   });

//   console.log(customer.id);

//   return new Response(
//     JSON.stringify({
//       id: customer.id,
//     }),
//     { status: 200 }
//   );
// };


// export const POST = async ({ request }) => {
export const GET = async () => {
  /*
  req.body.items
  [
    {
      id: 1,
      quantity: 3
    }
  ]

  stripe wants
  [
    {
      price: 1,
      quantity: 3
    }
  ]
  */
  
  // const { items } = await request.json();

  // let lineItems = []
  // items.forEach(item => {
  //   lineItems.push({
  //     price: item.id,
  //     quantity: item.quantity
  //   })
  // })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel',
  })

  return new Response(
    JSON.stringify({
      url: session.url
    }),
    { status: 200 }
  );
};
