jQuery(document).ready(function() {
    jQuery(".section-title-holder").stick_in_parent({
        offset_top: 64
    }).on("sticky_kit:stick", function(e) {
        jQuery('.menu-wrapper, .menu-wrapper .sub-menu').css('backgroundColor', jQuery(this).css("backgroundColor"));
        jQuery('.menu-wrapper a, .mob-menu').css('color', jQuery(this).find('.section-num span').css("color"))
    });
    jQuery(".section-title-holder").stick_in_parent({
        offset_top: 64
    }).on("sticky_kit:unbottom", function(e) {
        jQuery('.menu-wrapper, .menu-wrapper .sub-menu').css('backgroundColor', jQuery(this).css("backgroundColor"));
        jQuery('.menu-wrapper a, .mob-menu').css('color', jQuery(this).find('.section-num span').css("color"))
    });
    jQuery('input, textarea').focus(function() {
        jQuery(this).data('placeholder', jQuery(this).attr('placeholder'));
        jQuery(this).attr('placeholder', '')
    });
    jQuery('input, textarea').blur(function() {
        jQuery(this).attr('placeholder', jQuery(this).data('placeholder'))
    });
    var grid = jQuery('.grid').imagesLoaded(function() {
        grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        jQuery('.portfolio-text-holder').each(function() {
            jQuery(this).find('.portfolio-text-wrapper').css('margin-top', (jQuery(this).height() - jQuery(this).find('.portfolio-text-wrapper').height()) / 2 - 70)
        });
        jQuery('.grid-item a').hover(function() {
            jQuery(this).find('.portfolio-text-holder').fadeIn('fast')
        }, function() {
            jQuery(this).find('.portfolio-text-holder').fadeOut('fast')
        })
    })
});
jQuery(window).load(function() {
    jQuery('.mob-menu').on("click", showHideMobMenu);
    if (jQuery("body").width() <= 925) {
        jQuery('.main-menu a').on("click", hideMobMenuItemClick)
    }
    jQuery(".image-slider").each(function() {
        var id = jQuery(this).attr('id');
        var auto_value = window[id + '_auto'];
        if (auto_value == 'false') {
            auto_value = !1
        } else {
            auto_value = !0
        }
        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true') {
            hover_pause = 'resume'
        } else {
            hover_pause = !1
        }
        var speed_value = window[id + '_speed'];
        jQuery('#' + id).carouFredSel({
            responsive: !0,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            next: '#' + id + '_next',
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: !0,
                onTouch: !0
            },
            items: {
                visible: 1,
                height: 'variable'
            }
        })
    });
    jQuery('.image-slider-wrapper').each(function() {
        var slider_width = jQuery(this).width();
        var pagination_width = jQuery(this).find('.carousel_pagination').width();
        jQuery(this).find('.carousel_pagination').css("margin-left", (slider_width - pagination_width) / 2)
    });
    jQuery(".testimonial").each(function() {
        var id = jQuery(this).attr('id');
        var auto_value = window[id + '_auto'];
        if (auto_value == 'false') {
            auto_value = !1
        } else {
            auto_value = !0
        }
        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true') {
            hover_pause = 'resume'
        } else {
            hover_pause = !1
        }
        var speed_value = window[id + '_speed'];
        jQuery('#' + id).carouFredSel({
            responsive: !0,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            next: '#' + id + '_next',
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: !0,
                onTouch: !0
            },
            items: {
                height: 'variable'
            }
        })
    });
    jQuery('.carousel_pagination').each(function() {
        var pagination_width = jQuery(this).width();
        var windw_width = jQuery('.testimonial-slider-holder').width();
        jQuery(this).css("margin-left", (windw_width - pagination_width) / 2)
    });
    jQuery(".fw-image-slider").each(function() {
        var id = jQuery(this).attr('id');
        var auto_value = window[id + '_auto'];
        if (auto_value == 'false') {
            auto_value = !1
        } else {
            auto_value = !0
        }
        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true') {
            hover_pause = 'resume'
        } else {
            hover_pause = !1
        }
        var speed_value = window[id + '_speed'];
        var start_value = window[id + '_start'];
        var width_value = window[id + '_width'];
        var num_value = window[id + '_num'];
        jQuery('#' + id).carouFredSel({
            responsive: !0,
            width: '100%',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            pagination: '#' + id + '_fw_image_slide_pager',
            next: '#' + id + '_fw_next',
            scroll: {
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: !0,
                onTouch: !0
            },
            items: {
                width: parseFloat(width_value),
                height: 'auto',
                visible: {
                    min: 1,
                    max: parseFloat(num_value)
                },
                start: parseFloat(start_value)
            }
        })
    });
    jQuery('a[data-rel]').each(function() {
        jQuery(this).attr('rel', jQuery(this).data('rel'))
    });
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: 0.80,
        show_title: !0,
        allow_resize: !0,
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/',
        theme: 'pp_default',
        hideflash: !1,
        wmode: 'opaque',
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        social_tools: !1,
        iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    });
    var $videoDefaultWidth = Math.ceil(jQuery('body').width() * 0.7);
    var $videoDefaultHeight = Math.ceil($videoDefaultWidth * 0.5625);
    jQuery("a[rel^='prettyPhoto']").each(function() {
        var str = jQuery(this).attr('href');
        if ((str.indexOf("youtube") >= 0 || (str.indexOf("vimeo")) >= 0)) {
            jQuery(this).attr("href", str + "&width=" + $videoDefaultWidth + "&height=" + $videoDefaultHeight)
        }
    });
    jQuery('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: !0
    });
    var $mainMenu = jQuery('.main-menu').on('click', 'span.sub-arrow', function(e) {
        var obj = $mainMenu.data('smartmenus');
        if (obj.isCollapsible()) {
            var $item = jQuery(this).parent(),
                $sub = $item.parent().dataSM('sub');
            $sub.dataSM('arrowClicked', !0)
        }
    }).bind({
        'beforeshow.smapi': function(e, menu) {
            var obj = $mainMenu.data('smartmenus');
            if (obj.isCollapsible()) {
                var $menu = jQuery(menu);
                if (!$menu.dataSM('arrowClicked')) {
                    return !1
                }
                $menu.removeDataSM('arrowClicked')
            }
        }
    });
    jQuery('.section-title-holder').trigger("sticky_kit:recalc");
    jQuery('.doc-loader').fadeOut('fast')
});
jQuery(window).resize(function() {
    if (jQuery("body").width() <= 925) {
        jQuery('.main-menu a').on("click", hideMobMenuItemClick)
    }
    var $videoDefaultWidth = Math.ceil(jQuery('body').width() * 0.7);
    var $videoDefaultHeight = Math.ceil($videoDefaultWidth * 0.5625);
    jQuery("a[rel^='prettyPhoto']").each(function() {
        var str = jQuery(this).attr('href');
        str = str.split('&width');
        if ((str[0].indexOf("youtube") >= 0 || (str[0].indexOf("vimeo")) >= 0)) {
            jQuery(this).attr("href", str[0] + "&width=" + $videoDefaultWidth + "&height=" + $videoDefaultHeight)
        }
    });
    jQuery('.image-slider-wrapper').each(function() {
        var slider_width = jQuery(this).width();
        var pagination_width = jQuery(this).find('.carousel_pagination').width();
        jQuery(this).find('.carousel_pagination').css("margin-left", (slider_width - pagination_width) / 2)
    });
    jQuery('.portfolio-text-holder').each(function() {
        jQuery(this).find('.portfolio-text-wrapper').css('margin-top', (jQuery(this).height() - jQuery(this).find('.portfolio-text-wrapper').height()) / 2 - 70)
    })
});
var showHideMobMenu = function(e) {
    jQuery('.main-menu').slideToggle()
};
var hideMobMenuItemClick = function(e) {
    if (jQuery('.mob-menu').is(':visible')) {
        jQuery('.main-menu').slideUp()
    }
};

