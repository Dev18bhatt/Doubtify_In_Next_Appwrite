import { Permission } from "appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
  try {
    await storage.getBucket(questionAttachmentBucket);
  } catch (error) {
    try {
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.create("users"),
          Permission.read("any"),
          Permission.read("users"),
          Permission.update("users"),
          Permission.delete("users"),
        ],
        false,
        undefined, // password undefined.
        undefined, // expiry undefined.
        ["jpg", "png", "gif", "jpeg", "webp", "heic"]
      );
      console.log("Storage Created...");
      console.log("Storage Connected...");
    } catch (err) {
      console.log(err);
    }
    console.log("outer error ", error);
  }
}
