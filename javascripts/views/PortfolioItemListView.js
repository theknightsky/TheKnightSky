define(['backbone','handlebars','PortfolioItemView'], function(Backbone,Handlebars,PortfolioItemView){


	var PortfolioItemListView = Backbone.View.extend({
		el: '#portfolio-items-container',
		render: function(){
			this.collection.each(function(model){
				var portfolioItemView = new PortfolioItemView({model: model});
				this.$el.append(portfolioItemView.el);
			}, this);

			return this;
		}
	});

	return PortfolioItemListView;

});