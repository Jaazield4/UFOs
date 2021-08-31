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

// Create a function to handle wat to do after an input is given, such as filtering by date
function handleClick() {
    // Telling D3 not only to look for where date values are stored on the webpage, but to actrually grab that info and hold it in the "date" variable
    let date = d3.select('#datetime').property('value');
    // Set a default filter and save to a new variable, if no filter is set then all the data from the orignial table will show
    let filteredData = tableData;
    // if statement to show only the rows where the date is equal to the date filter we created above
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredDatat will just be the original tableData
    buildTable(filteredData);
};

// 
d3.selectAll("#filter-btn").on("click", handleClick);

// Call the buildTable function
buildTable(tableData);