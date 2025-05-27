// ✅ Correct Example 1: \n = New Line
console.log("Hello\nWorld");
// Output:
// Hello
// World

// ✅ Correct Example 2: \t = Tab Space
console.log("Name:\tHaroon");
// Output:
// Name:    Haroon

// ✅ Correct Example 3: \\ = Backslash
console.log("Path: C:\\Users\\Haroon");
// Output:
// Path: C:\Users\Haroon

// ✅ Correct Example 4: \" = Double Quote inside string
console.log("He said: \"JavaScript is fun!\"");
// Output:
// He said: "JavaScript is fun!"

// ✅ Correct Example 5: \' = Single Quote inside string
console.log('It\'s a sunny day');
// Output:
// It's a sunny day

// ✅ Correct Example 6: \b = Backspace
console.log("Helloo\b");
// Output:
// Hello

// ✅ Correct Example 7: \r = Carriage Return
console.log("12345\rAB");
// Output (in most environments):
// AB345

// ✅ Correct Example 8: \f = Form Feed
console.log("Hello\fWorld");
// Output: May not be visible clearly (used in old printers)

// ❌ Error Example 1: Using single backslash by mistake
// console.log("C:\Users\Haroon"); 
// ❌ Error:
//      Invalid escape sequence \U
// 👉 Explanation: \U JavaScript mein koi valid escape sequence nahi hai.
// ✅ FIX: Use double backslash
console.log("Fixed: C:\\Users\\Haroon");

// ❌ Error Example 2: Forgetting to close quotes
// console.log("Hello\nWorld); 
// ❌ Error:
//      SyntaxError: missing ) after argument list
// ✅ FIX:
console.log("Hello\nWorld");

// ❌ Error Example 3: Using " inside " without escaping
// console.log("He said: "Hi!""); 
// ❌ Error:
//      SyntaxError: Unexpected identifier 'Hi'
// ✅ FIX:
console.log("He said: \"Hi!\"");
