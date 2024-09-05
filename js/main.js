if ($(".header__search").length) {
  $(".header__search").click(function (e) {
    e.preventDefault();
    $(".header__search__popup").addClass("active");
  });
  $(".header__search__close").click(function (e) {
    e.preventDefault();
    $(".header__search__popup").removeClass("active");
  });
}

if ($(".header__sticky").length) {
  const height = $(".header__sticky").height();
  $(".header").height(height);
  if (window.innerWidth < 992) {
    $(".header").height(height + 30);
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".header__sticky").addClass("sticky");
    }
  });
}

if ($(".header__bars").length) {
  $(".header__bars").click(function (e) {
    $(".header__mobile").addClass("active");
    $("body").addClass("prevent-scroll");
  });
  $(".header__close").click(function (e) {
    $(".header__mobile").removeClass("active");
    $("body").removeClass("prevent-scroll");
  });
}
if ($(".header__link > i").length) {
  $(".header__link > a").each(function (inx, item) {
    $(item).on("touchstart click", function (e) {
      item.click();
    });
  });
  $(".header__link > i").each(function (inx, item) {
    $(item).on("touchstart click", function (e) {
      e.preventDefault();
      $(".header__menu").addClass("slide");
      $(".header__dropdown").eq(inx).addClass("active");
      $(".header__dropdown").eq(inx).find(".header__dropdown__back").addClass("active");
    });
  });
  $(".header__dropdown__back").each(function (inx, item) {
    $(item).click(function (e) {
      $(".header__menu").removeClass("slide");
      $(".header__dropdown").eq(inx).removeClass("active");
      $(".header__dropdown").eq(inx).find(".header__dropdown__back").removeClass("active");
    });
  });
}
if ($(".header__link--2 > i").length) {
  $(".header__link--2 > a").each(function (inx, item) {
    $(item).on("touchstart click", function (e) {
      item.click();
    });
  });
  $(".header__link--2 > i").each(function (inx, item) {
    $(item).on("touchstart click", function (e) {
      $(".header__menu").addClass("slide--2");
      $(".header__dropdown--2").eq(inx).addClass("active");
      $(".header__dropdown--2").eq(inx).find(".header__dropdown__back--2").addClass("active");
    });
  });
  $(".header__dropdown__back--2").each(function (inx, item) {
    $(item).click(function (e) {
      $(".header__menu").removeClass("slide--2");
      $(".header__dropdown--2").eq(inx).removeClass("active");
      $(".header__dropdown--2").eq(inx).find(".header__dropdown__back--2").removeClass("active");
    });
  });
}
if ($(".header__link--3 > i").length) {
  $(".header__link--3 > a").each(function (inx, item) {
    $(item).on("touchstart click", function (e) {
      item.click();
    });
  });
  $(".header__link--3 > i").each(function (inx, item) {
    $(item).on("touchstart click", function (e) {
      $(".header__menu").addClass("slide--3");
      $(".header__dropdown--3").eq(inx).addClass("active");
      $(".header__dropdown--3").eq(inx).find(".header__dropdown__back--3").addClass("active");
    });
  });
  $(".header__dropdown__back--3").each(function (inx, item) {
    $(item).click(function (e) {
      $(".header__menu").removeClass("slide--3");
      $(".header__dropdown--3").eq(inx).removeClass("active");
      $(".header__dropdown--3").eq(inx).find(".header__dropdown__back--3").removeClass("active");
    });
  });
}

if ($(".home-banner__image").length) {
  $(".home-banner__image").addClass("zoom");
}

if ($(".news-list").length) {
  $(".news-list").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "10% 0 0",
        },
      },
    ],
  });
}

function countup(el, target) {
  let data = { count: 0 };
  anime({
    targets: data,
    count: [0, target],
    duration: 3000,
    round: 1,
    delay: 200,
    easing: "easeOutCubic",
    update() {
      el.innerText = data.count.toLocaleString();
    },
  });
}

function makeCountup(el) {
  const text = el.textContent;
  const target = parseInt(text, 10);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        countup(el, target);
        io.unobserve(entry.target);
      }
    });
  });

  io.observe(el);
}

const els = document.querySelectorAll("[data-countup]");
if (els) {
  els.forEach(makeCountup);
}

if ($(".timeline").length) {
  $(".timeline").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10% 0 0",
        },
      },
    ],
  });
}

if ($(".job").length) {
  $(".job__btn").each(function (inx, item) {
    $(item).click(function (e) {
      e.preventDefault();
      $(item).parents(".job").find(".job__body").slideToggle();
      $(item).toggleClass("active");
    });
  });
  $(".job__send").each(function (inx, item) {
    $(item).click(function (e) {
      e.preventDefault();
      $("#apply-modal").addClass("active");
      $("#apply").addClass("active");
    });
  });
  $(".popup-apply__close").click(function (e) {
    e.preventDefault();
    $("#apply-modal").removeClass("active");
    $("#apply").removeClass("active");
  });
  $("#apply-modal").click(function (e) {
    e.preventDefault();
    $("#apply-modal").removeClass("active");
    $("#apply").removeClass("active");
  });
}

