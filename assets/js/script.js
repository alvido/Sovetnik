// Burger Menu Open start
document.addEventListener("DOMContentLoaded", function () {
  let burgerButton = document.getElementById("burgerButton");
  let language = document.querySelector(".language");
  let navigation = document.querySelector(".navigation");
  let body = document.querySelector("body");
  let rightArrow = document.getElementById("rightArrow"); // Добавьте это, если rightArrow используется

  if (burgerButton) {
    burgerButton.addEventListener("click", function () {
      burgerButton.classList.toggle("burger--active");
      language.classList.toggle("language--active");
      navigation.classList.toggle("active");
      if (rightArrow) {
        // rightArrow.classList.remove("hidden");
      }
      body.classList.toggle("lock");
    });
  }
  // Обработчик события click для всего документа
  document.addEventListener("click", function (e) {
    if (!navigation.contains(e.target) && !burgerButton.contains(e.target)) {
      // Проверяем, кликнули ли вне области navigation и burgerButton
      burgerButton.classList.remove("burger--active");
      language.classList.remove("language--active"); // Добавляем для синхронности
      navigation.classList.remove("active");
      body.classList.remove("lock");
    }
  });
});
// Burger Menu Open end

//
document.addEventListener("DOMContentLoaded", function () {
  const consultation = document.getElementById("consultation");
  const header = document.querySelector(".header");
  const offer = document.getElementById("offer");

  consultation.addEventListener("click", function () {
    // Получаем высоту хедера
    const headerHeight = header.offsetHeight;

    // Получаем верхнюю позицию секции offer
    const offerPosition = offer.getBoundingClientRect().top + window.scrollY;

    // Вычисляем конечную позицию с учетом высоты хедера
    const scrollToPosition = offerPosition - headerHeight * 2;

    // Плавно прокручиваем страницу к рассчитанной позиции
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  });
});

//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});
// Fixed header end

// input logic start
function preventDigits(sender) {
  sender.value = sender.value.replace(/\d/g, "");
}

function noDigits(event) {
  if (" 1234567890_=+[]{}()/|<>,.?;:' ".indexOf(event.key) != -1)
    event.preventDefault();
}

function noLettersOrSpecialChars(event) {
  const allowedKeys = "0123456789+";
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}
// input logic start

// navigation logic start
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navigation__list li");
  menuItems.forEach(function (menuItem) {
    const link = menuItem.querySelector("a");
    const subMenu = menuItem.querySelector(".sub-menu");
    const navigation = document.querySelector(".navigation");

    if (link && subMenu) {
      link.addEventListener("mouseover", function (event) {
        closeActiveMenus(); // Закрываем все открытые меню перед открытием нового

        // Добавление класса активности текущему пункту меню и его подменю
        link.classList.add("active");
        subMenu.classList.add("active");
        navigation.classList.add("border");
      });

      link.addEventListener("mouseleave", function (event) {
        // Удаление класса активности у текущего пункта меню и его подменю, если курсор не находится над подменю
        if (!menuItem.contains(event.relatedTarget)) {
          link.classList.remove("active");
          subMenu.classList.remove("active");
          navigation.classList.remove("border");
        }
      });

      subMenu.addEventListener("mouseover", function (event) {
        // Добавление класса активности к текущему пункту меню и его подменю
        link.classList.add("active");
        subMenu.classList.add("active");
        navigation.classList.add("border");
      });

      subMenu.addEventListener("mouseleave", function (event) {
        // Удаление класса активности у текущего пункта меню и его подменю, если курсор не находится над ссылкой
        if (!menuItem.contains(event.relatedTarget)) {
          link.classList.remove("active");
          subMenu.classList.remove("active");
          navigation.classList.remove("border");
        }
      });
    }
  });
  function closeActiveMenus() {
    // Удаление класса активности у всех ссылок и их подменю
    menuItems.forEach(function (menuItem) {
      const link = menuItem.querySelector("a");
      const subMenu = menuItem.querySelector(".sub-menu");
      const navigation = document.querySelector(".navigation");

      if (link) {
        link.classList.remove("active");
      }
      if (subMenu) {
        subMenu.classList.remove("active");
      }
      if (subMenu) {
        navigation.classList.remove("border");
      }
    });
  }
});
// navigation logic end

