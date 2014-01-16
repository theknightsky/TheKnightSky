/* Author: Skyler J. Knight

*/


define(['config'], function(){

require(['backbone','PortfolioItem','PortfolioItemCollection','PortfolioItemView','PortfolioItemListView','sideMenu'], function(Backbone,PortfolioItem,PortfolioItemCollection,PortfolioItemView, PortfolioItemListView, sideMenu){


	$('#main-header').addClass('center-stage');
	setTimeout(function(){
		$('#main-header').addClass('start-fadein');
	}, 1200);


var portfolioItems = new PortfolioItemCollection([{
		title: 'Passkeep',
		description: 'A web application that I created in order to stop forgetting my passwords, Passkeep stores all my passwords in one safe place.',
		colorClass: 'bg-eee',
		links: [
		{
			source: 'github',
			icon: 'fontawesome-github',
			link: 'https://github.com/theknightsky/Passkeep'
		}
		],
		resources: ['Susy Grid System','Underscore.js','Backbone.js','Jquery','Github','Git'],
		images: ['images/Passkeep04.png', 'images/Passkeep05.png', 'images/Passkeep06.png']
},
{
		title: 'LearnCast',
		description: 'A mobile web application design I was asked to create for a partner of LearnKey; LearnCast.  The requirement was simply to design a mobile app, but I went all out and created a working prototype with HTML5, CSS3, and a little bit of Jquery for some basic functionality.',
		colorClass: 'bg-333 color-white',
		resources: ['Susy Grid System','HTML5','CSS3','Jquery','Photoshop'],
		imagesHalf: ['images/LearnCast01.png', 'images/LearnCast02.png', 'images/LearnCast03.png', 'images/LearnCast04.png']
},
{
		title: 'Movie Seating Application',
		description: 'One day I was looking to buy movie tickets online for my parents and the seat selection process was horrendous.  I thought I would take it upon myself to create a more simple and straight-forward approach.  This is the result.',
		colorClass: '',
		links: [{source: 'github', icon: 'fontawesome-github', link: 'https://github.com/theknightsky/MovieSeatingApp'}],
		resources: ['Susy Grid System','HTML5','CSS3','Jquery','Backbone.js','Underscore.js','require.js','Bootstrap'],
		images: ['images/MovieSeating01.png','images/MovieSeating02.png'],
		imagesHalf: ['images/MovieSeating03.png', 'images/MovieSeating04.png']
},
{
		title: 'CSS3 Social Ribbons',
		description: 'Some sleek yet very simple Social Ribbons I created on Cssdeck.com.  They recieved over 6,500+ views!',
		colorClass: 'bg-eee',
		links: [{source: 'cssdeck', link: 'http://cssdeck.com/labs/full/v0em3g7j'}],
		resources: ['HTML5','CSS3','Compass','SCSS'],
		images: ['images/SocialRibbon01.png', 'images/SocialRibbon02.png']
},
{
		title: 'Parowan High School',
		description: 'The very first website I created was for my highschool, Parowan High School.  That was a long time ago and unfortunately they don\'t have anyone to keep the website up to date.  I thought I would help out and start working on a new and improved version.',
		colorClass: 'bg-333 color-white',
		resources: ['Bootstrap','HTML5','CSS3','Jquery'],
		images: ['images/PHS01.png'],
		imagesHalf: ['images/PHS02.png', 'images/PHS03.png', 'images/PHS05.png', 'images/PHS04.png']
},
{
		title: 'Social Link Flip Pane',
		description: 'Another masterpiece created in the online editor at Cssdeck.com.  This Social Link Flip Plane flips over to reveal links to social networking sites and features trendy flat design.  Over 3,300+ views!',
		colorClass: '',
		links: [{source: 'cssdeck', link: 'http://cssdeck.com/labs/full/i1muikmk'}],
		resources: ['HTML5','CSS3'],
		images: ['images/SocialFlip01.png', 'images/SocialFlip02.png']
},
{
		title: 'Pawnshop Inventory Application',
		description: 'One of my friends and his family own a pawn shop, and I thought it would be useful to build an easy to store items along with there condition and value.',
		colorClass: 'bg-eee',
		resources: ['Bootstrap','HTML5','CSS3','Jquery','Backbone.js','Underscore.js','Handlebars.js'],
		images: ['images/PawnApp01.png', 'images/PawnApp02.png', 'images/PawnApp03.png', 'images/PawnApp04.png']
},
{
		title: 'Create Your Own Happiness',
		description: 'A few friends of mine started a movement called #CreateYourOwnHappiness.  The message of #CYOH is to live life individually and create a happy life in your own unique way.  They asked me to design some logos and I think they turned out pretty swift.',
		colorClass: 'bg-333 color-white',
		resources: ['Adobe Fireworks','Adobe indesign'],
		images: ['images/CYOH01.png', 'images/CYOH02.png', 'images/CYOH03.png', 'images/CYOH04.png']
}]);
var portfolioItemsView = new PortfolioItemListView({collection: portfolioItems});
portfolioItemsView.render();

});

});