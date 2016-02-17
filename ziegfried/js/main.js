(function(){

  $(function(){

    $('#top-navigation a').on('click', function(e){

      var id = e.target.href.split("#")[1];

      $(document.body).animate({
        'scrollTop':   $("#" + id).offset().top - 120
      }, 500);

      $('#top-navigation li').removeClass('active');
      $(e.target).closest('li').addClass('active');

    });


  });

})();
