/*global jQuery */
/*!
 * FitText.js 1.2.1
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Copyright 2013, Milanowicz https://github.com/Milanowicz
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Tue Jan 14 12:15:00 2014 -0100
 */

(function($){

    $.fn.fitText = function( kompressor, options ) {

        // Setup options
        var compressor = kompressor || 1,
            settings = jQuery.extend({
                'minFontSize' : Number.NEGATIVE_INFINITY,
                'maxFontSize' : Number.POSITIVE_INFINITY,
                'minLineHeight' : Number.NEGATIVE_INFINITY,
                'maxLineHeight' : Number.POSITIVE_INFINITY,
                'windowSize' : false,
            }, options);


        // Test if Browser can REM unit
        var div = document.createElement('div');
        var RemUnit = false;
        try {
            div.style.fontSize = '3rem';
        } catch(er){}

        if ((/rem/).test(div.style.fontSize)) {
            RemUnit = true;
        }


        return this.each(function(){

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function () {

                // Get window size when it set
                var width = (settings.windowSize) ? $(window).width() : $this.width();

                if (RemUnit) {

                    $this.css('font-size', Math.max(Math.min(width / 16 / (compressor*10), parseFloat(settings.maxFontSize / 16)), parseFloat(settings.minFontSize / 16)) + 'rem');

                    if (settings.minLineHeight != '0' && settings.maxLineHeight != '0') {
                        $this.css('line-height', Math.max(Math.min(width / 16 / (compressor*10), parseFloat(settings.maxLineHeight / 16)), parseFloat(settings.minLineHeight / 16)) + 'rem');
                    }

                } else {

                    $this.css('font-size', Math.max(Math.min(width / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px');

                    if (settings.minLineHeight != '0' && settings.maxLineHeight != '0') {
                        $this.css('line-height', Math.max(Math.min(width / (compressor*10), parseFloat(settings.maxLineHeight)), parseFloat(settings.minLineHeight)) + 'px');
                    }

                }

            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

}) (jQuery);