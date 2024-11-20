/*GO TO MONGO DB
CREATE A FREE MD CLUSTER
CREATE A USER 
GET THE CONNECTION STRING*/

//install a mongo db compass

// const { url } = require("inspector")
const { MongoClient } = require("mongodb");
// console.log(saad);

const url =
  "mongodb+srv://MohdSaad:XdXxQcGD3qAlSYiF@learnnode.g6lcn.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...

  const data = {
    firstname: "fahad",
    lastname: "ansari",
    age: "27",
    city: "Mumbai",
    country: "India",
    phone: "7007",
  };


  const insertResult=await collection.insertOne(data)
  
  // const deleteResult = await collection.deleteMany({ data: 3 });
  // console.log('Deleted documents =>', deleteResult);

  //First name filter with Abdul

  const result = await collection.find({ firstname: "abdul" }).countDocuments();
  console.log("result is =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
