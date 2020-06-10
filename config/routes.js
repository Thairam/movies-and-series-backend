module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .get(app.api.user.getById)
        .patch(app.api.user.update)
        .delete(app.api.user.remove)
}