function is_touch_device() {
    return !!('ontouchstart' in window)
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress)
}
var SendMail = function() {
    var emailVal = jQuery('#contact-email').val();
    if (isValidEmailAddress(emailVal)) {
        var params = {
            'action': 'SendMessage',
            'name': jQuery('#name').val(),
            'email': jQuery('#contact-email').val(),
            'subject': jQuery('#subject').val(),
            'message': jQuery('#message').val()
        };
        jQuery.ajax({
            type: "POST",
            url: "php/sendMail.php",
            data: params,
            success: function(response) {
                if (response) {
                    var responseObj = jQuery.parseJSON(response);
                    if (responseObj.ResponseData) {
                        alert(responseObj.ResponseData)
                    }
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                var error = null;
                switch (xhr.status) {
                    case "301":
                        error = "Redirection Error!";
                        break;
                    case "307":
                        error = "Error, temporary server redirection!";
                        break;
                    case "400":
                        error = "Bad request!";
                        break;
                    case "404":
                        error = "Page not found!";
                        break;
                    case "500":
                        error = "Server is currently unavailable!";
                        break;
                    default:
                        error = "Unespected error, please try again later."
                }
                if (error) {
                    alert(error)
                }
            }
        })
    } else {
        alert('Your email is not in valid format')
    }
}