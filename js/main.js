$(document).ready(function() {
    var WhatIsETF = (function() {
        var app = {
            init: function() {
                this.viewportHeight = $(window).height();

                $('.section').css('height', this.viewportHeight);

                this.setUpSmoothScroll();
                this.setupCollectionAnimation();
                this.setupScrollEvent();
            },

            setUpSmoothScroll: function() {
                $('a[href*="#"]:not([href="#"])').click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 600);
                            return false;
                        }
                    }
                });
            },

            setupCollectionAnimation: function() {
                var numStocks = 8;
                var $stockMarkers = $('.stock-markers');

                for (var i = 0; i < numStocks; i++) {
                    $stockMarkers.append('<li>Stock</li>');
                }
            },

            setupScrollEvent: function() {
                var self = this;

                $(window).on('scroll', function() {
                    var offset = $(document).scrollTop();

                    switch(offset) {
                        case self.viewportHeight:
                            self.animateSection('.section-2');
                            break;
                        case (self.viewportHeight * 2):
                            self.animateSection('.section-3');
                            break;
                        default:
                            return false;
                    }
                });
            },

            animateSection: function(section) {
                $(section).addClass('animate');
            }
        };

        return app;
    })();

    WhatIsETF.init();
});