console.log("Hii We gonna learn String Methods..");
//! String
//? String is a Primitive data type. It is a sequence of characters enclosed within double quotes(""), single quotes ('') or Back ticks. It comes up with multiple properties and methods as follows.

let firstString = 'He said, "I am going to market"';
let secString = "I'm your friend";
let thirdString = `He said,"I'm Ram'sFriend"`;

let firstName = "KL";
let secName = "Rahul";

//! Template literals
//? Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
console.log(`I'm ${firstName} ${secName}'s Friend..`);

let aboutMe = `I am Amarjeet Kumar from Delhi. I love to play cricket.
I am fond of watching movies
`;

let myName = "Swapna Sundari";

//! length
//? It is a property to find the length of the string datatypes.
console.log(myName.length);

//! at
//? at is a string method it returns one new string. It accepts only one argument as an index and returns the character which is present at the index. if the index is not present then it will return as undefined.
let returnedData = myName.at(14);
console.log(returnedData);

//! charAt
//? charAt is a string method it accepts indexes as an argument and it returns the character which is present on the specified index. If the specified index is not present or it is negative index it will return empty string.
let mydata = myName.charAt(-5);
console.log(mydata);

//! charCodeAt
//? charCodeAt is a string method used to get ascii value of character at the specified index. If specified argument is negative index it will return NaN.
let codeOfCharacter = myName.charCodeAt(-5);
console.log(codeOfCharacter);

//! concat
//? concat is a string method which accept multiple arguments and it concatenates with the original string and returns one new string. Arguments can be of any datatype.
let concatenatedstring = myName.concat("Singh Shanu", "Amarjeet", "Kalees");
// concatenatedstring = myName.concat(Symbol);
console.log(concatenatedstring);

//! endsWith
//? endsWith is a string method which accepts string argument and it returns one boolean value true if it is ending with the provided string argument else false.
let endsWith = myName.endsWith("ari");
console.log(endsWith);

//! includes
//? includes is a string method which accpets string as an argument and it matches the provided string to the original string. If it includes the specified argument it will return true else false.
let includedChar = myName.includes("amar");
console.log(includedChar);

//!indexOf
//? indexOf is a string method it accepts string as an argument and it returns the index value of specified character. If the specified character is not present it will return -1.
let favPlayer = "Rohit Sharma";
let index = favPlayer.indexOf("r");
console.log(index);
index = favPlayer.indexOf("o");
console.log(index);

//! lastIndex
//? lastIndex is a string method it returns the index of the specified character which will be present at last.
let lastIndex = favPlayer.lastIndexOf("z");
console.log(lastIndex);
// let firstIndex = favPlayer.firstIndex("o"); ❌❌❌
// console.log(firstIndex);

//! slice
//? slice is a string method it can accept one or two arguments first argument is start index second argument is end index it will return the extracted character from start index to last index - 1. if second argument is not present it will return the string from the start index to the last.
//? If first index is greater than second index it will return empty string.
let country = "india";
let slicedData = country.slice(-10);
console.log(slicedData);
slicedData = country.slice(1, 4);
console.log(slicedData);
slicedData = country.slice(4, 1);
console.log(slicedData);
slicedData = country.slice(0, -1);
console.log(slicedData);

//! substring
//? substring is a string method which is used to extract the part from a string, it can accept one or two arguments. It does not accept negative index. If the first index is greater than second one then it will swap the indexes and return the output.
//? if the index is not present it will return empty string.
let userName = "sundari";
let substring = userName.substring(1);
console.log(substring);
substring = userName.substring(1, 5);
console.log(substring);
substring = userName.substring(-1, 5);
console.log(substring);
substring = userName.substring(-1);
console.log(substring);
substring = userName.substring(1, -1);
console.log(substring);
substring = userName.substring(1, -5);
console.log(substring);
substring = userName.substring(-10);
console.log(substring);
//! substr
//? substr is a string method is used to extract the part from a string and it can accept one or two arguments the first argument is the start index and the second argument is the length of the characters. if the specified index is not present it will return empty string. if it is negative index which is not present in the string then it will start from zeroth index.
userName = "Shanu";
let substr = userName.substr(1);
console.log(substr);
substr = userName.substr(-3);
console.log(substr);
substr = userName.substr(1, 3);
console.log(substr);
substr = userName.substr(-10, 3);
console.log(substr);

//! padEnd
//? padEnd is a string method used to hide the character from last, it accepts two arguments, maxlength and the character you want to show instead original character.
let contact = "1234567890";
// let paddedCharacter = contact.padEnd(15, "x");
// console.log(paddedCharacter);
let paddedCharacter = contact.slice(0, 3);
console.log(paddedCharacter);
paddedCharacter = paddedCharacter.padEnd(10, "X");
console.log(paddedCharacter);

//!padStart
let padStart = contact.slice(-3).padStart(10, "X");
console.log(padStart);

let aadhaarcard = "5383 6058 2398";
let maskedAadhaar =
  aadhaarcard.slice(0, 5).padEnd(9, "X") + aadhaarcard.slice(-5);
console.log(maskedAadhaar);

let maskedName = (name) =>
  name.slice(0, 1).padEnd(name.length - 1, "X") + name.slice(-1);
console.log(maskedName("Kali Linux"));

//todo match and matchAll
let userName2 = "Pirates of Heart";
console.log(userName2.match("a"));
console.log(userName2.matchAll("a"));

//todo normalize  String.normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string (+1 overload)
console.log(userName2.normalize("NFKC"));

//! repeat
//? repeat is a string method is used to repeat the string for expected times. It accepts count of repetition as an argument.
console.log(userName2.repeat(4));

//!replace
//? replace is astring method used to replace the first matched character with specified character, It accepts two arguments first is matching character, second is characters needs to be placed of matched character.
console.log(userName2.replace("a", "b"));

//! replaceAll
//? replace is astring method used to replace the all matched character with specified character, It accepts two arguments first is matching character, second is characters needs to be placed of matched character.
console.log(userName2.replaceAll("a", "b"));

//todo search Finds the first substring match in a regular expression search.
console.log(userName2.search("s"));

//! split
//? split is a string method used to convert the string data into an array. It accepts separator as an argument here we can pass empty string (""), without any argument, with space (" ").
userName2 = "shanu Kumar";
console.log(userName2.split());
console.log(userName2.split(""));
console.log(userName2.split(" "));

//! startsWith
//? startsWith is a string method used to check the string whetehr it is starting with specified character or not. It returns boolean value.
console.log(userName2.startsWith("P"));

//! trim
//? It is used to remove the space in start and end of the string. It is a no argument method.
let names = " maga lakshmi ";
console.log(names.trim());

//! trimStart
//? it is used to remove the space only start of the string. It is a no argument method.
console.log(names.trimStart());

//! trimEnd
//? it is used to remove the space only end of the string. It is a no argument method.
console.log(names.trimEnd());

//! toUppercase
//? it is used to coverts the characters into uppercase. It is a no argument method.
console.log(names.toUpperCase());

//! toLowercase
//? it is used to coverts the characters into Lowercase. It is a no argument method.
console.log(names.toLowerCase());

//! toString
//It is used to converts any kinda datatype into string. It is a no argument method.
let mobilenum = 767567898;
console.log(mobilenum.toString());
let fun = () => "Hii THis is SHanu";
console.log(fun.toString());

let strData = "Shanu";
//todo codePointAt
//todo isWellFormed
//todo localeCompare
//todo match
//todo matchALl
//todo normalize
//todo search
//todo toLocalLowerCase
//todo toLocalUpperCase
//todo toWellFormed
//todo valueOf
