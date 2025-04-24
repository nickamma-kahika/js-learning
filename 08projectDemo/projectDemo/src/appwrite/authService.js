import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor(){
        try {
            // Add validation for environment variables
            if (!config.appwriteUrl) {
                throw new Error('Appwrite URL not found in environment variables');
            }
            if (!config.appwriteProjectId) {
                throw new Error('Appwrite Project ID not found in environment variables');
            }

            this.client
                .setEndpoint(config.appwriteUrl) 
                .setProject(config.appwriteProjectId); 

            this.account = new Account(this.client);
            
            console.log('Appwrite client initialized with:', {
                endpoint: config.appwriteUrl,
                projectId: config.appwriteProjectId
            });
        } catch (error) {
            console.error('Failed to initialize Appwrite client:', error);
            throw error;
        }
    }

    async signUpUser({email,password,name}){
        try {
            console.log('Attempting to create user account...');
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount){
                console.log('User account created successfully:', userAccount.$id);
                return this.signInUser({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            console.error('Detailed signup error:', {
                message: error.message,
                code: error.code,
                type: error.type
            });
            throw error;
        }
    }


    async signInUser({email, password}){
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log('Session created successfully:', session.$id);
            return session;
        } catch (error) {
            console.error('Sign in error:', error);
            throw error;
        }
    }

    async signOutUser(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log("authService Error :: signOutUser ", error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("authService Error ::  getCurrentUser " , error)
        }
    }


}

const authService = new AuthService();

export default authService;