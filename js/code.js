$(function(){

    if(attribute_filter) get_filter_params();

    $('.checkbox__check').on('change', function(){
        get_filter_params();
        var url = get_url_without_query_strings();
        var query_string = get_filter_query_string(params);
        redirect(url+query_string);
    });

    $('.products-feed__filter-remove-all').on('click', function(e){
        e.preventDefault();
        var url = get_url_without_query_strings();
        redirect(url);
    });

    $('.products-feed__filter-remove').on('click', function(e){
        e.preventDefault();
        var attribute = $(this).attr('data-attribute');
        var value = $(this).attr('data-value');
        params[attribute] = params[attribute].filter(function(item){ return item!==value; });
        var url = get_url_without_query_strings();
        var query_string = get_filter_query_string(params);
        redirect(url+query_string);
    });

    $('#products_feed-btn').on('click', function(e){
        e.preventDefault();
        var filter_page = parseInt($(this).attr('data-page'));
        get_products_category(filter_page);
    });

    $('#product_order').on('change', function(){
        filter_order = parseInt($(this).val());
        get_products_category(0);
    });
    
});