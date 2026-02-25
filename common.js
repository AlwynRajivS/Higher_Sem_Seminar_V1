// common.js
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw1ggiAXJDNN2-qd6rOnnPtPggu7n3TDS3ctxv37jqS1g8uk9CYAA4cR_zLM99qFQ8g/exec";

/**
 * Universal API POST helper
 * payload = { action: "someAction", ...params }
 */
async function postData(action, data = {}) {
  try {
    const formData = new FormData();
    formData.append("action", action);
    for (const key in data) formData.append(key, data[key]);

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  } catch (err) {
    console.error("❌ API fetch failed:", err);
    alert("Server connection failed. Please check deployment URL or permissions.");
    throw err;
  }
}

// In common.js
function setupLogout() {
  const btn = document.getElementById("logoutBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "index.html";
    }
  });
}






