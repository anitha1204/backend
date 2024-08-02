require('dotenv').config();
const userDB = require("../model/userModel");
const nodemailer = require("nodemailer");

const createUser = async (req, res) => {
    try {
        const { userName,mobileNumber, email, message } = req.body;
        
        if (!userName) {
            return res.status(400).json({ message: 'Username is required' });
        }
        if (!mobileNumber || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = new userDB({
            userName,
            mobileNumber, 
            email,
             message,
        });
        await user.save();

        // Send email
        await send(userName,mobileNumber, email, message);

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Duplicate key error', error });
        }
        res.status(500).json({ message: 'Error creating user', error });
    }
};

const getUsers = async (req, res) => {
    try {
        const email = req.params.email;

        if (!email) {
            return res.status(400).json({ Error: "Email is required." });
        }

        const userData = await userDB.findOne({ email });

        if (!userData) {
            return res.status(404).json({ Error: "User not found." });
        }

        res.status(200).json({
            userData,
        });
    } catch (error) {
        res.status(500).json({
            Error: error.message,
        });
    }
};


const send = async (userName,mobileNumber, email, message) => {
    try {
        console.log("data", userName,mobileNumber, email, message);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "selvam12042003@gmail.com",
                pass: "jxjj csdq qked wrku",
            },
        });
        const mailoption = {
            form:"selvam12042003@gmail.com",
            to: [email, "swaminathan@shriharitham.com"],
            subject: "HARITHAMS BUILDING INTEGRITY",
            text: `Dear ${userName},
          
             Your Registrations is successful.
             Thank you for your Registrations.`,
        };
        await transporter.sendMail(mailoption);
        console.log("Mail sent successfully");
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
};


module.exports = {
    createUser,
    getUsers,
};
