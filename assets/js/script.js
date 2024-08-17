// document.addEventListener("DOMContentLoaded", function() {
//     var paragraphs = document.querySelectorAll('.js-nametag');
//     var index = 0;

//     function showNextParagraph() {
//       paragraphs.forEach(function(paragraph) {
//         paragraph.classList.remove('show');
//       });

//       paragraphs[index].classList.add('show');
//       index = (index + 1) % paragraphs.length;
//     }
//     function showParagraphs() {
//       setInterval(showNextParagraph, 3000);
//     }

//     showParagraphs();
//   });
// number animation
const counters = document.querySelectorAll(".counter");

function startCounting() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const target = +counter.getAttribute("data-target");
    let c = 0; // Start counting from 0

    const updateCounter = () => {
      const increment = Math.ceil(target / 500);
      if (c < target) {
        c += increment;
        counter.innerText = `${c.toLocaleString()}+`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = `${target.toLocaleString()}+`;
      }
    };

    updateCounter();
  });

  // After counting for each counter, wait for 10 seconds and then restart
  setTimeout(startCounting, 10000);
}

// Start the counting initially
startCounting();

// end number animation
// top banner index
document.addEventListener("DOMContentLoaded", function () {
  var paragraphs = document.querySelectorAll(".js-nametag");
  var index = 0;

  function showNextParagraph() {
    paragraphs.forEach(function (paragraph) {
      paragraph.classList.remove("show");
    });

    paragraphs[index].classList.add("show");
    index = (index + 1) % paragraphs.length; // Increment index after displaying current paragraph
  }

  // Show first paragraph immediately upon page load
  showNextParagraph();

  // Function to cycle through paragraphs with a delay
  function showParagraphs() {
    setInterval(showNextParagraph, 4000); // Change delay time as needed (in milliseconds)
  }

  // Uncomment the line below if you want to continue cycling through paragraphs after the initial display
  showParagraphs();
});
// end top banner index
// Products page

$(document).ready(function () {
  function openFirstMenuItem() {
    $(".verticalnav > li:first-child").addClass("open");
    $(".verticalnav > li:first-child ul").show();
  }

  $(".verticalnav > li > a").click(function (e) {
    e.preventDefault();

    $(this).parent().toggleClass("open");

    $(".verticalnav > li").not($(this).parent()).removeClass("open");
    $(".verticalnav > li > ul").not($(this).siblings("ul")).hide();

    $(this).siblings("ul").toggle();
  });

  $(".verticalnav > li:first-child ul").show();

  $(".verticalnav > li:first-child > a").trigger("click");

  $(".verticalnav .dropdown li a").click(function (e) {
    e.preventDefault();

    $(".navi-tabs__content").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();

    $(".verticalnav .dropdown a").removeClass("active");
    $(this).addClass("active");
  });

  $("#tab1").addClass("active").show();

  openFirstMenuItem();
});

// end product

