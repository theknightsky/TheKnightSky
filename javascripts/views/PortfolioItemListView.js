define(['backbone','handlebars','PortfolioItemView','PortfolioSlideView'], function(Backbone,Handlebars,PortfolioItemView,PortfolioSlideView){


	var PortfolioItemListView = Backbone.View.extend({
		el: '#page-outer',
		events: {
			'click #toList': 'renderList',
			'click #toSlide': 'loadSlide',
			'keyup': 'keyUp'
		},
		initialize: function(){
			this.renderList();
		},
		renderList: function(){
			this.$el.removeClass().addClass('list-active').find('#portfolio-items-container').removeClass().empty();
			this.collection.each(function(model){
				var portfolioItemView = new PortfolioItemView({model: model});
				this.$el.find('#portfolio-items-container').append(portfolioItemView.el);
			}, this);

			return this;

		},
		loadSlide: function(){
			this.renderSlide(2);
		},
		keyUp: function(e){
			e.preventDefault();

			if (e.keyCode === 13){
				console.log('Enter key pressed');
			}
		},
		renderSlide: function(slideNum){
			this.$el.removeClass().addClass('slide-active').find('#portfolio-items-container').addClass('slide-container').empty();
			// this.collection.each(function(model){
				var portfolioSlideView = new PortfolioSlideView({model: this.collection.at(slideNum)});
				this.$el.find('#portfolio-items-container').append(portfolioSlideView.el);
			// }, this);

			return this;
		}

	});

	return PortfolioItemListView;

});