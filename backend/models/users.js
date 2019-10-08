const db = require('./conn');

class User {
    constructor(user_id, first_name, last_name, email, password) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    async save() {
        const query = `
        INSERT INTO users
        (
            first_name,
            last_name,
            email,
            password
        ) VALUES (
            '${this.first_name}',
            '${this.last_name}',
            '${this.email}',
            '${this.password}'
        )
        RETURNING user_id
        `;
        try {
            const id = await db.one(query);
            console.log("id is:", id);
            console.log(`User: ${this.first_name} successfully added.`);
            return "Jonathan is super awesome and helpful and is a 1337 H4X0R"
        } catch (err) {
            console.log("save() error:", error.message);
            return error.message;
        }
    }

    async getUserByEmail() {
        try {
            const userData = await db.one(`
                SELECT user_id, first_name, last_name, password
                FROM users
                WHERE email = $1
                `, [this.email]);
            return userData;
        } catch (error) {
            console.log("getUserByEmail() error:", error.message);
            return error.message;
        }
    }

    async getUserById() {
        try {
            const userData = await db.one(`
                SELECT first_name, last_name, email, password
                FROM users
                WHERE user_id = $1
                `, [this.id]);
            return userData;
        } catch (err) {
            return err.message;
        }
    }

    async deleteUserById() {
        try {
            await db.none(`
                DELETE FROM users
                WHERE user_id = $1`, [this.user_id]);
            console.log(`Deleted user with id: ${this.user_id} successfully.`);
        } catch (error) {
            console.log("deleteUserById() error:", error.message);
            return error.message;
        }
    }

    setUserId(user_id) {
        this.user_id = user_id;
    }
}

module.exports = User;