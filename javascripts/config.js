require.config({
	baseUrl: 'javascripts/',
	waitSeconds: 200,
	paths: {
		"jquery": "libs/jquery",
		"underscore": "libs/underscore",
		"backbone": "libs/backbone",
		"handlebars": "libs/handlebars",
		"PortfolioItem": "models/PortfolioItemModel",
		"PortfolioItemCollection": "collections/PortfolioItemCollection",
		"PortfolioItemView": "views/PortfolioItemView",
		"PortfolioItemListView": "views/PortfolioItemListView"
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	}
});