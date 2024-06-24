# **User-Management-Assignment**

## **Description**
This repository contains a **Node.js** application for managing users, complete with CRUD operations. It employs **Express** for routing, **Mongoose** for MongoDB interaction, and includes middleware for request handling.

## **Features**
- **User Authentication**: Register and log in users with hashed passwords.
- **CRUD Operations**: Create, read, update, and delete user information.
- **Error Handling**: Middleware for handling errors and validation.
- **Environment Configuration**: Utilizes environment variables for configuration.

## **Installation**
1. Clone the repository:
    ```sh
    git clone https://github.com/SALILMEHAN/User-Management-Assignment.git
    ```
2. Navigate to the project directory:
    ```sh
    cd User-Management-Assignment
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```env
        PORT=your_port
        MONGO_URL=your_mongodb_uri
        TOKEN_SECRET=your_token_secret
        ```

## **Usage**
1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on the specified port. Use Postman or any API client to test the endpoints.

## **Project Structure**

├── Config<br>
│ └── database.js<br>
├── Controllers<br>
│ └── userController.js<br>
├── Middleware<br>
│ └── isAuthenticated.js<br>
│ └── validate.js<br>
├── Model<br>
│ └── userSchema.js<br>
├── Routes<br>
│ └── userRoute.js<br>
├── .gitignore<br>
├── index.js<br>
├── package-lock.json<br>
├── package.json<br>
└── README.md<br>


## **Endpoints**
- **POST** `/worko/user` - Create a new user.
- **POST** `/worko/user/login` - Login an existing user.
- **GET** `/worko/user/logout` - Logout user.
- **GET** `/worko/user` - Get a list of all users.
- **GET** `/worko/user/:userId` - Get a specific user.<br>
  ###### For Next 3, you need to **Logged in** for Performing Operations
  
- **PUT** `/worko/user` - Update Logged in user's all information.
- **PATCH** `/worko/user` - Update Logged in user's some information.
- **DELETE** `/worko/user` - Soft Delete Logged in user.

## **Deployment**
The project is deployed and accessible at [https://user-management-assignment.onrender.com](https://user-management-assignment.onrender.com). Users can interact with the API using tools like Postman, ThunderClient, etc., by using the following URLs:

- **POST** `https://user-management-assignment.onrender.com/worko/user` - Create a new user.
- **POST** `https://user-management-assignment.onrender.com/worko/user/login` - Login an existing user.
- **GET** `https://user-management-assignment.onrender.com/worko/user/logout` - Logout user.
- **GET** `https://user-management-assignment.onrender.com/worko/user` - Get a list of all users.
- **GET** `https://user-management-assignment.onrender.com/worko/user/:userId` - Get a specific user.<br>
  ###### For Next 3, you need to **Logged in** for Performing Operations
  
- **PUT** `https://user-management-assignment.onrender.com/worko/user` - Update Logged in user's all information.
- **PATCH** `https://user-management-assignment.onrender.com/worko/user` - Update Logged in user's some information.
- **DELETE** `https://user-management-assignment.onrender.com/worko/user` - Soft Delete Logged in user.

## **Templates**
To execute actions on platforms such as Postman or ThunderClient, such as performing operations like POST, PUT, or PATCH, navigate to the body section and choose JSON as the raw format. Then, adjust the body content according to the provided template below:

{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"Email":"",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"Name":"",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"Age":"",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"City":"",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"Password":"",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"ZipCode":""<br>
}<br>

---
