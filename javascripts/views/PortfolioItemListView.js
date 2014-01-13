define(['backbone','handlebars','PortfolioItemView'], function(Backbone,Handlebars,PortfolioItemView){


	var PortfolioItemListView = Backbone.View.extend({
		el: '.portfolio-items-container',
		initialize: function(){
			this.render();
		},
		render: function(){
			// require(['PortfolioItemView'], function(PortfolioItemView){

			this.collection.each(function(model){
				var portfolioItemView = new PortfolioItemView({model: model});
				this.$el.append(portfolioItemView.el);
			}, this);

			return this;

			// }, this);
		}

	});

	return PortfolioItemListView;

});