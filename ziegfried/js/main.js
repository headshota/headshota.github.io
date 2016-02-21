(function(){

  var navbarToggle = $('.navbar-toggle');
  var topNavigation = $('#top-navigation');


  $(function(){

    topNavigation.find('a').on('click', function(e){

      var id = e.target.href.split("#")[1];

      $(document.body).animate({
        'scrollTop':   $("#" + id).offset().top - 120
      }, 500);

      topNavigation.find('li').removeClass('active');
      $(e.target).closest('li').addClass('active');

      if(navbarToggle.css('display') != 'none') {
        navbarToggle.click();
      }
    });


  });

})();
