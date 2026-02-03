fetch('https://eyes.nasa.gov/dsn/data/dsn.json')
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => {
    var i = 0;
    for(const dish in data.dishes){
      i++;
      console.log("antenna" + dish)
      console.log(data.dishes[dish].desc)
      const element = document.getElementById("antenna"+i);
      element.innerHTML = dish + " " + data.dishes[dish].desc
      for(const sig in data.dishes[dish].sigs){
        if(data.dishes[dish].sigs[sig].active == true){
          console.log(data.dishes[dish].sigs[sig].dir)
          element.innerHTML = element.innerHTML + " " + data.dishes[dish].sigs[sig].dir
        }
      }
    }
  }) // Work with the parsed data
  .catch(error => console.error('Error fetching data:', error)); // Handle network errors
