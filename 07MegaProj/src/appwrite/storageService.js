import config from "../config/config";
import { Client, Storage, ID } from "appwrite";

export class BucketService{
    client = new Client();
    storage;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serivce :: uploadFile :: error", error);
            return false;
        }
    }

    async getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite serivce :: deleteFile :: error", error);
            return false;
        }
    }

}

const bucketService = new BucketService();

export default bucketService;