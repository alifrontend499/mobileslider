(function () {
    "use strict";
    // SLIDER INDICATOR
    let sliderMain, slInner, slInnerChild, childLength;
    sliderMain = document.querySelector('.ngslider-inner');
    slInner = document.querySelector('.ngslides');
    if (slInner !== null) {
        slInnerChild = Array.prototype.slice.apply(slInner.children);
    }

    let indicatorParent = document.querySelector('.ngslider-indicator');
    if (slInnerChild.length !== 0) {
        // SETTING CHILDREN LENGTH
        childLength = slInnerChild.length;
        // INSERTING INDICATORS
        slInnerChild.forEach(function (item) {
            if (indicatorParent !== null) {
                indicatorParent.innerHTML += "<span></span>"
            }
        });
    }
    // SLIDER INDICATOR FINISH
    // SLIDER WORKING
    // setting width of parent
    slInner.style.setProperty('width', 'calc(100% * ' + childLength + ')');
    // setting width of children
    slInnerChild.forEach(function (elem) {
        if (sliderMain !== null) {
            elem.style.setProperty("width", sliderMain.offsetWidth + 'px')
        }
    });

    // LEFT AND RIGHT BUTTON ACTIONS
    let leftBtn = document.querySelector('.buttons .left button');
    let rightBtn = document.querySelector('.buttons .right button');
    let reqWidth = parseInt(slInner.children[0].offsetWidth);
    if (leftBtn !== null && rightBtn !== null) {
        leftBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (slInner !== null) {
                slInner.style.setProperty('transform', 'translateX(-' + (reqWidth + 5) + 'px)');
            }
            if (reqWidth < (parseInt(slInner.children[0].offsetWidth) * (childLength - 1))) {
                reqWidth += parseInt(slInner.children[0].offsetWidth);
            }
        });
        rightBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (slInner !== null) {
                slInner.style.setProperty('transform', 'translateX(' + (reqWidth + 5) + 'px)');
            }
            if (reqWidth <= 0) {
                reqWidth -= parseInt(slInner.children[0].offsetWidth);
            }
        });
    }
})();