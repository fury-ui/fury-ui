$('[role="toggle-accordion"]').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.accordion-body').removeClass('show');
        $this.parent().parent().find('.accordion-body').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
})(jQuery);
