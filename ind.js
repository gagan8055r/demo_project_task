// import { ApolloServer, gql } from 'apollo-server';
// import db from './db.js';
//
// // import { db } from './knex.js';
// const typeDefs = gql`
//   type Game {
//     id:ID!,
//     title:String!,
//     platform:[String!]!,
//     reviews:[Review]!
//   }
//   type Review
//   {
//   id:ID!,
//   content:String!,
//   rating:Int!,
//   author_id:String!,
//   game_id:String!,
//   game:Game!,
//   author:Author!
//   }
//
//   type  Author{
//   id:ID!,
//   name:String!,
//   verified:Boolean!,
//   reviews:[Review]
//   }
//
//   type Query
//   {
//   reviews:[Review]
// review(id:ID):Review
//   games:[Game]
//   game(id:ID!):Game
//   authors:[Author]
//   author(id:ID!):Author
//   },
//   type Mutation
//   {
//   insertGame(game:insertGameData):Game
//   removeGame(id:ID!):[Game]
//   updateGame(id:ID!,upd:updateGameData):Game
//   }
//
//   input insertGameData
//   {
//   title:String!,
//   platform:[String!]!,
//
//   }
//   input updateGameData
//   {
//   title:String!,
//   platform:[String!]!
//   }
//
// `;
//
// const resolvers = {
//     Query: {
//        games()
//        {
//            return db.games
//        },
//         authors()
//         {
//             return db.authors
//         },
//         reviews()
//         {
//             return db.reviews
//         },
//         review(_, args) {
//             return db.reviews.find(review => review.id == args.id);
//         },
//          game(_,args)
//      {
//     return db.games.find(small=>small.id==args.id)
//       },
//       author(_,args)
//       {
//           return   db.authors.find(small => small.id==args.id)
//       }
//     },
//
//     Game:{
//         reviews(parent) {
// const matchedItems=db.reviews.filter(chunck=>chunck.game_id==parent.id)
//             return matchedItems.length>0?matchedItems:[]
//         }
//     },
//
//     Author:{
//         reviews(parent) {
//             return db.reviews.filter(chunck=>chunck.author_id==parent.id)
//         }
//     }
// ,
//     Review:{
//         author(parent) {
//             return db.authors.find(chunck =>chunck.id==parent.author_id)
//         },
//         game(parent) {
//             return db.games.find(chunck=>chunck.id==parent.game_id);
//         }
//     },
// Mutation:{
//         removeGame(_,args)
//         {
//            return db.games.filter((chunck)=>chunck.id!=args.id)
//
//         },
//         insertGame(_,args)
//         {
//              const gm={
//                  ...args.game,
//                  id:Math.floor(Math.random()*1000).toString()
//              }
//              db.games.push(gm)
//
//             return gm
//         },
//         updateGame(_,args)
//         {
//             const updategm=db.games.map(gm=>
//                 gm.id==args.id?{...gm,...args.upd}:gm
//             )
//             db.games=updategm
//             return db.games.find(chunck=>chunck.id==args.id)
//
//         }
//
// }
//
// };
//
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });
//
// async function startServer() {
//     const { url } = await server.listen({ port: 4000 });
//     console.log(`Server ready at: ${url}`);
// }
//
// startServer().catch(error => {
//     console.error('Error starting server:', error);
// });


const { ApolloServer, gql } = require('apollo-server');
// const { db } = require('./knex.js');
const knex=require('./knex')

const typeDefs = gql`
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review]!
  }
  type Review {
    id: ID!
    content: String!
    rating: Int!
    author_id: String!
    game_id: String!
    game: Game!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review]
  }

  type Query {
    reviews: [Review]
    review(id: ID): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    insertGame(game: insertGameData): Game
    removeGame(id: ID!): [Game]
    updateGame(id: ID!, upd: updateGameData): Game
  }

  input insertGameData {
    title: String!
    platform: [String!]!
  }
  input updateGameData {
    title: String!
    platform: [String!]!
  }
`;
           // /add pagination

const resolvers = {
    Query: {
        games() {
            // return db.games();
            return knex('games').select('*')
        },
        authors() {
            // return db.authors();
            return knex('authors').select('*')
        },
        reviews() {
            // return db.reviews();
            return knex('reviews').select('*')
        },

        review(_, args) {
            // return db.reviews.find(review => review.id === args.id);
            return knex('reviews').select('*').where('id','=',args.id).first()
        },
        game(_, args) {
            // return db.games.find(small => small.id === args.id);
            return knex('games').select('*').where('id','=',args.id).first()
        },
        author(_, args) {
            // return db.authors.find(small => small.id === args.id);
            return knex('authors').select('*').where('id','=',args.id).first()
        }
    },

//     Game: {
//         reviews(parent) {
//             const matchedItems = db.reviews.filter(chunck => chunck.game_id === parent.id);
// //             return matchedItems.length > 0 ? matchedItems : [];
//         }
//     }

    Game: {
        reviews(parent) {
            return knex('reviews').where('game_id', '=', parent.id).then(reviews => reviews);
        }
    },

//
//     Author: {
//         reviews(parent) {
//             return db.reviews.filter(chunck => chunck.author_id === parent.id);
//         }
//     },
    Author:{
        reviews(parent)
        {
            return knex('reviews').where('author_id','=',parent.id).then(chunck  => chunck)
        }
    },
//
//     Review: {
//         author(parent) {
//             return db.authors.find(chunck => chunck.id === parent.author_id);
//         },
//         game(parent) {
//             return db.games.find(chunck => chunck.id === parent.game_id);
//         }
//     },

    Review:{
        author(parent) {
            return knex('authors').where('id','=',parent.author_id).first().then(chunck =>chunck)
        },
        game(parent)
        {
            return  knex('games').where('id','=',parent.game_id).first().then(chunck =>chunck)
        }
    }
//
//     Mutation: {
//         removeGame(_, args) {
//             return db.games.filter(chunck => chunck.id !== args.id);
//         },
//         insertGame(_, args) {
//             const gm = {
//                 ...args.game,
//                 id: Math.floor(Math.random() * 1000).toString()
//             };
//             db.games.push(gm);
//             return gm;
//         },
//         updateGame(_, args) {
//             const updatedGames = db.games.map(gm =>
//                 gm.id === args.id ? { ...gm, ...args.upd } : gm
//             );
//             db.games = updatedGames;
//             return db.games.find(chunck => chunck.id === args.id);
//         }
//     }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function startServer() {
    const { url } = await server.listen({ port: 4000 });
    console.log(`Server ready at: ${url}`);
}

startServer().catch(error => {
    console.error('Error starting server:', error);
});