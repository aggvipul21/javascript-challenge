// from data.js
var tableData = data;

// YOUR CODE HERE!

//console.log(tableData[0].city);

function builddatatable(ufo_sighting){

//console.log(ufo_sighting);
var table_body=d3.select("tbody");
table_body.html("");

    if(Array.isArray(ufo_sighting) && ufo_sighting.length){

        ufo_sighting.forEach((ufo_data) =>{

            //console.log(ufo_data);
            var table_row= table_body.append("tr");

            Object.entries(ufo_data).forEach(([key,value])=>{
                var table_col= table_row.append("td");
                table_col.text(value);
            });
        });
    }
    else {

        alert(`No sightings found for selected parameters`)
        // date: ${selected_date}.Please enter correct date in format m/d/yyyy`)
    }
};

function filterbydate(parameter_name,parameter_value,ufo_sighting){
    //console.log(selected_date);
    //console.log(ufo_sighting.datetime);
    if (parameter_name==='datetime'){
        return ufo_sighting.datetime===parameter_value;
    }
    else {
        //console.log(parameter_name);
        //console.log(ufo_sighting[parameter_name]);
        return ufo_sighting[parameter_name].toLowerCase()===parameter_value.toLowerCase();
    }

};

//Initialize a variable for filter button
var data_filter_btn=d3.select("#filter-btn");

//Initialize a variable for filter form
var data_filter_form=d3.select("#form-date-filter");

//Create event handlers

data_filter_btn.on("click",submit_filter);
data_filter_form.on("submit",submit_filter);

// Event handler function for the date filter
function submit_filter() {

    //console.log(d3.event.target);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Start --> Select input element for all parameters
    // Select the input element of Date parameter and get the raw HTML node
    var inputDateElement = d3.select("#datetime");
    // Select the input element of city parameter and get the raw HTML node
    var inputCityElement = d3.select("#city");
    // Select the input element of state parameter and get the raw HTML node
    var inputStateElement = d3.select("#state");
    // Select the input element of country parameter and get the raw HTML node
    var inputCountryElement = d3.select("#country");
    // Select the input element of shape parameter and get the raw HTML node
    var inputShapeElement = d3.select("#shape");
    //End --> Select input element for all parameters

    //Start --> Get prperty value for elements for all parameters
    // Get the value property of the input element of Date parameter
    var selected_date = inputDateElement.property("value");
    // Get the value property of the input element of city parameter
    var selected_city = inputCityElement.property("value");
    // Get the value property of the input element of state parameter
    var selected_state = inputStateElement.property("value");
    // Get the value property of the input element of country parameter
    var selected_country = inputCountryElement.property("value");
    // Get the value property of the input element of shape parameter
    var selected_shape = inputShapeElement.property("value");
    //End --> Select prperty value for elements for all parameters
    
    //Initialize filtereddata table with all data as table would be filtered for each parameter and filtered data would be passed 
    //to next filter instead of all data
    var filteredData=tableData;
    //Check value of each parameter and if exists then call filter function for that parameter
    if (selected_date || selected_city || selected_state || selected_country || selected_shape){
        //Call filterbyparameter for datetime parameter if value entered in parameter
        if (selected_date){

            var filteredData=filteredData.filter(filterbydate.bind(this,'datetime',selected_date));    
            console.log(filteredData);        
        }
    
        //Call filterbyparameter for city parameter if value entered in parameter
        if (selected_city){
    
            var filteredData=filteredData.filter(filterbydate.bind(this,'city',selected_city));    
            console.log(filteredData);        
        }
    
        //Call filterbyparameter for state parameter if value entered in parameter
        if (selected_state){
    
            var filteredData=filteredData.filter(filterbydate.bind(this,'state',selected_state));    
            console.log(filteredData);        
        }
    
        //Call filterbyparameter for country parameter if value entered in parameter
        if (selected_country){
    
            var filteredData=filteredData.filter(filterbydate.bind(this,'country',selected_country));    
            console.log(filteredData);        
        }
    
        //Call filterbyparameter for shape parameter if value entered in parameter
        if (selected_shape){
    
            var filteredData=filteredData.filter(filterbydate.bind(this,'shape',selected_shape));    
            console.log(filteredData);        
        }
    
        //Build data table for data filtered based on parameters selected
        builddatatable(filteredData);

    }

    else {
        alert("Please enter value in at least one of the parameter before search");
    }
};

//Build data table on page load
builddatatable(tableData);