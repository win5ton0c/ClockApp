const location1 = 'London';


const button1 = document.getElementById('button1');
const timeDisplay1 = document.querySelector('.hours');

button1.addEventListener('click', () => {
  const apiUrl = `http://worldtimeapi.org/api/timezone/Europe/${location1}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      // data extraction
      const time = data.datetime;

      
      const dateTime = new Date(time);

      // Format the time to display hours and minutes
      const hours = String(dateTime.getHours()).padStart(2, '0');
      const minutes = String(dateTime.getMinutes()).padStart(2, '0')

      // Display the formatted time
      timeDisplay1.textContent = `${hours}:${minutes}`;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});

// second location 

const location2 = 'Sao_Paulo';
const button2 = document.getElementById('button2');
const timeDisplay2 = document.querySelector('.hours');  

button2.addEventListener('click', () => {
  const apiKey = 'xx'; // your api key here
  const apiUrl = `http://api.timezonedb.com/v2/get-time-zone?key=${apiKey}&format=json&by=zone&zone=America/${location2}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      
      const timestamp = data.timestamp;
      const dateTime = new Date(timestamp * 1000); 

      // Format the time to display hours and minutes
      const hours = String(dateTime.getHours()).padStart(2, '0');
      const minutes = String(dateTime.getMinutes()).padStart(2, '0');

      // Display the formatted time in the same div
      timeDisplay2.textContent = `${hours}:${minutes}`;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});

