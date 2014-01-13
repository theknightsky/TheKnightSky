define(['backbone', 'PortfolioItem'], function(Backbone, PortfolioItemModel){

var PortfolioItemCollection = Backbone.Collection.extend({
	model: PortfolioItemModel
});


return PortfolioItemCollection;

});