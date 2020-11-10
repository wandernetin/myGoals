module.exports = {
    async allAccess(req, res) {
        res.status(200).send("Public Content.");
    },

    async userBoard(req, res) {
        res.status(200).send("User Content.");
    }
}