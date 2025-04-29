const otpInput = document.getElementById("otpInput");

if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    const textValue = document.querySelector(".js-text");

    if (!input) return;

    const ac = new AbortController();

    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        alert(JSON.stringify(otp));
        debugger;
        textValue.value = JSON.stringify(otp);
        input.value = otp.code;
      })
      .catch((err) => {
        console.log(err);
        alert(JSON.stringify(err));

        textValue.value = JSON.stringify(err);
      });
  });
}
