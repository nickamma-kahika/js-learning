import config from "../config/config";
import { Client, Databases, Query } from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createDocument({title, slug, content, featuredImage, status, userId}){
        try {
            await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                { 
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                 }
            )
        } catch (error) {
            console.log("Error creating document", error);
        }
    }

    async updateDocument(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId, // databaseId
                config.appwriteCollectionId, // collectionId
                slug, // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Error updating document", error);
        }
    }

    async deleteDocument({slug}){
        try {
            await this.databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
            )
            return true;
        } catch (error) {
            console.log("Error deleting document", error);
            return false;
        }
    }

    async getDocument(slug){
        try {
            
            const document = await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return document;

        } catch (error) {
            console.log("Error getting document", error);
        }
    }

    async listDocuments(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal('status', 'Active')
                ]
            )
        } catch (error) {
            console.log("Error listing documents", error);
        }
    }

}

const databaseService = new DatabaseService();

export default databaseService;
