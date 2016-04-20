$(document).ready(function() {
    var WhatIsETF = (function() {
        var app = {
            init: function() {
                this.viewportHeight = $(window).height();

                this.costHasAnimated = false;

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
                    var vHeight = self.viewportHeight;

                    if (offset >= vHeight && offset < (vHeight * 2)) {
                        self.animateSection('.section-2');
                    } else if (offset >= (vHeight * 2) && offset < (vHeight * 3)) {
                        self.animateSection('.section-3');
                    } else if (offset >= (vHeight * 3)) {
                        self.numericAnimation();
                    };
                });
            },

            animateSection: function(section) {
                if (!$(section).hasClass('animate')) {
                    $(section).addClass('animate');
                }
            },

            numericAnimation: function() {
                if (!this.costHasAnimated) {
                    var cheaperFee = new CountUp('cheaper-fee', 0, 700, 0, 2.5);
                    var expensiveFee = new CountUp('expensive-fee', 0, 2000, 0, 4.5);
                    
                    cheaperFee.start();
                    expensiveFee.start();

                    this.costHasAnimated = true;
                }
            }
        };

        return app;
    })();

    WhatIsETF.init();
});