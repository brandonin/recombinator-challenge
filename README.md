## Instructions
Once cloned, type `npm link` in order to link it to the command line.
After, you can use type `recombinator '[ ["a","b","c"], [1,2,null], [null,3,4], [5,null,6] ]'` in the CLI.

## Context

Please write a small [CLI tool](https://en.wikipedia.org/wiki/Command-line_interface) that works as described below. You may use a language of your choice.

## Input
Your program should expect valid JSON representing a two dimensional matrix. It will be in one of the following two formats:

**A**) **a list of lists**

  The expected format is `[ [variable names], [first row], [second row], ... ]`

    recombinator '[ ["a","b","c"], [1,2,null], [null,3,4], [5,null,6] ]'
**B**) **a list of objects**

  JSON objects are simply unordered collections of key:value pairs.

  Each row is represented by an object containing the variables set for that row.

  Accordingly, this form of input is convenient for sparse data sets.

    recombinator '[ { "a":1, "b":2 }, { "b":3, "c":4 }, { "c":6, "a":5 } ]'

## Output
Your program should transform the input into a single JSON object mapping variable names to lists of values.

For input type (B), any variables that are missing in a row should be [imputed](https://en.wikipedia.org/wiki/Imputation_(statistics)) with null.

The order of the values in each variable's list should be the same as the order of the rows.

    '{ "a": [1,null,5], "b": [2,3,null], "c": [null,4,6] }'
