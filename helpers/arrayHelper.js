// Add Some Useful functions to the Array prototype
// We are not using an ORM so we define our own logic to handle the id and data
// This is not needed if we use an ORM

/* Get Last Element */
Array.prototype.last = function() {
	return this[this.length -1]
}

/* Get Last Element's Id */
Array.prototype.getLastId = function() {
    return this.last() && this.last().getId()
}

/* Set Element Id and Add him */
Array.prototype.add = function(el) {
    el.id = (this.getLastId() + 1)|| 1
    
    this.push(el)

    return this.last()
}

/* Get Element By Id */
Array.prototype.findById = function(id) {
    return this.find(u => u.id === id)
}

/* Update Element by id */
Array.prototype.updateById = function(id, body) {
    let user = this.findById(id)

    if (user) {
        Object.assign(user, body)
    }

    return user
}

/* Delete Element By His Id */
Array.prototype.deleteById = function(id) {
    let user = this.findById(id)

    if (user) {
        let userIndex = this.findIndex(el => el.id === id)

        if (userIndex > -1) {
            this.splice(userIndex, 1)
            return true
        }
    }

    return false
}
