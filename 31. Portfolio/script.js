$(document).ready(function() {
    // move underline

    const nav = $(".nav-links");
    const links = nav.find("ul a");
    const underline = nav.find(".underline")

    
    function moveUnderline(event){
        const link = $(this);
        // get width of clicked elements
        const width = link.outerWidth();
        const left = link.position().left;
        // remove active from already active link which is home
    
        links.removeClass("active");
        link.addClass("active");
    
        // move underline at active and set width equal to active elements width
    
        underline.css({
            width: `${width}px`,
            left: `${left}px`,
        });
    }
    // add event listener on all lines
    links.on("click", moveUnderline)



    // Mobile menu
    const hamBur = $(".ham-burger");
    hamBur.on("click", function(){
        nav.toggleClass("active")
        hamBur.toggleClass("active")
    })

    // Add Sticky class if scrolled
    const header = $("header");

    $(window).on("scroll", function(){
        // if 10px scrolled add sticky class
        if($(window).scrollTop() > 10) {
            header.addClass("sticky");
        }
        else{
            // else remove
            header.removeClass("sticky");
        }
    })


    // skills round circle svg
    // function generate svg
    function makeSvg(percentage, innerText=""){
        var absPercentage = Math.abs(percentage).toString();
        var percentageStr = percentage.toString();
        var classes = "";
        var svg = 
        '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
        '<circle class="circle-chart__background" cx="16.91549431" cy="16.91549431" r="15.91549431" />' +
        '<circle class="circle-chart__circle ' +
        classes +
        '"'+
        'stroke-dasharray="' +
        absPercentage +
        ',100" cx="16.91549431" cy="16.91549431" r="15.91549431" />' +
        '<g class="circle-chart__info">' +
        '  <text class="circle-chart__percent" x="17.9" y="15.5">' + 
          percentageStr +
          "%</text>";
        
          if(innerText){
            svg +=
            '<text class="circle-chart__subline" x="16.91549431" y="22">' +
            innerText +
            "</text>";
          }
          svg += "<g></svg>"
          return svg;
    }
    // function to animate svg on viewport

    (function ($){
        $.fn.circlechart = function() {
            this.each(function(){
                let $this = $(this);
                let percentage = $this.data("percentage");
                let innerText = $this.text();
                // observer to check when in viewport
                let observer = new IntersectionObserver(
                    function(enteries, observer){
                        enteries.forEach(function (entry) {
                            if(entry.isIntersecting){
                                $this.html(makeSvg(percentage, innerText));
                                observer.unobserve(entry.target)
                            }
                        });
                    },
                    {
                        threshold: 0.5,
                    }
                )
                observer.observe($this[0])
            });
            return this;
        }
    }) (jQuery);
    $(function() {
        $(".circlechart").circlechart();
    })



    var $gallery = $(".portfolio-items").isotope({
        itemSelector: ".item",
        layoutMode: "fitRows",
        fitRows: {
            gutter: 10,
        },
    })

    $(".portfolio-menu ul li").click(function() {
        $(".portfolio-menu ul li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".portfolio-items").isotope({
            filter: selector,
        })
        return false;
    })

    // For Validation

    $(".contact-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 3,
            },
            lname: {
                required: true,
                minlength: 3,
            },
            phone: {
                required: true,
                
            },
            email: {
                required: true,
                email: true,
            },
            email: {
                required: true,
                minlength: 10,
            },
        },
        messages: {
            fname: {
                required: "please enter your first name",
                minlength: "your first name must be atleast 3 charcters long",
            },
            lname: {
                required: "please enter your last name",
                minlength: "your first name must be atleast 3 charcters long",
            },
            phone: {
                required: "please enter a valid phone number",
                // minlength: "your first name must be atleast 3 charcters long",
            },
            email: {
                required: "please enter your email address",
                minlength: "Please enter a valid email address",
            },
            message: {
                required: "please enter your message",
                minlength: "your message must be atleast 10 charcters long",
            },
        },

        submitHandler: function(form){
            alert("Form submitted successfully")
        }

    })


    // THEME PRIMARY COLOR SETTINGS
    $(".theme-settings .toggle-btn").click(function(){
        $(".theme-settings").toggleClass("active")
    });

    $(".color-box").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active")
        // get background color variable
        var color = $(this).css("background-color");
        // console.log(color);
        // set this color as primary color variable
        document.documentElement.style.setProperty("--primary-color", color)
    })
    $("#color-picker").change(function(){
        var color= $(this).val();
        $(this).parent().css("background-color", color);
        document.documentElement.style.setProperty("--primary-color", color);
    })

    // Toggle dark mode
    $("#dark-mode").change(function(){
        if($(this).is(":checked")){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    })
})

