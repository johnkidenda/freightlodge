(function () {
  var form = document.getElementById("quote-form");
  if (!form) return;

  var success = document.getElementById("quote-success");
  var card = form.closest(".form-card");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var fields = {
    name: { required: true, message: "Enter your name." },
    email: { required: true, message: "Enter a work email.", test: emailPattern },
    company: { required: true, message: "Enter your company." },
    origin: { required: true, message: "Enter an origin city or ZIP." },
    destination: { required: true, message: "Enter a destination city or ZIP." },
    freight: { required: true, message: "Tell us the rough freight details." },
    notes: { required: false }
  };

  function fieldWrap(input) {
    return input.closest(".field");
  }

  function showError(input, message) {
    var wrap = fieldWrap(input);
    var err = wrap.querySelector(".field-error");
    wrap.classList.add("error");
    input.setAttribute("aria-invalid", "true");
    if (err) err.textContent = message;
  }

  function clearError(input) {
    var wrap = fieldWrap(input);
    wrap.classList.remove("error");
    input.removeAttribute("aria-invalid");
  }

  function validateInput(input) {
    var rule = fields[input.name];
    if (!rule) return true;
    var value = (input.value || "").trim();

    if (rule.required && !value) {
      showError(input, rule.message);
      return false;
    }
    if (value && rule.test && !rule.test.test(value)) {
      showError(input, rule.message);
      return false;
    }
    clearError(input);
    return true;
  }

  Object.keys(fields).forEach(function (name) {
    var input = form.elements[name];
    if (!input) return;
    input.addEventListener("blur", function () {
      validateInput(input);
    });
    input.addEventListener("input", function () {
      if (fieldWrap(input).classList.contains("error")) {
        validateInput(input);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalid = null;
    var ok = true;

    Object.keys(fields).forEach(function (name) {
      var input = form.elements[name];
      if (!input) return;
      if (!validateInput(input)) {
        ok = false;
        if (!firstInvalid) firstInvalid = input;
      }
    });

    if (!ok) {
      firstInvalid.focus();
      return;
    }

    if (card) card.classList.add("is-sent");
    if (success) {
      success.classList.add("is-visible");
      success.focus();
    }
  });
})();
