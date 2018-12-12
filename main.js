$(function() {
  $("#subscribeBtn").click(checkDetail);

  function checkDetail() {
    var subscribeDetail = document.getElementById("subscribeGroup");
    var validInputName = document.getElementById("subscribeName");
    var validInputEmail = document.getElementById("subscribeEmail");
    let isValid =
      validInputName.checkValidity() && validInputEmail.checkValidity();

    if (isValid) {
      $("#subscribeModal").modal("show");
      console.log("success");
    } else {
      $("#subscribeModal").modal("hide");
      console.log("failed");
    }
  }

  $("#feedbackSubmit").click(checkFeedback);

  function checkFeedback() {
    var feedbackText = document.getElementById("feedbackForm");
    let isValidText = feedbackText.checkValidity();
    if (isValidText) {
      $("#feedback").modal("hide");
      $("#feedbackModal").modal("show");
    } else {
      $("#feedbackModal").modal("hide");
    }
  }
});
