// ESC[12;45f
const regex1 = /ESC\[\d+;\d+f/;
console.log(`regex matches ESC[12;45f ${regex1.test("ESC[12;45f")}`);
// ESC[1m
const regex2 = /ESC\[1m/;
console.log(`regex matches ESC\[1m ${regex2.test("ESC\[1m")}`);