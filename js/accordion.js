$(document).ready(function(){
  $('.topic').click(function() {
    $(this).next('.answer').toggle('slide');
  });
});