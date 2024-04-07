fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(jokedata => {
    const jokeText = jokedata.joke;
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = jokeText;
  })
  .catch(error => {
    console.error('Error fetching joke:', error);
  });
