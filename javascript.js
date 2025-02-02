//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul")

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle(); 
    });
    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function(){
var width = $(window).width();
if(width < 990){
    klikMenu();

    }
})

//cek lebR
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display", "block");
        //display:block
    }else{
        menu.css("display", "none");
    }
    klikMenu();
})

// Efek Scroll
$(document).ready(function() {
    function checkScroll() {
        if ($(window).width() > 991.98) { // Hanya aktif di layar desktop
            if ($(window).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        }
    }

    // Check saat halaman dimuat
    checkScroll();
    
    // Check saat scroll
    $(window).scroll(function() {
        checkScroll();
    });
    
    // Check saat window diresize
    $(window).resize(function() {
        checkScroll();
    });
});



document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* atur animasi*/

document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        hiddenElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    // Jalankan saat halaman dimuat
    revealOnScroll();

    // Jalankan saat scroll
    window.addEventListener("scroll", revealOnScroll);
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scroll-top');
    
    // Show/hide button based on scroll position
    function toggleScrollButton() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
    
    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', toggleScrollButton);
    scrollBtn.addEventListener('click', scrollToTop);
});


function showModal(pdfUrl) {
    const modal = document.getElementById('pdfModal');
    const pdfPreview = document.getElementById('pdfPreview');
    pdfPreview.src = pdfUrl;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
    document.getElementById('pdfPreview').src = '';
}