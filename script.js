async function startOTP() {
  if ("OTPCredential" in window) {
    try {
      const ac = new AbortController();
      const otp = await navigator.credentials.get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      });
      alert(JSON.stringify(otp));

      document.getElementById("otpInput").value = otp.code;
      document.getElementById("status").textContent = "Kod alındı!";
    } catch (err) {
      document.getElementById("status").textContent =
        "Kod alınamadı: " + err.message;
    }
  } else {
    document.getElementById("status").textContent =
      "Web OTP API desteklenmiyor.";
  }
}
