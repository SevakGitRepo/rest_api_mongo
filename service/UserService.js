import User from "../model/User.js";

class UserService{
    async create(user){
        return await User.create(user);
    }
    async getAll(user){
        return User.find();
    }
    async getById(id){
       if(!id){
           throw new Error("wrong Id")
       }
        return User.findById(id);
    }
    async update(user, id){
        if(!id) {
            throw new Error("wrong Id")
        }
        return User.findByIdAndUpdate(id, user, {new: true});
    }
    async delete(id){
        if(!id){
            throw new Error("wrong Id")
        }
        return User.findByIdAndDelete(id);
    }
    async deleteAll(){
        return User.deleteMany();
    }
}

export default new UserService();