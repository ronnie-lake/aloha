$(document).ready(function() {
	$('select').selectric();

	$('.header__hidden-menu').click(function() {
		$('.hidden-menu').toggleClass('hidden-menu__active');
	});

	$(document).click(function(e) {
		 if(!$(e.target).is('.header__hidden-menu'))  {
		 	$('.hidden-menu__active').removeClass('hidden-menu__active');
		 } 
	});


	$('[id=slides]').on('click', '.active', function(e){
		if($(e.target).is('a')) return;
		var parent = $(this).parents('#viewport');	
		if($(this).is(':last-child')) {
			$(this).removeClass('active');
			parent.find('#slides li:first-child').addClass('active');
			parent.find('#navigation .active').removeClass('active');
			parent.find('#navigation li:first-child').addClass('active');
		} else {
			var active = parent.find('#navigation .active');
			$(this).removeClass('active');
			$(this).next().addClass('active');
			active.removeClass('active');
			active.next().addClass('active');
		}
	})

	$('[id=navigation] li').click(function(){
		var parent = $(this).parents('#viewport');
		var num = $(this).index() + 1;
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
		parent.find('#slides .active').removeClass('active');
		parent.find('#slides li:nth-child('+ num +')').addClass('active');
	});
});