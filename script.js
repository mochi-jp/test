function calculate() {
  const input = document.getElementById("inputNumber").value;
  const num = parseFloat(input);

  if (!isNaN(num)) {
    document.getElementById("result300").textContent = Math.floor(num / 300);
    document.getElementById("result310").textContent = Math.floor(num / 310);
    document.getElementById("result320").textContent = Math.floor(num / 320);
    document.getElementById("resultTable").style.display = "table";
  } else {
    alert("ちゃんと数字を入れてね！");
  }
}

// Enterキーでも計算できるように
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputNumber").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      calculate();
    }
  });
});