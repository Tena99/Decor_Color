$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: false,
    navText: ["", " "],
    mergeFit: true,
    margin: 10,

    responsive: {
      768: {
        items: 2,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-two").owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    navClass: "owl-prev, owl-next",
  });
});

$(document).ready(function () {
  $(".owl-three").owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: true,
    margin: 30,

    responsive: {
      992: {
        items: 4,
      },

      768: {
        items: 3,
      },

      575: {
        items: 2,
      },
    },
  });
});

$(".owl-prev").click(function (event) {
  event.preventDefault();
  $(".owl-carousel").trigger("prev.owl.carousel");
});

$(".owl-next").click(function (event) {
  event.preventDefault();
  $(".owl-carousel").trigger("next.owl.carousel");
});

const btn = document.querySelector(".submit");
const selectedOption = {};

btn.addEventListener("click", function () {
  let questions = document.querySelectorAll(".question_item");
  let contact_form = document.querySelector(".contact_form");
  let textInputs = [...contact_form.querySelectorAll('input[type="text"]')];
  let i = 1;

  questions.forEach(function (question) {
    let radioBtns = [...question.querySelectorAll('input[type="radio"]')];
    let labels = [...question.querySelectorAll("label")];

    radioBtns.forEach(function (radioBtn) {
      if (radioBtn.checked) {
        let label = labels.find(function (elem) {
          if (elem && elem.htmlFor === radioBtn.id) {
            return elem;
          }
        });

        if (radioBtn.previousElementSibling.tagName === "INPUT") {
          selectedOption[`question_${i++}`] =
            radioBtn.previousElementSibling.value;
        } else {
          selectedOption[`question_${i++}`] = label.innerText;
        }
      }
    });
  });

  textInputs.forEach(function (textInput) {
    selectedOption[`question_${i++}`] = textInput.value;
  });

  let title = document.querySelector(".question_title");
  let body = document.querySelector(".question_body");
  title.style = "display:none";
  body.style = "padding: 0";
  body.style.backgroundImage = 'url("./images/questions_photo_7.jpg")';
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";

  console.log(selectedOption);
});
