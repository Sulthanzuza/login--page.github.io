const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "views" directory
app.use(express.static("views"));

const emailDB = "sulthansha@gmail.com";
const passwordDB = "12345";

app.post("/login", (req, res) => {
    const{email, password}=req.body;
    if(email==emailDB &&password==passwordDB){
        res.redirect("/home.html")
    }else{
        res.send("login failed");
        
    }
   
});
app.use("/login", (req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
    next();
});


// Use a port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and log a message
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
