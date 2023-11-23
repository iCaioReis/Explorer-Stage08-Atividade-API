const AppError = require("../utils/AppError");

const sqliteConnection = require ("../database/sqlite");

class usersController {
    async create(req, res){
        const { name, email, password } = req.body;

        const database = await sqliteConnection();

        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExists){
            throw new AppError ("E-mail já cadastrado!");

            return res.status(201).json();
        }


        
    }
}

module.exports = usersController;