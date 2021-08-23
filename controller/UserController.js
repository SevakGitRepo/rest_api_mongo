import User from "../model/User.js";
import UserService from "../service/UserService.js"

class UserController{
    async create(req, res){
        try {
            const user = await UserService.create(req.body);//ete await asinc chanenq {} obyekt kveradardzni bayc bazaum kgri
            res.status(200).json(user);
        }catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res){
        try {
            const users = await UserService.getAll();
            res.status(200).json(users);
        }catch (e) {
            res.status(500).json(e);
        }
    }

    async getById(req, res){
        try {
            const users = await UserService.getById(req.params.id);
            res.status(200).json(users);
        }catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res){
        try {
            const users = await UserService.update(req.body, req.params.id);
            console.log("users")
            res.status(200).json(users);
        }catch (e) {
            res.status(500).json(e);
        }
    }
    async delete(req, res){
        try {
            const users = await UserService.delete(req.params.id);
            res.status(200).json(users);
        }catch (e) {
            res.status(500).json(e);
        }
    }
    async deleteAll(req, res){
        try {
            await UserService.deleteAll();
            res.status(200).json("All Deleted");
        }catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();