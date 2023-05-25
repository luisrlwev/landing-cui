$("#formTwo").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorTwo();
        submitMSGtwo(false, "Por favor llene todos los campos requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitFormTwo();
    }
});

function submitFormTwo() {
    // Initiate Variables With Form Content
    var name = $("#nameTwo").val();
    var tel = $("#telTwo").val();
    var email = $("#emailTwo").val();
    var message = $("#messageTwo").val();

    $.ajax({
        type: "POST",
        url: "php/contact-two.php",
        data: "nameTwo=" + name + "&telTwo=" + tel + "&emailTwo=" + email + "&messageTwo=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccessTwo();
            } else {
                formErrorTwo();
                submitMSGtwo(false, text);
            }
        }
    });
}

function formSuccessTwo() {
    $("#formTwo");
    submitMSGtwo(true, "¡Mensaje Enviado! En breve te contactaremos.")
    document.getElementById("formTwo").reset();
}

function formErrorTwo() {
    $("#formTwo").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSGtwo(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center fadeIn animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmitTwo").removeClass().addClass(msgClasses).text(msg);
}