const _users = []

const getUsers = (req, res) => {
    res.json({
        users: _users
    })
}

const getOneUser = (req, res) => {
    let userId = req.params.id

    let user = _users.findById(userId)

    if (user) {
        res.json({
            user
        })
    } else {
        res.status(400)
            .json({
                error: 'User not found'
            })
    }

}

const createUser = (req, res) => {
    let newUserData = req.body

    let user = _users.add(newUserData)

    res.json({
        user
    })
}

const updateUser = (req, res) => {
    let userId = req.params.id
    let newUserData = req.body

    let user = _users.updateById(userId, newUserData)

    if (user) {
        res.json({
            user
        })
    } else {
        res.status(400)
            .json({
                error: 'User not found'
            })
    }
}

const deleteUser = (req, res) => {
    let userId = req.params.id

    let done = _users.deleteById(userId)

    let _jsonResponse = {
        success: done
    }

    if (!done) {
        res.status(400)
        _jsonResponse.error = 'User not found'
    }

    res.json(_jsonResponse)
}

module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}