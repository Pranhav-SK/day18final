

// Function to fetch Chuck Norris joke
function fetchChuckNorrisJoke() {
    return fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => data.value)
      .catch(error => {
        console.error('Error fetching Chuck Norris joke:', error);
        return 'Failed to fetch Chuck Norris joke.';
      });
  }
  
  // Function to fetch random dog fact
  function fetchRandomDogFact() {
    return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
      .then(response => response.json())
      .then(data => data.message)
      .catch(error => {
        console.error('Error fetching random dog fact:', error);
        return 'Failed to fetch random dog fact.';
      });
  }
  
  // Function to fetch favicon
  function fetchFavicon(url) {
    const api = `https://www.icon.horse`;
    
    return fetch(api)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch favicon');
        }
        return response.url;
      })
      .catch(() => fallback);
  }
  
  // Display Chuck Norris joke
  function displayChuckNorrisJoke() {
    fetchChuckNorrisJoke()
      .then(joke => {
        document.getElementById('Chuck Norris joke').textContent = joke;
      });
  }
  
  // Display random dog fact
  function displayRandomDogFact() {
    fetchRandomDogFact()
      .then(fact => {
        document.getElementById('dog-fact').textContent = fact;
      });
  }
  
  // Display favicon
  function displayFavicon() {
    const url = window.location.hostname;
    fetchFavicon(url)
      .then(faviconUrl => {
        document.getElementById('favicon').src = faviconUrl;
      });
  }
  
  // Initial display
  displayChuckNorrisJoke();
  displayRandomDogFact();
  displayFavicon();
  