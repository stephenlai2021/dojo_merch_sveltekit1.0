# Ecommerce App

This is an ecommerce app, this app is integrated with Supabase Auth and Database to make it a fully functional ecommerce app. It also has a CMS, a page that allows admin to enter product data, the only thing missing is a shopping cart page and checkout functionality which will be added sooner.

# Supabase as a backend service

I personally think Supabase is the best backend service, because it has the cleaniest api, easy to read and understand, and it provides the sample codes that integrates into popular frameworks such as Sveltekit, Next, Nuxt, Remix, etc. it makes adding backend functionality very easy into your app.

# Project structure

- In `src/routes/products/+page.serve.js`, load function fetch Supabase db with supabas SDK, then return products data as props to be used in +page.svete
- In src/routes/products/+page.svelte, receives data passed from `+page.server.js`, and displayed in template
```
export let data
const { products } = data
```
- same with product details page, in `src/routes/products/[id]/+page.serve.js`, load function fetch Supabase db with supabas SDK, then return products data as props to be used in +page.svete
- In src/routes/products/[id]/+page.svelte, receives data passsed from `+page.server.js`, and displayed in template
```
export let data
const { products } = data
```
- all pages are securely protected, if you are not loggedin yet and you want to access products or dashboard page/route by entering `/products` or `/dashboard` in address bar, you will be redirect to home page to login; if you are already loggedin and try to access home page or signup page, you will be redirected to products page, all this route potection are handled in server side.

# How to setup this project
- First download this repo into your desktop and unzip it
- open this project folder with your favorite editor 
- open terminal and type `npm i` to install the necessary dependencies
- register a Supabase account
- create a `.env` file in root directory, and put api key info
```
PUBLIC_SUPABASE_URL=xxxxxxx
PUBLIC_SUPABASE_ANON_KEY=xxxxxxx
```
- type `npm run dev` to start server

If you want to learn Sveltekit in depth, check out Huntabyte's youtube channel where you can find the best Sveltekit tutorials

# Reference
Huntabyte [https://www.youtube.com/@Huntabyte]

Stripe product key
```
1. Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops:
- API_ID: price_1MKZFyAshxqgnb1sNVndvSlM

2. DANVOUY Womens T Shirt Casual Cotton Short
- API_ID: price_1MKxAOAshxqgnb1sjG5CD10x

3. Opna Women's Short Sleeve Moisture
- API_ID: price_1MKx8sAshxqgnb1s3F0isTXo

4. MBJ Women's Solid Short Sleeve Boat Neck V
- API_ID: price_1MKx6lAshxqgnb1s0DOGgjlW

5. Rain Jacket Women Windbreaker Striped Climbing Raincoats
- API_ID: price_1MKZpRAshxqgnb1sEuaLyMSA

6. Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
- API_ID: price_1MKZmwAshxqgnb1skQTrvhOS

7. BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
- API_ID: price_1MKZlFAshxqgnb1sydPuEIAV

8. Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
- API_ID: price_1MKZiPAshxqgnb1sVpgOLuBY

9. Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
- API_ID: price_1MKZg0Ashxqgnb1sUGbXL4ER

10. WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
- API_ID: price_1MKZe1Ashxqgnb1soIrtml7P

11. Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
- API_ID: price_1MKZbvAshxqgnb1srYuEk8VV

12. SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
- API_ID: price_1MKZZnAshxqgnb1sL8Bkel2p

13. WD 2TB Elements Portable External Hard Drive - USB 3.0
- API_ID: price_1MKZXgAshxqgnb1suOCRzMSH

14. Pierced Owl Rose Gold Plated Stainless Steel Double
- API_ID: price_1MKZW6Ashxqgnb1syarO1ec0

15. White Gold Plated Princess
- API_ID: price_1MKZUjAshxqgnb1s5F6rpObN

16. Solid Gold Petite Micropave
- API_ID: price_1MKZTFAshxqgnb1sRMZ53gxW

17. John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
- API_ID: price_1MKZRHAshxqgnb1s6Puyx0f3

18. Mens Casual Slim Fit
- API_ID: price_1MKZPcAshxqgnb1shy2OZhUL

19. Mens Cotton Jacket
- API_ID: price_1MKZMsAshxqgnb1sGLh6xyNn

20. Mens Casual Premium Slim Fit T-Shirts
- API_ID: price_1MKZKjAshxqgnb1sdRxHfaRz

```