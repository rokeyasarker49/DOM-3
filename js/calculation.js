const depositBtn = document.querySelector('#deposit-btn');
const withdrawBtn = document.querySelector('#withdraw-btn');

const depositField = document.querySelector('#deposit-field');
const withdrawField = document.querySelector('#withdraw-field');

const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');

depositBtn.addEventListener('click', function(){
        const depositFieldValue = depositField.value;
        const depositConvertAmount = parseFloat(depositFieldValue)
        const previousDeposit = depositAmount.innerText;
        const previousDepositConvert = parseFloat(previousDeposit);
        const previousBalance = balanceAmount.innerText;
        const previousBalanceConvert = parseFloat(previousBalance)
        const totalDeposit = depositConvertAmount + previousDepositConvert;
        const totalBalance = depositConvertAmount + previousBalanceConvert;
        depositAmount.innertext = totalDeposit;
        balanceAmount.innertext = totalBalance;

        depositFieldValue.value = "";

})

console.log("hello")