// navigation scroll logic start
document.addEventListener("DOMContentLoaded", function () {
  const scrollableMenu = document.getElementById("scrollableMenu");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  function updateArrows() {
    if (window.innerWidth < 1024) return;

    // Hide left arrow if scroll is at the beginning
    if (scrollableMenu.scrollLeft === 0) {
      leftArrow.classList.add("hidden");
    } else {
      leftArrow.classList.remove("hidden");
    }

    // Hide right arrow if scroll is at the end
    if (
      scrollableMenu.scrollWidth - scrollableMenu.clientWidth - 10 <
      scrollableMenu.scrollLeft
    ) {
      rightArrow.classList.add("hidden");
    } else {
      rightArrow.classList.remove("hidden");
    }

    console.log(scrollableMenu.scrollWidth);
    console.log(scrollableMenu.clientWidth);
    console.log(scrollableMenu.scrollLeft);
  }

  function scrollLeft() {
    if (window.innerWidth < 1024) return;

    scrollableMenu.scrollBy({ left: -100, behavior: "smooth" });
  }

  function scrollRight() {
    if (window.innerWidth < 1024) return;

    scrollableMenu.scrollBy({ left: 100, behavior: "smooth" });
  }
  // Initial check
  updateArrows();

  // Update arrows on scroll
  scrollableMenu.addEventListener("scroll", function () {
    if (window.innerWidth < 1024) return;

    updateArrows();
  });

  // Update arrows on window resize
  window.addEventListener("resize", updateArrows);

  if (leftArrow) {
    leftArrow.addEventListener("click", function () {
      if (window.innerWidth < 1024) return;

      scrollLeft();
    });
    rightArrow.addEventListener("click", function () {
      if (window.innerWidth < 1024) return;

      scrollRight();
    });
  }

  scrollableMenu.addEventListener(
    "wheel",
    function (event) {
      if (window.innerWidth < 1024) return;

      if (event.deltaY !== 0) {
        event.preventDefault();
        this.scrollLeft += event.deltaY;
      }
    }
    // { passive: true }
  );
});
// navigation scroll logic end

//
document.addEventListener("DOMContentLoaded", function () {
  //swiper
  let swiper;

  swiper = new Swiper(".swiper", {
    observer: true,
    observeParents: true,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Настройки для различных размеров экранов
    breakpoints: {
      // Когда ширина экрана >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Когда ширина экрана >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Когда ширина экрана >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  // swiper
});

//

// Получаем список изображений и текущий индекс
const images = document.querySelectorAll(".comments__list img");
let currentIndex = 0;

// Функция для открытия изображения в полноэкранном режиме
function openFullscreen(index) {
  const image = images[index];

  // Создаем элемент для полноэкранного режима
  const fullscreenContainer = document.createElement("div");
  fullscreenContainer.classList.add("fullscreen-container");

  // Клонируем изображение в полноэкранный контейнер
  const fullscreenImage = image.cloneNode(true);
  fullscreenContainer.appendChild(fullscreenImage);

  // Добавляем кнопки для переключения
  const prevButton = document.createElement("button");
  prevButton.classList.add("swiper-button-prev");
  prevButton.addEventListener("click", () => showImage(currentIndex - 1));

  const nextButton = document.createElement("button");
  nextButton.classList.add("swiper-button-next");
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));

  fullscreenContainer.appendChild(prevButton);
  fullscreenContainer.appendChild(nextButton);

  // Добавляем полноэкранный контейнер в body
  document.body.appendChild(fullscreenContainer);

  // Добавляем обработчик для закрытия по клику на фоне
  fullscreenContainer.addEventListener("click", () => {
    fullscreenContainer.remove();
  });
}

// Функция для показа изображения по индексу
function showImage(index) {
  // Проверяем границы индекса
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  currentIndex = index;
  openFullscreen(index);
}

// Добавляем обработчики событий для каждого изображения
images.forEach((image, index) => {
  image.addEventListener("click", () => showImage(index));
});
