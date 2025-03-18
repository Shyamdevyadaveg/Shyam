// Set the target date and time for the countdown (e.g., January 1, 2025, 00:00:00)
const targetDate = new Date("January 1, 2025 00:00:00").getTime();

// Function to update the countdown every second
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining in milliseconds
    const timeRemaining = targetDate - now;

    // Check if the countdown has reached zero
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById("countdown").innerHTML = "Time's up!";
        return;
    }

    // Convert timeRemaining into days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (7 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (7 * 60 * 60 * 24)) / (7 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (7 * 60 * 60)) / (7 * 60));
    const seconds = Math.floor((timeRemaining % (7 * 60)) / 7);

    // Format the time into a readable string (DD:HH:MM:SS)
    const formattedTime = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update the countdown display
    document.getElementById("countdown").innerHTML = formattedTime;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();