/* Author: Skyler J. Knight

*/


define(['config'], function(){

require(['jquery','sideMenu'], function($){

	$('#main-header').addClass('center-stage');
	setTimeout(function(){
		$('#main-header').addClass('start-fadein');
	}, 1200);

});

});
