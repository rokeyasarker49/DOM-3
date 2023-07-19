const depositBtn = document.querySelector('#deposit-btn');
const withdrawBtn = document.querySelector('#withdraw-btn');

const depositField = document.querySelector('#deposit-field');
const withdrawField = document.querySelector('#withdraw-field');

const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');

depositBtn.addEventListener('click', function(){
        console.log("hello")
        const depositFieldValue = depositField.value;
        const depositConvertAmount = parseFloat(depositFieldValue)
        const previousDeposit = depositAmount.innerText;
        const previousDepositConvert = parseFloat(previousDeposit);
        const previousBalance = balanceAmount.innerText;
        const previousBalanceConvert = parseFloat(previousBalance)
        const totalDeposit = depositConvertAmount + previousDepositConvert;
        const totalBalance = depositConvertAmount + previousBalanceConvert;
        depositAmount.innerText = totalDeposit;
        
        balanceAmount.innerText = totalBalance;
        // console.log(depositAmount, totalBalance)
       
        console.log(depositAmount.innerText)

        depositFieldValue.value = "";


})
 withdrawBtn.addEventListener('click', function(){
        const withdrawFieldValue = withdrawField.value;
        const withdrawConvertAmount = parseFloat(withdrawFieldValue)
        const previousWithdraw = withdrawAmount.innerText;
        const previousWithdrawConvert = parseFloat(previousWithdraw);
        const previousDeposit = depositAmount.innerText;
        const previousDepositConvert = parseFloat(previousDeposit);
        const previousBalance = balanceAmount.innerText;
        const previousBalanceConvert = parseFloat(previousBalance)
        const totalWithdraw = previousWithdrawConvert- withdrawConvertAmount ;
        const totalBalance = previousBalanceConvert - withdrawConvertAmount ;
        const totalDeposit = previousDepositConvert - withdrawConvertAmount ;
        withdrawAmount.innerText = totalWithdraw;
        depositAmount.innerText = totalDeposit;
        
        balanceAmount.innerText = totalBalance;
        // console.log(depositAmount, totalBalance)
       
        console.log(withdrawAmount.innerText)

        withdrawFieldValue.value = "";
 })
