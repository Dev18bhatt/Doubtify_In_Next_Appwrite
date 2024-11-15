import { Permission } from "appwrite";
import { db , answersCollection } from "../name";
import { databases } from "./config";


export default async function createAnswerCollection(){
    await databases.createCollection(
       db ,
       answersCollection ,
       answersCollection ,
       [
        Permission.create('users'),
        Permission.read("any"),
        Permission.read("users"),
        Permission.read('users'),
        Permission.update('users'),
        Permission.delete("users")
       ]
    );
    console.log("Answer collection created...");

    await Promise.all(
        [
            databases.createStringAttribute(db , answersCollection , "content",10000 , true),
            databases.createStringAttribute(db , answersCollection , "questionId", 50, true),
            databases.createStringAttribute(db , answersCollection , "authorId" , 50, true)
        ]
    );
    console.log("Answer Attribute Created...");
}

