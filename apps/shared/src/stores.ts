import React from "react";

function createStore<T>(initialValue: T) {
    let state: T = initialValue;

    const set = (newState: T) => {
        state = newState;
    }

    const get = () => {
        return state;
    }

    return { get, set }
}

export const cartStore = createStore<Array<{ sku: string; quantity: number }>>([]);

export function useCartStore() {
    const [items, setItems] = React.useState(cartStore.get());

    React.useEffect(() => {
        const refresh = () => setItems([...cartStore.get()]);
        window.addEventListener('updated-cart', refresh);
        return () => {
            window.removeEventListener('updated-cart', refresh);
        };
    }, []);

    return items;
}