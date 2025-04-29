const otpInput = document.getElementById("otpInput");

if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const ac = new AbortController();
      const otp = await navigator.credentials.get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      });

      alert(JSON.stringify(otp));

      otpInput.value = otp.code;
    } catch (err) {
      alert(JSON.stringify(error));
    }
  });
} else {
  alert("olmadı baştan");
}
