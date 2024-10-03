// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let body = document.querySelector("body");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
      body.classList.toggle("lock"); 
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      navigation.classList.remove("navigation--active");
      body.classList.remove("lock"); 

    });
  });
});
//

//
document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы меню с подменю
  const menuItems = document.querySelectorAll(".menu-item-has-children");

  // Обрабатываем клик по каждому элементу меню
  menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Отключаем переход по ссылке

      // Убираем класс 'active' у всех элементов
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        menuItems.forEach(el => {
          el.classList.remove("active");
          const openSubmenu = el.querySelector(".sub-menu");
          if (openSubmenu) {
          }
        });

        this.classList.add("active");
      }


      // Находим подменю внутри текущего элемента
      const submenu = this.querySelector(".sub-menu");

      // Если у элемента есть подменю, управляем его видимостью
      if (submenu) {
        // Если подменю открыто, скрываем его
        if (submenu.classList.contains("show")) {
          fadeOut(submenu);
        } else {
          // Скрываем все открытые подменю
          document.querySelectorAll(".sub-menu.show").forEach(openSubmenu => {
            fadeOut(openSubmenu);
          });
          // Показываем текущее подменю
          fadeIn(submenu);
        }

      } else {
        // Если у элемента нет подменю, просто скрываем все открытые подменю
        document.querySelectorAll(".sub-menu.show").forEach(openSubmenu => {
          fadeOut(openSubmenu);
        });
      }
    });
  });

  // Закрытие подменю при клике вне области навигации
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-item-has-children")) {
      // Убираем класс 'active' у всех элементов меню
      menuItems.forEach(item => {
        item.classList.remove("active");
      });
      // Закрываем все подменю
      document.querySelectorAll(".sub-menu.show").forEach(submenu => {
        fadeOut(submenu);
      });
    }
  });

  // Функция для анимации fadeIn
  function fadeIn(element) {
    element.style.display = "flex"; // Или любой другой стиль отображения
    setTimeout(() => {
      element.classList.add("show");
    }, 10);
  }

  // Функция для анимации fadeOut
  function fadeOut(element) {
    element.classList.remove("show");
    setTimeout(() => {
      element.style.display = "none";
    }, 300); // Тайм-аут соответствует длительности анимации
  }
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
