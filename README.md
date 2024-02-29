# ccriptEvaluationTask
## Tech Stacks
#### Frontend
- NextJS
#### Backend 
- Nodejs
- MongoDB
- ExpressJS

## Setup 

There are two folders named **_frontend_**  and **_backend_**. 

### Setup the Frontend

Enter into the frontend folder enter the todo folder and run the command **_npm run dev_** it will start/run the app.
#### **steps**
- cd frontend
- cd todo
- npm run dev

### Setup the Backend

Enter into the backend folder here run the command **_npm run dev_** it will run ur server.
#### **steps**
- cd backend
- npm run dev

## Folder Structure

#### Frontend

In the src folder of the front end, there's an app folder that contains the pages/components that make up our UI.

1) page.js
  In this file, we have placed all our states, functions, or say event handles to handle the event like when a user interacts with the UI. On this page, we are passing the data to the child components through props. 

3) todo.js
  In this file, we have the JSX markup and some conditional rendering that display the UI.

 By separating the logic and markup in different files to enhance readability and code maintainability.


#### Backend

**Server.js is the main entry point of our Server.**

In the backend, I have created separate folders for the controller, router, and model to increase the readability of the code. 

- In the router folder, there is a file named taskRouter I have specified all the routes that we are hitting on our front end.
- In the Model folder, I have created a schema that represents the structure of our data to be stored in a database.
- In the controller folder, all the logic to handle HTTP requests and interact with the Model to perform CRUD operation.


## CRUD Operation

**Create**: Added/Inserted new Tasks by clicking the plus button  
**Read**: Fetching all the tasks to show in UI and this logic to fetch all tasks in written inside page.js file
**Update**: On Clicking the CheckMark Icon just before taskname we can update the status of the task from Not Completed to Completed
**Delete**: The Delete button will delete the specific task that has being completed or inserted wrongly.

## API EndPoints 

-GetAllTasks : **'http://localhost:8080/api/tasks/getAllTasks'**
-UpdateTask : **`http://localhost:8080/api/tasks/updateTask/${taskId}`**
- Deleted Task :  **`http://localhost:8080/api/tasks/deleteTask/${taskId}`**
