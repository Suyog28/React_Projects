import config from "../config/config";

import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    Account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.Account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.Account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //Call another method
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            return error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.Account.createEmailSession(email, password);
        } catch (error) {
            return error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.Account.get();
        } catch (error) {
            return error;
        }
        // return null;
    }

    async logout() {
        try {
            await this.Account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}



const authService = new AuthService();

export default authService;