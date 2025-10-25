import User from '../models/user.js';   


export const changeRoleToOwner = async (req, res) => {
    try{
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: 'owner'});
        res.json({success: true, message: "Now you can list cars"});

    }catch(error) {
        console.log(ErrorEvent.message);
        res.status(500).json({success: false, message: "Error changing role to owner"});
    }
}