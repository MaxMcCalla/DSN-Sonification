fetch('https://eyes.nasa.gov/dsn/data/dsn.json')
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => {
    var i = 0;
    for(const dish in data.dishes){
      i++;
      console.log(data.dishes[dish].desc)
      console.log("antenna"+i)
      const element = document.getElementById("antenna"+i);
      element.innerHTML = dish + " " + data.dishes[dish].desc
      for(const sig in dish.sigs){
        console.log(sig.active)
      }
    }
  }) // Work with the parsed data
  .catch(error => console.error('Error fetching data:', error)); // Handle network errors
