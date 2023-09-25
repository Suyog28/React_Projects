import config from "../config/config";

import { Client, ID, Databases, Storage, Query } from 'appwrite';


export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);

        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({ title, content, slug, featuredImage, userId, status }) {
        try {
            return await this.Databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        }
        catch (error) {
            return error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.Databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                });
        } catch (error) {
            console.log("Appwriteservice :: deletePost :: error", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.Databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwriteservice :: deletePost :: error", error)
            return false;

        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
        } catch (error) {
            console.log("Appwriteservice :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.Databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            );
        } catch (error) {
            console.log("Appwriteservice :: getPosts :: error", error);
            return false;
        }

    }


    //File upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            );

        } catch (error) {
            console.log("Appwriteservice :: uploadFile :: error", error);
            return false;
        }

    }


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwriteservice :: deleteFile :: error", error);
            return false;


        }
    }


    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        );
    }
}

const service = new Service();
export default service;