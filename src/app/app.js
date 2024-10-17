const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const adviceBtn = document.getElementById("advice-btn");
const divider = document.getElementById("divider");

async function getAdvice() {
  try {
    const fetchAPI = await fetch("https://api.adviceslip.com/advice");
    const data = await fetchAPI.json();
    adviceID.innerText = `Advice #${data.slip.id}`.toUpperCase();
    adviceText.innerText = `"${data.slip.advice}"`;
  } catch (err) {
    console.error(err);
    adviceText.innerText = err.message;
  }
}

adviceBtn.addEventListener("click", getAdvice);