if ($("#apply").length) {
  $("#apply").on("submit", function (event) {
    event.preventDefault(); // Ngăn không cho form submit nếu không hợp lệ
    var isValid = true;

    // Validate Họ tên
    if ($("#fullname").val().trim() === "") {
      $("#fullnameError").text($("#fullname").data("error"));
      isValid = false;
    } else {
      $("#fullnameError").text("");
    }

    // Validate Email
    var email = $("#mail").val().trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Đơn giản hóa regex email
    if (email === "") {
      $("#mailError").text($("#mail").data("error"));
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $("#mailError").text("Email không hợp lệ");
      isValid = false;
    } else {
      $("#mailError").text("");
    }

    // Validate Điện thoại
    var phone = $("#phone").val().trim();
    var phoneRegex = /^[0-9]{10,11}$/; // Đảm bảo số điện thoại là 10 hoặc 11 số
    if (phone === "") {
      $("#phoneError").text($("#phone").data("error"));
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      $("#phoneError").text("Số điện thoại không hợp lệ");
      isValid = false;
    } else {
      $("#phoneError").text("");
    }

    // Validate Vị trí
    if ($("#position").val() === "") {
      $("#positionError").text($("#position").data("error"));
      isValid = false;
    } else {
      $("#positionError").text("");
    }

    // Validate Địa điểm
    if ($("#address").val() === "") {
      $("#addressError").text($("#address").data("error"));
      isValid = false;
    } else {
      $("#addressError").text("");
    }

    // Validate File upload
    if ($("#file").val() === "") {
      $("#fileError").text("Vui lòng đính kèm hồ sơ xin việc");
      isValid = false;
    } else {
      $("#fileError").text("");
    }

    // Validate Mã xác nhận
    if ($("#code").val().trim() === "") {
      $("#codeError").text("Vui lòng nhập mã xác nhận");
      isValid = false;
    } else if ($("#code").val().trim() !== $(".popup-apply__numcode").text()) {
      $("#codeError").text("Mã xác nhận không chính xác");
      isValid = false;
    } else {
      $("#codeError").text("");
    }

    // Nếu tất cả đều hợp lệ thì submit form
    if (isValid) {
      alert("Form đã được nộp thành công!");
      // Tiến hành submit form thật sự nếu cần (nếu không dùng event.preventDefault())
      // this.submit();
    }
  });
}

if ($(".sign-up").length) {
  $(".sign-up").click(function (e) {
    e.preventDefault();
    $("#sign-up-modal").addClass("active");
    $("#sign-up").addClass("active");
  });
  $(".popup-apply__close").click(function (e) {
    e.preventDefault();
    $("#sign-up-modal").removeClass("active");
    $("#sign-up").removeClass("active");
  });
  $("#sign-up-modal").click(function (e) {
    e.preventDefault();
    $("#sign-up-modal").removeClass("active");
    $("#sign-up").removeClass("active");
  });
}

if ($("#sign-up").length) {
  $("#sign-up").on("submit", function (event) {
    event.preventDefault();

    var isValid = true;

    // Validate fullname
    if ($("#fullname").val().trim() === "") {
      $("#fullnameError").text($("#fullname").data("error"));
      isValid = false;
    } else {
      $("#fullnameError").text("");
    }

    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if ($("#mail").val().trim() === "") {
      $("#mailError").text($("#mail").data("error"));
      isValid = false;
    } else if (!emailPattern.test($("#mail").val().trim())) {
      $("#mailError").text($("#mail").data("error"));
      isValid = false;
    } else {
      $("#mailError").text("");
    }

    // Validate phone
    if ($("#phone").val().trim() === "") {
      $("#phoneError").text($("#phone").data("error"));
      isValid = false;
    } else {
      $("#phoneError").text("");
    }

    // Validate topic
    if ($("#topic").val() === "") {
      $("#topicError").text($("#topic").data("error"));
      isValid = false;
    } else {
      $("#topicError").text("");
    }

    // Validate language
    if ($("#language").val() === "") {
      $("#languageError").text($("#language").data("error"));
      isValid = false;
    } else {
      $("#languageError").text("");
    }

    // Validate note
    if ($("#note").val().trim() === "") {
      $("#noteError").text($("#note").data("error"));
      isValid = false;
    } else {
      $("#noteError").text("");
    }

    // Prevent form submission if any field is invalid
    if (isValid) {
      alert("Thành công");
    }
  });
}

