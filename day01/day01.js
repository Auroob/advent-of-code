import { readFileSync } from 'fs';

// Read the input.txt file
const input = readFileSync('./input.txt', 'utf-8');

// Parse the input into two arrays
const lines = input.split('\n').filter(line => line.trim() !== '');
const leftArray = [];
const rightArray = [];

lines.forEach(line => {
    const [left, right] = line.split(' ').map(Number);
    leftArray.push(left);
    rightArray.push(right);
});

//Calculate the total distance between two lists

const sortedLeftArray = leftArray.sort((a, b) => a - b);

const sortedRightArray = rightArray.sort((a, b) => a - b);  

const differences = [];
let totalDistance = 0;

for (let i = 0; i < sortedLeftArray.length; i++) {
    const difference = Math.abs(sortedLeftArray[i] - sortedRightArray[i]);
    differences.push(difference);
}
for (let i = 0; i < differences.length; i++) {
    totalDistance += differences[i];
}

console.log("Total Distance: ", totalDistance);