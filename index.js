
function getInputValue(id){
    const value =parseFloat (document.getElementById(id).value);
    return value;
}

function showError(id){
    document.getElementById(id).classList.remove(hidden);
};


function formatCurrency(amount){
    return `${amout.toFixed(2)}`;
}

let count = 1;

//getting all the value
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click",function(){
    // const income = document.getElementById("income").value;

    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    // console.log({income,software,courses,internet});
    // console.table({income,software,courses,internet});


    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if(totalExpenses > income){
        // document.getElementById("logic-error").classList.remove("hidden");
        showError("income-error");
    }

    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    // console.log({totalExpenses,balance});


    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);


    const result = document.getElementById("results");
    result.classList.remove("hidden");
});

//add event listener for saving button
const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener("click",function(){
    // console.log("test");
    const savingPercentace = parseFloat (document.getElementById("savings").value);
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);

    const internet = parseFloat(document.getElementById("internet").value);
    if(income <=0 || isNaN(income)){
        document.getElementById("income-error").classList. this.remove(hidden);
        return;
    }

    // console.log(savingPercentace);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;


    const savingAmout = (savingPercentace * balance)/100;
    // console.log(savingAmout);

    const remainingBalance = balance-savingAmout;

    const savingEelement = document.getElementById("savings-amount");
    savingEelement.innerText = savingAmout.toFixed(2);

    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = remainingBalance.toFixed(2);
});


//history tab functionality.......

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener("click",function(){
    historyTab.classList.add("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");

    historyTab.classList.remove("text-gray-600");
    assistantTab.classList.remove(
    "text-white","bg-gradient-to-r","from-blue-500","to-purple-600"
    );

    assistantTab.classList.add("text-gray-600");


    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

    
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-1-2 border-indigo-500";

    historyItem.innerHTML = `
        <p>serial: ${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income:$${income.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Expenses:$${totalExpenses.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Balance:$${balance.toFixed(2)}</p>
      
        
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});


    assistantTab.addEventListener(click,function(){

        assistantTab.classList.add(
            'text-white','bg-gradient-to-r','form-blue-500', 'to-purple-600'
        );



        historyTab.classList.remove(
            'text-white','bg-gradient-to-r','form-blue-500', 'to-purple-600'
        );

        document.getElementById("expense-form").classList.remove("hidden");
        document.getElementById("history-section").classList.add("hidden");
    });


    //live validation for input.........

    document.getElementById('income').addEventListener("input",function(){
        const inputValue = parseFloat(document.getElementById("income").value);


        if(isNaN(inputValue) || inputValue <= 0){
            document.getElementById("income-error").classList.remove("hidden");
            return;
        }
    });