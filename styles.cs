body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 40px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
}

form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
}

input[type="text"],
textarea,
input[type="number"],
input[type="date"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
textarea:focus,
input[type="number"]:focus,
input[type="date"]:focus {
  outline: none;
  border-color: #2c3e50;
}

.btn {
  background-color: #2c3e50;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #1a252f;
}

#expenseList {
  margin-top: 30px;
}

.expense-item {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease;
}

.expense-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.expense-details {
  flex-grow: 1;
}

.expense-details h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 20px;
}

.expense-details p {
  margin-bottom: 5px;
  color: #555;
}

.expense-amount {
  font-size: 20px;
  font-weight: bold;
  color: #c0392b;
}

@media (max-width: 480px) {
  .expense-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .expense-amount {
    margin-top: 10px;
  }
}