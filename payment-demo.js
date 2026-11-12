document.querySelectorAll('[data-payment-form]').forEach((form) => {
  const phoneInput = form.querySelector('[data-payment-phone]');
  const status = form.querySelector('[data-payment-status]');
  const submitButton = form.querySelector('button[type="submit"]');
  const cartCount = document.getElementById(form.dataset.cartCount);

  function syncBasketState() {
    const hasItems = Number(cartCount.textContent) > 0;
    submitButton.disabled = !hasItems;
    status.textContent = hasItems ? '' : 'Add an item to your basket before trying checkout.';
  }

  function validatePhone() {
    const phone = phoneInput.value.replace(/[\s()-]/g, '');
    const validKenyanNumber = /^(?:(?:\+?254)|0)(?:7|1)[0-9]{8}$/.test(phone);
    phoneInput.setCustomValidity(
      phone && !validKenyanNumber
        ? 'Enter a Kenyan mobile number, such as 0712 345 678 or +254 712 345 678.'
        : ''
    );
  }

  phoneInput.addEventListener('input', () => {
    validatePhone();
    status.textContent = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validatePhone();
    if (!form.reportValidity()) return;

    status.textContent = 'Demo complete. No payment prompt was sent and no money was charged. A secure M-Pesa backend is needed for real payments.';
    form.reset();
    phoneInput.setCustomValidity('');
  });

  new MutationObserver(syncBasketState).observe(cartCount, {
    childList: true,
    characterData: true,
    subtree: true
  });
  syncBasketState();
});
