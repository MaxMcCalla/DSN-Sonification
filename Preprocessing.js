fetch('https://eyes.nasa.gov/dsn/data/dsn.json')
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => {

    console.log(data)
  }) // Work with the parsed data
  .catch(error => console.error('Error fetching data:', error)); // Handle network errors
