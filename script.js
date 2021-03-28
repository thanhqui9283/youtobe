$(document).ready(function () {

    var API_KEY = "AIzaSyAUF-I1SOAbtt5zDy8IR0uNb_wK-GRNUXo"
    var video = ''
    var videos = $("#videos")

    $("#from").submit(function (event) {

        event.preventDefault()

        
        alert("from is submitted")


        var search = $("#search").val()

        videoSearch(API_KEY, search, 10)
    })
    function videoSearch(key, search, maxResults) {
        $.get("https://www.googleapis.com/youtobe/v3/search?key="
            + key
            + "&type=video&part=snippet&maxResullts="
            + maxResults + "&q="
            + search, function (data) {
                console.log(data)

                data.items.array.forEach(item => {
                    video =
                       ' <iframe width="420" height="315" src="http://www.youtobe.com/embed/${item.id.video.Id}" framebroder="0" allowfullscreen></iframe>'


                      $("#videos").append(VideoPlaybackQuality)
                });
            })
    }

})


