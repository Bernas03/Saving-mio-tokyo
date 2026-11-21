const CHECKOUT_ENDPOINT = 'https://mio-tokyo-checkout.miotokyo-store.workers.dev/create-checkout-session';

export async function startCheckout(items: { id: string; quantity: number }[]) {
  const response = await fetch(CHECKOUT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  });
  if (!response.ok) throw new Error('Checkout failed');
  const { url } = await response.json();
  window.location.href = url;
}