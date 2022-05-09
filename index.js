// this, and package.json, make up the backend setup for the site 

// First, import needed libraries. We are using express to set up the backend server.
const express = require("express");
// and path to handle where files are 
const path = require("path");
// both of these libraries are specified in package.json, under dependencies. 

// next, we set up the server itself. we assign the express server to a constant.
const app = express();

// we assign a static path, which is the folder where we keep static front-end assets
// we are now able to access anywhere in the static folder for things like pages and images
app.use(express.static(path.join(__dirname, "public")));

// now we respond to users accessing the home page
app.get("/", (req, res) => {
    // basically, when someone goes to the main url, we respond with the home page
    res.sendFile(path.join(__dirname, "static/index.html"));
});

// since we have a static folder, we don't have to worry about requests for images, etc.

// now we tell the app to listen to a specific port. for some web hosts, this is left empty.
// for our purposes I'll set it to 3000 for now. This may change.
app.listen(3000); 