const express = require("express");
const app = express();
const port = process.env.PORT || 4000 
const path = require("path");
const {v4: uuidv4} = require('uuid');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const fs = require('fs');

app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/homepage",(req,res)=>{
    res.render("homepage.ejs");
})

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

// In your index.js file

app.post("/resume", (req, res) => {
    try {
        const resumeDataString = req.body.resumeData;
        if (!resumeDataString) {
            return res.status(400).send("No resume data submitted.");
        }
        else{
            const resumeObject = JSON.parse(resumeDataString);
            res.render("resume.ejs", { resume_info: resumeObject });
            console.log(resumeObject);
        }
    } catch (error) {
        console.error("Error processing resume:", error);
        res.status(500).send("Sorry, something went wrong on our end.");
    }
});

app.listen(port,(req,res)=>{
    console.log("Listening on port: ", port);
})