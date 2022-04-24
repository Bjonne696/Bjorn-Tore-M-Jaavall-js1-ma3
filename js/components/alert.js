function alert(alertType=".success", message = "you did it") {
    return `<div class=".alert ${alertType}">${message}</div>`;
}