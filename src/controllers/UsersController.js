const AppError = require("../utils/AppError");

class usersController {
    create(req, res){
        const { name, email, password } = req.body;

        if(!name){
            throw new AppError("Nome obrigatório")
        }

        res.json({ name, email, password });
    }
}

module.exports = usersController;