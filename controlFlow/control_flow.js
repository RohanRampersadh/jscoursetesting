//Step 2 - 1
let userRole = "admin";
let accessLevel;

//Step 2 - 2
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

//Step 3 - 1
let isLoggedIn = "true";
let userMessage;

//Step 3 - 2
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system."
}

console.log("User Message:", userMessage);

//Step 4-1
let userType = "subscriber";
let userCategory;

//Step 4-2
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

//Step 5-1
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

//Practice Task
let DietaryUser = "employee";
let DietaryAccessLevel;

switch (userType) {
    case "employee":
        DietaryAccessLevel = "Full Access to Dietary Services";
        break;
    case "member":
        DietaryAccessLevel = "Access to Dietary Services and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        DietaryAccessLevel = "Partial Access to Dietary Services";
        break;
    default:
        userCategory = "Please enroll or subscribe first to proceed further";
}

console.log("Access Level:", accessLevel);

console.log("Dietary Services:", DietaryAccessLevel);


