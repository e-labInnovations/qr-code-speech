var lastResult = null

if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hi, Welcome";
    window.speechSynthesis.speak(msg);
} else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
}

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);

    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 🎉

        if (lastResult != decodedText) {
            var msg = new SpeechSynthesisUtterance();
            msg.text = decodedText
            window.speechSynthesis.speak(msg);

            lastResult = decodedText
            setTimeout(
                function() {
                    lastResult = null
                }, 3000);
        }

    } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }

}

function onScanError(errorMessage) {
    // handle on error condition, with error message
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);