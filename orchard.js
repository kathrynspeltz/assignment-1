///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
//15
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
//26
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]
//22

const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// I started with the variable equaling zero, and then used a for loop for each variety of apples. Each loop added the acres per day to totalAcres, and then after all 3 for loops have run and added acres, the total number is printed.

let totalAcres = 0


for (let i = 0; i <= fujiAcres.length - 1; i++) {
    totalAcres += fujiAcres[i]
}

for (let i = 0; i <= galaAcres.length - 1; i++) {
    totalAcres += galaAcres[i]
}

for (let i = 0; i <= pinkAcres.length - 1; i++) {
    totalAcres += pinkAcres[i]
}

console.log("Total acres picked this week: " + totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//I divided the previous total by days in the week (7) and set the new variable to that value, and then printed the value of the new variable

let averageDailyAcres = totalAcres / 7

console.log("Average acres per day: " + averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/


let acresLeft = 174
let days = 0

// CODE HERE
//I created a while loop that checks if the value of acresLeft is over 0, while that is true, the days variable is incremented by one and the acresLeft variable decreases by the average acres remaining. 
//I added a print line to the code to watch how the values of the variables changed throughout the while loop.

while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
    console.log("Days completed: " + days + "  Acres left: " + acresLeft)
}

console.log("Total days left:" + days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples
    picked, in tons, for each variety.

    Each acre yields 6.5 tons of apples.

    Use the variables below to store
    your new arrays. Make sure that you
    don't modify the original arrays
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method
    to make copies of the arrays and
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new
    values to the new arrays.
*/

// CODE HERE

//First I used the slice method to create a copy of each acres array to use for tons, then I applied a map function to each of the new arrays to multiply each value within the array by 6.5. Finally I printed each of the new arrays.

let fujiTons = fujiAcres.slice(0, 7);
fujiTons = fujiTons.map(x => x * 6.5);
console.log("Tons of Fuji: " + fujiTons);

let galaTons = galaAcres.slice(0, 7);
galaTons = galaTons.map(x => x * 6.5);
console.log("Tons of Gala: " + galaTons);


let pinkTons = pinkAcres.slice(0, 7);
pinkTons = pinkTons.map(x => x * 6.5);
console.log("Tons of Pink: " + pinkTons);




// PROBLEM 5

/*
    Next, calculate the total number of
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number
    into pounds -- store that number in
    the variables given below.

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// I created a new varible per apple to track the value of pounds. I used a for loop to loop over each tons array to add each value to the pounds total, finally, I multiplied the pounds total by 2000 to convert the value from tons to pounds. Finally the values of pounds were printed.

let fujiPounds = 0;

for (let i = 0; i <= fujiTons.length - 1; i++) {
    fujiPounds += (fujiTons[i])
}
fujiPounds = fujiPounds * 2000;
console.log("Total pounds of Fuji: " + fujiPounds);

let galaPounds = 0;

for (let i = 0; i <= galaTons.length - 1; i++) {
    galaPounds += (galaTons[i])
}
galaPounds = galaPounds * 2000;
console.log("Total pounds of Gala: " + galaPounds);

let pinkPounds = 0;

for (let i = 0; i <= pinkTons.length - 1; i++) {
    pinkPounds += (pinkTons[i])
}
pinkPounds = pinkPounds * 2000;
console.log("Total pounds of Pink: " + pinkPounds);




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given
    at the beginning of this file to
    figure out how much you'll make
    from selling each type of apple.

    The prices are per pound and are
    written in cents.

    Log each of the profits to the
    console.
*/

// CODE HERE

// const fujiPrice = .89
// const galaPrice = .64
// const pinkPrice = .55

//I multiplied the pound variable by the price variable to find out the profit(new variable) for each apple type.

let fujiProfit = fujiPrice * fujiPounds;
console.log("Total Fuji profit: $" + fujiProfit);
let galaProfit = galaPrice * galaPounds;
console.log("Total Gala profit: $" + galaProfit);
let pinkProfit = pinkPrice * pinkPounds;
console.log("Total Pink profit: $" + pinkProfit)






// PROBLEM 7

/*
    Add up all your profits and save
    the number to a variable called
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//I added all three profit variables together to create a new varible for the total profit created. 

let totalProfit = fujiProfit + galaProfit + galaProfit

console.log("Total profit: $" + totalProfit)