/* Author: Skyler J. Knight

*/


define(['config'], function(){

require(['backbone','PortfolioItem','PortfolioItemCollection','PortfolioItemView','PortfolioItemListView'], function(Backbone,PortfolioItem,PortfolioItemCollection,PortfolioItemView, PortfolioItemListView){

var portfolioItems = new PortfolioItemCollection({
		title: 'Passkeep',
		description: 'A web application that I created in order to stop forgetting my passwords, Passkeep stores all my passwords in one safe place.',
		colorClass: 'bg-eee',
		resources: ['Susy Grid System','Underscore.js','Backbone.js','Jquery','Github','Git'],
		images: ['img/Passkeep04.PNG', 'img/Passkeep05.PNG', 'img/Passkeep06.png']
});

var portfolioItemsView = new PortfolioItemListView({collection: portfolioItems});



});

});























