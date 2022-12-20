import { writable } from 'svelte/store'
import { browser } from "$app/environment";

export const user = writable(null)
export const selectedCategory = writable('-- Please choose an category --')
export const shoppingItem = writable({})
export const shoppingList = writable([])
export const shoppingCount = writable(0)
export const totalShoppingCount = writable(0)
export const isAddToCart = writable(false)

// export const totalShoppingCount = writable(
//   browser && (JSON.parse(localStorage.getItem("total shopping count")) || 0)
// );
// totalShoppingCount.subscribe(
//   (val) => browser && localStorage.setItem("total shopping count", val)
// );

// export const shoppingList = writable(
//   browser && localStorage.getItem("shopping list") || null
// );
// shoppingList.subscribe(
//   (val) => browser && localStorage.setItem("shopping list", val)
// );