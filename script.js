// script.js
function calculateAnnuity() {
   const loanAmount = parseFloat(document.getElementById('loanAmount').value);
   const interestRate = parseFloat(document.getElementById('interestRate').value);
   const loanTerm = parseInt(document.getElementById('loanTerm').value);

   const monthlyInterestRate = interestRate / (12 * 100);
   const numberOfPayments = loanTerm * 12;

   const annuityPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

   document.getElementById('result').innerText = `Ежемесячный платеж (аннуитетный): ${annuityPayment.toFixed(2)} ${'руб'}`;
   document.getElementById('result').classList.remove('hidden');
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
   document.getElementById('result').classList.remove('hidden');
}




const annuityButton = document.getElementById('annuityButton');
const differentiatedButton = document.getElementById('differentiatedButton');


function showAnnuityExplanation() {
   explanation = document.querySelector('.explanation');
   explanation.innerHTML = `
    <p><b>Преимущества аннуитетных платежей:</b></p>
    <ul>
      <li>Постоянные платежи, что упрощает планирование бюджета</li>
      <li>Удобство в расчете и понимании</li>
    </ul>
    <p><b>Недостатки аннуитетных платежей:</b></p>
    <ul>
      <li>Большие начальные процентные платежи</li>
      <li>Более высокие общие затраты на проценты</li>
    </ul>
    <p><b>Сравнительный анализ:</b></p>
    <p>Аннуитетные платежи легче в планировании и предсказуемы, но могут быть более дорогими в целом из-за более высоких общих затрат на проценты.</p>
  `;
}


function hideExplanation() {
   const explanation = document.querySelector('.explanation');
   explanation.innerHTML = ' Подсказка: Наведите на кнопку для пояснения';
}

function showdiffExplanation() {
   explanation = document.querySelector('.explanation');
   explanation.innerHTML = `
   <p><b>Преимущества дифференцированных платежей:</b></p>
   <ul>
     <li>Уменьшение общих затрат на проценты с каждым месяцем</li>
     <li>Меньшие общие затраты на проценты по сравнению с аннуитетными платежами</li>
   </ul>
   <p><b>Недостатки дифференцированных платежей:</b></p>
   <ul>
     <li>Переменные платежи, что может затруднить планирование бюджета</li>
     <li>Сложный расчет ежемесячных платежей</li>
   </ul>
   <p><b>Сравнительный анализ:</b></p>
   <p>Дифференцированные платежи могут быть выгоднее в общем объеме затрат на проценты, но требуют более сложного расчета и могут быть менее удобными из-за переменных платежей.</p>
 `;
}



annuityButton.addEventListener('mouseover', () => {
   showAnnuityExplanation();
});









differentiatedButton.addEventListener('mouseover', () => {
   showdiffExplanation();
});



