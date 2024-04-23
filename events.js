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
const axios = require('axios');

const app = express();
const port = 8011;

app.use(express.json());


const HASURA_GRAPHQL_ENDPOINT = 'http://localhost:9695/v1/graphql';

app.post('/photo_event', async (req, res) => {
    console.log(req.body);

    // Extract photoId from request body
    const photoId = req.body.event.data.new.id;

    try {
        // Construct GraphQL mutation
        const mutation = `
            mutation InsertBlogTable($photoId: Int!, $type: String!) {
                insert_blog_table(objects: {id: $photoId, type: $type}) {
                    affected_rows
                }
            }
        `;

        const variables = {
            photoId,
            type: 'created'
        };

        // Send HTTP POST request to Hasura GraphQL endpoint
        const response = await axios.post(
            HASURA_GRAPHQL_ENDPOINT,
            {
                query: mutation,
                variables
            }
        );

        // Check if mutation was successful
        if (response.data.data && response.data.data.insert_blog_table) {
            res.sendStatus(200);
        } else {
            // Handle mutation failure
            console.error('Mutation failed:', response.data);
            res.status(500).send('Failed to insert into blog_table');
        }
    } catch (error) {
        // Handle HTTP request error
        console.error('Error executing GraphQL mutation:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
