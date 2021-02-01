
function showFooterlinks(id) {
  $("#footer_links_" + id).slideToggle();
}
headerStyle();
function headerStyle() {
  if ($('.site-header').length) {
    var windowpos = $(window).scrollTop();
    var scrollLink = $('.scroll-top');
    if (windowpos >= 250) {
      scrollLink.addClass('open');
    } else {
      scrollLink.removeClass('open');
    }
  }
}
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function() {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}

$(document).ready(function() {
  $('.lightbox-image').fancybox({
    openEffect: 'fade',
    closeEffect: 'fade',
    helpers: {
      media: {}
    }
  });
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 100) {
    $('#scroll_display').css("display", "block");
  } else {
    $('#scroll_display').css("display", "none");
  }
});

function showFooterlinks(id) {
  $("#footer_links_" + id).slideToggle();
}

function showMenulinks(id) {
  if ($("#menu_links_" + id).is(":visible")) {
    $("#left_menu_icon_" + id).html('<i class="fa fa-angle-double-down">');
  } else {
    $("#left_menu_icon_" + id).html('<i class="fa fa-angle-double-up">');
  }
  $("#menu_links_" + id).slideToggle();
}

$(window).on('scroll', function() {
  headerStyle();
});
headerStyle();

function headerStyle() {
  if ($('.site-header').length) {
    var windowpos = $(window).scrollTop();
    var scrollLink = $('.scroll-top');
    if (windowpos >= 250) {
      scrollLink.addClass('open');
    } else {
      scrollLink.removeClass('open');
    }
  }
}
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function() {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}

function btmhideShadow() {
  $(".btm-div").removeClass("active");
  $(".btm-more").hide();
  $(".btm-shadow").hide();
}

function btmshowMorediv(id) {
  if ($("#btm_more_" + id).is(":visible")) {
    $("#btm_div_" + id).removeClass("active");
    $("#btm_more_" + id).hide();
    $(".btm-shadow").hide();
  } else {
    $(".btm-div").removeClass("active");
    $(".btm-more").hide();
    $("#btm_more_" + id).show();
    $("#btm_div_" + id).addClass("active");
    $(".btm-shadow").show();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  $("#mySidenav .wow").addClass("swing animated");
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-100%";
  $("#mySidenav .wow").addClass("swing animated");
}


function openSidemenu(id) {
  if ($('#side_menu_btn_' + id).hasClass('cblack')) {
    $("#side_menu_" + id).css("left", "-100%");
    $("#side_menu_btn_" + id).removeClass("cblack");
  } else {
    $(".side-menu").css("left", "-100%");
    $(".side-menu-btns").removeClass("cblack");
    $("#side_menu_" + id).css("left", "0");
    $("#side_menu_btn_" + id).addClass("cblack");
  }
}

function closeSidemenu(id) {
  $(".side-menu-btns").removeClass("cblack");
  $(".side-menu").css("left", "-100%");
}

function openCollapse(id) {
  if ($("#collapse_div_" + id).is(":visible")) {
    $("#collapse_div_" + id).slideUp("slow");
  } else {
    $(".collapse-div").slideUp("slow");
    $("#collapse_div_" + id).slideDown("slow");
  }
}

function closerating() {
  $("#rating_div").hide();
}

