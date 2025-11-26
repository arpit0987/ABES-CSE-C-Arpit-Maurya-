const express=require('express');
const app=express();
const port = 8080;

app.get('/',(req,res) => {
    res.send("this is my first server");
})
app.get('/about',(req,res) => {

    const students=[
        {
            id: 1,
            name: "arpit",
            class: "10"

        },
        {
            id: 2,
            name: "ayush",
            class: "11"

        },
        {
            id: 3,
            name: "raj",
            class: "9"

        },
        {
            id: 4,
            name: "ravi",
            class: "12"

        },
        {
            id: 5,
            name: "shubham",
            class: "8"

        }
    ]
    res.send(students);
})
app.get('/contact',(req,res) => {
    res.send("<h1>this is my first contact server</h1>");
})

app.listen(port,()=>{
     console.log(`Server is running at: http://localhost:${port}`);

})
