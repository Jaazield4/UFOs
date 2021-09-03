// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (This declares the variable tbody and tells JavaScript to look for the <tbody> tags in the HTML)
var tbody = d3.select("tbody");

// Create a function to put the data.js into a table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    let filteredId = changedElement.attr("id");
    console.log(filteredId);

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filteredId] = elementValue;
    }

    else {
      delete filters[filteredId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
}
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    let date = d3.select("#datetime").property("value")
    let city = d3.select("#city").property("value")
    let state = d3.select("#state").property("value")
    let country = d3.select("#country").property("value")
    let shape = d3.select("#shape").property("value")
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    }
    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    }
    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    }
    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    }

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  
};

  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // Call the buildTable function
  buildTable(tableData);