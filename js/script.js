$('.menu-toggle, .menuCloseTrigger').click(function(){
  $('html').toggleClass('nav-open');
})
$('.menuBackDrop, .searchCloseTrihher').click(function(){
  $('html').removeClass('nav-open actSearch activeFilter');
})
$('.searchTrigger').click(function(){
  $('html').addClass('actSearch');
})
$('.menuBackDrop, .menuCloseTrigger').click(function(){
  $('.megaMenu').removeClass('slideMegaMenu');
  $('.subMenu2').removeClass('activeLinks');
});
$('.catTitleCol .backTrigger').click(function(){
  $('.megaMenu').removeClass('slideMegaMenu');
});
$('.linkTitleCol .backTrigger').click(function(){
  $('.subMenu2').removeClass('activeLinks');
});
// $('.filterTrigger').click(function(){
//   $('html').addClass('activeFilter');
// })

$('.ddLinkCol > a').click(function(){
  var mct = $(this).find('.navText').text();
  $(this).parents('.ddLinkCol').find('.selectedCatTitle').text(mct);
  $(this).parent().find('.megaMenu').addClass('slideMegaMenu');
})
$('.menuTitle').click(function(){
  var mt = $(this).find('.navText').text();
  $(this).parents('.subMenu1').find('.selectedLinkTitle').text(mt);
  $(this).parent().find('.subMenu2').addClass('activeLinks');
})

var minVal = 1, maxVal = 20; // Set Max and Min values
// Increase product quantity on cart page
$(".increaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value < maxVal) {
			value++;
		}
		$parentElm.find(".qtyValue").val(value);
});
// Decrease product quantity on cart page
$(".decreaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value > 1) {
			value--;
		}
		$parentElm.find(".qtyValue").val(value);
	});



  // readmore
  "use strict";
  $(document).ready(function () {
      $('.more-about-minimize-text').click(function () {
          var $text = $(".more-about-minimize-more-less");
          var $content = $(".minimize-overview-content");
          var $arrow = $(".more-about-minimize-arrow");
          var $gradient = $(".minimize-overview-gradient");
          var linkText = $text.text().toUpperCase();
          if (linkText === "READ MORE") {
              linkText = "Read Less";
              $arrow.switchClass("arrow-down", "arrow-up");
              $gradient.switchClass("show-minimize-gradient", "hide-minimize-gradient");
              $content.switchClass("hide-minimize-content", "show-minimize-content", 300);
          }
          else {
              linkText = "Read More";
              $arrow.switchClass("arrow-up", "arrow-down");
              $gradient.switchClass("hide-minimize-gradient", "show-minimize-gradient");
              $content.switchClass("show-minimize-content", "hide-minimize-content", 300);
          }
          $text.text(linkText);
      });
      // toggleReadMore is called when DOM is ready and when window's width is resized
      toggleReadMore();
      $(window).on('resize', function () {
          toggleReadMore();
      });
  });
  function toggleReadMore() {
      var overviewTextHeight = $('#minimizeOverviewTextHeight').height();
      if (overviewTextHeight <= 81) {
          $(".show-minimize-gradient").css('display', 'none');
          $(".minimize-overview-gradient").css('display', 'none');
          $(".more-about-minimize-link").css('display', 'none');
      }
      else {
          $(".show-minimize-gradient").css('display', 'block');
          $(".minimize-overview-gradient").css('display', 'block');
          $(".more-about-minimize-link").css('display', 'block');
      }
  }
