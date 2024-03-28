// List of current usernames
let current_users:string[] = ['ali','abdullah','asim','asif','ahmed'];

// List of new usernames to check
let new_users:string[] = ['ali','abdullah','adnan','mursaleen','abbas'];

// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower:string[] = current_users.map(current_users => current_users.toLowerCase());

// Loop through new_users to check availability

for (const new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}


