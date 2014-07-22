(function(){
	var app = angular.module( 'jsApp', ['ngRoute'] );

	var navBarItems = [
		{
			name: 'Home',
			navID: 1
		},
		{
			name: 'Projects',
			navID: 2
		},
		{
			name: 'About',
			navID: 3
		},
		{
			name: 'Contact',
			navID: 4
		}
	];

	app.controller( 'NavBarController', function(){
		this.Items = navBarItems;
	});
})();