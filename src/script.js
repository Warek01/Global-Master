"use strict";
const menu_button = $("button#to-menu");
const content = $("#global-container");
const side_menu = $("nav#side-menu");
const side_map = $("#side-map-wrap");
const header = $("header");
const slide_1 = content.find(".slide-1"),
      slide_2 = content.find(".slide-2"),
      slide_3 = content.find(".slide-3"),
      slide_4 = content.find(".slide-4"),
      slide_5 = content.find(".slide-5");

const active_slide = {
   num: 1,
   prev: null,
   change: function(newSl) {
      if (this.num !== newSl) {
         newSl !== 1 ?
            header.find("#hire-us").addClass("active") :
            header.find("#hire-us").removeClass("active");
         
         this.prev = this.num;
         this.num = newSl;

         side_map.find(".active").removeClass("active");
         side_map.find(".display").eq(this.num - 1).addClass("active");
      }
   }
};

/* Global container minimization logic */

let is_minimized = false;

menu_button.click(() => {
   if (!is_minimized)
      minimize();
   else
      maximize();
});

content.click(maximize);

function maximize(e) {
   if (is_minimized) {
      content.removeClass("minimized");
      side_menu.attr("id", "side-menu");
      side_map.css({
         "filter": "opacity(1)",
         "pointer-events": "all"
      });

      header.find("button#to-menu")
      .find("img").remove().end()
      .append($("<img />", {
         alt: "maximize",
         src: "./img/HAMBURGER-MENU.png"
      }));
   }
   is_minimized = false;
}

function minimize(e) {
   if (!is_minimized) {

      content.addClass("minimized");
      side_map.css({
         "filter": "opacity(0)",
         "pointer-events": "none"
      });

      header.find("button#to-menu")
      .find("img").remove().end()
      .append($("<img />", {
         alt: "minimize",
         src: "./img/X.png"
      }));

      setTimeout(() => {
         side_menu.attr("id", "side-menu-active");
      }, 100);

      setTimeout(() => {
         is_minimized = true;
      }, 500);

   }
}

/* -------------------------------------- */


/* Side-Menu components */

side_menu.find("button").click(function(e) {

   let calc = (active_slide.num - $(this).data("order")) * $(".slide").height();

   side_menu.find("button.active").removeClass("active");
   $(this).addClass("active");

   $("#slide-container").css("top", parseInt($("#slide-container").css("top")) + calc);

   active_slide.change($(this).data("order"));

   maximize();
});

/* -------------------------------------- */


 /* Slide-1 components */

slide_1.find("section .title").click(function(e) {
   if (!$(this).hasClass("active") && !is_minimized) {
      slide_1.find("section .active").removeClass("active");
      $(this).addClass("active");
      $(this).next().next().next().addClass("active");
   }
});


/* -------------------------------------- */


/* Slide-2 components */

side_menu.find("button").eq(1)[0].click();

/* -------------------------------------- */

/* Slide-3 components */

/* -------------------------------------- */

/* Slide-4 components */

/* -------------------------------------- */

/* Slide-5 components */

/* -------------------------------------- */
