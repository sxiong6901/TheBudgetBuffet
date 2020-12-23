
const express =     require('express')
const usersCtrl =   require('../controllers')
const verifyToken = require('../auth').verifyToken

const usersRouter = new express.Router()

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)


// this is the firewell
usersRouter.route('/add').post(usersCtrl.makeRecipe)

usersRouter.route('/view').get(usersCtrl.viewRecipe)

usersRouter.route('/myRecipe').get(usersCtrl.myRecipes)

usersRouter.route('/secret').get(usersCtrl.show)

usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter