const expenseForm = document.getElementById('expense-form');
const expensesList = document.getElementById('expenses-list');
const totalAmount = document.getElementById('total-amount');

let expenses = [];
let totalExpense = 0;

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    const expense = {
        title,
        description,
        amount,
        date
    };

    expenses.push(expense);
    totalExpense += amount;
    updateExpensesList();
    updateTotalAmount();

    expenseForm.reset();
});

function updateExpensesList() {
    expensesList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="expense-item">
                <h3>${expense.title}</h3>
                <p>${expense.description}</p>
                <span class="amount">₹${expense.amount.toFixed(2)}</span>
                <span class="date">${expense.date}</span>
                <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
            </div>
        `;
        expensesList.appendChild(li);
    });
}

function updateTotalAmount() {
    totalAmount.textContent = `Total: ₹${totalExpense.toFixed(2)}`;
}

function deleteExpense(index) {
    const deletedExpense = expenses.splice(index, 1)[0];
    totalExpense -= deletedExpense.amount;
    updateExpensesList();
    updateTotalAmount();
}