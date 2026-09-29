// Function to show welcome message
function showWelcomeMessage() {
    alert("WELCOME!\n\nWelcome to the Student Result System. Use this webpage to check your academic result based on your score.");
}

// Function to evaluate score
function evaluateScore(score){

    // Score validation using if and else-if
    if (score === "") { // If score is empty
        alert("[MISSING INPUT]: Score cannot be empty.");
        return;
    }
    else if(isNaN(score)){ // If score is not a number
        alert("[INVALID INPUT]: Score can only be a number.");
        return;
    } 
    else if(score < 0){ // If score is negative value
        alert("[INVALID INPUT]: Score cannot be negative value.");
        return;
    }
    else if(score > 100){ // If score is beyond 100
        alert("[INVALID INPUT]: Score cannot exceed to 100.");
        return;
    }
}

// Function to start check; It uses prompt() and confirm()
function startCheck(){

    // Getting name using prompt()
    let name = prompt("Please enter your full name: ");

    // Name validation using if and else-if
    if(name === null){ // If user clicked Cancel
        alert("[SYSTEM]: Operation cancelled by the user.");
        return;
    }
    else if (!name || name.trim() === "") { // If name is empty
        alert("[MISSING INPUT]: Name cannot be empty.");
        return;
    }

    // Getting score using prompt()
    let score = prompt("Please enter your score (1 - 100): ");

    if(score === null){ // If user clicked Cancel
        alert("[SYSTEM]: Operation cancelled by the user.");
        return null;
    }
    
    // Using function to evaluate score
    evaluateScore(score);

    // Asking user to proceed using confirm()
    if(confirm("Do you want to proceed with evaluating your score?")){

        // Showing result base on user inputs
        document.getElementById("name").innerText = "Name: " + name;
        document.getElementById("score").innerText = "Score: " + score;

        // Score remarks if, else if, and else.
        if(score > 90){ // Excellent
            document.getElementById("remark").innerText = "⁜ EXCELLENT ⁜";
        }
        else if(score > 75){ // Passed
            document.getElementById("remark").innerText = "✓ PASSED ✓";
        }
        else{ // Failed
            document.getElementById("remark").innerText = "✕ FAILED ✕";
        }
    }
    else{ // If user clicked Cancel
        alert("Operation cancelled by the user.");
        return;
    }
}

// Show welcome message automatically
showWelcomeMessage();
