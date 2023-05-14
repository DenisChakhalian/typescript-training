enum RequestType {
    GET = "get",
    POST = "post",
}


function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
    return -1;
}

fetchWithAuth("l", "get");
// fetchWithAuth("l","l");

let a: "sdfgsdg" = "sdfgsdg";

// a = "sdfgsdfg";

let method = "p";

fetchWithAuth("l", method as "post"); //!!! bad