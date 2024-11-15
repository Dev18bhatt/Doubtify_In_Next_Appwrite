// index-Type helps us to create the type of index that we want to create.
import { IndexType } from "node-appwrite";

import { questionCollection  , db } from "../name";
import { databases } from "./config";
import { Permission } from "appwrite";

export default async function createQuestionCollection(){
   // create collection method helps us to create 
   // new collection inside the specific database.
   await databases.createCollection(
    db,
    questionCollection , 
    questionCollection,
    [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users")
    ]
   )
   console.log("Question Collection is Created...");

   // create attribute inside the collection.
   await Promise.all([
     

    databases.createStringAttribute(db , questionCollection , "title", 100, true),
    databases.createStringAttribute(db, questionCollection, "content", 10000, true),
    databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
    databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
    databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
   ]);

   console.log("Question Attribute Created...");

   // create index...

   await Promise.all(
    [
    databases.createIndex(
        db , 
        questionCollection ,
        "title",
        IndexType.Fulltext,
        ["title"],
        ['asc']
    ),
    databases.createIndex(
        db ,
        questionCollection , 
        "content",
        IndexType.Fulltext,
        ["content"],
        ['asc']
    )
    ]
   )
}