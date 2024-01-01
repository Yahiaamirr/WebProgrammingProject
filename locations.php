<?php
// Assuming you have a database connection established
$Host = "localhost";
$Username = "root";
$Password = "";
$DB_Name = "project12th";

$con = mysqli_connect($Host, $Username, $Password, $DB_Name)
    or die("Couldn't Connect to DB");

// Fetch locations from the database
$query = "SELECT DISTINCT location FROM courts";
$result = mysqli_query($con, $query);

// Check for errors in the query
if (!$result) {
    die("Database query failed: " . mysqli_error($con));
}

// Build options for the dropdown menu
$options = "";
while ($row = mysqli_fetch_assoc($result)) {
    $options .= "<option value='{$row['location']}'>{$row['location']}</option>";
}

// Check if any options were fetched
if (empty($options)) {
    die("No options fetched from the database.");
}

mysqli_free_result($result);
mysqli_close($con);

echo $options;
?>
