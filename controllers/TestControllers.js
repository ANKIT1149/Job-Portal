export const TestControllers = (req,res) => {
    const { name, email, password } = req.body;
    res.status(201).json(`Your Name is ${name} and your email ${email} and your password is ${password}`)
}