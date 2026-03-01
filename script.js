// Sample data for vehicles, employees, and managers
const vehicles = [
    { id: 1, name: "Yamaha YZF-R1", type: "Motorcycle", model: "2025", price: "$18,999", image: "https://www.yamaha-motor.eu/comage/privateer/colours/2025/yzf-r1/yzf-r1_2025_color_a_eu_myt_001_01.jpg" },
    { id: 2, name: "Yamaha MT-09", type: "Motorcycle", model: "2025", price: "$10,499", image: "https://www.yamaha-motor.eu/comage/privateer/colours/2025/mt-09/mt-09_2025_color_a_eu_myt_001_01.jpg" },
    { id: 3, name: "Yamaha XSR900", type: "Motorcycle", model: "2025", price: "$10,999", image: "https://www.yamaha-motor.eu/comage/privateer/colours/2025/xsr900/xsr900_2025_color_a_eu_myt_001_01.jpg" },
    { id: 4, name: "Yamaha Ténéré 700", type: "Motorcycle", model: "2025", price: "$11,499", image: "https://www.yamaha-motor.eu/comage/privateer/colours/2025/tenere-700/tenere-700_2025_color_a_eu_myt_001_01.jpg" },
    { id: 5, name: "Yamaha Niken", type: "Motorcycle", model: "2025", price: "$16,499", image: "https://www.yamaha-motor.eu/comage/privateer/colours/2025/niken/niken_2025_color_a_eu_myt_001_01.jpg" }
];

const employees = [
    { id: 1, name: "John Doe", position: "Sales Executive", department: "Sales", experience: "5 years" },
    { id: 2, name: "Jane Smith", position: "Service Technician", department: "Service", experience: "3 years" },
    { id: 3, name: "Robert Johnson", position: "Customer Support", department: "Support", experience: "4 years" },
    { id: 4, name: "Emily Davis", position: "Marketing Specialist", department: "Marketing", experience: "2 years" },
    { id: 5, name: "Michael Brown", position: "Inventory Manager", department: "Inventory", experience: "6 years" }
];

const managers = [
    { id: 1, name: "Sarah Williams", position: "Sales Manager", department: "Sales", experience: "10 years" },
    { id: 2, name: "David Miller", position: "Service Manager", department: "Service", experience: "8 years" },
    { id: 3, name: "Lisa Wilson", position: "Operations Manager", department: "Operations", experience: "12 years" },
    { id: 4, name: "James Taylor", position: "Marketing Manager", department: "Marketing", experience: "9 years" },
    { id: 5, name: "Patricia Anderson", position: "General Manager", department: "Management", experience: "15 years" }
];

// Function to create vehicle cards
function createVehicleCards() {
    const vehicleGrid = document.getElementById('vehicleGrid');
    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}" style="width: 100%; border-radius: 5px;">
            <h3>${vehicle.name}</h3>
            <p><strong>Type:</strong> ${vehicle.type}</p>
            <p><strong>Model:</strong> ${vehicle.model}</p>
            <p><strong>Price:</strong> ${vehicle.price}</p>
        `;
        vehicleGrid.appendChild(card);
    });
}

// Function to create employee cards
function createEmployeeCards() {
    const employeeGrid = document.getElementById('employeeGrid');
    employees.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        card.innerHTML = `
            <h3>${employee.name}</h3>
            <p><strong>Position:</strong> ${employee.position}</p>
            <p><strong>Department:</strong> ${employee.department}</p>
            <p><strong>Experience:</strong> ${employee.experience}</p>
        `;
        employeeGrid.appendChild(card);
    });
}

// Function to create manager cards
function createManagerCards() {
    const managerGrid = document.getElementById('managerGrid');
    managers.forEach(manager => {
        const card = document.createElement('div');
        card.className = 'manager-card';
        card.innerHTML = `
            <h3>${manager.name}</h3>
            <p><strong>Position:</strong> ${manager.position}</p>
            <p><strong>Department:</strong> ${manager.department}</p>
            <p><strong>Experience:</strong> ${manager.experience}</p>
        `;
        managerGrid.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createVehicleCards();
    createEmployeeCards();
    createManagerCards();
});