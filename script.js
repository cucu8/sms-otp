const otpInput = document.getElementById("otpInput");
const status = document.getElementById("status");

if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const ac = new AbortController();
      const otp = await navigator.credentials.get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      });
      otpInput.value = otp.code;
      status.textContent = "Kod otomatik alındı!";
    } catch (err) {
      status.textContent = "Kod alınamadı: " + err.message;
    }
  });
} else {
  status.textContent = "Web OTP API desteklenmiyor.";
}
