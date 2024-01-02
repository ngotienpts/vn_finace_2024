document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");

    // change tab
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const tabThree = document.getElementById("tab-3");
    const tabFor = document.getElementById("tab-4");
    const tabFive = document.getElementById("tab-5");

    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");

    // fancybox
    var fancyboxes = document.querySelectorAll(".fancybox-full");

    // slide
    var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");
    var autoSlides = document.querySelectorAll(".js__swiperAutoContainer");
    var autoVerticalSlides = document.querySelectorAll(
        ".js__swiperAutoVeticalContainer"
    );

    function switchTab(tabId, ...otherTabIds) {
        document
            .querySelectorAll("[id^='tab-']")
            .forEach((tab) => tab.classList.remove("active"));
        document
            .querySelectorAll("[id^='pane-']")
            .forEach((pane) => pane.classList.remove("active"));

        const currentTab = document.getElementById(tabId);
        currentTab.classList.add("active");

        const tabIndex = Array.from(
            document.querySelectorAll("[id^='tab-']")
        ).indexOf(currentTab);

        const currentPane =
            document.querySelectorAll("[id^='pane-']")[tabIndex];
        currentPane.classList.add("active");

        const otherTabIdsArray = otherTabIds.map(
            (id) => "tab-" + id.split("-")[1]
        );

        document.querySelectorAll("[id^='tab-']").forEach((tab) => {
            if (otherTabIdsArray.includes(tab.id)) {
                tab.classList.remove("active");
                document
                    .getElementById("pane-" + tab.id.split("-")[1])
                    .classList.remove("active");
            }
        });
    }

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // change tab
            if (tabOne) {
                tabOne.onclick = function () {
                    switchTab("tab-1", "tab-2", "tab-3", "tab-4");
                };
            }
            if (tabTwo) {
                tabTwo.onclick = function () {
                    switchTab("tab-2", "tab-1", "tab-3", "tab-4");
                };
            }
            if (tabThree) {
                tabThree.onclick = function () {
                    switchTab("tab-3", "tab-1", "tab-2", "tab-4");
                };
            }
            if (tabFor) {
                tabFor.onclick = function () {
                    switchTab("tab-4", "tab-1", "tab-2", "tab-3");
                };
            }

            // submenu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var menu = subMenu.querySelector(".js__subMenu");
                    var showSubMenu = subMenu.querySelector(".js__showSubMenu");
                    var closeSubMenu =
                        subMenu.querySelector(".js__closeSubMenu");

                    showSubMenu.onclick = function () {
                        menu.classList.add("active");
                        bodyEle.classList.add("overflow-hidden");
                    };
                    closeSubMenu.onclick = function () {
                        menu.classList.remove("active");
                        bodyEle.classList.remove("overflow-hidden");
                    };
                });
            }

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },
        // fancybox
        fancybox: function () {
            if (fancyboxes) {
                fancyboxes.forEach(function (fancybox) {
                    $(".fancybox-full a").fancybox();
                });
            }
        },
        // slider one item
        sliderOneItems: function () {
            oneSlides.forEach((item) => {
                var pagi = item.querySelector(".swiper-pagination");
                var slider = item.querySelector(".js__swiperItems");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    effect: "fade",
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                });
            });
        },
        // slider auto
        sliderAutoItems: function () {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },
        // slider auto vertical
        sliderAutoVerticalItems: function () {
            autoVerticalSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAutoVertical");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    direction: "vertical",
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },

        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // fancybox
            this.fancybox();
            // slider one item
            this.sliderOneItems();
            // slider auto
            this.sliderAutoItems();
            // slider auto vertical
            this.sliderAutoVerticalItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
