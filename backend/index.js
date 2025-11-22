import express from "express";
// commented code for testing server
const app = express();
app.use(express.static('dist'));
const PORT =4000;
// app.get("/",(req,res)=>{
//     res.json({
//         "message": "hello ji kaise ho??"
//     });
// })
//get a list of 5 jokes
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {"number " : 1,
        "message" : "Why don't scientists trust atoms? Because they make up everything!"},
        {"number " : 2,
        "message" : "Why did the scarecrow win an award? Because he was outstanding in his field!"},
        {"number " : 3,
        "message" : "Why don't skeletons fight each other? They don't have the guts."},
        {"number " : 4,
        "message" : "What do you call fake spaghetti? An impasta!"},
        {"number " : 5,
        "message" : "Why did the bicycle fall over? Because it was two-tired!"}
    ];
    res.send(jokes);
})
app.listen(PORT,(message)=>{
    console.log(`server is running on port : ${PORT}`);
    
})
