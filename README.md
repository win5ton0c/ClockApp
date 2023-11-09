

# Simple Clock App

This is a simple web-based clock app that allows you to check the current time for two different locations, London and São Paulo. It's a straightforward application that demonstrates how to fetch and display the time from external APIs.

## Features

- Displays the current time for London and São Paulo.
- Click buttons to update and display the time for the selected location.

## Getting Started

1. Clone the repository or download the project files to your local machine.

```shell
git clone https://github.com/win5ton0c/clock-app.git
```

2. Open the `index.html` file in a modern web browser.

3. Click "Button 1" to display the current time for London.

4. Click "Button 2" to display the current time for São Paulo.

## How It Works

.The app uses the World Time API to fetch time data for London based on the "Europe/London" timezone.

.For São Paulo, it uses the TimezoneDB API to fetch time data based on the "America/Sao_Paulo" timezone.

.When you click a button, the app sends an HTTP request to the respective API to get the current time data for the selected location.

.The received time data is parsed and displayed on the web page, including hours and minutes.

## API Key

- The London time data is fetched from the "Europe/London" timezone.

- The São Paulo time data is fetched from the "America/Sao_Paulo" timezone.

- Note: You may need to replace the API key in the code to access the API successfully.

## Contributing

Pull requests and contributions are welcome. If you have suggestions for improvements or bug fixes, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the license terms.

## Author

- Winston

## Acknowledgments

- This project is for educational purposes and demonstrates basic web development and API integration.
- Special thanks to the World Time API for providing time data.
- Feel free to customize and enhance the app to suit your needs and preferences.


