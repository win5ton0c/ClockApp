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
      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();

      // Display the formatted time
      timeDisplay1.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
