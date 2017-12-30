$(document).ready(function () {
    console.log($)
    $('#fullpage').fullpage({
        //Navigation
        menu: '#myMenu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdpage', 'fourthPage','fifthPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Welcome','About', 'Film', 'Film', 'Television', 'Contact Me'],
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
            // after leaving section 1 animate elements for slide 1
            if (index == 1 && direction == 'down') {
                console.log('going to section 2');
            
            }
            // after leaving section 2 animate elements for slide 3
            if (index == 2 && direction == 'down') {
                console.log('going to section 2');
                let animation_selections = document.querySelectorAll('.completed_section_animations');
                let animation_class_name = 'animation_trigger_left_to_right';
                animations(animation_selections, animation_class_name)
                $('#film_project_completed p').addClass('animate_from_bottom');
            }
            // after leaving section 3 animate elements for slide 4
            else if (index == 3 && direction == 'down') {
                let animation_selections = document.querySelectorAll('.film_project');
                let animation_class_name = 'fade_in_animation';
                $('.section_header_font').addClass('animate_from_top')
                animations(animation_selections, animation_class_name)
            }
            // after leaving section 4 animate elements for slide 5
            else if (index == 4 && direction == 'down') {
                $('#television_container').addClass('animate_from_bottom');
                $('.section_header_font_small').addClass('animate_from_top');

            }
            else if (index == 5 && direction == 'up') {
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
    function animate_fade_in() {

    }
    // Fade out load screen
    function animations(elements_input, animation_class_name) {
        let elements_to_animate = elements_input;
        Array.prototype.forEach.call(elements_to_animate, function (elements, index) {
            (function (index) {
                setTimeout(function () {
                    $(elements).addClass(animation_class_name);
                }, index * 200);
            })(index);
        });
    }
    $("#loadScreen").fadeOut(3000);
});

