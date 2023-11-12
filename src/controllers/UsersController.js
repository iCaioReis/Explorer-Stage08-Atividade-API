class usersController {
    create(req, res){
        const { name, email, password } = req.body;

        res.json({ name, email, password });
    }
}

module.exports = usersController;