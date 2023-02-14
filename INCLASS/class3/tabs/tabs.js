// JavaScript Document

$(document).ready(function() {

// Hide all div content in tabgroup class

// Show the content in the first div in the tabgroup class

// Changes the active status to determine which tab to display
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show(); 
}) // closes click function
    
}); // closes document ready function
