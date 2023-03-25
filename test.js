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
const output_notitleseparator = [
    "┌──────────┬──────────┬──────────┐",
    "│testcolumA│testcolumB│testcolumC│",
    "│A0        │B0        │C0        │",
    "├──────────┼──────────┼──────────┤",
    "│A1        │B1        │C1        │",
    "├──────────┼──────────┼──────────┤",
    "│A2        │B2        │C2        │",
    "└──────────┴──────────┴──────────┘"
];
const output_notitle = [
    "┌──────────┬──────────┬──────────┐",
    "│A0        │B0        │C0        │",
    "├──────────┼──────────┼──────────┤",
    "│A1        │B1        │C1        │",
    "├──────────┼──────────┼──────────┤",
    "│A2        │B2        │C2        │",
    "└──────────┴──────────┴──────────┘"
];
const output_noutf = [
    "+----------+----------+----------+",
    "|testcolumA|testcolumB|testcolumC|",
    "+----------+----------+----------+",
    "|A0        |B0        |C0        |",
    "+----------+----------+----------+",
    "|A1        |B1        |C1        |",
    "+----------+----------+----------+",
    "|A2        |B2        |C2        |",
    "+----------+----------+----------+"
];
const output_noborder = [
    "testcolumA│testcolumB│testcolumC",
    "──────────┼──────────┼──────────",
    "A0        │B0        │C0        ",
    "──────────┼──────────┼──────────",
    "A1        │B1        │C1        ",
    "──────────┼──────────┼──────────",
    "A2        │B2        │C2        "
];
const output_noborder_nolineseparator = [
    "testcolumA│testcolumB│testcolumC",
    "──────────┼──────────┼──────────",
    "A0        │B0        │C0        ",
    "A1        │B1        │C1        ",
    "A2        │B2        │C2        "
];

const output_nolineseparator = [
    "┌──────────┬──────────┬──────────┐",
    "│testcolumA│testcolumB│testcolumC│",
    "├──────────┼──────────┼──────────┤",
    "│A0        │B0        │C0        │",
    "│A1        │B1        │C1        │",
    "│A2        │B2        │C2        │",
    "└──────────┴──────────┴──────────┘"
];
const output_nocolumnseparator = [
    "┌──────────────────────────────┐",
    "│testcolumAtestcolumBtestcolumC│",
    "├──────────────────────────────┤",
    "│A0        B0        C0        │",
    "├──────────────────────────────┤",
    "│A1        B1        C1        │",
    "├──────────────────────────────┤",
    "│A2        B2        C2        │",
    "└──────────────────────────────┘"
];
const output_noborder_nocolumnseparator = [
    "testcolumAtestcolumBtestcolumC",
    "──────────────────────────────",
    "A0        B0        C0        ",
    "──────────────────────────────",
    "A1        B1        C1        ",
    "──────────────────────────────",
    "A2        B2        C2        "
];
const output_nolineseparator_nocolumnseparator = [
    "┌──────────────────────────────┐",
    "│testcolumAtestcolumBtestcolumC│",
    "├──────────────────────────────┤",
    "│A0        B0        C0        │",
    "│A1        B1        C1        │",
    "│A2        B2        C2        │",
    "└──────────────────────────────┘"
];

const output_noborder_nolineseparator_nocolumnseparator = [
    "testcolumAtestcolumBtestcolumC",
    "──────────────────────────────",
    "A0        B0        C0        ",
    "A1        B1        C1        ",
    "A2        B2        C2        "
];


nanoTest.add(
    'default table',
    {
        'function':table.render,
        'options':[
            input
        ]
    },
    'j==',
    output
);
nanoTest.run();
