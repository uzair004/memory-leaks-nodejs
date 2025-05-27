let leakyArray = [];

setInterval(() => {
    leakyArray.push(new Array(1000000).fill('leak'));
    console.log(`Array length: ${leakyArray.length}`);
}, 1000);