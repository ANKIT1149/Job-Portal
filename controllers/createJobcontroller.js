import Job from "../Models/Job.models.js";

export const createJobcontroller = async (req, res, next) => {
    try {
        const { companyName, position } = req.body;

        if (!companyName || !position) {
          next("Please provide all details");
        }

        req.user.createdBy = req.user.userId;

        const job = await Job.create(req.body);

        res.status(200).json({ job });

        
    } catch (error) {
        next(error)
    }
}