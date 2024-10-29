document.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.innerHTML = `
        .new-checkout-button {
            background-color: red;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
    `;
    document.head.appendChild(style);

    var originalCheckoutButton = document.querySelector('button[type="submit"][id="checkout"][name="checkout"]');

    if (originalCheckoutButton) {
        originalCheckoutButton.style.display = 'none';

        var newButton = document.createElement('button');
        newButton.textContent = 'Check out';
        newButton.className = 'new-checkout-button';

        originalCheckoutButton.parentNode.insertBefore(newButton, originalCheckoutButton.nextSibling);

        newButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Novo botão de checkout clicado!');
        });
    }
});
