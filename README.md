# Web Worker Example

This project demonstrates the difference between using a web worker and not using a web worker to calculate prime numbers.

## Prerequisites

You need to have Python installed on your system to run the local server.

## Running the Example with Web Worker

To use the web worker, you need to run a local server in the directory where the `index.html` file is located. This is because web workers cannot be run in a file that is opened directly in the browser.

1. Navigate to the `with web worker` folder.
2. Run this command to open an HTTP server in the current directory:
   ```sh
   python -m http.server 8080
   ```
   or this one if you are using unix
      ```sh
   python3 -m http.server 8080
   ```
3. Navigate to localhost:8080/index.html in your browser.
4. Try out the example.

## Running the Example without Web Worker

1. Navigate to the `without web worker` folder.
2. Open the index.html file in your browser.
3. Try out the example.


