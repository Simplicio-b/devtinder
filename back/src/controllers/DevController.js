module.exports = {
    store(req, res) {
        console.log(req.body.username);
        return res.json({ ok: true });
    }
}