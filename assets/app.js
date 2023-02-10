// import "/assets/app.scss";


// like findParent, nur kürzer ;-)
let closest = function (el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
}

// set class for clicked member, remove for others
function setToggleClass(e) {

    if (e.target !== e.currentTarget) {
        var clickedItem = e.target;
        var clickedItemParent = closest(e.target, function (el) {
            return el.tagName.toLowerCase() === 'article';
        });

        clickedItemParent.classList.toggle("is-expanded");

        var notClickedItemParents = memberContainer.querySelectorAll('article:not(#' + clickedItemParent.id + ')');

        for (var i = 0; i < notClickedItemParents.length; i++) {
            notClickedItemParents[i].classList.remove("is-expanded");
        }
    }
    e.stopPropagation();
}


var memberContainer = document.querySelector(".member-list");
//console.log("memberContainer: " + memberContainer);

if (memberContainer) {
    memberContainer.addEventListener("click", setToggleClass, false);
}



// fixed nav
var left = document.querySelector(".col-brandnav > nav");
//console.log("my nav elem: " + left);
var stop = (left.offsetTop - 40);

window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //console.log("scrollTop: " + scrollTop, left.offsetTop);
    // left.offsetTop;
    //console.log("asdfas");

    if (scrollTop >= stop) {
        left.className = 'sticky';
    } else {
        left.className = '';
    }

}

