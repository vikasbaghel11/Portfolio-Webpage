// Number Counter

$(document).ready(function(){
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


// Back to top

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});



// Side Nav

// $(document).ready(function(){
//     $('#menu').click(function(event){
//         event.stopPropagation();
//         $('#side-navbar').toggle(400);
//     });

//     $(window).click(function(){
//         $('#side-navbar').hide(400);
//     });
    
// });


$(document).ready(function(){
    $('.sidebarIconToggle').click(function(){
        $('#sidebarmenu').toggleClass("sideheader");
    });

    $('#main').click(function(){
        $('#sidebarmenu').removeClass("sideheader");
    });

    $('.sidebarIconToggle').click(function(){
        $('.spinner').toggleClass("sidenav-btn");
    });
});


// Images Data Filter

$(document).ready(function(){
    $(".button").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var name = $(this).attr("data-filter");
        if(name == "all"){
            $(".portfolio-img").show("2000");
        }
        else{
            $(".portfolio-img").not("."+name).hide("2000");
            $(".portfolio-img").filter("."+name).show("2000");
        }
    });
    $(".btn-group a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
   });




//    Typewriter Effect

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



// OWl Carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            426:{
                items:2
            },
            769:{
                items:3
            }
        }
    })
});


// Images Loader

$(document).ready(function(e){
    $('.loader').fadeOut('slow');
});


// Form Vaildation

$(document).ready(function () {
    $('#submit').click(function () {
        

        // Name
        let name = $('.name-field').val();

        // Email
        let email = $('.email-field').val();
        let emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // Subject
        let subject = $('.subject-field').val();


        
        // Name Vaildation
        if (name == '' || name == undefined) {
            $('.name-field-msg').html("Name Required !!").addClass('text-danger');
            return false;
        } else if (name.length < 6) {
            $('.name-field-msg').html('Name must be 6 character').addClass('text-danger');
            return false;
        } else {
            $('.name-field-msg').html('<i class="fal fa-check"></i>').removeClass('text-danger').addClass('text-success');
        }


        // Email Vaildation
        if (email == '' || email == undefined) {
            $('.email-field-msg').html("Email Required !!").addClass('text-danger');
            return false;
        } else if (emailExp.test(email) == false) {
            $('.email-field-msg').html('Invailed Email ID.').addClass('text-danger');
            return false;
        } else {
            $('.email-field-msg').html('<i class="fal fa-check"></i>').removeClass('text-danger').addClass('text-success');
        }


        // Subject Vaildation

        if (subject == '' || subject == undefined)
        {
            $('.subject-field-msg').html('Subject Required !!').addClass('text-danger');
            return false;
        } else if (subject.length > 20)
        {
            $('.subject-field-msg').html('Subject cannot be more than 20 character').addClass('text-danger');
            return false;
        } else{
            $('.subject-field-msg').html('<i class="fal fa-check"></i>').removeClass('text-danger').addClass('text-success');
        }
    });
});

