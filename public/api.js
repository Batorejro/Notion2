import { classNames, select } from './settings.js';
const api = {
    initPages: function () {
        const thisApp = this;
        thisApp.pages = document.querySelector(select.containerOf.pages).children;
        thisApp.navLinks = document.querySelectorAll(select.nav.links);
        /*remove hash*/
        const idFromHash = window.location.hash.replace('#/', '');

        let pageMatchingHash = thisApp.pages[0].id;
        for (let page of thisApp.pages) {
            if (page.id == idFromHash) {
                pageMatchingHash = page.id;
                break;
            }
        }

        thisApp.activatePage(thisApp.pages[0].id);

        for (let link of thisApp.navLinks) {
            link.addEventListener('click', function (event) {
                const clickedElement = this;
                event.preventDefault();
                /*get page from href*/
                const id = clickedElement.getAttribute('href').replace('#', '');
                thisApp.activatePage(id);
                /*change url hash*/
                window.location.hash = '#' + id;
            });
        }
    },

    activatePage: function (pageId) {
        const thisApp = this;
        /*add class "active" to matching pages. etc...*/
        for (let page of thisApp.pages) {
            page.classList.toggle(classNames.pages.active, page.id == pageID);
        }
        /*add class "active" to matching links. etc...*/
        for (let link of thisApp.navLinks) {
            link.classList.toggle(
                classNames.nav.active,
                link.getAttribute('href') == '#' + pageID
            );
        }
    },

    init: function () {
        const thisApp = this;
        thisApp.initPages();
    },
};

api.init();