const { Router } = require("express")

const UsersController = require ("../controllers/UsersController")

const usersRoutes = Router();


function middleware() {
    console.log("Voce passou pelo middleware")
}


const usersController = new UsersController;

usersRoutes.post("/users", middleware(),usersController.create)

module.exports = usersRoutes;