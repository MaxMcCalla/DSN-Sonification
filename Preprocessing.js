fetch('https://eyes.nasa.gov/dsn/data/dsn.json')
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => {
    var i = 0; 
    for(const dish in data.dishes){
    i++;
    console.log(data.dishes[dish].desc)
    const element = document.getElementById("Antenna"+i);
    element.innerHTML = data.dishes[dish].desc
    }
  }) // Work with the parsed data
  .catch(error => console.error('Error fetching data:', error)); // Handle network errors
