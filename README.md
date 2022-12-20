# create-svelte

# Ecommerce App

This is a simple ecommerce app, it is 'simple' because the api has only 20 products, this app is integrated Supabase aAth and Database to make it a fully functional ecommerce app. It also has a CMS, a page that allows admin to enter product data, the only thing missing is a shopping cart page and checkout functionality which will be added sooner.

# Supabase as a backend service

I personally think Supabase is the backend service, because it has the cleaniest api, easy to read and understand, and it provides the sample codes that integrates into popular frameworks such as Sveltekit, Next, Nuxt, Remix, etc. it makes adding backend functionality very easy into your app.

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