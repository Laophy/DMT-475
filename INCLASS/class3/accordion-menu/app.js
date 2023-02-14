$(document).ready(function() {

    // Toggle appetrizers
    $(".appetizers").click(function(){
        $(".appetizer-menu").slideToggle("slow");
    });

    // Toggle salads
    $(".salads").click(function(){
        $(".salad-menu").slideToggle("slow");
    });

    // Toggle pizza
    $(".pizzas").click(function(){
        $(".pizza-menu").slideToggle("slow");
    });

    // Toggle pastas
    $(".pastas").click(function(){
        $(".pasta-menu").slideToggle("slow");
    });

});