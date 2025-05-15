$(".menu-burger").on("click", function() {
    $(".menu-burger").addClass("hide");
    $(".mobile-nav").removeClass("hide");
    $(".close-icon").removeClass("hide");
    $(".mobile-nav").addClass("gray-out");
})

$(".close-icon").on("click", function() {
    $(".close-icon").addClass("hide");
    $(".mobile-nav").addClass("hide");
    $(".menu-burger").removeClass("hide");
    $(".mobile-nav").removeClass("gray-out");
})