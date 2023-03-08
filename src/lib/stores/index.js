import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const user = writable(null);
export const value = writable(1);
export const mobile = writable(false);
export const showMenu = writable(false);
export const showLogin = writable(false);
export const mobilePhone = writable(false);
export const selectedCategory = writable("-- Please choose an category --");

export const cartItems = writable([])
export const totalCartQuantity = writable(0)

// export const cartItems = writable(
//   (browser && JSON.parse(localStorage.getItem("cart items"))) || []
//   // JSON.parse(localStorage.getItem("cart items")) || []
// );
// if (typeof localStorage !== "undefined") {
//   cartItems.subscribe((value) =>
//     // browser && localStorage.setItem("cart items", JSON.stringify(value))
//     localStorage.setItem("cart items", JSON.stringify(value))
//   );
// }

// export const totalCartQuantity =
//   writable(browser && localStorage.getItem("cart quantity")) || 0;
//   // writable(localStorage.getItem("cart quantity") || 0);
// if (typeof localStorage !== "undefined") {
//   totalCartQuantity.subscribe(
//     // (value) => browser && localStorage.setItem("cart quantity", value)
//     (value) => localStorage.setItem("cart quantity", value)
//   );
// }
