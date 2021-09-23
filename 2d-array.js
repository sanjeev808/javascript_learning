const rows = 2;
const columns = 2;

const myArray1 = [];

for (let i = 0; i < rows; i++) {
  myArray1[i] = [];
  for (let j = 0; j < columns; j++) {
    myArray1[i][j] =document.write( prompt("enter the values"));
  }
}
console.log(myArray1);
