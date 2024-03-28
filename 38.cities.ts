
function describe_city(city:string,country:string = "default country") {
    console.log(`${city} is in ${country}`)
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York");
