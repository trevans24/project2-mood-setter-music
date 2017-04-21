// GET /
function home(req, res) {  
  res.render('index');
}

// test page
function test(req, res){
	res.render('test');
}

module.exports = {
  home: home,
  test: test
};
