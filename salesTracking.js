// salesTracking.js

// Function to initialize the sales tracking interface
function initSalesTracking() {
    // Initialize dropdowns, date pickers, and other UI elements
    setupDatePicker();
    setupNameDropdown();
    // Additional initialization code...
}

// Function to set up the date picker
function setupDatePicker() {
    const dateInput = document.getElementById('dateInput');
    dateInput.type = 'date'; // Use native HTML5 date input
}

// Function to set up the name dropdown
function setupNameDropdown() {
    const nameDropdown = document.getElementById('nameDropdown');
    const userNames = ['Alice', 'Bob', 'Charlie']; // Example user names
    userNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        nameDropdown.appendChild(option);
    });
}

function calculateTotalSales(salesEntries) {
    return salesEntries.reduce((total, entry) => total + entry.amount, 0);
}

function calculateAverageSales(salesEntries) {
    if (salesEntries.length === 0) return 0;
    const total = calculateTotalSales(salesEntries);
    return total / salesEntries.length;
}

function renderCharts(salesData) {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar', // Change to 'pie' for pie chart
        data: {
            labels: salesData.map(entry => entry.label),
            datasets: [{
                label: 'Sales Data',
                data: salesData.map(entry => entry.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function handleTaskTracking() {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const statusDropdown = document.getElementById('statusDropdown');

    const task = {
        description: taskInput.value,
        status: statusDropdown.value
    };

    const listItem = document.createElement('li');
    listItem.textContent = `${task.description} - Status: ${task.status}`;
    taskList.appendChild(listItem);

    // Clear input fields
    taskInput.value = '';
    statusDropdown.selectedIndex = 0;
}

function applyConditionalFormatting(salesEntries) {
    salesEntries.forEach(entry => {
        const entryElement = document.getElementById(`entry-${entry.id}`);
        if (entry.amount > entry.target) {
            entryElement.classList.add('above-target');
        } else {
            entryElement.classList.add('below-target');
        }
    });
}

// Function to display success messages
function displaySuccessMessage(message) {
    const successMessageElement = document.getElementById('successMessage');
    successMessageElement.textContent = message;
    successMessageElement.style.display = 'block';
}

// Function to display error messages
function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
}


// Call the initialization function on page load
window.onload = initSalesTracking;
