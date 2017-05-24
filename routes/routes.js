'use strict';

const index = require('./index');
const about = require('./about');
const articles = require('./articles');
const lessons = require('./lessons');
const quizzes = require('./quizzes');
const careers = require('./careers');
const contact = require('./contact');

module.exports.setUpApp = app => {
    app.use('/', index);
    app.use('/about', about);
    app.use('/articles', articles);
    app.use('/lessons', lessons);
    app.use('/quizzes', quizzes);
    app.use('/careers', careers);
    app.use('/contact', contact);
}

