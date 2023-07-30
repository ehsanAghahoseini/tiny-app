

const handelChangeFilter = (index) => {
    let elems = document.querySelectorAll(".filter-head-btn");
    [].forEach.call(elems, function (el) {
        el.classList.remove("filter-head-btn-active");
    });
    elems[index].classList.add("filter-head-btn-active")
}