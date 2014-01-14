define(['backbone','handlebars'], function(Backbone,Handlebars){


	var PortfolioSlideView = Backbone.View.extend({
		template: Handlebars.compile($('#portfolio-slide-template').html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}

	});

	return PortfolioSlideView;

});