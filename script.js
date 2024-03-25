// script.js
function calculateAnnuity() {
   const loanAmount = parseFloat(document.getElementById('loanAmount').value);
   const interestRate = parseFloat(document.getElementById('interestRate').value);
   const loanTerm = parseInt(document.getElementById('loanTerm').value);

   const monthlyInterestRate = interestRate / (12 * 100);
   const numberOfPayments = loanTerm * 12;

   const annuityPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

   document.getElementById('result').innerText = `Ежемесячный платеж (аннуитетный): ${annuityPayment.toFixed(2)} ${'руб'}`;
}

function calculateDifferentiated() {
   const loanAmount = parseFloat(document.getElementById('loanAmount').value);
   const interestRate = parseFloat(document.getElementById('interestRate').value);
   const loanTerm = parseInt(document.getElementById('loanTerm').value);

   const monthlyInterestRate = interestRate / (12 * 100);
   const numberOfPayments = loanTerm * 12;

   let totalPayment = 0;
   let result = 'Дифференцированный график платежей:\n';

   for (let i = 1; i <= numberOfPayments; i++) {
      const differentiatedPayment = loanAmount / numberOfPayments + loanAmount * monthlyInterestRate * (1 - (i - 1) / numberOfPayments);
      totalPayment += differentiatedPayment;
      result += `Месяц ${i}: ${differentiatedPayment.toFixed(2)} ${'руб'}\n`;
   }

   result += `Общая сумма выплат: ${totalPayment.toFixed(2)} ${'руб'}`;

   document.getElementById('result').innerText = result;
}
