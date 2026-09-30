function clicked()  {
    document.title = document.querySelector("input").value;
}

function loading() {
    if (localStorage.getItem("loco")) {
        document.querySelector("#loco").innerText = window.localStorage.getItem("loco");
    }
    else
    {
        document.querySelector("#loco").innerText = "0";
    }

    if (sessionStorage.getItem("sess")) {
        document.querySelector("#sess").innerText = window.sessionStorage.getItem("sess");
    }
    else
    {
        document.querySelector("#sess").innerText = "0";
    }
}

function addLocal() {
    document.querySelector("#loco").innerText = JSON.parse(window.localStorage.getItem("loco"))+1;
    window.localStorage.setItem("loco", document.querySelector("#loco").innerText);
}

function addSession() {
    document.querySelector("#sess").innerText = JSON.parse(window.sessionStorage.getItem("sess"))+1;
    window.sessionStorage.setItem("sess", document.querySelector("#sess").innerText);
}