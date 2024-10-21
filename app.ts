document.addEventListener("DOMContentLoaded", () => {
    let myBalance: number = 20000;
    let myPin: number = 16095;

    const resultText = document.getElementById("result-text") as HTMLParagraphElement;
    const pinInput = document.getElementById("pin-input") as HTMLInputElement;
    const pinSubmit = document.getElementById("pin-submit") as HTMLButtonElement;
    const optionsSection = document.getElementById("options-section") as HTMLDivElement;
    const withdrawSection = document.getElementById("withdraw-section") as HTMLDivElement;

    pinSubmit.addEventListener('click', () => {
        const pin = parseInt(pinInput.value);
        if (pin === myPin) {
            optionsSection.classList.remove('hidden');
            resultText.innerText = "Correct PIN! Select an option.";
        } else {
            resultText.innerText = "Incorrect PIN. Try again.";
        }
    });

    document.getElementById('withdraw-btn')?.addEventListener('click', () => {
        withdrawSection.classList.remove('hidden');
    });

    document.getElementById('withdraw-submit')?.addEventListener('click', () => {
        const amount = parseInt((document.getElementById('withdraw-input') as HTMLInputElement).value);
        if (amount > myBalance) {
            resultText.innerText = "Alert: Insufficient balance.";
        } else {
            myBalance -= amount;
            resultText.innerText = `Transaction successful! Your remaining balance is ${myBalance}.`;
        }
    });

    document.getElementById('balance-btn')?.addEventListener('click', () => {
        resultText.innerText = `Your balance is ${myBalance}.`;
    });

    document.getElementById('fastcash-btn')?.addEventListener('click', () => {
        if (1000 > myBalance) {
            resultText.innerText = "Alert: Insufficient balance.";
        } else {
            myBalance -= 1000;
            resultText.innerText = `Fast cash successful! Your remaining balance is ${myBalance}.`;
        }
    });
});
