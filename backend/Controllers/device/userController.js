import User from '../../Model/userModel.js';

class UserController {
    static registration = async (req,res)=>{
        try {
            const {name,email,arivalDate,adults,children} = req.body
            const user = await User.create({
                name,
                email,
                arivalDate,
                adults,
                children
            })
            await user.save()

            res.status(200).json({
                message: "User created successfully payment is remaning",
                user
            })

            // redirecting user to payment route
        } catch (error) {
            console.log("Error control",error);
        }
    }
}

export default UserController;