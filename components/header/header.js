$(document).ready(function() {
    $(".header__burger").on("click", function() {
    $(this).toggleClass("active");
    $(this).siblings(".header__menu").toggleClass("header__menu_active");

    });
    });