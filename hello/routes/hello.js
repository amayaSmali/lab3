
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.param.userName;
  if (nameToShow === undefined){
    nameToShow = 'Amaya';
  }
  console.log("Name is " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
