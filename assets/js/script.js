document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Rajesh Chalise";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});



        // Show certificate modal
    function viewCertificate(src) {
        $('#certificateModal').fadeIn();       // show modal
        $('#modalImage').attr('src', src);     // set image
    }

    // Close modal
    function closeModal() {
        $('#certificateModal').fadeOut();      // hide modal
    }

    // Show only first 6 certificates initially
    $(document).ready(function() {
        const cards = $('.certificates-container .certificate-card');
        cards.each(function(index) {
            if (index >= 6) {
                $(this).addClass('hidden');
            }
        });

        // View All button
        $('#viewAllBtn').click(function() {
            $('.certificate-card.hidden').removeClass('hidden'); // show all hidden
            $(this).hide(); // hide View All button
        });
    });





$(document).ready(function () {

    // Menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll & scroll spy
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }

        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // EmailJS contact form
    $("#contact-form").submit(function (event) {
        emailjs.init("JiIJ08BCsI2UPNvUw");

        emailjs.sendForm('service_w8t4ozw', 'template_54abtz8', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                $("#contact-form")[0].reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    



    // Typed.js effect
    var typed = new Typed(".typing-text", {
        strings: ["Computer Engineering ", "AI/ML Engineering ", "Deep Learning ", "Neural Networking"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Fetch skills/projects
    async function fetchData(type = "skills") {
        let response
        type === "skills" ?
            response = await fetch("skills.json") :
            response = await fetch("./projects/projects.json")
        const data = await response.json();
        return data;
    }

    function showSkills(skills) {
        let skillsContainer = $("#skillsContainer");
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += `
            <div class="bar">
                  <div class="info">
                    <img src=${skill.icon} alt="skill" />
                    <span>${skill.name}</span>
                  </div>
                </div>`;
        });
        skillsContainer.html(skillHTML);
    }

    function showProjects(projects) {
        let projectsContainer = $("#work .box-container");
        let projectHTML = "";
        projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
            projectHTML += `
            <div class="box tilt">
              <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
              <div class="content">
                <div class="tag">
                  <h3>${project.name}</h3>
                </div>
                <div class="desc">
                  <p>${project.desc}</p>
                  <div class="btns">
                    <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                  </div>
                </div>
              </div>
            </div>`;
        });
        projectsContainer.html(projectHTML);

        // VanillaTilt effect
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
        });

        // ScrollReveal animation
        const srtop = ScrollReveal({ origin: 'top', distance: '80px', duration: 1000, reset: true });
        srtop.reveal('.work .box', { interval: 200 });
    }

    fetchData().then(data => showSkills(data));
    fetchData("projects").then(data => showProjects(data));

    // VanillaTilt effect for other elements
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

    // Disable developer mode shortcuts
    document.onkeydown = function (e) {
        if (e.keyCode == 123) return false;
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    }






});
