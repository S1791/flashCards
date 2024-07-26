$('.box .content').click(function() {
	$(this).closest('.box').toggleClass('animate');
    $(this).css('transform, rotateY(180deg)');
})