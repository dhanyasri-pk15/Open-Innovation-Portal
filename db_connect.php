<?php
// Database connection parameters
$servername = "localhost"; // XAMPP runs on localhost
$username = "root";        // Default MySQL username in XAMPP
$password = "";            // Default password is empty in XAMPP
$dbname = "my_database";   // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Database connected successfully!";
}
?>