if ($(".contact").length) {
  $(".contact").on("submit", function (event) {
    event.preventDefault(); // Ngăn không cho form submit nếu không hợp lệ
    var isValid = true;

    // // Validate Tên doanh nghiệp
    // if ($("#company-contact").val().trim() === "") {
    //   $("#company-contact-error").text($("#company-contact").data("error"));
    //   isValid = false;
    // } else {
    //   $("#company-contact-error").text("");
    // }

    // Validate Người liên hệ
    if ($("#person-contact").val().trim() === "") {
      $("#person-contact-error").text($("#person-contact").data("error"));
      isValid = false;
    } else {
      $("#person-contact-error").text("");
    }

    // // Validate Chức danh
    // if ($("#position-contact").val().trim() === "") {
    //   $("#position-contact-error").text($("#position-contact").data("error"));
    //   isValid = false;
    // } else {
    //   $("#position-contact-error").text("");
    // }

    // Validate Email
    var email = $("#mail-contact").val().trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Đơn giản hóa regex email
    if (email === "") {
      $("#mail-contact-error").text($("#mail-contact").data("error"));
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $("#mail-contact-error").text("Email không hợp lệ");
      isValid = false;
    } else {
      $("#mail-contact-error").text("");
    }

    // Validate Điện thoại
    var phone = $("#phone-contact").val().trim();
    var phoneRegex = /^[0-9]{10,11}$/; // Đảm bảo số điện thoại là 10 hoặc 11 số
    if (phone === "") {
      $("#phone-contact-error").text($("#phone-contact").data("error"));
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      $("#phone-contact-error").text("Số điện thoại không hợp lệ");
      isValid = false;
    } else {
      $("#phone-contact-error").text("");
    }

    // Validate Nội dung tin nhắn
    if ($("#content-contact").val().trim() === "") {
      $("#content-contact-error").text($("#content-contact").data("error"));
      isValid = false;
    } else {
      $("#content-contact-error").text("");
    }

    // Validate Mã code
    if ($("#code-contact").val().trim() === "") {
      $("#code-contact-error").text($("#code-contact").data("error"));
      isValid = false;
    } else if ($("#code-contact").val().trim() !== $(".contact__numcode").text()) {
      $("#code-contact-error").text("Mã code không chính xác");
      isValid = false;
    } else {
      $("#code-contact-error").text("");
    }

    // Nếu tất cả đều hợp lệ thì submit form
    if (isValid) {
      alert("Form đã được nộp thành công!");
      // Tiến hành submit form thật sự nếu cần (nếu không dùng event.preventDefault())
      // this.submit();
    }
  });
}

if ($(".sider-bar__pdf__top").length) {
  $(".sider-bar__pdf__top").each(function (inx, pdf) {
    $(pdf).click(function (e) {
      e.preventDefault();
      $(pdf).parents(".sider-bar__pdf").find(".sider-bar__pdf__body").slideToggle();
    });
  });
}

// Khởi tạo AOS

if ($(".section .container").length) {
  $(".section .container").each(function (inx, section) {
    // $(section).addClass("aos-init");
    $(section).attr("data-aos", "fade-up");
    $(section).attr("data-aos-duration", "1500");
  });
}
if ($(".home-banner__body .container").length) {
  $(".home-banner__body .container").each(function (inx, section) {
    $(section).attr("data-aos", "fade-up");
    $(section).attr("data-aos-duration", "1500");
  });
}

if ($(".filter-select__field").length) {
  $(".filter-select__field").each(function (inx, field) {
    $(field).focus(function (e) {
      e.preventDefault();
      $(field).parents(".filter-select").find(".filter-select__body").addClass("active");
    });
    $(field)
      .parents(".filter-select")
      .find(".filter-select__body")
      .find(".filter-select__item")
      .each(function (inx, item) {
        $(item).click(function (e) {
          e.preventDefault();
          $(field).parents(".filter-select").find(".filter-select__body").removeClass("active");
          $(item).parents(".filter-select").find(".filter-select__field").val($(item).text().trim());
        });
      });
    $(document).click(function (e) {
      if (!$(field).parents(".filter-select")[0].contains(e.target)) {
        $(field).parents(".filter-select").find(".filter-select__body").removeClass("active");
      }
    });
  });
}
if ($("#hcm, #hn, #nt, #ct, #tnhh").length) {
  $("#area")
    .parents(".filter-select")
    .find(".filter-select__body")
    .find(".filter-select__item")
    .each(function (inx, item) {
      $(item).click(function (e) {
        e.preventDefault();
        $("#hcm, #hn, #nt, #ct, #tnhh").hide();
        switch ($(item).data("value")) {
          case "hcm":
            $("#hcm").show();
            $("#hcm").find(".container").addClass("aos-animate");
            break;

          case "hn":
            $("#hn").show();
            $("#hn").find(".container").addClass("aos-animate");
            break;

          case "nt":
            $("#nt").show();
            $("#nt").find(".container").addClass("aos-animate");
            break;

          case "ct":
            $("#ct").show();
            $("#ct").find(".container").addClass("aos-animate");
            break;

          default:
            $("#hcm, #hn, #nt, #ct, #tnhh").show();
            $("#hcm, #hn, #nt, #ct, #tnhh").find(".container").addClass("aos-animate");
            break;
        }
      });
    });
}

AOS.init({
  once: true,
});
