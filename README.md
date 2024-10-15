# Expense Tracker Backend

## Project Title and Description
Expense Tracker Backend is a server-side application that provides functionality for managing expenses. It interacts with a MongoDB database to store, update, and delete expenses. The backend is designed to work with a frontend application.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/dec7723e-eb8e-4c78-92ab-25e2dd13fcf5" width="300" alt="Expense Tracker Backend">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Backend Information](#backend-information)
- [Frontend Information](#frontend-information)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Add, update, delete expenses.
- Fetch all stored expenses.
- CORS-enabled for communication with the frontend application.

## Installation

### Prerequisites
- Node.js (v18.x or higher)
- npm (v8.x or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/expense-tracker-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd expense-tracker-backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Set up Environment Variables

To run this application, you'll need to set up the following environment variables. Follow these steps:

1. **Create a `.env` file:**  
   In the root directory of your project, create a file named `.env`.

2. **Define the required environment variables:**  
   Add the following variables to your `.env` file. Replace the placeholder values with your actual MongoDB connection string.

   ```env
   PORT=3000
   DATABASE=mongodb+srv://your_mongodb_connection_string
   DATABASE_PASSWORD=your_password
   ```

3. **Obtain a MongoDB Connection String using MongoDB Compass:**  
   To connect your MongoDB Atlas database with MongoDB Compass, follow these steps:

   * Go to the [MongoDB Atlas](https://cloud.mongodb.com/) website.
   * Create or select a project.
   * Deploy a new **free cluster**.
   * Once your cluster is ready, click on **Connect**.
   * Choose **Connect with MongoDB Compass**.
   * Follow the instructions to **download MongoDB Compass**, if you haven’t already.
   * Once downloaded, copy the **connection string** provided. The connection string will look something like this:
     ```text
     mongodb+srv://<USERNAME>:<DATABASE_PASSWORD>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
     ```
   * Replace `<USERNAME>` with your MongoDB Atlas credentials. You'll need to input the username and password you created when setting up your MongoDB cluster.
   * Open MongoDB Compass, paste the connection string, and connect to your database.

4. **Secure your environment variables:**  
   Ensure your `.env` file is included in your `.gitignore` file to avoid exposing sensitive data like your MongoDB connection string.

## Usage

To start the backend server, run the following command:

```bash
npm start
```

The server will run on the specified port (default is 3000). You can access the API endpoints through [http://localhost:3000](http://localhost:3000).

### API Endpoints

| HTTP Method | Endpoint              | Description                | Example Request                             | Example Response                          |
| ----------- | --------------------- | -------------------------- | ------------------------------------------- | ----------------------------------------- |
| GET         | /api/v1/expenses       | Fetch all expenses          | http://localhost:3000/api/v1/expenses       | `{ "status": "success", "data": {...} }`  |
| POST        | /api/v1/expenses       | Add a new expense           | http://localhost:3000/api/v1/expenses       | `{ "status": "success", "data": {...} }`  |
| PATCH       | /api/v1/expenses/:id   | Update an expense by ID     | http://localhost:3000/api/v1/expenses/1     | `{ "status": "success", "data": {...} }`  |
| DELETE      | /api/v1/expenses/:id   | Delete an expense by ID     | http://localhost:3000/api/v1/expenses/1     | `{ "status": "success", "data": null }`   |

## Backend Information

The backend for this project is hosted at the following URL:

- **Backend API:** [https://expense-tracker-v1-backend-e443d7377cc0.herokuapp.com/](https://expense-tracker-v1-backend-e443d7377cc0.herokuapp.com/)

All API endpoints and detailed documentation on how to interact with the backend are provided in this README.

## Frontend Information

The frontend for this project is hosted at the following URL:

- **Frontend Application:** [https://snack.expo.dev/@petrmichal0/expense-tracker-frontend?platform=android](https://snack.expo.dev/@petrmichal0/expense-tracker-frontend?platform=android)

You can access and interact with the application directly through this link. The frontend is designed to work seamlessly with the backend API.

- **Frontend Repository:** [https://github.com/petrmichal0/expense-tracker-frontend](https://github.com/petrmichal0/expense-tracker-frontend)

### Project Structure

```css
expense-tracker-backend/
├── controllers/
│   ├── expenseController.js
├── models/
│   ├── expenseModel.js
├── routes/
│   ├── expenseRoutes.js
├── utils/
│   ├── appError.js
│   ├── catchAsync.js
├── .gitignore
├── app.js
├── server.js
├── package.json
├── package-lock.json
```

### Technologies Used

[![Node.js Badge](https://img.shields.io/badge/-Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#) 
[![Express Badge](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)](#) 
[![MongoDB Badge](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](#)

### Third-Party Libraries

- **Express.js**: Web framework for Node.js used to create the API routes.
- **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment.
- **CORS**: Middleware to enable cross-origin requests between frontend and backend.
- **dotenv**: To handle environment variables securely.
- **Helmet**: Middleware to secure HTTP headers.
- **MongoSanitize**: To prevent MongoDB NoSQL injection attacks.
- **XSS-Clean**: To sanitize user input and prevent cross-site scripting (XSS).
- **Compression**: For compressing responses to reduce data transmission size.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

