'use client'

import { createContext, useContext, useState } from "react"

const CartContext = createContext();

export function CartProvider() {

return (
    <>
    </>
)
};

export function useCart() {
    return useContext(CartContext);
};