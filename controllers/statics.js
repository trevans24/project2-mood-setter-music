//homepage GET
function home(req, res){
	res.render('index');
}

//export home
module.exports = {
	home: home,
};