// from data.js
var tableData = data;

// YOUR CODE HERE!

//console.log(tableData[0].city);

var table_body=d3.select("tbody")

tableData.forEach((ufo_data) =>{
   
   //console.log(ufo_data);
   var table_row= table_body.append("tr");

   Object.entries(ufo_data).forEach(([key,value])=>{
    var table_col= table_row.append("td");
    table_col.text(value);

   });

});

function filterbydate(selected_date,ufo_sighting){
    //console.log(selected_date);
    //console.log(ufo_sighting.datetime);
    return ufo_sighting.datetime===selected_date;

};

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

//
var date_filter_btn=d3.select("#filter-btn");

//
var date_filter_form=d3.select("#form-date-filter");

//console.log(date_filter_btn.text());

//Create event handlers

date_filter_btn.on("click",submit_date_filter);
date_filter_form.on("submit",submit_date_filter);

// Event handler function for the date filter
function submit_date_filter() {

    //console.log(d3.event.target);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var selected_date = inputElement.property("value");

    //console.log(tableData);
    console.log(selected_date);

    if (selected_date){

    var filtered_by_sighting_date=tableData.filter(filterbydate.bind(this,selected_date));
    
    //Set the table body to blank
    d3.select("tbody").html("");
    console.log(filtered_by_sighting_date);

    buildfilteredtable(filtered_by_sighting_date);
    }
    else {
        alert("Please enter date in format m/d/yyyy");
        //console.log("In Else part")
    }

    
};

function buildfilteredtable(data){}