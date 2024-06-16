import User from '../../Model/userModel.js';

class getAllUsersController {
    static allUsers = async (req,res)=>{
         try {
            const data = await User.find()
            res.status(200).json({
               message: "All user list",
               usersList:data
           })
         } catch (error) {
            console.log("admin",error)
            res.send("Something is wrong")
         }
    }
}

export default getAllUsersController;