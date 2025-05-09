// this function creates an ASCII Art pencil that changes appearance based on the school year month
// the pencil gets shorter as the school year progresses, I think to simulate the pencil being used up over time ;)
function drawMyPen(month) {

    // declaration of an object that defines a number of floors for each month
    const pencilCalendar = {
        'september': 10,
        'october': 9,
        'november': 8,
        'december': 7,
        'january': 6,
        'february': 5,
        'march': 4,
        'april': 3,
        'may': 2,
        'june': 1
    }

    // if the month chosen is not in the school year (i.e. July and August), return an error message instead of trying to draw the pencil
    // using hasOwnProperty that checks if the month is a valid key in the object
    if (!pencilCalendar.hasOwnProperty(month)) {
        return "You've chosen a month that is not in the school year. Please choose a month between September and June.";
    }

    // declaration of a variable that gets the number of floors for the specified month from the calendar
    const numberOfFloors = pencilCalendar[month];

    // declaration of an array of months where the pencil should have an eraser of 2 floors
    const monthsWithTwoEraserFloors = ['september', 'october', 'november', 'december', 'january', 'february'];

    // the following lines check if our input month is in the array of months that should have 2 eraser floors
    let numberOfEraserFloors;
    if (monthsWithTwoEraserFloors.includes(month)) {
        // if the month is in our array (september through february) --> 2 floors
        numberOfEraserFloors = 2;
    } else {
        // otherwise (march to june) --> 1 floor
        numberOfEraserFloors = 1;
    }

    // declaration of an array to store each line of the pencil in ASCII art
    let pencil = [];

    // adding the pencil tip whith push method
    pencil.push(" /\\");
    pencil.push("/__\\");

    // adding the pencil floors using a loop
    for (let i = 0; i < numberOfFloors; i++) {
        // each iteration adds one floor of the pencil body with push method
        pencil.push("||||");
    }

    // adding the transition between body floors and eraser floors with push method
    pencil.push("|__|");

    // adding the eraser floor(s)
    if (numberOfEraserFloors === 2) {
        // for months before March --> 2 floors are drawn with push method
        pencil.push("|  |");
        pencil.push("|__|");
    } else {
        // for march onwards --> only 1 floor is drawn with push method
        pencil.push("|__|");
    }

    // joining all the array elements into a single string with the join() method
    // "\n" argument specifies that each element should be separated by a line
    return pencil.join("\n");
}


// console log of all months

console.log("September pencil:");
console.log(drawMyPen('september'));
console.log("\n");

console.log("October pencil:");
console.log(drawMyPen('october'));
console.log("\n");

console.log("November pencil:");
console.log(drawMyPen('november'));
console.log("\n");

console.log("December pencil:");
console.log(drawMyPen('december'));
console.log("\n");

console.log("January pencil:");
console.log(drawMyPen('january'));
console.log("\n");

console.log("February pencil:");
console.log(drawMyPen('february'));
console.log("\n");

console.log("March pencil:");
console.log(drawMyPen('march'));
console.log("\n");

console.log("April pencil:");
console.log(drawMyPen('april'));
console.log("\n");

console.log("May pencil:");
console.log(drawMyPen('may'));
console.log("\n");

console.log("June pencil:");
console.log(drawMyPen('june'));
console.log("\n");

// console log for months that are not in the school year, it should return error message

console.log("July pencil:");
console.log(drawMyPen('july'));
console.log("\n");

console.log("August pencil:");
console.log(drawMyPen('august'));
console.log("\n");
