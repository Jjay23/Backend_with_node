
// clearInterval
// setInterval
// setTimeout
// arrow function

// const greet = (name) => {
  //  console.log(`hello, ${name}`);
//};


//greet('jay');
//greet('joseph');

//globalThis.setTimeout(() => {
  //  console.log('This is inside the timeout');
    
//
//);
globalThis.setTimeout(() => {
    console.log('This is inside the timeout');
    // Removed the problematic clearInterval line
}, 3000);

console.log(`I'm going to be printed first`);

const intervalId = setInterval(() => {
    console.log(`I'll be printed every 2 seconds`)
}, 2000);

// If you want to stop the interval after some time:
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped');
}, 10000);  // This will stop the interval after 10 seconds