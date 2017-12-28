$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#myMenu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdpage', 'fourthPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Welcome', 'Film', 'Film', 'Television', 'Contact Me'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 950,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,

        //events
        afterRender: function () { },
        afterResize: function () { },
        afterResponsive: function (isResponsive) { },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { },
        onLeave: function (index, nextIndex, direction) {
            var leavingSection = $(this);

            //after leaving section 2
            if (index == 1 && direction == 'down') {
                var loadedSection = $(this);
                console.log("Cool");
                var projectDescription = document.querySelectorAll('.film_project_completed');
                console.log(projectDescription)
                Array.prototype.forEach.call(projectDescription, function (elements, index) {
                    (function (index) {
                        setTimeout(function () {
                            $(elements).addClass('fade_in_animation');
                        }, index * 200);
                    })(index);
                });

            }

            else if (index == 2 && direction == 'up') {
                console.log("Going to section 1!");
                console.log(index);

            }
            else if (index == 2 && direction == 'down') {
                console.log("Going to section 3!");
                console.log(index);
                var projectDescription = document.querySelectorAll('.film_project');
                Array.prototype.forEach.call(projectDescription, function (elements, index) {
                    (function (index) {
                        setTimeout(function () {
                            $(elements).addClass('fade_in_animation');
                        }, index * 200);
                    })(index);
                });
            }
            else if (index == 3 && direction == 'up') {
                console.log("Going to section 2!");
                console.log(index);
            }
        },
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            if (anchorLink == 'thirdPage') {
                console.log("third page");

            }
        }

    });
    function animate_fade_in(){

    }
    // Fade out load screen
    $("#loadScreen").fadeOut(3000);
});

