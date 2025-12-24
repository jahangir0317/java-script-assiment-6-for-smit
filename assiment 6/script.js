// ================= Q1 =================
document.write("<h3>Q1</h3>");
var firstName = prompt("Enter First Name:");
var lastName = prompt("Enter Last Name:");
var fullName = firstName + " " + lastName;
document.write("Hello " + fullName + "<br>");

// ================= Q2 =================
document.write("<h3>Q2</h3>");
var mobile = prompt("Enter your favorite mobile phone model:");
document.write("Length of input: " + mobile.length + "<br>");

// ================= Q3 =================
document.write("<h3>Q3</h3>");
var country = "Pakistani";
document.write("Index of n: " + country.indexOf("n") + "<br>");

// ================= Q4 =================
document.write("<h3>Q4</h3>");
var text = "Hello World";
document.write("Last index of l: " + text.lastIndexOf("l") + "<br>");

// ================= Q5 =================
document.write("<h3>Q5</h3>");
document.write("Character at index 3: " + country.charAt(3) + "<br>");

// ================= Q6 =================
document.write("<h3>Q6</h3>");
var fullName2 = firstName.concat(" ", lastName);
document.write("Hello " + fullName2 + "<br>");

// ================= Q7 =================
document.write("<h3>Q7</h3>");
var city = "Hyderabad";
document.write(city.replace("Hyder", "Islam") + "<br>");

// ================= Q8 =================
document.write("<h3>Q8</h3>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message.replace(/and/g, "&") + "<br>");

// ================= Q9 =================
document.write("<h3>Q9</h3>");
var strNum = "472";
var num = Number(strNum);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");

// ================= Q10 =================
document.write("<h3>Q10</h3>");
var userText = prompt("Enter any text:");
document.write(userText.toUpperCase() + "<br>");

// ================= Q11 =================
document.write("<h3>Q11</h3>");
var titleText = prompt("Enter text for Title Case:");
var titleCase =
  titleText.charAt(0).toUpperCase() + titleText.slice(1).toLowerCase();
document.write(titleCase + "<br>");

// ================= Q12 =================
document.write("<h3>Q12</h3>");
var num2 = 35.36;
var result = num2.toString().replace(".", "");
document.write(result + "<br>");

// ================= Q13 =================
document.write("<h3>Q13</h3>");
var username = prompt("Enter username:");
if (
  username.includes("@") ||
  username.includes(".") ||
  username.includes(",") ||
  username.includes("!")
) {
  alert("Please enter a valid username");
} else {
  document.write("Username is valid<br>");
}

// ================= Q14 =================
document.write("<h3>Q14</h3>");
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Search item:").toLowerCase();

if (items.includes(search)) {
  document.write(search + " is available<br>");
} else {
  document.write(search + " is not available<br>");
}

// ================= Q15 =================
document.write("<h3>Q15</h3>");
var password = prompt("Enter password:");
if (password.length >= 6 && isNaN(password.charAt(0))) {
  document.write("Password accepted<br>");
} else {
  alert("Invalid password");
}

// ================= Q16 =================
document.write("<h3>Q16</h3>");
var university = "University of Karachi";
var uniArray = university.split(" ");
for (var i = 0; i < uniArray.length; i++) {
  document.write(uniArray[i] + "<br>");
}

// ================= Q17 =================
document.write("<h3>Q17</h3>");
var inputText = prompt("Enter any text:");
document.write(
  "Last character: " + inputText.charAt(inputText.length - 1) + "<br>"
);

// ================= Q18 =================
document.write("<h3>Q18</h3>");
var sentence = "The quick brown fox jumps over the lazy dog";
var count = sentence.toLowerCase().split("the").length - 1;
document.write("Occurrences of 'the': " + count);
