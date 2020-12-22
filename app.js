

function get() {

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("GET", url);
    Http.send("Hahahaha");

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

}


function deletePost() {

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("Delete", url);
    Http.send("Hahahaha");

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

}

function Update() {

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("update", url);


    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

}