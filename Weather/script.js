window.addEventListener('load', () => {
    let long;
    let lat;
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
  
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=YOUR_API_KEY&units=metric`;
  
        fetch(api)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
  
            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('description').textContent = description;
          });
      });
    }
  });
  