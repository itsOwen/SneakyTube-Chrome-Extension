// console.log('from foreground');
{
    let container = document.querySelector("#movie_player > div.html5-video-container")
    let blackbg = document.querySelector("#movie_player > div.html5-video-container > video")
    let heading = document.querySelector("#container > h1");
    let orignalText = document.querySelector("#container > h1").innerText;
    let sideBar = document.querySelector("#items > ytd-item-section-renderer")
    const img = document.createElement("img")

    var randomNames = ["Chill Music video :)", "Why is Javascript and Python Important!", "Is Russia the most Powerful Country?"];

    function videoBlack() {
        var randomLink = ["http://scion-social.com/blog/wp-content/uploads/2020/11/gif-wallpaper-13.gif", "https://media.emailonacid.com/wp-content/uploads/2018/09/GifOutlook.gif"]
        const random = Math.floor(Math.random() * randomNames.length);
        container.prepend(img)
        var tgl = true;

        function toggle() {
            const randomImage = Math.floor(Math.random() * randomLink.length);
            tgl ? blackbg.style.display = "none" : blackbg.style.display = "block";
            tgl ? heading.innerText = randomNames[random] : heading.innerText = orignalText;
            tgl ? sideBar.style.display = "none" : sideBar.style.display = "block";
            img.src = randomLink[randomImage]
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



