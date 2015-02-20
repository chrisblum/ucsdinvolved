var data = require("../data.json");

exports.searching = function(req, res) {   
	searchvalue = req.body.searchinput; 
	console.log(searchvalue);
// 	var new_arr = filter(data.friends, {
// 		link: function(searchvalue) {
// 			return link == searchvalue;}});

// 	function filter( array, filters ) {

//     var ret = [],
//         i = 0, l = array.length,
//         filter;

//     all: for ( ; i < l; ++i ) {

//         for ( filter in filters ) {
//             if ( !filters[filter](array[i][filter]) ) {
//                 continue all;
//             }
//         }

//         ret[ret.length] = array[i];

//     }

//     return ret;

// }

	
	// new_arr = $.grep(data, function(n,i){
	//  	return(n.name == 'searchvalue');
	//  })
	res.render('search', { 'searchvalue' : searchvalue} );

 }