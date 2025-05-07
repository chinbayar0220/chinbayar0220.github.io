const exchangeArray = [
    {name: 'USD', value: 1},
    {name: 'EUR', value: 0.88},
    {name: 'POUND', value: 0.75},
    {name: 'WON', value: 1433},
    {name: 'YEN', value: 142},
    {name: 'YAN', value: 7.31},
    {name: 'MNT', value: 3537}
];

function populateCurrencies() {
    const from = document.getElementById('fromCurrency');
    const to = document.getElementById('toCurrency');
    
    exchangeArray.forEach(currency => {
        [from, to].forEach(select => {
            const option = document.createElement('option');
            option.value = currency.name;
            option.textContent = currency.name;
            select.appendChild(option);
        });
    });
}

function appendInput(value) {
    const input = document.getElementById('inputAmount');
    if (value === '.' && input.value.includes('.')) return;
    input.value = input.value === '0' ? value : input.value + value;
}

function backspace() {
    const input = document.getElementById('inputAmount');
    input.value = input.value.slice(0, -1) || '0';
}

function clearInput() {
    document.getElementById('inputAmount').value = '0';
}

function convert() {
    const amount = parseFloat(document.getElementById('inputAmount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    const fromRate = exchangeArray.find(c => c.name === from).value;
    const toRate = exchangeArray.find(c => c.name === to).value;

    const result = (amount / fromRate * toRate).toFixed(2);
    document.getElementById('result').textContent = `${result} ${to}`;
}

window.onload = () => {
    populateCurrencies();
    clearInput();
};