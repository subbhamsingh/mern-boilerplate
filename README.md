# mern-boilerplate


# MERN Stack Boilerplate Generator

A CLI tool to generate a fully functional MERN (MongoDB, Express.js, React, Node.js) stack boilerplate with all necessary setup. This boilerplate includes authentication, database connection, and a basic frontend layout, so you can start building your application right away.

---

## Features

- **Backend**:
  - Authentication (Register/Login) with JWT
  - MongoDB connection
  - API routes and controllers
  - Error handling middleware
  - Environment variable support (`.env`)

- **Frontend**:
  - React with React Router
  - Basic layout (Navbar, Footer)
  - Pages: Home, Login, Register
  - State management (Context API or Redux-ready)
  - Axios for API integration

- **Common**:
  - `.gitignore` for both client and server
  - `README.md` with setup instructions
  - Scripts to run the client and server concurrently

---

## Step-by-Step Guide to Set Up the MERN Stack Boilerplate

### Step 1: Install the Package Globally

1. Open your terminal or command prompt.
2. Install the package globally using npm:

   ```bash
   npm install -g mern-boilerplate-generator

   Step 2: Generate a New MERN Project
Navigate to the directory where you want to create your project.

Run the following command to generate a new MERN stack project:

bash
Copy
create-mern-app my-mern-app
Replace my-mern-app with your desired project name.

The boilerplate will be created in a folder named my-mern-app.

Step 3: Navigate to the Project Folder
Move into the newly created project folder:

bash
Copy
cd my-mern-app
Step 4: Set Up the Backend (Server)
Navigate to the server folder:

bash
Copy
cd server
Install the required dependencies:

bash
Copy
npm install
Create a .env file in the server folder and add the following environment variables:

Copy
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret with a secret key for JWT.

Start the server:

bash
Copy
npm start
The server will start running on http://localhost:5000.

Step 5: Set Up the Frontend (Client)
Open a new terminal window and navigate to the client folder:

bash
Copy
cd client
Install the required dependencies:

bash
Copy
npm install
Start the React development server:

bash
Copy
npm start
The client will start running on http://localhost:3000.

Step 6: Explore the Boilerplate
Backend
The server is set up with authentication (register/login) and MongoDB connection.

API routes are available in the server/routes folder.

Controllers and models are located in the server/controllers and server/models folders, respectively.

Frontend
The React app includes a basic layout with a Navbar, Home, Login, and Register pages.

Pages are located in the client/src/pages folder.

Components are located in the client/src/components folder.

Step 7: Customize the Project
Backend
Add new routes, controllers, and models as needed.

Modify the existing authentication logic in server/controllers/authController.js.

Frontend
Add new pages and components.

Integrate the frontend with the backend API using Axios or Fetch.

Step 8: Run the Project
Ensure both the server and client are running:

Server: http://localhost:5000

Client: http://localhost:3000

Open your browser and navigate to http://localhost:3000 to view the React app.

Additional Notes
Environment Variables: Always keep your .env file secure and do not commit it to version control (e.g., Git). Add .env to your .gitignore file.

Database: Ensure your MongoDB server is running and accessible.

API Integration: Use tools like Postman to test your backend API endpoints.