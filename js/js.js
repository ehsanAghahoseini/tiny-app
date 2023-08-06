var prev_id = 'landing';


const timeout = async (delay) => {
    return new Promise(res => setTimeout(res, delay));
}

const handelChangeFilter = (index) => {
    let elems = document.querySelectorAll(".filter-head-btn");
    [].forEach.call(elems, function (el) {
        el.classList.remove("filter-head-btn-active");
    });
    elems[index].classList.add("filter-head-btn-active")
}


const handelChangeTab = async (id) => {
    if (prev_id != id) {
        let elems = document.querySelectorAll(".tab");
        [].forEach.call(elems, function (el) {
            el.classList.remove("tab-active");
            el.classList.add("tab-hide");
        });
        document.getElementById(`${id}`).classList.remove("tab-hide")
        await timeout(30);
        document.getElementById(`${id}`).classList.add("tab-active")
        window.scrollTo(0, 0);
        prev_id = id ;
        handelOpenNav('close')
    }
}


const handelOpenNav = (type) => {
    const body = document.getElementsByTagName("body")[0];
    if (type == 'open') {
        document.getElementById('nav').classList.add("nav-active")
        document.getElementById('nav-bg').classList.add("nav-bg-active")
        body.style.touchAction = "none";
        body.style.width = "100%";
        body.style.overflow = "hidden";
    }
    else {
        document.getElementById('nav').classList.remove("nav-active")
        document.getElementById('nav-bg').classList.remove("nav-bg-active")
        body.style.touchAction = "unset";
        body.style.width = "unset";
        body.style.overflow = "auto";
    }
}




const handelChangeImage=(newUrl)=>{
    let img = document.getElementById('detail-slider-cover')
    img.src = newUrl
}

