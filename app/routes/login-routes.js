
// ===============================================================================
// LOAD DATA
// Linking our routes to our data sources.
// ===============================================================================
var passport = require('passport');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

	// API GET Requests
	// ---------------------------------------------------------------------------

	// Define routes.
	// app.get('/',
	// 	function(req, res) {
	//   		res.render('home', { user: req.user });
	// });

	app.get('/login',
		function(req, res){
	  	  	res.render('login');
	});

	app.get('/login/facebook',
		passport.authenticate('facebook'));

		app.get('/login/facebook/return',
		passport.authenticate('facebook', { failureRedirect: '/login' }),
		function(req, res) {
		  res.redirect('/');
	});

	app.get('/profile',require('connect-ensure-login').ensureLoggedIn(),
		function(req, res){
	  		res.render('profile', { user: req.user });
	});

};
