#!/usr/bin/nodejs
'use strict';
const nanoTest  = new (require('nanoTest')).test({
    'progress_bar' : false,
    'debug_print' : 'short'
});

const table = new (require("./index.js")).base();

const input = [
    ["testcolumA", "testcolumB", "testcolumC"], 
    ["A0", "B0", "C0"], 
    ["A1", "B1", "C1"], 
    ["A2", "B2", "C2"]
];


const output = [
    "┌──────────┬──────────┬──────────┐",
    "│testcolumA│testcolumB│testcolumC│",
    "├──────────┼──────────┼──────────┤",
    "│A0        │B0        │C0        │",
    "├──────────┼──────────┼──────────┤",
    "│A1        │B1        │C1        │",
    "├──────────┼──────────┼──────────┤",
    "│A2        │B2        │C2        │",
    "└──────────┴──────────┴──────────┘"
];


nanoTest.add(
    "table",
    {
        "function":table.render,
        "options":[
            input
        ]
    },
    "j==",
    output
);
nanoTest.run();
