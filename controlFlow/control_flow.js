let userRole = "admin";
let isLoggedIn = "true";
let userType = "subscriber";
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
let DietaryUser = "employee";
let accessLevel;
let userMessage;
let userCategory;
let DietaryAccessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    }   else {
        userMessage = "Welcome, User!";
    }    
} else {
    userMessage = "Please log in to access the system."
}

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
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);
console.log("Dietary Services:", DietaryAccessLevel);


