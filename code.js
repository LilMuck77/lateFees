function calculateLateFee()
{
    //number of books
    var numberOfBooks = prompt("How many books are you returning?");
    //parse number
    numberOfBooks = parseFloat(numberOfBooks);

    //number of dvds
    var numberOfDvDs = prompt("How many DvDs are you returning?");
    //parse number
    numberOfDvDs = parseFloat(numberOfDvDs);

    //number of days late
    var daysLate = prompt("How many days late are they?");
    //parse number
    daysLate = parseFloat(daysLate);


    //multiply books by cost by days late
    var costOfBooks = numberOfBooks * 0.25 * daysLate;

    //multiply dvds by cost by days late
    var costOfDvDs = numberOfDvDs * 0.50 * daysLate;

    var totalCost = costOfBooks + costOfDvDs;

    //make into fixed number
    //display number of days late
    alert(`You returned your books and/or DvDs ${daysLate.toFixed()} days late.`);
    alert(`The late fee per day for books is $0.25. 
    Your cost for the late fee(s) for books is $${costOfBooks.toFixed()}.`);
    alert(`The late fee per day for DvDs is $0.50. 
    Your cost for the late fee(s) for DvDs is $${costOfDvDs.toFixed()}.`);

    //display total cost
    alert(`The total cost for your late fee(s) is $${totalCost}. Thank you for your returns.`);











}