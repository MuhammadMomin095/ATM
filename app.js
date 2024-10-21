document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d;
    var myBalance = 20000;
    var myPin = 16095;
    var resultText = document.getElementById("result-text");
    var pinInput = document.getElementById("pin-input");
    var pinSubmit = document.getElementById("pin-submit");
    var optionsSection = document.getElementById("options-section");
    var withdrawSection = document.getElementById("withdraw-section");
    pinSubmit.addEventListener('click', function () {
        var pin = parseInt(pinInput.value);
        if (pin === myPin) {
            optionsSection.classList.remove('hidden');
            resultText.innerText = "Correct PIN! Select an option.";
        }
        else {
            resultText.innerText = "Incorrect PIN. Try again.";
        }
    });
    (_a = document.getElementById('withdraw-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        withdrawSection.classList.remove('hidden');
    });
    (_b = document.getElementById('withdraw-submit')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var amount = parseInt(document.getElementById('withdraw-input').value);
        if (amount > myBalance) {
            resultText.innerText = "Alert: Insufficient balance.";
        }
        else {
            myBalance -= amount;
            resultText.innerText = "Transaction successful! Your remaining balance is ".concat(myBalance, ".");
        }
    });
    (_c = document.getElementById('balance-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        resultText.innerText = "Your balance is ".concat(myBalance, ".");
    });
    (_d = document.getElementById('fastcash-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
        if (1000 > myBalance) {
            resultText.innerText = "Alert: Insufficient balance.";
        }
        else {
            myBalance -= 1000;
            resultText.innerText = "Fast cash successful! Your remaining balance is ".concat(myBalance, ".");
        }
    });
});
