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