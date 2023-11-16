const { Router } = require("express")

const UsersController = require ("../controllers/UsersController")

const usersRoutes = Router();


function middleware(req, res, next) {
    console.log("Voce passou pelo middleware")

    if(!req.body.isAdmin){
        return res.json({message: "User unauthorized"})
    }

    next()
}


const usersController = new UsersController;

usersRoutes.post("/users", middleware(),usersController.create)

module.exports = usersRoutes;