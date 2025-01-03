//global variable
let count = 0;

function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function showError(id){
    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('calculate').addEventListener('click', function () {
    console.log('calculate button clicked');

  
    count = count + 1;

    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);
    // get value from function
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    console.log(income, software, courses, internet)
    console.log({income, software, courses, internet})
    console.table({income, software, courses, internet})



    if(income < 0 || isNaN(income)){
        //document.getElementById('income-error').classList.remove('hidden');
        showError('income-error');
        return;
    }

    if(software < 0 || isNaN(software)){
        //document.getElementById('software-error').classList.remove('hidden');
        showError('software-error');
        return;
    }

    if(courses < 0 || isNaN(courses)){
        //document.getElementById('courses-error').classList.remove('hidden');
        showError('courses-error');
        return;
    }

    if(internet < 0 || isNaN(internet)){
        //document.getElementById('internet-error').classList.remove('hidden');
        showError('internet-error');
        return;
    }
     


    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    console.table({totalExpenses, balance})


    if(totalExpenses > income){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }




    // const totalExpensesElement = document.getElementById('total-expenses');
    // totalExpensesElement.innerText = totalExpenses.toFixed(2);
    // const balanceElement = document.getElementById('balance');
    // balanceElement.innerText = balance.toFixed(2);
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
    
   
    const result = document.getElementById('results')
    result.classList.remove('hidden')



  
    const historyItem = document.createElement('div');
    historyItem.className  = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-blue-500';

    historyItem.innerHTML = `
    <p class="text-sm text-gray-700 font-semibold">Serial: ${count}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById('history-list');

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);


});



// const calculateSavingsButton = document.getElementById('calculate-savings');
// calculateSavingsButton.addEventListener('click', function () {
//     console.log('calculate savings button clicked');
// })
document.getElementById('calculate-savings').addEventListener('click', function(){
    console.log('calculate savings button clicked');

    //todo get saving percentage by user input value
    const savingPercentage = parseFloat(document.getElementById('savings').value);
    console.log(savingPercentage)



    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);
    // get value from function


    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

  
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    console.table({totalExpenses, balance})


    // calculate saving ammount
    const savingAmount = (balance * savingPercentage) / 100;
    console.log(savingAmount)

 
    document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = (balance - savingAmount).toFixed(2);
});



const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');

historyTab.addEventListener('click', function(){
    console.log('history tab clicked');

    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.remove('text-gray-600');

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.add('text-gray-600');




    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('expense-form').classList.add('hidden')



});


assistantTab.addEventListener('click', function(){
    console.log('assistant tab clicked');

    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.remove('text-gray-600');

    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')

});



document.getElementById('income').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('income').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('income-error').classList.remove('hidden');
        return;

    }

});


document.getElementById('software').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('software').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('software-error').classList.remove('hidden');
        return;

    }

});

document.getElementById('courses').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('courses').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('courses-error').classList.remove('hidden');
        return;

    }

});

document.getElementById('internet').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('internet').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('internet-error').classList.remove('hidden');
        return;

    }

});