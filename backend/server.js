import express from 'express';
// module type , work like asychronous,,
// const express = require ('express');

const app = express();

// app.get('/', (req, res) => {
//     // console.log('Server is running!')
//     res.send('Server is ready');
// });

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// get a list of 5 jockes 
    app.get('/api/jokes', (req, res) => {
        const jokes = [
        {
            "id": 1, 
            title: 'A joke', 
            content: 'This is a joke'

        },
        {
            "id": 2, 
            title: 'Another joke', 
            content: 'This is another joke'

        },
        {
            "id": 3, 
            title: 'A third joke', 
            content: 'This is third joke'

        },
        {
            "id": 4, 
            title: 'A fourth joke', 
            content: 'This is a fourth joke'

        },
        {
            "id": 5, 
            title: 'A fifth joke', 
            content: 'This is a fifth joke'

        }
        
    ];
     res.send(jokes);
    // res.json(jokes);
    });


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});









// app.use(express.json()); //
// let courses = [{ id: 1,
//     name: 'course1',
//     description: "this is a course about ...",      
//     createdBy: 'Mohamed' },
//     ];

// function validateCourse (course) {
//     if (!course.name || !course         
//         .description || !course.createdBy ) return false;
//     else return true;           
//     }



// // get all courses