$(document).ready(function () {
            var tofix1_pos = $("#tofix1").offset().top;
            var tofix2_pos = $("#tofix2").offset().top;
            $(window).scroll(function () {
                var current_pos = $(window).scrollTop();
                if (current_pos > tofix1_pos) {
                    $("#tofix1").addClass("fixed");
                } else {
                    $("#tofix1").removeClass("fixed");
                }
                if (current_pos > tofix2_pos) {
                    $("#tofix2").addClass("fixed");
                } else {
                    $("#tofix2").removeClass("fixed");
                }

            });