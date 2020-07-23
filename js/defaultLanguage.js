jQuery(function ($) {
    var do_translate = function () {

        $('#title').text(
            $.i18n('title'),
        );

        $('#index-joint-law-office').text(
            $.i18n('index-joint-law-office'),
        );

        $('#find-out-more').text(
            $.i18n('find-out-more'),
        );

        $('#find-out-more-mobile').text(
            $.i18n('find-out-more-mobile'),
        );

        $('#nav-our-speciality').text(
            $.i18n('nav-our-speciality'),
        );
        $('#nav-our-team').text(
            $.i18n('nav-our-team'),
        );
        $('#nav-news').text(
            $.i18n('nav-news'),
        );

        $('#nav-career').text(
            $.i18n('nav-career'),
        );

        $('#nav-about-us').text(
            $.i18n('nav-about-us'),
        );

        $('#nav-contact').text(
            $.i18n('nav-contact'),
        );

        $('#one-team').text(
            $.i18n('one-team'),
        );

        $('#goal').text(
            $.i18n('goal'),
        );

        $('#title-our-speciality').text(
            $.i18n('title-our-speciality'),
        );

        $('#lawyer').text(
            $.i18n('lawyer'),
        );

        $('#title-news').text(
            $.i18n('title-news'),
        );

        $('#find-out-more-link').text(
            $.i18n('find-out-more-link'),
        );
        $('#find-out-more-link-3').text(
            $.i18n('find-out-more-link-3'),
        );
        $('#find-out-more-link-2').text(
            $.i18n('find-out-more-link-2'),
        );

        $('#footer-our-speciality').text(
            $.i18n('footer-our-speciality'),
        );
        $('#footer-our-team').text(
            $.i18n('footer-our-team'),
        );
        $('#footer-news').text(
            $.i18n('footer-news'),
        );

        $('#footer-career').text(
            $.i18n('footer-career'),
        );

        $('#footer-about-us').text(
            $.i18n('footer-about-us'),
        );
        $('#footer-contact').text(
            $.i18n('footer-contact'),
        );

        $('#footer-logo-text').text(
            $.i18n('footer-logo-text'),
        );
        $("#btn-our-speciality").text(
            $.i18n('btn-our-speciality'),
        );
        $('#btn-find-out-more').text(
            $.i18n('btn-find-out-more'),
        );
        $('#btn-show-all-news').text(
            $.i18n('btn-show-all-news'),
        );

        $('#footer-text').text(
            $.i18n('footer-text'),
        );
    }

    $.i18n().load({
        'sr': '../i18n/sr.json',
    }).done(function () {
        $.i18n().locale = "sr";
        do_translate();
    });
});