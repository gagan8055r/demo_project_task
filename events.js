// const express=require('express')
//
// const app=express()
// const port=8011;
//
// const {Sequelize} = require("sequelize");
// app.use(express.json());
//
// // const POSTGRES_CONNECTION_STRING="postgres://postgres:postgrespassword@postgres:5432/FirstDB"
// const POSTGRES_CONNECTION_STRING="postgres://postgres:postgrespassword@hasura-graphql-postgres-1:5432/FirstDB"
//
// app.post("/photo_event",async (req,res)=>{
//     console.log(req.body)
//
//
//     const sequelize=new Sequelize(POSTGRES_CONNECTION_STRING,{})
// const photoId=req.body.event.data.new.id
//     try {
//
//
//         await sequelize.query("INSERT INTO blog_table(id,type) values(:photoId,:type)", {
//             replacements: {
//                 photoId,
//                 type: "created"
//             }
//         })
//         res.sendStatus(200)
//     }catch (error)
//     {
//         console.error("Error executing SQL query:", error);
//         res.status(500).send("Internal Server Error");
//     }
// }
// )
// app.listen(port,()=>{
//     console.log(`the port is listening on the port number ${port}....`)
// })
//


const express = require('express');
// const axios = require('axios');
const Sequelize=require('sequelize')
const app = express();
const port = 8000;

app.use(express.json());

const POSTGRES_CONNECTION_STRING = 'postgres://postgres:postgrespassword@localhost:5432/postgres';

app.post('/photo_event', async (req, res) => {
    console.log(req.body);

    const sequelize=await new Sequelize(POSTGRES_CONNECTION_STRING,{})
const id=req.body.event.data.new.id
    await sequelize.query("INSERT INTO blog_table(blog_id,type) values (:id,:type)",{
        replacements:{
            id,
            type:"created"
        }
    })
res.status(200)

});



// app.post('/update_photo_descrip', async (req, res) => {
//     try {
//         console.log(req.body);
//
//         const { id, new_description } = req.body.input;
//
//
//         const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING);
//
//
//         const [updatedRowsCount, updatedRows] = await sequelize.query(
//             'UPDATE photos_details SET photo_description = :new_description WHERE id = :id',
//             {
//                 replacements: { id: id, new_description: new_description }
//             }
//         );
//
//
//         if (updatedRowsCount > 0) {
//
//             res.status(200).json({ updateDescription: `Description updated for photo with ID ${id}` });
//         } else {
//
//             res.status(404).json({ error: `Photo with ID ${id} not found` });
//         }
//     } catch (error) {
//         console.error('Error updating photo description:', error);
//
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
app.post('/update_photo_descrip', async (req, res) => {
    try {
        console.log(req.body);

        // Extract id and new_description from the request body
        const { id, new_description } = req.body.input;

        // Create a Sequelize instance
        const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING);

        // Update the photo description in the photos_details table
        const [updatedRowsCount, updatedRows] = await sequelize.query(
            'UPDATE photos_details SET photo_description = :new_description WHERE id = :id',
            {
                replacements: { id: id, new_description: new_description }
            }
        );

        // Check if any rows were updated
        if (updatedRowsCount > 0) {
            // Send a JSON response with the updated description
            res.status(200).json({ message: `Description updated for photo with ID ${id}` });
        } else {
            // Send a JSON response indicating that the photo was not found
            res.status(404).json({ message: `Photo with ID ${id} not found` });
        }
    } catch (error) {
        console.error('Error updating photo description:', error);
        // Send a JSON response for internal server error
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

