var fullName = prompt("Enter your Full Name ....");
var fName;
var lName;
var mName;
fullName = fullName.toUpperCase();

for (var i = 0; i < fullName.length; i++) {
    if (fullName.slice(i, i + 1) == ' ') {
        fName = fullName.slice(0, i);
        lName = fullName.slice(i, fullName.length);
        mName = " ";
        break;
    }
}
for (var x = 0; x < lName.length; x++) {
    if (lName.slice(i, i + 1) == ' ') {
        mName = lName.slice(0, i);
        lName = lName.slice(i, lName.length);

    }
}
window.onload = function () {
    document.getElementById("firstName").innerHTML = fName;
    document.getElementById("middleName").innerHTML = mName;
    document.getElementById("lastName").innerHTML = lName;
};
