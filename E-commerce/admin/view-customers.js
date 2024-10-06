// view-customers.js

// Sample data array
const customers = [
    { id: 1, name: "Jane Smith", email: "jane@example.com" },
    { id: 2, name: "John Doe", email: "john@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" }
];

// Function to populate the customers table
function populateCustomersTable() {
    const customersTableBody = document.querySelector('#customersTable tbody');
    customersTableBody.innerHTML = ''; // Clear existing rows

    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
        `;
        customersTableBody.appendChild(row);
    });
}

// Call the function to populate the table on page load
window.onload = function() {
    populateCustomersTable();
};

// Function to add a new customer (for demonstration purposes)
function addCustomer(name, email) {
    const newCustomer = {
        id: customers.length + 1, // Increment ID
        name: name,
        email: email
    };
    customers.push(newCustomer);
    populateCustomersTable();
}

// Example usage: Uncomment the next line to add a new customer
// addCustomer("New Customer", "newcustomer@example.com");
