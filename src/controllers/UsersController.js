const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require ("../database/sqlite");

class usersController {
    async create(req, res){
        const { name, email, password } = req.body;

        const database = await sqliteConnection();

        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExists){
            throw new AppError ("E-mail já cadastrado!");
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES(?,?,?)", [name, email, hashedPassword]);

        return res.status(201).json();
    }

    async update(req, res){
        const { name, email, password } = req.body;
        const { id } = req.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

        const checkUserExists = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if(!checkUserExists){
            throw new AppError ("Usuário não encontrado!");
        }

        const checkEmailExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkEmailExists && checkEmailExists.id !== id){
            throw new AppError ("E-mail já cadastrado!");
        }

        user.name = name;
        user.email = email;

        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        updated_at = ?,
        WHERE ID = ?`, 
        [name, email, new Date(), id]);
        return res.json();


    }
}

module.exports = usersController;