define(['backbone','handlebars','PortfolioItemView','PortfolioSlideView'], function(Backbone,Handlebars,PortfolioItemView,PortfolioSlideView){


	var PortfolioItemListView = Backbone.View.extend({
		el: '#page-outer',
		events: {
			'click #toList': 'renderList',
			'click #toSlide': 'renderFirstSlide',
			'click #nextSlide': 'renderNextSlide',
			'click #prevSlide': 'renderPrevSlide'
		},
		renderList: function(){
			$(document).off('keyup', this.keyUp);
			this.$el.removeClass().addClass('list-active').find('#portfolio-items-container').removeClass().empty();
			this.collection.each(function(model){
				var portfolioItemView = new PortfolioItemView({model: model});
				this.$el.find('#portfolio-items-container').append(portfolioItemView.el);
			}, this);

			return this;

		},
		num: 0,
		renderFirstSlide: function(){
			this.num = 0;
			this.renderSlide(this.num);
		},
		renderNextSlide: function(){
				this.num++;
				this.renderSlide(this.num);
		},
		renderPrevSlide: function(){
			this.num--;
			this.renderSlide(this.num);
		},
		renderSlide: function(slideNum){
			this.$el.removeClass().addClass('slide-active').find('#portfolio-items-container').addClass('slide-container').empty();

				var portfolioSlideView = new PortfolioSlideView({model: this.collection.at(slideNum)});
				this.$el.find('#portfolio-items-container').append(portfolioSlideView.el);

			return this;
		}

	});

	return PortfolioItemListView;

});