define(['backbone'], function(Backbone){

var PortfolioItemModel = Backbone.Model.extend({
	defaults: {
		title: 'Item Title',
		description: 'Item description.',
		resources: [],
		images: []
	}
});


return PortfolioItemModel;

});