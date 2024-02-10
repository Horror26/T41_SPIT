const {OAuth2Client} = require('google-auth-library');
const User = require('../models/user');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.authenticateGoogleUser = async (req,res) => {
    const {token} = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const {email,name,picture} = payload;
    
        let user = await User.findOne({email});
    
        if(!user) {
            user = new User({
                username: name,
                email,
                image: picture,
            });
            await user.save();
        }
    
        res.json({
             success: true,
             message: 'User authenticated successfully',
            });
    } catch (error) {
        console.error('Error  authenticating user:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    } ;
};

