// Sincw we use date and time in js as it allows developers to work with and manipulate time-related data

const now = new Date();

const specificDate = new Date("2024-01-01T00:00:00")

const detailedDate = new Date(2024, 0, 1, 15, 30, 0);


const date = new Date();

const year = date.getFullYear();
const month = data.getMonth();


console.log(`year: ${year}`);
console.log(`month: ${month}`);


const dates = new Date();

// Set specific components
dates.setFullYear(2025);
dates.setMonth(11); // December, as months are 0-indexed
dates.setDate(25);
dates.setHours(12);
dates.setMinutes(30);
dates.setSeconds(45);

console.log(date);