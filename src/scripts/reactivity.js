/* jshint esversion:6 */

const readingtime = 5;

//------------------//
//    helpers       //
//------------------//

const explainText = new SplitText('.explain1', { type: 'chars' });

const hideShow = (el1, el2) => {
    let elref1 = document.querySelector(el1);
    elref1.classList.add('visually-hidden');

    let elref2 = document.querySelector(el2);
    elref2.classList.remove('visually-hidden');
};

const updateText = (el, text) => {
    let elref = document.querySelectorAll(el);

    elref.forEach(function(el) {
        el.innerHTML = text;
    });
};

const animateHeading = (tl, el1, el2) => {
    tl.to(`${el1}`, {
            opacity: 0,
            duration: 0.2,
            ease: 'sine.in'
        },
        `+=${readingtime}`);
    tl.call(hideShow, [el1, el2]);
    tl.from(`${el2}`, {
        opacity: 0,
        duration: 0.3,
        delay: 1,
        ease: 'sine'
    });

    return tl;
};

gsap.set('.explainer h2 div', {
    opacity: 0,
    scaleX: 0
});


gsap.set('.explainer', {
    visibility: 'visible'
});


//------------------//
//     scenes       //
//------------------//

const words = () => {
    const tl = gsap.timeline({
        delay: 1,
        defaults: {
            duration: 1
        }
    });



    tl.to(`.explain1 div`, {
        opacity: 1,
        scaleX: 1,
        duration: 0.3,
        stagger: 0.01,
        ease: 'sine'
    });

    tl.call(animateHeading, [tl, '.explain1', '.explain2']);
    tl.call(animateHeading, [tl, '.explain2', '.explain3']);
    tl.call(animateHeading, [tl, '.explain3', '.explain4']);
    tl.call(animateHeading, [tl, '.explain4', '.explain5']);
    tl.call(animateHeading, [tl, '.explain5', '.explain6']);
    tl.call(animateHeading, [tl, '.explain6', '.explain7']);
    tl.call(animateHeading, [tl, '.explain7', '.explain8']);
    tl.call(animateHeading, [tl, '.explain8', '.explain9']);

    return tl;
};


const scene1 = () => {
    let tl = gsap.timeline({
        delay: 0.5,
        defaults: {
            duration: 1,
            ease: 'sine'
        }
    });



    tl.add('start');
    tl.fromTo('.mirrorsvg', {
            duration: 0.2,
            autoAlpha: 0
        }, {
            autoAlpha: 1
        },
        'start');
    tl.fromTo('.mirrorsvg', {
            scaleX: -1,
            x: -40
        }, {
            scaleX: 1,
            x: 0
        },
        'start+=0.5');
    tl.fromTo('.proxyname', {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        },
        'start+=1');
    tl.fromTo('.arrow', {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        },
        `start+=${readingtime + 3}`);
    tl.to('.proxyname', {
            autoAlpha: 0
        },
        `start+=${readingtime * 2 + 2}`);

    tl.to('.arrow', {
            autoAlpha: 0
        },
        `start+=${readingtime * 2 + 3}`);
    tl.to('[class*="prop"]', {
            border: `2px dotted #ccc`
        },
        'start+=0.5');
    tl.to('.prop1', {
            background: `rgba(255, 255, 0, 0.2)`
        },
        'start+=0.5');
    tl.to('.prop2', {
            background: `rgba(255, 0, 0, 0.2)`
        },
        'start+=0.5');
    tl.to('.prop3', {
            background: `rgba(0, 0, 255, 0.2)`
        },
        'start+=0.5');
    tl.to('.prop4', {
            background: ` rgba(0, 255, 0, 0.2)`
        },
        'start+=0.5');
    tl.fromTo('#shadows', {
            autoAlpha: 0,
            duration: 0.5
        }, {
            autoAlpha: 0.5
        },
        'start+=1');

    tl.fromTo('#map', {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        },
        `start+=${readingtime * 4 + 2}`);
    tl.fromTo('#sets, #gears', {
            duration: 0.1,
            autoAlpha: 0
        }, {
            autoAlpha: 1
        },
        `start+=${readingtime * 5 + 3}`);
    tl.fromTo('#sets g', {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            stagger: 0.4
        },
        `start+=${readingtime * 5 + 3}`);
    tl.fromTo('#gears path', {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            stagger: 0.4
        },
        `start+=${readingtime * 5 + 3}`);
    tl.fromTo('.text', {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        },
        `start+=${readingtime * 6 + 5}`);
    tl.to('.li1', {
            background: `rgba(255, 255, 0, 0.2)`
        },
        `start+=${readingtime * 7 + 6}`);
    tl.to('.li2', {
            background: `rgba(255, 0, 0, 0.2)`
        },
        `start+=${readingtime * 7 + 6.4}`);
    tl.to('.li3', {
            background: `rgba(0, 0, 255, 0.2)`
        },
        `start+=${readingtime * 7 + 6.8}`);
    tl.to('.li4', {
            background: `rgba(0, 255, 0, 0.2)`
        },
        `start+=${readingtime * 7 + 7.2}`);

    return tl;
};

const scene2 = () => {
    let tl = gsap.timeline({
        delay: readingtime * 10 + 0.5,
        defaults: {
            duration: 0.3,
            ease: 'sine'
        }
    });



    tl.add('start2');
    tl.to('.prop1, .li1', {
            background: `rgba(255, 150, 0, 0.2)`
        },
        'start2');
    tl.to('.mirrorp1', {
            fill: `rgba(255, 150, 0, 0.2)`
        },
        'start2');
    tl.call(updateText, ['.switchtext', 'orange'], 'start2');

    return tl;
};

//------------------//
//     master       //
//------------------//

window.onload = () => {
    const wordstl = words();
    const sceneOne = scene1();
    const sceneTwo = scene2();

    const master = gsap.timeline();
    master.add('wordstl');
    master.add('sceneOne');
    master.add('sceneTwo');

    master.timeScale(1.2);
};