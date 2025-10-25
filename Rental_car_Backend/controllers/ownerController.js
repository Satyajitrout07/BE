import Car from '../models/Car.js';
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


// API to list Car

export const addCar = async (req, res) => {
    try{
        const {_id} = req.user;
        const {make, model, year, price, location} = req.body;
        const newCar = new Car({
            make,
            model,
            year,
            price,
            location,
            owner: _id
        });
        await newCar.save();
        res.status(201).json({success: true, data: newCar});
    }catch(error) {
        console.log(error.message);
        res.status(500).json({success: false, message: "Error adding car"});
    }
}