import { cartStore, useCartStore } from "tractor_v2_shared/stores";

const store = cartStore.get();

window.addEventListener('add-to-cart', (ev: CustomEvent) => {
  debugger
  const { sku } = ev.detail;

  const item = store.find((m) => m.sku === sku);

  if (item) {
    item.quantity++;
  } else {
    store.push({ sku, quantity: 1 });
    cartStore.set(store)
  }

  window.dispatchEvent(new CustomEvent('updated-cart'));
});

window.addEventListener('remove-from-cart', (ev: CustomEvent) => {
  const { sku } = ev.detail;

  const index = store.findIndex((m) => m.sku === sku);

  if (index >= 0) {
    store.splice(index, 1);
    cartStore.set(store)
    window.dispatchEvent(new CustomEvent('updated-cart'));
  }
});

window.addEventListener('clear-cart', () => {
  store.splice(0, store.length);
  cartStore.set(store)
  window.dispatchEvent(new CustomEvent('updated-cart'));
});

export { useCartStore };
