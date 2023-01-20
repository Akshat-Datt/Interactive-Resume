var col = document.getElementsByClassName("collapse");

for(let i = 0; i < col.length; i++){
    col[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var cont = this.nextElementSibling;

        if(cont.style.maxHeight){
            cont.style.maxHeight = null;
        }
        else {
            cont.style.maxHeight = cont.scrollHeight + "px";
        }
    });
}

function firstMessage(){
    let first = "Hi!";
    document.getElementById("bot-start").innerHTML = '<p class="b-text"><span>' + first + '</span></p>';
    document.getElementById("userInput").scrollIntoView(false);
}

firstMessage();

function getHardResponse(userText) {
    let botResponse = getResponse(userText);
    let botHtml = '<p class="b-text"><span>' + botResponse + '</span></p>';
    $("#chat-b").append(botHtml);

    document.getElementById("bar-b").scrollIntoView(true);
}

function getYourResponse() {
    let userText = $("#inputt").val();

    if (userText == "") {
        userText = "Empty questions are not entertained";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#inputt").val("");
    $("#chat-b").append(userHtml);
    document.getElementById("bar-b").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 500)

}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#inputt").val("");
    $("#chat-b").append(userHtml);
    document.getElementById("bar-b").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(sampleText);
    }, 500)
}

function send() {
    getYourResponse();
}


$("#inputt").keypress(function(e) {
    if (e.which == 13) {
        getYourResponse();
    }
});