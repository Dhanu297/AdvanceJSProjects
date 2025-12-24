let studentDetails ={
    name:"Dhanashree",
    age:4,
    country:"India"
}
function display()
{
    return "something"
}

//module.exports = studentDetails; // Node runtime
// export default studentDetails for javascript es6//

module.exports = {studentDetails,displayName: display};