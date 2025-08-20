// Sample word and paragraph data
const words = {
  english: ["apple", "banana", "keyboard", "javascript", "practice"],
  hindi: ["सेब", "केला", "कुंजीपटल", "जावास्क्रिप्ट", "अभ्यास"]
};

const paragraphs = {
  english: {
    beginner: "Typing is fun and easy to learn.",
    intermediate: "Typing helps improve your productivity and focus.",
    advanced: "Mastering typing requires consistent practice and dedication."
  },
  hindi: {
    beginner: "टाइपिंग मजेदार और सीखने में आसान है।",
    intermediate: "टाइपिंग आपकी उत्पादकता और ध्यान केंद्रित करने में मदद करती है।",
    advanced: "टाइपिंग में महारत हासिल करने के लिए निरंतर अभ्यास और समर्पण आवश्यक है।"
  }
};

function showSection(type) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("word-section").classList.add("hidden");
  document.getElementById("paragraph-section").classList.add("hidden");
  document.getElementById(`${type}-section`).classList.remove("hidden");
}

// Word Typing Logic
let wordIndex = 0, correctWords = 0, totalWords = 0, startTime;

function startWordPractice() {
  const lang = document.getElementById("word-lang").value;
  wordIndex = 0;
  correctWords = 0;
  totalWords = words[lang].length;
  startTime = new Date();
  document.getElementById("word-display").innerText = words[lang][wordIndex];
  document.getElementById("word-input").value = "";
  document.getElementById("word-input").focus();
}

document.getElementById("word-input").addEventListener("input", function () {
  const lang = document.getElementById("word-lang").value;
  const input = this.value.trim();
  if (input === words[lang][wordIndex]) {
    correctWords++;
    wordIndex++;
    this.value = "";
    if (wordIndex < words[lang].length) {
      document.getElementById("word-display").innerText = words[lang][wordIndex];
    } else {
      document.getElementById("word-display").innerText = "Done!";
    }
  }
  const elapsed = (new Date() - startTime) / 60000;
  const wpm = Math.round(correctWords / elapsed);
  const accuracy = Math.round((correctWords / (wordIndex || 1)) * 100);
  const progress = Math.round((wordIndex /
