# MERN Authentication App

This is a full-stack MERN (MongoDB, Express, React, Node.js) authentication app that allows users to sign up, log in, and access protected routes.

## Features

- User registration with authentication
- User login with JWT (JSON Web Tokens)
- Protected routes for authenticated users
- User profiles with personalized information and image
- Logout functionality for enhanced security
- Admin login with authentication
- Admin homepage for listing, searching and deleting users

## Technologies Used

- MongoDB for database storage
- Express.js for the backend server
- Vite + React.js for the frontend user interface
- Node.js for the server-side runtime environment
- JSON Web Tokens (JWT) for secure authentication


## Configuration

1. Create a `.env` file in the root directory with the following environment variables:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Run the app: `npm run dev`
2. The app will be accessible at `http://localhost:3000/`


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request.

