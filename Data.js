let functions = [

    { "id": 1, name: "SUM", usecase: "Adds all the numbers in a range of cells." },
    { "id": 2, name: "AVERAGE", usecase: "Calculates the average of numbers in a range of cells.", syntax:"=AVERAGE(number1, [number2], ...)" },
    { "id": 3, name: "IF", usecase: "Performs a logical test and returns one value for TRUE and another for FALSE.",syntax:"=IF(logical_test, value_if_true, value_if_false)" },
    { "id": 4, name: "VLOOKUP", usecase: "Searches for a value in the first column of a range and returns a value in the same row from another column.",syntax:"=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])" },
    { "id": 5, name: "HLOOKUP", usecase: "Searches for a value in the first row of a range and returns a value in the same column from another row.",syntax:"=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])" },
    { "id": 6, name: "INDEX", usecase: "Returns the value of a cell at a given row and column number in a specified range.",syntax:"=INDEX(array, row_num, [column_num])" },
    { "id": 7, name: "MATCH", usecase: "Returns the relative position of a value in a range.",syntax:"=MATCH(lookup_value, lookup_array, [match_type])" },
    { "id": 8, name: "CONCATENATE", usecase: "Joins multiple strings of text into one string (replaced by CONCAT in newer Excel versions).",syntax:"=CONCATENATE(text1, [text2], ...)" },
    { "id": 9, name: "CONCAT", usecase: "Joins multiple strings of text into one string (recommended for newer versions).",syntax:"=CONCATENATE(text1, [text2], ...)" },
    { "id": 10, name: "LEFT", usecase: "Returns the first characters of a text string based on the specified number of characters.",syntax:"=LEFT(text, [num_chars])" },
    { "id": 11, name: "RIGHT", usecase: "Returns the last characters of a text string based on the specified number of characters.",syntax:"=RIGHT(text, [num_chars])" },
    { "id": 12, name: "LEN", usecase: "Returns the number of characters in a text string, including spaces.",syntax:"=LEN(text)" },
    { "id": 13, name: "TRIM", usecase: "Removes all spaces from text except for single spaces between words.",syntax:"=TRIM(text)" },
    { "id": 14, name: "UPPER", usecase: "Converts all text to uppercase.",syntax:"=UPPER(text)" },
    { "id": 15, name: "LOWER", usecase: "Converts all text to lowercase." ,syntax:""},
    { "id": 16, name: "PROPER", usecase: "Capitalizes the first letter of each word in a text string.",syntax:"" },
    { "id": 17, name: "NOW", usecase: "Returns the current date and time.",syntax:"" },
    { "id": 18, name: "TODAY", usecase: "Returns the current date without the time.",syntax:"" },
    { "id": 19, name: "ROUND", usecase: "Rounds a number to a specified number of digits.",syntax:"" },
    { "id": 20, name: "ROUNDUP", usecase: "Rounds a number up, away from zero, to a specified number of digits.",syntax:"" },
    { "id": 21, name: "ROUNDDOWN", usecase: "Rounds a number down, towards zero, to a specified number of digits.",syntax:"" },
    { "id": 22, name: "PMT", usecase: "Calculates the payment for a loan based on constant payments and a constant interest rate." ,syntax:""},
    { "id": 23, name: "RATE", usecase: "Calculates the interest rate per period of an annuity.",syntax:"" },
    { "id": 24, name: "NPV", usecase: "Calculates the net present value of an investment based on a series of periodic cash flows and a discount rate.",syntax:"" },
    { "id": 25, name: "IRR", usecase: "Calculates the internal rate of return for a series of cash flows.",syntax:"" },
    { "id": 26, name: "TEXT", usecase: "Converts a value to text and formats it according to a specified format.",syntax:"" },
    { "id": 27, name: "SEARCH", usecase: "Finds one text string within another and returns the starting position.",syntax:"" },
    { "id": 28, name: "FIND", usecase: "Finds one text string within another and returns the starting position (case-sensitive).",syntax:"" },
    { "id": 29, name: "REPLACE", usecase: "Replaces part of a text string with another text string based on the number of characters specified.",syntax:"" },
    { "id": 30, name: "SUBSTITUTE", usecase: "Substitutes one text string with another text string." },
    { "id": 31, name: "ISNUMBER", usecase: "Checks if a value is a number." },
    { "id": 32, name: "ISERROR", usecase: "Checks if a value results in an error." },
    { "id": 33, name: "IFERROR", usecase: "Returns a value you specify if a formula results in an error, otherwise returns the formula result." },
    { "id": 34, name: "AND", usecase: "Returns TRUE if all arguments evaluate to TRUE." },
    { "id": 35, name: "OR", usecase: "Returns TRUE if any argument evaluates to TRUE." },
    { "id": 36, name: "NOT", usecase: "Reverses the logic of its argument." },
    { "id": 37, name: "COUNT", usecase: "Counts the number of numeric entries in a range." },
    { "id": 38, name: "COUNTA", usecase: "Counts the number of non-blank entries in a range." },
    { "id": 39, name: "COUNTIF", usecase: "Counts the number of cells in a range that meet a single condition." },
    { "id": 40, name: "COUNTIFS", usecase: "Counts the number of cells in a range that meet multiple conditions." },
    { "id": 41, name: "UNIQUE", usecase: "Returns a list of unique values from a range (available in Excel 365 and 2019)." },
    { "id": 42, name: "FILTER", usecase: "Filters a range of data based on criteria (available in Excel 365 and 2019)." },
    { "id": 43, name: "SORT", usecase: "Sorts the contents of a range or array (available in Excel 365 and 2019)." },
    { "id": 44, name: "IF + AND", usecase: "Performs a conditional test where multiple conditions must be TRUE.", syntax: "=IF(AND(condition1, condition2, ...), value_if_true, value_if_false)" },
    { "id": 45, name: "IF + OR", usecase: "Performs a conditional test where at least one of multiple conditions must be TRUE." },
    { "id": 46, name: "IF + ISERROR", usecase: "Handles errors by returning a custom value if an error is detected, otherwise returns the formula's result." },
    { "id": 47, name: "IF + ISNUMBER + SEARCH", usecase: "Checks if a specific text exists within a cell and returns a value based on the result." },
    { "id": 48, name: "INDEX + MATCH", usecase: "Performs advanced lookups by finding a value's position with MATCH and retrieving the value with INDEX." },
    { "id": 49, name: "VLOOKUP + IFERROR", usecase: "Looks up a value and handles errors if the lookup value is not found." },
    { "id": 50, name: "HLOOKUP + IFERROR", usecase: "Performs a horizontal lookup and handles errors if the lookup value is not found." },
    { "id": 51, name: "TEXT + CONCAT", usecase: "Formats numbers or dates as text and combines them with other text." },
    { "id": 52, name: "LEFT + FIND", usecase: "Extracts text up to a specific character by finding the character's position with FIND." },
    { "id": 53, name: "RIGHT + LEN + FIND", usecase: "Extracts text after a specific character by calculating its position with FIND and using LEN." },
    { "id": 54, name: "MID + FIND", usecase: "Extracts text between two characters by finding their positions with FIND." },
    { "id": 55, name: "TRIM + SUBSTITUTE", usecase: "Removes extra spaces or specific unwanted characters from text." },
    { "id": 56, name: "SUM + IF", usecase: "Adds values that meet specific criteria by combining logical conditions within a range." },
    { "id": 57, name: "COUNTIF + AND", usecase: "Counts cells that meet multiple conditions by using AND in conjunction with COUNTIF." },
    { "id": 58, name: "COUNTIF + OR", usecase: "Counts cells that meet any of multiple conditions by using OR with COUNTIF." },
    { "id": 59, name: "AVERAGEIF + IFERROR", usecase: "Calculates the average of values meeting criteria while avoiding errors in the range." },
    { "id": 60, name: "CONCATENATE + TEXT", usecase: "Joins text and numbers with specific formatting applied to the numbers." },
    { "id": 61, name: "NOW + TEXT", usecase: "Displays the current date and time in a specific format as text." },
    { "id": 62, name: "FILTER + SORT", usecase: "Filters a range based on criteria and sorts the resulting data." },
    { "id": 63, name: "UNIQUE + SORT", usecase: "Generates a sorted list of unique values from a range." },
    { "id": 64, name: "IF + COUNTIF", usecase: "Performs a conditional action based on the count of specific values in a range." },
    { "id": 65, name: "SUMPRODUCT + IF", usecase: "Calculates the weighted sum of values based on conditional criteria." },
    { "id": 66, name: "ROUND + AVERAGE", usecase: "Rounds the result of an average calculation to a specific number of decimal places." },
    { "id": 67, name: "SUBSTITUTE + TRIM + UPPER", usecase: "Cleans up text by removing extra spaces, replacing unwanted characters, and converting to uppercase." },
    { "id": 68, name: "IF + NOW", usecase: "Performs conditional logic based on the current date and time." },
    { "id": 69, name: "OFFSET + COUNTA", usecase: "Creates dynamic ranges that adjust based on the number of non-empty cells." },
    { "id": 70, name: "MATCH + INDIRECT", usecase: "Performs a lookup with dynamic range references using MATCH and INDIRECT." },
    { "id": 71, name: "INDEX + SMALL + IF", usecase: "Extracts multiple matching values from a range using array formulas." },
    { "id": 72, name: "TEXTJOIN + IF", usecase: "Joins text values from a range that meet specific conditions (available in Excel 365 and 2019)." },
    { "id": 73, name: "INDEX + MATCH + IFERROR", usecase: "Performs a lookup and returns a result while handling errors if the value is not found." },
    { "id": 74, name: "IF + COUNTIF + AND", usecase: "Checks if multiple conditions are met within a range and returns a value accordingly." },
    { "id": 75, name: "VLOOKUP + MATCH", usecase: "Performs a lookup where the column to search is dynamically selected based on a MATCH result." },
    { "id": 76, name: "IFERROR + AVERAGE + IF", usecase: "Calculates the average of values meeting a condition, returning a custom value if no values meet the criteria." },
    { "id": 77, name: "OFFSET + MATCH + COUNTA", usecase: "Creates dynamic ranges and performs lookups based on non-empty cells in a dataset." },
    { "id": 78, name: "TEXT + CONCATENATE + IF", usecase: "Combines text and conditional results into a single, formatted string." },
    { "id": 79, name: "SEARCH + MID + LEN", usecase: "Extracts a substring starting from a specific position based on the search result and string length." },
    { "id": 80, name: "LEFT + SEARCH + SUBSTITUTE", usecase: "Extracts text before a specific delimiter, even when it appears multiple times in a string." },
    { "id": 81, name: "RIGHT + FIND + SUBSTITUTE", usecase: "Extracts text after the last occurrence of a specific delimiter." },
    { "id": 82, name: "TRIM + CLEAN + SUBSTITUTE", usecase: "Removes unwanted spaces, line breaks, and non-printable characters from text." },
    { "id": 83, name: "ROUND + SUM + IF", usecase: "Adds values that meet a condition and rounds the result to a specified number of decimal places." },
    { "id": 84, name: "IF + SEARCH + ISNUMBER", usecase: "Checks if a specific string exists in text and performs an action based on the result." },
    { "id": 85, name: "UNIQUE + FILTER + SORT", usecase: "Generates a sorted list of unique values from a range that meets specific criteria." },
    { "id": 86, name: "IF + TEXT + NOW", usecase: "Displays a message or formatted date/time based on a condition." },
    { "id": 87, name: "COUNTIF + CONCAT", usecase: "Counts occurrences of concatenated values across a range." },
    { "id": 88, name: "IF + SMALL + ROW", usecase: "Extracts multiple smallest values from a range based on conditions." },
    { "id": 89, name: "INDEX + MATCH + COUNTIF", usecase: "Performs a lookup that accounts for duplicate values by considering their position in the range." },
    { "id": 90, name: "IFERROR + SUMPRODUCT + IF", usecase: "Calculates a weighted sum of values while avoiding errors in the calculation process." },
    { "id": 91, name: "FILTER + SUM + IF", usecase: "Filters a range based on criteria and calculates the sum of filtered results." },
    { "id": 92, name: "TEXTJOIN + FILTER + SORT", usecase: "Joins filtered and sorted values from a range into a single text string." },
    { "id": 93, name: "MATCH + INDIRECT + COUNTIF", usecase: "Dynamically references a range and finds the position of a value that meets criteria." },
    { "id": 94, name: "IF + SUBSTITUTE + REPT", usecase: "Replaces specific characters in text with repetitive patterns based on conditions." },
    { "id": 95, name: "OFFSET + SUM + MATCH", usecase: "Calculates the sum of a dynamic range determined by a lookup result." },
    { "id": 96, name: "ARRAYFORMULA + IF + LEN", usecase: "Applies conditional logic across an array of values while handling varying string lengths (specific to Google Sheets)." },
    { "id": 97, name: "INDEX + SUM + ROW", usecase: "Fetches a value from a range dynamically based on the sum of row offsets." },
    { "id": 98, name: "XLOOKUP + FILTER + IFERROR", usecase: "Performs a lookup with dynamic filtering and handles errors for unavailable values (Excel 365 and 2019)." },
    { "id": 99, name: "COUNTIFS + LEFT + FIND", usecase: "Counts values in a range where the text starts with a specific substring or pattern." },
    { "id": 100, name: "IF + MID + LEN + SEARCH", usecase: "Extracts and processes substrings based on conditional logic." }
    [
  {
    "id": 101,
    "name": "VLOOKUP",
    "usecase": "Search for a value in the first column of a table and return a value in the same row from another column.",
    "syntax": "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])"
  },
  {
    "id": 102,
    "name": "INDEX",
    "usecase": "Return the value of a cell in a specific row and column of a range.",
    "syntax": "INDEX(array, row_num, [column_num])"
  },
  {
    "id": 103,
    "name": "MATCH",
    "usecase": "Return the position of a lookup value in a range.",
    "syntax": "MATCH(lookup_value, lookup_array, [match_type])"
  },
  {
    "id": 104,
    "name": "IFERROR",
    "usecase": "Return a specified value if a formula evaluates to an error, otherwise return the result of the formula.",
    "syntax": "IFERROR(value, value_if_error)"
  },
  {
    "id": 105,
    "name": "SUMIFS",
    "usecase": "Sum the values in a range that meet multiple criteria.",
    "syntax": "SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)"
  },
  {
    "id": 106,
    "name": "COUNTIFS",
    "usecase": "Count the number of cells that meet multiple criteria.",
    "syntax": "COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)"
  },
  {
    "id": 107,
    "name": "CONCATENATE",
    "usecase": "Join two or more text strings together.",
    "syntax": "CONCATENATE(text1, [text2], ...)"
  },
  {
    "id": 108,
    "name": "TEXT",
    "usecase": "Format a number or date as text in a specified format.",
    "syntax": "TEXT(value, format_text)"
  },
  {
    "id": 109,
    "name": "SUMPRODUCT",
    "usecase": "Multiply corresponding elements in given arrays and return the sum of those products.",
    "syntax": "SUMPRODUCT(array1, [array2], [array3], ...)"
  },
  {
    "id": 110,
    "name": "ARRAYFORMULA",
    "usecase": "Perform a calculation over a range of cells, and return results in the form of an array or a range of values.",
    "syntax": "ARRAYFORMULA(array_formula)"
  },
  {
    "id": 111,
    "name": "LEFT",
    "usecase": "Extract the leftmost characters from a text string.",
    "syntax": "LEFT(text, [num_chars])"
  },
  {
    "id": 112,
    "name": "RIGHT",
    "usecase": "Extract the rightmost characters from a text string.",
    "syntax": "RIGHT(text, [num_chars])"
  },
  {
    "id": 113,
    "name": "MID",
    "usecase": "Extract characters from the middle of a text string, given a starting position and length.",
    "syntax": "MID(text, start_num, num_chars)"
  },
  {
    "id": 114,
    "name": "TEXTJOIN",
    "usecase": "Join multiple text strings with a delimiter between each.",
    "syntax": "TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)"
  },
  {
    "id": 115,
    "name": "TODAY",
    "usecase": "Return the current date.",
    "syntax": "TODAY()"
  },
  {
    "id": 116,
    "name": "NOW",
    "usecase": "Return the current date and time.",
    "syntax": "NOW()"
  },
  {
    "id": 117,
    "name": "YEAR",
    "usecase": "Extract the year from a date.",
    "syntax": "YEAR(serial_number)"
  },
  {
    "id": 118,
    "name": "MONTH",
    "usecase": "Extract the month from a date.",
    "syntax": "MONTH(serial_number)"
  },
  {
    "id": 119,
    "name": "DAY",
    "usecase": "Extract the day from a date.",
    "syntax": "DAY(serial_number)"
  },
  {
    "id": 120,
    "name": "DATEDIF",
    "usecase": "Calculate the difference between two dates in years, months, or days.",
    "syntax": "DATEDIF(start_date, end_date, unit)"
  }
]

]


module.exports = functions;
