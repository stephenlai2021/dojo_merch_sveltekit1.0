# Ecommerce App

This is an ecommerce app, this app is integrated with Supabase Auth and Database to make it a fully functional ecommerce app. It also has a CMS, a page that allows admin to enter product data, the only thing missing is a shopping cart page and checkout functionality which will be added sooner.

# Supabase as a backend service

I personally think Supabase is the best backend service, because it has the cleaniest api, easy to read and understand, and it provides the sample codes that integrates into popular frameworks such as Sveltekit, Next, Nuxt, Remix, etc. it makes adding backend functionality very easy into your app.

# Project structure

- In `src/routes/products/+page.serve.js`, load function fetch Supabase db with supabas SDK, then return products data as props to be used in +page.svete
- In src/routes/products/+page.svelte, receives data passsed from `+page.server.js`, and displayed in template
```
export let data
const { products } = data
```
- same with single product itme, in `src/routes/products/[id]/+page.serve.js`, load function fetch Supabase db with supabas SDK, then return products data as props to be used in +page.svete
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