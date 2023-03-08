import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const user = writable(null);
export const value = writable(1);
export const mobile = writable(false);
export const showMenu = writable(false);
export const selected = writable("All categories");
export const showLogin = writable(false);
export const mobilePhone = writable(false);
export const selectedCategory = writable("-- Please choose an category --");

export const cartItems = writable([])
export const totalCartQuantity = writable(0)