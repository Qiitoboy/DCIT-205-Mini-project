
# SCHOOL MANAGEMENT SYSTEM BACKEND

This is a backend application for a school management system that allows users to retrieve and store student details using GET and POST requests.
The application is built using Node.js and Express, and it uses MongoDB as the database.





ENDPOINTS

 ✔️/api/v1/create-student

This endpoint uses a POST request

This endpoint takes in a request body of properties : fName, lName, programme and residence

If the student is created, it returns a Status code of 201 and the Student Created.


✔️ /api/v1/find-student/<id>

This endpoint uses a GET request

It returns a the student whose student ID is placed after the endpoint

example : localhost:5000/api/v1/find-student/10945448


✔️TECHNOLOGIES USED

The following tools were used in this project:

Express
TypeScript
Node.js
MongoDB
Mongoose



