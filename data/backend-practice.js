const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
//Get = get some information from the backend
//Post = create something
//Put = update something
//Delete = delete something
//Types of requests: Get Post Put Delete
//xhr.open takes in 2 parameter: the first is the type of request the second is where to send this http message by using URL
//Uniform Resource Locator
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();