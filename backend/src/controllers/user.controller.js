const Recent_Applied = require('../models/clientModel');

// People Applying for job

const applForyJob = async (req, res) => {
    try {
        const { name, education, position } = req.body;

        if(!name || !education || !position) {
            return res.status(400).json({
                status: "Error",
                message: "All fields are required !"
            });
        }
        const newJob = new Recent_Applied({
            name, education, position
        });
        await newJob.save();
        res.status(201).json({
            status: "Success",
            message: "Job Applied Successfully !"
        });


    }catch(error){
        res.status(500).json({
            status: "Error",
            message: "Internal server error !"
        })
    }
};

module.exports = {
    applForyJob
}