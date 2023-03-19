Hospital Landing Page
This project is a single page application built with Gatsby.JS and Axios that displays a dynamic reviews section using data from a REST API. The goal of the project was to match the design provided in Figma as closely as possible.

Technologies Used
Gatsby.JS
Axios
REST API
Vercel
Git

Installation
Clone the repository
Install dependencies with npm install
Start the development server with npm start

Usage
The application is a hospital landing page that displays information about the hospital and a dynamic reviews section. Users can view the reviews and see the latest reviews.

API Integration
The dynamic reviews section is created by fetching data from the following REST API endpoint using Axios:
https://admin.tomedes.com/api/v1/get-reviews?page=1
The reviews are displayed using React components that iterate over the data and display it dynamically.

Deployment
The application is deployed on Vercel. To deploy the project:
Create an account on Vercel
Connect your Git repository to Vercel
Configure your build settings and environment variables
Deploy the project

Issues and Bugs
If you encounter any issues or bugs, please create an issue in the repository.

Credits
This project was created by Itish Verma and was based on the design provided in Figma. Special thanks to the creators of Gatsby.JS, Axios, and Vercel for their excellent tools and resources.
