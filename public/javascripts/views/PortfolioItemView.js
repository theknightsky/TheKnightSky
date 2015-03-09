define(['backbone','handlebars'], function(Backbone,Handlebars){


	var PortfolioItemView = Backbone.View.extend({
		tagName: 'li',
		template: Handlebars.compile($('#portfolio-item-template').html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}

	});

	return PortfolioItemView;

});