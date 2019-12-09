let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 11)
        return "Good day, " + name;
    else if (hour > 18)
        return "Good evening, " + name;
    else if (hour > 22 || hour < 7)
        return "Good night, " + name;
    else
        return "Good morning, " + name;
}