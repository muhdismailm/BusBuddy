// Sample Bus Route Data with Updated Timings
const busRoutes = {
    "Kozhikode_Nadakkav": [
        { name: "Bus 101", departure: "08:00 AM", arrival: "08:10 AM" }, // Updated timings for direct route
        { name: "Bus 102", departure: "10:15 AM", arrival: "10:25 AM" },
    ],
    "Nadakkav_West hill": [
        { name: "Bus 101", departure: "08:15 AM", arrival: "08:25 AM" }, // Updated timings for direct route
        { name: "Bus 502", departure: "12:00 PM", arrival: "12:10 PM" },
    ],
    "West hill_Pavangad": [
        { name: "Bus 101", departure: "08:30 AM", arrival: "08:40 AM" }, // Updated timings for direct route
        { name: "Bus 802", departure: "04:10 PM", arrival: "04:30 PM" },
    ],
    "Pavangad_Quilandi": [
        { name: "Bus 101", departure: "08:45 AM", arrival: "09:00 AM" }, // Updated timings for direct route
        { name: "Bus 1002", departure: "05:45 PM", arrival: "06:05 PM" },
    ],
    "Kozhikode_Quilandi": [
        { name: "Bus 101", departure: "08:00 AM", arrival: "09:00 AM" }, // Total time for Kozhikode to Quilandi via stops
        { name: "Bus 401", departure: "06:45 AM", arrival: "07:30 AM" },
        { name: "Bus 402", departure: "05:00 PM", arrival: "05:45 PM" },
    ],
    "Nadakkav_Pavangad": [
        { name: "Bus 601", departure: "07:15 AM", arrival: "07:30 AM" },
        { name: "Bus 602", departure: "01:30 PM", arrival: "01:45 PM" },
    ],
    "Nadakkav_Quilandi": [
        { name: "Bus 701", departure: "08:30 AM", arrival: "09:15 AM" },
        { name: "Bus 702", departure: "03:15 PM", arrival: "04:00 PM" },
    ],
    "West hill_Quilandi": [
        { name: "Bus 901", departure: "06:30 AM", arrival: "07:15 AM" },
        { name: "Bus 902", departure: "06:30 PM", arrival: "07:15 PM" },
    ],
    "Nadakkav_Kozhikode": [
        { name: "Bus 101", departure: "08:00 AM", arrival: "08:10 AM" }, // Updated timings for direct route
        { name: "Bus 102", departure: "10:15 AM", arrival: "10:25 AM" },
    ],
    "West hill_Nadakkav": [
        { name: "Bus 101", departure: "08:15 AM", arrival: "08:25 AM" }, // Updated timings for direct route
        { name: "Bus 502", departure: "12:00 PM", arrival: "12:10 PM" },
    ],
    "Pavangad_West Hill": [
        { name: "Bus 101", departure: "08:30 AM", arrival: "08:40 AM" }, // Updated timings for direct route
        { name: "Bus 802", departure: "04:10 PM", arrival: "04:30 PM" },
    ],
    "Quilandi_Pavangad": [
        { name: "Bus 101", departure: "08:45 AM", arrival: "09:00 AM" }, // Updated timings for direct route
        { name: "Bus 1002", departure: "05:45 PM", arrival: "06:05 PM" },
    ],
    "Quilandi_Kozhikode": [
        { name: "Bus 101", departure: "08:00 AM", arrival: "09:00 AM" }, // Total time for Kozhikode to Quilandi via stops
        { name: "Bus 401", departure: "06:45 AM", arrival: "07:30 AM" },
        { name: "Bus 402", departure: "05:00 PM", arrival: "05:45 PM" },
    ],
    "Pavangad_Nadakkav": [
        { name: "Bus 601", departure: "07:15 AM", arrival: "07:30 AM" },
        { name: "Bus 602", departure: "01:30 PM", arrival: "01:45 PM" },
    ],
    "Quilandi_Nadakkav": [
        { name: "Bus 701", departure: "08:30 AM", arrival: "09:15 AM" },
        { name: "Bus 702", departure: "03:15 PM", arrival: "04:00 PM" },
    ],
    "Quilandi_West hill": [
        { name: "Bus 901", departure: "06:30 AM", arrival: "07:15 AM" },
        { name: "Bus 902", departure: "06:30 PM", arrival: "07:15 PM" },
    ]
};

// Search History Array
const searchHistory = [];

// Form Submission Handler
document.getElementById('route-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    // Check if the start and end destinations are the same
    if (start === end) {
        alert("Please select different start and end locations.");
        return;
    }

    const routeKey = `${start}_${end}`;
    const routeInfo = busRoutes[routeKey];

    const routeInfoElement = document.getElementById('route-info');
    const busScheduleTable = document.getElementById('bus-schedule');
    const busDetailsElement = document.getElementById('bus-details');
    
    // Clear previous results
    busDetailsElement.innerHTML = '';

    if (routeInfo) {
        routeInfoElement.textContent = `Available buses from ${start} to ${end}:`;
        
        // Show each bus in the table
        routeInfo.forEach(bus => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bus.name}</td>
                <td>${bus.departure}</td>
                <td>${bus.arrival}</td>
            `;
            busDetailsElement.appendChild(row);
        });
        
        busScheduleTable.style.display = 'table';

        // Add to search history
        searchHistory.push(`${start} to ${end}`);
        updateSearchHistory();
    } else {
        routeInfoElement.textContent = 'No available buses for the selected route.';
        busScheduleTable.style.display = 'none';
    }
});

// Update Recent Search History
function updateSearchHistory() {
    const historyElement = document.getElementById('search-history');
    historyElement.innerHTML = '';
    searchHistory.slice(-5).forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        historyElement.appendChild(listItem);
    });


}


// Simulated Weather Notification
const weatherAlert = document.getElementById('weather-alert');
setTimeout(() => {
    weatherAlert.textContent = "Weather is clear for travel.";
}, 2000);
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}
document.getElementById('route-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the bus and trigger animation
    const busContainer = document.getElementById('bus-container');
    const bus = document.getElementById('bus');
    
    busContainer.style.display = 'block'; // Show bus container
    bus.style.animation = 'none'; // Reset animation
    bus.offsetHeight; // Trigger reflow to restart the animation
    bus.style.animation = 'moveBus 5s forwards'; // Start the animation

    // Additional code to fetch and display route information...
});
