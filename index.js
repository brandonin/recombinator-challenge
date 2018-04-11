#!/usr/bin/env node
'use strict';

const program = require('commander');
// This script will transform and output a two demensional array into a valid JSON object.
const helper = require('./helper');

program
    .version('0.0.1')
    .description('recombinates the given array')
    .action((req) => {
        const jsonInput = JSON.parse(req);
        helper.inputIsCorrectFormat(jsonInput);

        if (helper.isTypeArray(jsonInput[0])) console.log(JSON.stringify(helper.enumArray(jsonInput)));
        if (helper.isTypeObject(jsonInput[0])) console.log(JSON.stringify(helper.enumObject(jsonInput)));

    })

program.parse(process.argv);
