import config from '../config/config'
import { Client, Account,ID } from 'appwrite'

const client = new Client().setProject(config.appwriteProjectId)

const account = new Account(client);

const createUser = account.create(ID.unique(), email , password , name)
                       .then((response) => {
                        console.log("Account successfully created", response )
                       })
                       .catch((error)=>{
                        console.log("Error creating account", error)
                       })