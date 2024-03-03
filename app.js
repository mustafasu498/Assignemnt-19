// Chapter no 14/16
// Q1
var studentNames = [];
// Q2
var studentNames = ["Aman","ahmed","Sameer","Mukarram","Rohan"];
// Q3
var numberArr = [0, 1, 2, 3, 4];
// Q4
var booleanArr = [true, false, true, false];
// Q6


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>","1) ",qualifications[0],"<br>");
document.write("2) ",qualifications[1],"<br>");
document.write("3) ",qualifications[2],"<br>");
document.write("4) ",qualifications[3],"<br>");
document.write("5) ",qualifications[4],"<br>");
document.write("6) ",qualifications[5],"<br>");
document.write("7) ",qualifications[6],"<br>");
document.write("8) ",qualifications[7],"</h1>");

// Q7
var studentNames = ["Ahmed", "Mustafa", "Rohan"];

var studentScores = [400, 450, 380];

var percentages = [];
for (var i = 0; i < studentScores.length; i++) {
    var percentage = (studentScores[i] / 500) * 100;
    percentages.push(percentage);
}

for (var i = 0; i < studentNames.length; i++) {
    console.log("Student: " + studentNames[i]);
    console.log("Score: " + studentScores[i] + " out of 500");
    console.log("Percentage: " + percentages[i] + "%");
    console.log("\n");
}

// Q8

var cities = ["Karachi", "Lahor", "Islamabad", "hyderabad", "Shakkar"];

var selectedCities = [];

selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);

console.log("Selected Cities:");
console.log(selectedCities);

// Q9
var fifoArray = [];
fifoArray.push("Sameer");
fifoArray.push("Ahmed");
fifoArray.push("Mustafa");

console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());

// Q10
var lifoArr = [];

lifoArr.unshift("Sameer");
lifoArr.unshift("Ahmed");
lifoArr.unshift("Mustafa");

console.log(lifoArr.shift());
console.log(lifoArr.shift());
console.log(lifoArr .shift());

// Q11
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='manufacturerSelect'>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
