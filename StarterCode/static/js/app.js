// from data.js
var tableData = data;

// YOUR CODE HERE!

console.log(tableData[0].city);

var table_body=d3.select("tbody")

tableData.forEach((ufo_data) =>{
   
   console.log(ufo_data);
   var table_row= table_body.append("tr");

   Object.entries(ufo_data).forEach(([key,value])=>{
    var table_col= table_row.append("td");
    table_col.text(value);

   });

});

