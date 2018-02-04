const router = require('express').Router()

/* Load Helpers */
const requestHelper = require('../helpers/requestHelper')

/* Load Users Controllers */
const usersController = require('../controllers/users')

/* Define User Routes : */

/* Get All Users */
router.get('/', usersController.getUsers)

/* Get a User by his id */
router.get('/:id', requestHelper.parseId, usersController.getOneUser)

/* Create a User */
router.post('/', usersController.createUser)

/* Update a User by his id */
router.put('/:id', requestHelper.parseId, usersController.updateUser)

/* Delete User by his id */
router.delete('/:id', requestHelper.parseId, usersController.deleteUser)

/* Export the router */
module.exports = router