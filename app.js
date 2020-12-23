

function get() {

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    Http.send(JSON.stringify({name:"Azhar", time:"ASDASD"}));

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


//  USE CORS LIBRARY TO ALLOW CORS POLICY
// MORGAN TO GET ALL DATA