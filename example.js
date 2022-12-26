
const table = new (require("./index.js")).base();
const input = [
    ["testcolumA", "testcolumB", "testcolumC"], 
    ["A0", "B0", "C0"], 
    ["A1", "B1", "C1"], 
    ["A2", "B2", "C2"]
];
console.log(table.render(input));
