// --------------- Declare an array ------------------

const  fruits = ['mango', 'lichu', 'kathal', 'peyara', 'ata'];

console.log(fruits[3]);

fruits[2] = 'jambura';
console.log(fruits);








// ----------------- Add or remove elements ------------------------

const touristDestinations = ['coxs bajar','sylhet','rongpur'];

// Add a new tourist destination to your tourist array

touristDestinations.push('bogra');
console.log(touristDestinations);

// Add two more to your array

touristDestinations.push('nator','pabna');
console.log(touristDestinations);

// Remove the last tourist destination you have added

touristDestinations.pop();
console.log(touristDestinations);









// ------------------  Checking Array Membership with ‘includes’ -------------

const books = ['bangla','english','islam','physics','biology'];

books.includes('javascript book');

if (books.includes('javascript book')){
    console.log("element present")
}
else{
    console.log("element is not there")
}






// ------------- Checking if it's an Array --------------

const numbers = [1,2,3,4,5,6,7];
const book = ['bangla','english','islam','physics','biology'];
const name = 'sadia parvin emi';

console.log(Array.isArray(numbers));
console.log(Array.isArray(book));
console.log(Array.isArray(name));




// -------------- Combining Arrays -------------

const colors = ['black','pink','yellow','red'];
const makeups = ['lip liner','lipstick','lip gloss','shadow'];

const concats = colors.concat(makeups);

console.log(colors);
console.log(makeups);
console.log(concats);


