function login(username, password) {
    return username === "admin" && password === "1234";
}

if (typeof module !== "undefined") {
    module.exports = login;
}
