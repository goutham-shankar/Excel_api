
let functions = [

    { id: 1, name: "SUM", usecase: "Adds all the numbers in a range of cells.", syntax: "=Sum(num1+num2)" },
    { id: 2, name: "AVERAGE", usecase: "Calculates the average of numbers in a range of cells.", syntax: "=AVERAGE(number1, [number2], ...)" },
    { id: 3, name: "IF", usecase: "Performs a logical test and returns one value for TRUE and another for FALSE.", syntax: "=IF(logical_test, value_if_true, value_if_false)" },
    { id: 4, name: "VLOOKUP", usecase: "Searches for a value in the first column of a range and returns a value in the same row from another column.", syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])" },
    { id: 5, name: "HLOOKUP", usecase: "Searches for a value in the first row of a range and returns a value in the same column from another row.", syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])" },
    { id: 6, name: "INDEX", usecase: "Returns the value of a cell at a given row and column number in a specified range.", syntax: "=INDEX(array, row_num, [column_num])" },
    { id: 7, name: "MATCH", usecase: "Returns the relative position of a value in a range.", syntax: "=MATCH(lookup_value, lookup_array, [match_type])" },
    { id: 8, name: "CONCATENATE", usecase: "Joins multiple strings of text into one string (replaced by CONCAT in newer Excel versions).", syntax: "=CONCATENATE(text1, [text2], ...)" },
    { id: 9, name: "CONCAT", usecase: "Joins multiple strings of text into one string (recommended for newer versions).", syntax: "=CONCATENATE(text1, [text2], ...)" },
    { id: 10, name: "LEFT", usecase: "Returns the first characters of a text string based on the specified number of characters.", syntax: "=LEFT(text, [num_chars])" },
    { id: 11, name: "RIGHT", usecase: "Returns the last characters of a text string based on the specified number of characters.", syntax: "=RIGHT(text, [num_chars])" },
    { id: 12, name: "LEN", usecase: "Returns the number of characters in a text string, including spaces.", syntax: "=LEN(text)" },
    { id: 13, name: "TRIM", usecase: "Removes all spaces from text except for single spaces between words.", syntax: "=TRIM(text)" },
    { id: 14, name: "UPPER", usecase: "Converts all text to uppercase.", syntax: "=UPPER(text)" },
    { id: 15, name: "LOWER", usecase: "Converts all text to lowercase.", syntax: "LOWER(text)" },
    { id: 16, name: "PROPER", usecase: "Capitalizes the first letter of each word in a text string.", syntax: "PROPER(text)" },
    { id: 17, name: "NOW", usecase: "Returns the current date and time.", syntax: "NOW()" },
    { id: 18, name: "TODAY", usecase: "Returns the current date without the time.", syntax: "TODAY()" },
    { id: 19, name: "ROUND", usecase: "Rounds a number to a specified number of digits.", syntax: "ROUND(number, num_digits)" },
    { id: 20, name: "ROUNDUP", usecase: "Rounds a number up, away from zero, to a specified number of digits.", syntax: "ROUNDUP(number, num_digits)" },
    { id: 21, name: "ROUNDDOWN", usecase: "Rounds a number down, towards zero, to a specified number of digits.", syntax: "ROUNDDOWN(number, num_digits)" },
    { id: 22, name: "PMT", usecase: "Calculates the payment for a loan based on constant payments and a constant interest rate.", syntax: "PMT(rate, nper, pv, [fv], [type])" },
    { id: 23, name: "RATE", usecase: "Calculates the interest rate per period of an annuity.", syntax: "RATE(nper, pmt, pv, [fv], [type], [guess])" },
    { id: 24, name: "NPV", usecase: "Calculates the net present value of an investment based on a series of periodic cash flows and a discount rate.", syntax: "NPV(rate, value1, [value2], ...)," },
    { id: 25, name: "IRR", usecase: "Calculates the internal rate of return for a series of cash flows.", syntax: "IRR(values, [guess])" },
    { id: 26, name: "TEXT", usecase: "Converts a value to text and formats it according to a specified format.", syntax: "TEXT(value, format_text)" },
    { id: 27, name: "SEARCH", usecase: "Finds one text string within another and returns the starting position.", syntax: "SEARCH(find_text, within_text, [start_num])" },
    { id: 28, name: "FIND", usecase: "Finds one text string within another and returns the starting position (case-sensitive).", syntax: "FIND(find_text, within_text, [start_num])" },
    { id: 29, name: "REPLACE", usecase: "Replaces part of a text string with another text string based on the number of characters specified.", syntax: "REPLACE(old_text, start_num, num_chars, new_text)" },
    { id: 30, name: "SUBSTITUTE", usecase: "Substitutes one text string with another text string.", syntax: "SUBSTITUTE(text, old_text, new_text, [instance_num])," },
    { id: 31, name: "ISNUMBER", usecase: "Checks if a value is a number.", syntax: "ISNUMBER(value)," },
    { id: 32, name: "ISERROR", usecase: "Checks if a value results in an error.", syntax: "ISERROR(value)," },
    { id: 33, name: "IFERROR", usecase: "Returns a value you specify if a formula results in an error, otherwise returns the formula result.", syntax: "IFERROR(value, value_if_error)," },
    { id: 34, name: "AND", usecase: "Returns TRUE if all arguments evaluate to TRUE.", syntax: "AND(logical1, [logical2], ...)," },
    { id: 35, name: "OR", usecase: "Returns TRUE if any argument evaluates to TRUE.", syntax: "OR(logical1, [logical2], ...)," },
    { id: 36, name: "NOT", usecase: "Reverses the logic of its argument.", syntax: "NOT(logical)," },
    { id: 37, name: "COUNT", usecase: "Counts the number of numeric entries in a range.", syntax: "COUNT(value1, [value2], ...)," },
    { id: 38, name: "COUNTA", usecase: "Counts the number of non-blank entries in a range.", syntax: "COUNTA(value1, [value2], ...)," },
    { id: 39, name: "COUNTIF", usecase: "Counts the number of cells in a range that meet a single condition.", syntax: "COUNTIF(range, criteria)," },
    { id: 40, name: "COUNTIFS", usecase: "Counts the number of cells in a range that meet multiple conditions.", syntax: "COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)," },
    { id: 41, name: "UNIQUE", usecase: "Returns a list of unique values from a range (available in Excel 365 and 2019).", syntax: "UNIQUE(array, [by_col], [exactly_once])," },
    { id: 42, name: "FILTER", usecase: "Filters a range of data based on criteria (available in Excel 365 and 2019).", syntax: "FILTER(array, include, [if_empty])," },
    { id: 43, name: "SORT", usecase: "Sorts the contents of a range or array (available in Excel 365 and 2019).", syntax: "SORT(array, [sort_index], [sort_order], [by_col])" },
    { id: 44, name: "IF + AND", usecase: "Performs a conditional test where multiple conditions must be TRUE.", syntax: "=IF(AND(condition1, condition2, ...), value_if_true, value_if_false)" },

    {
        id: 45,
        name: "IF + OR",
        usecase: "Performs a conditional test where at least one of multiple conditions must be TRUE.",
        "syntax": "IF(OR(condition1, condition2, ...), value_if_true, value_if_false)"
    },
    {
        id: 46,
        name: "IF + ISERROR",
        usecase: "Handles errors by returning a custom value if an error is detected, otherwise returns the formula's result.",
        "syntax": "IF(ISERROR(expression), value_if_error, value_if_no_error)"
    },
    {
        id: 47,
        name: "IF + ISNUMBER + SEARCH",
        usecase: "Checks if a specific text exists within a cell and returns a value based on the result.",
        "syntax": "IF(ISNUMBER(SEARCH(find_text, within_text)), value_if_true, value_if_false)"
    },
    {
        id: 48,
        name: "INDEX + MATCH",
        usecase: "Performs advanced lookups by finding a value's position with MATCH and retrieving the value with INDEX.",
        "syntax": "INDEX(array, MATCH(lookup_value, lookup_array, match_type))"
    },
    {
        id: 49,
        name: "VLOOKUP + IFERROR",
        usecase: "Looks up a value and handles errors if the lookup value is not found.",
        "syntax": "IFERROR(VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]), value_if_error)"
    },
    {
        id: 50,
        name: "HLOOKUP + IFERROR",
        usecase: "Performs a horizontal lookup and handles errors if the lookup value is not found.",
        "syntax": "IFERROR(HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup]), value_if_error)"
    },
    {
        id: 51,
        name: "TEXT + CONCAT",
        usecase: "Formats numbers or dates as text and combines them with other text.",
        "syntax": "CONCAT(TEXT(value1, format_text), TEXT(value2, format_text))"
    },
    {
        id: 52,
        name: "LEFT + FIND",
        usecase: "Extracts text up to a specific character by finding the character's position with FIND.",
        "syntax": "LEFT(text, FIND(character, text) - 1)"
    },
    {
        id: 53,
        name: "RIGHT + LEN + FIND",
        usecase: "Extracts text after a specific character by calculating its position with FIND and using LEN.",
        "syntax": "RIGHT(text, LEN(text) - FIND(character, text))"
    },
    {
        id: 54,
        name: "MID + FIND",
        usecase: "Extracts text between two characters by finding their positions with FIND.",
        "syntax": "MID(text, FIND(start_character, text) + 1, FIND(end_character, text) - FIND(start_character, text) - 1)"
    },
    {
        id: 55,
        name: "TRIM + SUBSTITUTE",
        usecase: "Removes extra spaces or specific unwanted characters from text.",
        "syntax": "TRIM(SUBSTITUTE(text, unwanted_character, \"\"))"
    },
    {
        id: 56,
        name: "SUM + IF",
        usecase: "Adds values that meet specific criteria by combining logical conditions within a range.",
        "syntax": "SUM(IF(condition, range, 0))"
    },
    {
        id: 57,
        name: "COUNTIF + AND",
        usecase: "Counts cells that meet multiple conditions by using AND in conjunction with COUNTIF.",
        "syntax": "COUNTIFS(range1, condition1, range2, condition2)"
    },
    {
        id: 58,
        name: "COUNTIF + OR",
        usecase: "Counts cells that meet any of multiple conditions by using OR with COUNTIF.",
        "syntax": "COUNTIF(range, condition1) + COUNTIF(range, condition2)"
    },
    {
        id: 59,
        name: "AVERAGEIF + IFERROR",
        usecase: "Calculates the average of values meeting criteria while avoiding errors in the range.",
        "syntax": "IFERROR(AVERAGEIF(range, criteria, [average_range]), value_if_error)"
    },
    {
        id: 60,
        name: "CONCATENATE + TEXT",
        usecase: "Joins text and numbers with specific formatting applied to the numbers.",
        "syntax": "CONCATENATE(TEXT(value1, format_text), text2)"
    },
    {
        id: 61,
        name: "NOW + TEXT",
        usecase: "Displays the current date and time in a specific format as text.",
        "syntax": "TEXT(NOW(), format_text)"
    },
    {
        id: 62,
        name: "FILTER + SORT",
        usecase: "Filters a range based on criteria and sorts the resulting data.",
        "syntax": "SORT(FILTER(range, condition), sort_index, [sort_order])"
    },
    {
        id: 63,
        name: "UNIQUE + SORT",
        usecase: "Generates a sorted list of unique values from a range.",
        "syntax": "SORT(UNIQUE(range))"
    },



    {
        id: 64,
        name: "IF + COUNTIF",
        usecase: "Performs a conditional action based on the count of specific values in a range.",
        "syntax": "IF(COUNTIF(range, criteria) > 0, value_if_true, value_if_false)"
    },
    {
        id: 65,
        name: "SUMPRODUCT + IF",
        usecase: "Calculates the weighted sum of values based on conditional criteria.",
        "syntax": "SUMPRODUCT(IF(condition, array1, 0) * array2)"
    },
    {
        id: 66,
        name: "ROUND + AVERAGE",
        usecase: "Rounds the result of an average calculation to a specific number of decimal places.",
        "syntax": "ROUND(AVERAGE(range), num_digits)"
    },
    {
        id: 67,
        name: "SUBSTITUTE + TRIM + UPPER",
        usecase: "Cleans up text by removing extra spaces, replacing unwanted characters, and converting to uppercase.",
        "syntax": "UPPER(TRIM(SUBSTITUTE(text, unwanted_character, \"\")))"
    },
    {
        id: 68,
        name: "IF + NOW",
        usecase: "Performs conditional logic based on the current date and time.",
        "syntax": "IF(NOW() > date_value, value_if_true, value_if_false)"
    },
    {
        id: 69,
        name: "OFFSET + COUNTA",
        usecase: "Creates dynamic ranges that adjust based on the number of non-empty cells.",
        "syntax": "OFFSET(reference, 0, 0, COUNTA(range), width)"
    },
    {
        id: 70,
        name: "MATCH + INDIRECT",
        usecase: "Performs a lookup with dynamic range references using MATCH and INDIRECT.",
        "syntax": "MATCH(lookup_value, INDIRECT(range_reference), match_type)"
    },
    {
        id: 71,
        name: "INDEX + SMALL + IF",
        usecase: "Extracts multiple matching values from a range using array formulas.",
        "syntax": "INDEX(range, SMALL(IF(criteria, ROW(range)-MIN(ROW(range))+1), k))"
    },
    {
        id: 72,
        name: "TEXTJOIN + IF",
        usecase: "Joins text values from a range that meet specific conditions.",
        "syntax": "TEXTJOIN(delimiter, TRUE, IF(condition, range, \"\"))"
    },
    {
        id: 73,
        name: "INDEX + MATCH + IFERROR",
        usecase: "Performs a lookup and returns a result while handling errors if the value is not found.",
        "syntax": "IFERROR(INDEX(array, MATCH(lookup_value, lookup_array, match_type)), value_if_error)"
    },
    {
        id: 74,
        name: "IF + COUNTIF + AND",
        usecase: "Checks if multiple conditions are met within a range and returns a value accordingly.",
        "syntax": "IF(AND(COUNTIF(range1, condition1) > 0, COUNTIF(range2, condition2) > 0), value_if_true, value_if_false)"
    },
    {
        id: 75,
        name: "VLOOKUP + MATCH",
        usecase: "Performs a lookup where the column to search is dynamically selected based on a MATCH result.",
        "syntax": "VLOOKUP(lookup_value, table_array, MATCH(column_name, header_row, 0), [range_lookup])"
    },
    {
        id: 76,
        name: "IFERROR + AVERAGE + IF",
        usecase: "Calculates the average of values meeting a condition, returning a custom value if no values meet the criteria.",
        "syntax": "IFERROR(AVERAGE(IF(condition, range)), value_if_error)"
    },
    {
        id: 77,
        name: "OFFSET + MATCH + COUNTA",
        usecase: "Creates dynamic ranges and performs lookups based on non-empty cells in a dataset.",
        "syntax": "OFFSET(reference, MATCH(lookup_value, lookup_array, match_type)-1, 0, COUNTA(range))"
    },
    {
        id: 78,
        name: "TEXT + CONCATENATE + IF",
        usecase: "Combines text and conditional results into a single, formatted string.",
        "syntax": "CONCATENATE(TEXT(value, format_text), IF(condition, text_if_true, text_if_false))"
    },
    {
        id: 79,
        name: "SEARCH + MID + LEN",
        usecase: "Extracts a substring starting from a specific position based on the search result and string length.",
        "syntax": "MID(text, SEARCH(start_text, text), LEN(text) - SEARCH(start_text, text))"
    },
    {
        id: 80,
        name: "LEFT + SEARCH + SUBSTITUTE",
        usecase: "Extracts text before a specific delimiter, even when it appears multiple times in a string.",
        "syntax": "LEFT(text, FIND(\"delimiter\", SUBSTITUTE(text, \"delimiter\", \"\", n)))"
    },
    {
        id: 81,
        name: "RIGHT + FIND + SUBSTITUTE",
        usecase: "Extracts text after the last occurrence of a specific delimiter.",
        "syntax": "RIGHT(text, LEN(text) - FIND(\"delimiter\", SUBSTITUTE(text, \"delimiter\", \"\", LEN(text) - LEN(SUBSTITUTE(text, \"delimiter\", \"\")))))"
    },
    {
        id: 82,
        name: "TRIM + CLEAN + SUBSTITUTE",
        usecase: "Removes unwanted spaces, line breaks, and non-printable characters from text.",
        "syntax": "TRIM(CLEAN(SUBSTITUTE(text, unwanted_character, \"\")))"
    },
    {
        id: 83,
        name: "ROUND + SUM + IF",
        usecase: "Adds values that meet a condition and rounds the result to a specified number of decimal places.",
        "syntax": "ROUND(SUM(IF(condition, range, 0)), num_digits)"
    },
    {
        id: 84,
        name: "IF + SEARCH + ISNUMBER",
        usecase: "Checks if a specific string exists in text and performs an action based on the result.",
        "syntax": "IF(ISNUMBER(SEARCH(find_text, text)), value_if_true, value_if_false)"
    },
    {
        id: 85,
        name: "UNIQUE + FILTER + SORT",
        usecase: "Generates a sorted list of unique values from a range that meets specific criteria.",
        "syntax": "SORT(UNIQUE(FILTER(range, condition)))"
    },
    {
        id: 86,
        name: "IF + TEXT + NOW",
        usecase: "Displays a message or formatted date/time based on a condition.",
        "syntax": "IF(condition, TEXT(NOW(), format_text), value_if_false)"
    },
    {
        id: 87,
        name: "COUNTIF + CONCAT",
        usecase: "Counts occurrences of concatenated values across a range.",
        "syntax": "COUNTIF(range, CONCAT(value1, value2))"
    },
    {
        id: 88,
        name: "IF + SMALL + ROW",
        usecase: "Extracts multiple smallest values from a range based on conditions.",
        "syntax": "IF(condition, SMALL(range, ROW()-offset), \"\")"
    },
    {
        id: 89,
        name: "INDEX + MATCH + COUNTIF",
        usecase: "Performs a lookup that accounts for duplicate values by considering their position in the range.",
        "syntax": "INDEX(array, MATCH(lookup_value & ROW(), range & ROW(), 0))"
    },
    {
        id: 90,
        name: "IFERROR + SUMPRODUCT + IF",
        usecase: "Calculates a weighted sum of values while avoiding errors in the calculation process.",
        "syntax": "IFERROR(SUMPRODUCT(IF(condition, array1, 0) * array2), value_if_error)"
    },
    {
        id: 91,
        name: "FILTER + SUM + IF",
        usecase: "Filters a range based on criteria and calculates the sum of filtered results.",
        "syntax": "SUM(FILTER(range, condition))"
    },
    {
        id: 92,
        name: "TEXTJOIN + FILTER + SORT",
        usecase: "Joins filtered and sorted values from a range into a single text",
    },

    {
        id: 93,
        name: "MATCH + INDIRECT + COUNTIF",
        usecase: "Dynamically references a range and finds the position of a value that meets criteria.",
        "syntax": "MATCH(lookup_value, INDIRECT(\"sheet_name!\" & range), match_type)"
    },
    {
        id: 94,
        name: "IF + SUBSTITUTE + REPT",
        usecase: "Replaces specific characters in text with repetitive patterns based on conditions.",
        "syntax": "IF(condition, SUBSTITUTE(text, old_text, REPT(new_text, times)), text_if_false)"
    },
    {
        id: 95,
        name: "OFFSET + SUM + MATCH",
        usecase: "Calculates the sum of a dynamic range determined by a lookup result.",
        "syntax": "SUM(OFFSET(reference, MATCH(lookup_value, lookup_array, match_type)-1, 0, range_height, range_width))"
    },
    {
        id: 96,
        name: "ARRAYFORMULA + IF + LEN",
        usecase: "Applies conditional logic across an array of values while handling varying string lengths (specific to Google Sheets).",
        "syntax": "ARRAYFORMULA(IF(LEN(range) > 0, calculation_if_true, calculation_if_false))"
    },
    {
        id: 97,
        name: "INDEX + SUM + ROW",
        usecase: "Fetches a value from a range dynamically based on the sum of row offsets.",
        "syntax": "INDEX(range, SUM(ROW()-row_offset))"
    },
    {
        id: 98,
        name: "XLOOKUP + FILTER + IFERROR",
        usecase: "Performs a lookup with dynamic filtering and handles errors for unavailable values (Excel 365 and 2019).",
        "syntax": "IFERROR(XLOOKUP(lookup_value, FILTER(range, condition), return_array), value_if_error)"
    },
    {
        id: 99,
        name: "COUNTIFS + LEFT + FIND",
        usecase: "Counts values in a range where the text starts with a specific substring or pattern.",
        "syntax": "COUNTIFS(range, \"=\" & LEFT(criteria, FIND(pattern, criteria)))"
    },
    {
        id: 100,
        name: "IF + MID + LEN + SEARCH",
        usecase: "Extracts and processes substrings based on conditional logic.",
        "syntax": "IF(condition, MID(text, SEARCH(start_text, text), LEN(text) - SEARCH(start_text, text)), text_if_false)"
    },


    {
        id: 101,
        name: "VLOOKUP",
        usecase: "Search for a value in the first column of a table and return a value in the same row from another column.",
        syntax: "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])"
    },
    {
        id: 102,
        name: "INDEX",
        usecase: "Return the value of a cell in a specific row and column of a range.",
        syntax: "INDEX(array, row_num, [column_num])"
    },
    {
        id: 103,
        name: "MATCH",
        usecase: "Return the position of a lookup value in a range.",
        syntax: "MATCH(lookup_value, lookup_array, [match_type])"
    },
    {
        id: 104,
        name: "IFERROR",
        usecase: "Return a specified value if a formula evaluates to an error, otherwise return the result of the formula.",
        syntax: "IFERROR(value, value_if_error)"
    },
    {
        id: 105,
        name: "SUMIFS",
        usecase: "Sum the values in a range that meet multiple criteria.",
        syntax: "SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)"
    },
    {
        id: 106,
        name: "COUNTIFS",
        usecase: "Count the number of cells that meet multiple criteria.",
        syntax: "COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)"
    },
    {
        id: 107,
        name: "CONCATENATE",
        usecase: "Join two or more text strings together.",
        syntax: "CONCATENATE(text1, [text2], ...)"
    },
    {
        id: 108,
        name: "TEXT",
        usecase: "Format a number or date as text in a specified format.",
        syntax: "TEXT(value, format_text)"
    },
    {
        id: 109,
        name: "SUMPRODUCT",
        usecase: "Multiply corresponding elements in given arrays and return the sum of those products.",
        syntax: "SUMPRODUCT(array1, [array2], [array3], ...)"
    },
    {
        id: 110,
        name: "ARRAYFORMULA",
        usecase: "Perform a calculation over a range of cells, and return results in the form of an array or a range of values.",
        syntax: "ARRAYFORMULA(array_formula)"
    },
    {
        id: 111,
        name: "LEFT",
        usecase: "Extract the leftmost characters from a text string.",
        syntax: "LEFT(text, [num_chars])"
    },
    {
        id: 112,
        name: "RIGHT",
        usecase: "Extract the rightmost characters from a text string.",
        syntax: "RIGHT(text, [num_chars])"
    },
    {
        id: 113,
        name: "MID",
        usecase: "Extract characters from the middle of a text string, given a starting position and length.",
        syntax: "MID(text, start_num, num_chars)"
    },
    {
        id: 114,
        name: "TEXTJOIN",
        usecase: "Join multiple text strings with a delimiter between each.",
        syntax: "TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)"
    },
    {
        id: 115,
        name: "TODAY",
        usecase: "Return the current date.",
        syntax: "TODAY()"
    },
    {
        id: 116,
        name: "NOW",
        usecase: "Return the current date and time.",
        syntax: "NOW()"
    },
    {
        id: 117,
        name: "YEAR",
        usecase: "Extract the year from a date.",
        syntax: "YEAR(serial_number)"
    },
    {
        id: 118,
        name: "MONTH",
        usecase: "Extract the month from a date.",
        syntax: "MONTH(serial_number)"
    },
    {
        id: 119,
        name: "DAY",
        usecase: "Extract the day from a date.",
        syntax: "DAY(serial_number)"
    },
    {
        id: 120,
        name: "DATEDIF",
        usecase: "Calculate the difference between two dates in years, months, or days.",
        syntax: "DATEDIF(start_date, end_date, unit)"
    }


]


module.exports = functions;
