const express = require("express");
require("dotenv").config();
const schema = require("./schema/schema");
const colors = require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server running on port ${port}`));
