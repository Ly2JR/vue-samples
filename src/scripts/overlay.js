/* jshint esversion:6 */

let code1 = null;
let code3 = null;
let explainText = null;
const initialHtml = document.getElementById('app').innerHTML;

const init = () => {
    const button = document.querySelector(".replaybutton");
    button.addEventListener("click", () => {
        updateText('#app', initialHtml);
        init();
        mainElements();
        finalAnimation();
    });

    gsap.set(".explainer, .code1, .code2, .code3, .cube1, .cube2", {
        visibility: "visible"
    });


    //------------------//
    //  main animation  //
    //------------------//

    code1 = new SplitText(".code1", { type: "chars" });
    code3 = new SplitText(".code3", { type: "chars" });
    explainText = new SplitText(".explainer", { type: "chars" });

    gsap.set(".explainer h2 div", {
        opacity: 0,
        scaleX: 0
    });


    gsap.set(".code1 div, .code2, .code3 div", {
        opacity: 0
    });


    gsap.set(".face", {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%"
    });

};

const mainElements = () => {
    gsap.
    timeline({
        delay: 0.5
    }).

    to(".explain1 div", {
        opacity: 1,
        scaleX: 1,
        duration: 0.4,
        delay: 0.5,
        stagger: 0.03,
        ease: "sine"
    }).

    to(code1.chars, {
        opacity: 1,
        ease: "power4",
        duration: 0.2,
        stagger: 0.03
    }).

    to(".cube1 .face", {
        opacity: 1,
        ease: "sine",
        duration: 0.5,
        scale: 1,
        stagger: -0.05
    }).

    to(".explain1 div", {
        opacity: 0,
        scaleX: 0,
        duration: 0.1,
        stagger: 0.02,
        ease: "sine.in"
    }).

    call(hideShow, [".explain1", ".explain2"]).
    to(".explain2 div", {
        opacity: 1,
        scaleX: 1,
        duration: 0.4,
        delay: 0.4,
        stagger: 0.02,
        ease: "sine"
    }).

    to(".code2", {
        opacity: 1,
        ease: "sine",
        duration: 0.6
    }).

    to(".explain2 div", {
        opacity: 0,
        scaleX: 0,
        delay: 1,
        duration: 0.1,
        stagger: 0.02,
        ease: "sine.in"
    }).

    call(hideShow, [".explain2", ".explain3"]).
    to(".explain3 div", {
        opacity: 1,
        scaleX: 1,
        duration: 0.4,
        delay: 1.5,
        stagger: 0.02,
        ease: "sine"
    }).

    to(code3.chars, {
        opacity: 1,
        ease: "power4",
        duration: 0.2,
        stagger: 0.03
    }).

    to(".cube2 .face", {
        opacity: 1,
        ease: "sine",
        duration: 0.5,
        scale: 1,
        stagger: -0.05
    }).

    to(".explain3 div", {
        opacity: 0,
        scaleX: 0,
        delay: 0.3,
        duration: 0.1,
        stagger: 0.02,
        ease: "sine.in"
    }).

    call(hideShow, [".explain3", ".explain4"]).
    to(".explain4 div", {
        opacity: 1,
        scaleX: 1,
        delay: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "sine"
    }).

    call(showElement, [".ifblock"])
        // explainer
        .to(".ifblock", {
            background: "#eee",
            ease: "sine",
            duration: 0.4
        }).

    call(updateText, [".cube2prop2", "green"]).
    add("updateP1").
    to(
        ".ifblock", {
            background: "none",
            ease: "sine.easeIn",
            duration: 0.3
        },

        "updateP1").

    to(".explain4 div", {
        opacity: 0,
        scaleX: 0,
        delay: 1,
        duration: 0.1,
        stagger: 0.02,
        ease: "sine.in"
    }).

    call(hideShow, [".explain4", ".explain6"]).
    to(
        ".cube2 .face", {
            backgroundColor: "rgba(66, 185, 131, 0.68)",
            border: "2px solid #4f5959",
            ease: "sine",
            duration: 1.5
        },

        "updateP1").

    to(
        ".cube2 .face", {
            color: "rgba(255, 255, 255, 1)",
            ease: "sine",
            duration: 1
        },

        "updateP1+=0.25");

};

//-------------------//
//  final animation  //
//-------------------//

const finalAnimation = () => {
    gsap.
    timeline({ delay: 18 }).
    to(".explain6 div", {
        opacity: 1,
        scaleX: 1,
        duration: 0.2,
        delay: 1,
        stagger: 0.01,
        ease: "sine"
    }).

    call(updateText, [".cube1prop1", "250"]).
    call(updateText, [".cube2prop1", "250"]).
    add("finalstart").
    to(".cube1prop1, .cube2prop1", {
        background: "#eee",
        ease: "sine",
        duration: 0.4
    }).

    to(".cube1prop1, .cube2prop1", {
        background: "none",
        ease: "sine.easeIn",
        duration: 0.3
    }).

    to(
        ".front, .back, .top, .bottom", {
            width: 250,
            ease: "sine",
            duration: 0.3
        },

        "finalstart+=0.1").

    to(
        ".right", {
            x: 150,
            ease: "sine",
            duration: 0.3
        },

        "finalstart+=0.1").

    to(".explain6 div", {
        opacity: 0,
        scaleX: 0,
        delay: 1,
        duration: 0.1,
        stagger: 0.01,
        ease: "sine.in"
    }).

    call(hideShow, [".explain6", ".explain7"]).
    to(".explain7 div", {
        opacity: 1,
        scaleX: 1,
        duration: 0.2,
        stagger: 0.01,
        ease: "sine"
    }).

    to(".explain7 div", {
        opacity: 0,
        scaleX: 0,
        delay: 3,
        duration: 0.1,
        stagger: 0.01,
        ease: "sine.in"
    }).

    call(hideShow, [".explain7", ".explain8"]).
    add("finalspin", "+=0.5").
    to(
        ".explain8 div", {
            opacity: 1,
            scaleX: 1,
            duration: 0.2,
            stagger: 0.01,
            ease: "sine"
        },

        "finalspin").

    to(
        ".cube", {
            rotationY: 360,
            ease: "power4.in",
            duration: 1.25
        },

        "finalspin").

    to("#overlay", {
        delay: 3,
        opacity: 1,
        duration: 0.25
    }).

    to(".replayicon", {
        rotation: 720,
        duration: 1.5,
        ease: "back"
    });

};

window.onload = () => {
    init();
    mainElements();
    finalAnimation();
};

//-------------//
//  helpers    //
//-------------//

const hideShow = (el1, el2) => {
    const elref1 = document.querySelector(el1);
    elref1.classList.add("visually-hidden");

    const elref2 = document.querySelector(el2);
    elref2.classList.remove("visually-hidden");
};

const showElement = el => {
    const elref = document.querySelector(el);
    elref.classList.remove("visually-hidden");
};

const updateText = (el, text) => {
    const elref = document.querySelector(el);
    elref.innerHTML = text;
};