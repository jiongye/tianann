// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require lightbox
//= require jquery.cycle2.min
//= require_tree .

$(document).ready(function(){

  $('#locale a').click(function(){
    var locale = $(this).attr("href");
    var pathname = location.pathname;
    if(pathname == "/"){
      location.href = locale;
    }else if(pathname.match(/^\/(zh-TW|en)/) != null){
      pathname = pathname.replace(/^\/(zh-TW|en)/, locale);
      location.href = pathname + location.search;
    }else{
      pathname = locale + pathname;
      location.href = pathname + location.search;
    }

    return false;
  });

});
