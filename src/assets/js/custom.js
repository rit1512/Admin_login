$(function() {
    "use strict";
    $(function() {
        $(".preloader").fadeOut()
    }), jQuery(document).on("click", ".mega-dropdown", function(e) {
        e.stopPropagation()
    });
    var e = function() {
        (window.innerWidth > 0 ? window.innerWidth : this.screen.width) < 1170 ? ($("body").addClass("mini-sidebar"), $(".navbar-brand span").hide(), $(".sidebartoggler i").addClass("ti-menu")) : ($("body").removeClass("mini-sidebar"), $(".navbar-brand span").show());
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
        (e -= 55) < 1 && (e = 1), e > 55 && $(".page-wrapper").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e), $(".sidebartoggler").on("click", function() {
        $("body").hasClass("mini-sidebar") ? ($("body").trigger("resize"), $("body").removeClass("mini-sidebar"), $(".navbar-brand span").show()) : ($("body").trigger("resize"), $("body").addClass("mini-sidebar"), $(".navbar-brand span").hide())
    }), $(".nav-toggler").click(function() {
        $("body").toggleClass("show-sidebar"), $(".nav-toggler i").toggleClass("ti-menu"), $(".nav-toggler i").addClass("ti-close")
    }), $(".search-box a, .search-box .app-search .srh-btn").on("click", function() {
        $(".app-search").toggle(200)
    }), $(".right-side-toggle").click(function() {
        $(".right-sidebar").slideDown(50), $(".right-sidebar").toggleClass("shw-rside")
    }), $(".floating-labels .form-control").on("focus blur", function(e) {
        $(this).parents(".form-group").toggleClass("focused", "focus" === e.type || this.value.length > 0)
    }).trigger("blur"), $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    }), $(function() {
        $('[data-toggle="popover"]').popover()
    }), $(".scroll-sidebar, .right-side-panel, .message-center, .right-sidebar").perfectScrollbar(), $("body").trigger("resize"), $(".list-task li label").click(function() {
        $(this).toggleClass("task-done")
    }), $('a[data-action="collapse"]').on("click", function(e) {
        e.preventDefault(), $(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ti-minus ti-plus"), $(this).closest(".card").children(".card-body").collapse("toggle")
    }), $('a[data-action="expand"]').on("click", function(e) {
        e.preventDefault(), $(this).closest(".card").find('[data-action="expand"] i').toggleClass("mdi-arrow-expand mdi-arrow-compress"), $(this).closest(".card").toggleClass("card-fullscreen")
    }), $('a[data-action="close"]').on("click", function() {
        $(this).closest(".card").removeClass().slideUp("fast")
    });
    var a, i = ["skin-default", "skin-green", "skin-red", "skin-blue", "skin-purple", "skin-megna", "skin-default-dark", "skin-green-dark", "skin-red-dark", "skin-blue-dark", "skin-purple-dark", "skin-megna-dark"];

    function s(e) {
        var a, s;
        return $.each(i, function(e) {
            $("body").removeClass(i[e])
        }), $("body").addClass(e), a = "skin", s = e, "undefined" != typeof Storage ? localStorage.setItem(a, s) : window.alert("Please use a modern browser to properly view this template!"), !1
    }(a = function(e) {
        if ("undefined" != typeof Storage) return localStorage.getItem(e);
        window.alert("Please use a modern browser to properly view this template!")
    }("skin")) && $.inArray(a, i) && s(a), $("[data-skin]").on("click", function(e) {
        $(this).hasClass("knob") || (e.preventDefault(), s($(this).data("skin")))
    }), $("#themecolors").on("click", "a", function() {
        $("#themecolors li a").removeClass("working"), $(this).addClass("working")
    })
});