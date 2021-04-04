// console.log('from foreground');
{
    let container = document.querySelector("#movie_player > div.html5-video-container ")
    let blackbg = document.querySelector("#movie_player > div.html5-video-container > video")
    let heading = document.querySelector("#container > h1");
    let orignalText = document.querySelector("#container > h1").innerText;
    let sideBar = document.querySelector("#items > ytd-item-section-renderer")
    const img = document.createElement("img")
    var randomNames = ["Chill Music video :)", "Why is Javascript and Python Important!", "Is Russia the most Powerful Country?"];
    container.style.display = "flex"
    container.style.flexDirection = "column"
    container.style.justifyContent = "center"
    container.style.alignItems = "center"
    container.style.height = "100%"
    img.style.display = "block"
    img.setAttribute("class", "fakeImg")
    var randomLink = "https://i.ibb.co/qWMmKHc/126679-28719-BC1-B2-A4-4632-AF68-F9-BC99667259-0-1.gif"
    img.src = randomLink;

    function removeAllImgs () {
        container.childNodes.forEach(function(element) {
            if(element.tagName === "IMG"){
                element.remove();
            }
        })
    }
    
    window.addEventListener("blur", function remove() {
        removeAllImgs();
        window.removeEventListener("blur", remove);
    })
    
    window.addEventListener("focus", function add() {
        img.src = randomLink;
        container.prepend(img)
        window.removeEventListener("focus", add);
    })


    function videoBlack() {
        const random = Math.floor(Math.random() * randomNames.length);
        
        // container.prepend(img)
        var tgl = true;

        function toggle() {
            tgl ? blackbg.style.display = "none" : blackbg.style.display = "block";
            tgl ? heading.innerText = randomNames[random] : heading.innerText = orignalText;
            tgl ? sideBar.style.display = "none" : sideBar.style.display = "block";
            if(container.children[0].tagName === "VIDEO"){
                container.prepend(img)
            } else {
                removeAllImgs();
            }
            
            tgl = !tgl;
        }

        document.addEventListener("keypress", function onEvent(event) {
            if (event.key === "Enter") {
                toggle();
            }

        });

    }
    videoBlack();

}



