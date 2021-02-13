const STATUS_URL = "https://over2station.shyndard.eu/status-json.xsl";
const DEFAULT_DESCRIPTION = "Aucune émission en cours";

function get(url) {
    const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();

    return xmlhttp;
}

function updateDescription() {
    const resultRequest = get(STATUS_URL)
    let description = DEFAULT_DESCRIPTION

    if (resultRequest.status == 200 && resultRequest.response) {
        jsonData = JSON.parse(resultRequest.response)
        if (jsonData && jsonData["icestats"] && jsonData["icestats"]["source"]) {
            const sources = jsonData["icestats"]["source"]
            description = Array.isArray(sources) ? sources[0].server_name : sources.server_name
        }
    }
    document.getElementById("description").textContent = description;
    document.title = description + " - Over2Station";
}

window.setInterval(function () {
    updateDescription()
}, 60000);


window.onload = function () {
    updateDescription()
};