import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{

    client = new Client();
    account;


    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createUser({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call login method
                return this.loginUser(email,password);
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    
    async loginUser({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("login error", error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logoutUser(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}


const authService = new AuthService();

export default authService;