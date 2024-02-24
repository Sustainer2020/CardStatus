# Card Status API

This project implements an internal API for retrieving the status of a user's card. The API combines data from partner companies and returns the current status of a card when queried.

## Overview

The API is built using Express.js and MongoDB. It provides an endpoint `/get_card_status` that takes a user's phone number or card ID as input and returns the card's status.

The data from partner companies is stored in CSV files located in the `data` folder. The API reads this data, processes it, and provides the status of the card.

## Setup

1. **Clone the Repository**: `git clone <repository_url>`
2. **Install Dependencies**: `npm install`
3. **Configure MongoDB**: Ensure MongoDB is installed and running. Update the MongoDB connection string in `db.js` file.
4. **Run the Server**: `npm start`

## API Endpoint

-   **GET /get_card_status**: Retrieves the status of a card based on the user's phone number or card ID. Example usage: `/get_card_status?phoneNumber=1234567890&cardId=ZYW8890`

## File Structure

-   `server.js`: Express.js server setup and endpoint implementation.
-   `db.js`: MongoDB connection setup.
-   `importData.js`: Script to import data from CSV files to MongoDB.
-   `data/`: Folder containing CSV files with card status information from partner companies.
-   `watcher.js` : Script to watch and update if any changes made to csv files
-   `README.md`: Project documentation.

## Software Architecture

The software architecture of the project follows a simple client-server architecture. It consists of the following components:

1. **Client**: There's no specific client-side application in this project as it focuses on building an internal API. However, clients (e.g., frontend applications or other services) can interact with the API to retrieve card status information.

2. **Server**: The server-side application is responsible for handling incoming requests, processing data, and returning responses. It's built using Express.js, a lightweight and flexible Node.js web application framework.

3. **Database**: MongoDB is used as the database to store card status information. It's a NoSQL database that provides scalability, flexibility, and high performance for handling large volumes of data.

## Tech Stack Used

The technology stack used in the project includes the following components:

1. **Backend**:

    - **Node.js**: A JavaScript runtime environment that executes JavaScript code outside of a web browser.
    - **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
    - **MongoDB**: A NoSQL document database that stores data in flexible, JSON-like documents.

2. **Data Management**:
    - **CSVtoJSON**: A Node.js module to convert CSV data to JSON format, used for parsing data from CSV files.
    - **MongoDB Node.js Driver**: Official MongoDB driver for Node.js that enables interaction with MongoDB databases from Node.js applications.

## Usage
1. Start the server: `npm start`.
2. Access the API endpoint to retrieve card status.

## Future Improvements

-   Add authentication and authorization mechanisms.
-   Implement caching for improved performance.
-   Enhance error handling and logging.
-   Implement additional endpoints for CRUD operations on card status data.
