$(document).ready(function () {
    var searchItem = '.search-results__item';
    var link = $('.search-results__item-tabs-link');
    link.click(function (e) {
        var _this = $(this);

        var content = _this.closest(searchItem).find(".search-results__item-tabs-content, .search-results__item-terms");
        if (_this.hasClass('_active')) return;
        $(_this.closest(searchItem).find('.search-results__item-tabs-link')).removeClass('_active');
        $(_this).addClass('_active');

        var selected_tab = $(this).attr('data-tab');
        content.removeClass('_active');
        content.each(function(){
            if($(this).hasClass(selected_tab)){
                $(this).addClass('_active');
            }
        });
        e.preventDefault();
    });

    $('.search-results__sort .select-sex .dropdown-menu a').click(function (e) {
        var getContent = $(this).html();
        $('.search-results__sort .select-sex .dropdown-menu').prev('a').html(getContent);
        e.preventDefault();
    });
});