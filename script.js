// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Get the current visit count from localStorage
    let visitCount = localStorage.getItem("visitCount");

    // If no count exists, initialize to 1, otherwise increment
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    // Store the updated count
    localStorage.setItem("visitCount", visitCount);

    // Display the visit count
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("visit-count").innerText = `You have visited this page ${visitCount} times.`;
    });
} else {
    console.warn("Local Storage is not supported in this browser.");
}
