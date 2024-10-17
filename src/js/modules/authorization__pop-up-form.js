document
    .getElementById("open-authorization__pop-up-form")
    .addEventListener("click", function () {
        Fancybox.show([
            {
                src: "#authorization__pop-up-form",
                type: "inline",
                opts: {
                    Thumbs: {
                        autoStart: false,
                    },
                    Toolbar: {
                        display: {
                            left: [],
                            middle: [],
                            right: [],
                        },
                    },
                    Carousel: {
                        Friction: 0.8,
                    },
                    autoFocus: false,
                    on: {
                        done: (fancybox, slide) => {
                            console.log(`Всплывающее окно открыто!`);
                            document.activeElement.blur();
                        },
                    },
                },
            },
        ]);
    });

document
    .querySelector("#authorization__pop-up-form form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Здесь можно добавить код для отправки данных на сервер
        alert("Форма отправлена!");
    });
