const container = document.querySelector(".container");
const qrInput = container.querySelector(".form input");
const generateBtn = container.querySelector(".form button");
const qrImage = container.querySelector("#QRimg");
const secondWrap = container.querySelector(".secondWrap");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    alert("Insira uma URL ou um texto para gerar o código QR!");
    return;
  }
  generateBtn.innerText = "Gerando...";
  qrImage.src = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=${qrValue}`;
  qrImage.addEventListener("load", () => {
    generateBtn.innerText = "Gerar";
    container.classList.add("active");
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    container.classList.remove("active");
  }
});
