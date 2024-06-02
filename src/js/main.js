import home from "./views/home.js";
import blog from "./views/blog.js";
import contact from "./views/contact.js";

const pages = {
    "/": { title: "Home", render: home },
    "/blog": { title: "Blog", render: blog },
    "/contact": { title: "Contact", render: contact },
};

function router() {
    let view = pages[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);