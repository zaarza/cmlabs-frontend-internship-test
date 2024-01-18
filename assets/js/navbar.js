$(document).ready(() => {
    $('#toggle-navbar-button').click(() => {
        if ($('#navbar-menu').hasClass('top-[-9999px]')) {
            $('#navbar-menu').removeClass('top-[-9999px]');
            $('#navbar-menu').addClass('top-full');
        } else {
            $('#navbar-menu').removeClass('top-full');
            $('#navbar-menu').addClass('top-[-9999px]');
        }
    });
});
