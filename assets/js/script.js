const typedTextSpan = document.querySelector(".typed-text"),
    textArray = ["Caca jangan lupa makan ya :)","Jangan sampe telat makan nya :')","Jangan lupa di minum juga obatnya >:(","Love u caca ♥"],
    typingDelay = 50,
    erasingDelay = 10;
let textArrayIndex = 0,
    charIndex = 0;

function type() { charIndex < textArray[textArrayIndex].length ? (typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex), charIndex++, setTimeout(type, typingDelay)) : setTimeout(erase, 5000) }

function erase() { charIndex > 0 ? (typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1), charIndex--, setTimeout(erase, erasingDelay)) : (textArrayIndex++, textArrayIndex >= textArray.length && (textArrayIndex = 0), setTimeout(type, 100)) }
document.addEventListener("DOMContentLoaded", (function() { setTimeout(type, typingDelay) }));

$(document).ready((function() {
    $(".changeprofile").submit((function(e) {
        var formObj, formURL = $(this).attr("action"),
            formData = new FormData(this);
        $.ajax({ url: formURL, type: "POST", data: formData, contentType: !1, cache: !1, processData: !1, beforeSend: function() { $("button").attr("disabled", "disabled"), $("input").attr("disabled", "disabled"), $("a").attr("disabled", "disabled"), $(".inibutton").html('<i class="fas fa-spinner fa-spin"></i> Wait') }, success: function(data) { data.includes("Success") ? ($("button").removeAttr("disabled", "disabled"), $("a").removeAttr("disabled", "disabled"), $("input").removeAttr("disabled", "disabled"), $(".inibutton").html("Save"), $.notify({ icon: "tim-icons icon-check-2", message: data }, { type: "success", timer: 3e3, placement: { from: "top", align: "right" } }), window.location = window.location) : ($("button").removeAttr("disabled", "disabled"), $("a").removeAttr("disabled", "disabled"), $("input").removeAttr("disabled", "disabled"), $(".inibutton").html("Save"), $.notify({ icon: "tim-icons icon-simple-remove", message: data }, { type: "danger", timer: 3e3, placement: { from: "top", align: "right" } })) } }), e.preventDefault()
    }))
}))