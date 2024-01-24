// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://saurabhabbu:WZ3UZrEEh3kLt8Cc@sampledb.a4buutr.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // // Connect the client to the server	(optional starting in v4.7)
//     // const db = await client.connect();
//     // // await db.createcollection("sample");
//     // // Send a ping to confirm a successful connection
//     // const sample = client.db("myDB").collection("sample");
//     // const doc = { name: "Neapolitan pizza", shape: "round" };
//     // const result = await sample.insertOne(doc);
    
//     // console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     // console.log(result);
//     // console.log(
//     //   "Pinged your deployment. You successfully connected to MongoDB!"
//     // );

//     await client.connect();
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


