const entryText = document.querySelector(".text_entry-encrypted");
const message = document.querySelector(".text_output-encrypted");
const messageInit = document.querySelector(".content_message-init");
const outputText = document.querySelector(".content_output-text");
const buttonCopy = document.querySelector(".button_copy")

outputText.style.display = "none";

function btnEncrypt() {
  const textEncrypt = encrypt(entryText.value);
  message.innerHTML = textEncrypt;
  entryText.value = "";
  if (!textEncrypt == 0) {
    messageInit.style.display = "none";
    outputText.style.display = "grid";
  }
  buttonCopy.innerHTML = '<span class="material-symbols-outlined icon_copy">content_copy</span>Copiar';
}
function encrypt(stringEncrypt) {
  let matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncrypt = stringEncrypt.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringEncrypt.includes(matrizCode[i][0])) {
      stringEncrypt = stringEncrypt.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }

  return stringEncrypt;
}

function btnDesEncrypt() {
  const textEncrypt = desEncrypt(entryText.value);
  message.innerHTML = textEncrypt;
  entryText.value = "";
  if (!textEncrypt == 0) {
    messageInit.style.display = "none";
    outputText.style.display = "grid";
  }
  buttonCopy.innerHTML = '<span class="material-symbols-outlined icon_copy">content_copy</span>Copiar'
}

function desEncrypt(stringDesEncrypt) {
  let matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesEncrypt = stringDesEncrypt.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringDesEncrypt.includes(matrizCode[i][1])) {
      stringDesEncrypt = stringDesEncrypt.replaceAll(
        matrizCode[i][1],
        matrizCode[i][0]
      );
    }
  }

  return stringDesEncrypt;
}

function btnCopy(){
    const textCopy = document.querySelector('.text_output-encrypted').innerText;

    try {
        navigator.clipboard.writeText(textCopy);
        // console.log('Texto copiado');
        buttonCopy.innerHTML = '<span class="material-symbols-outlined icon_copy">done</span>Copiado';
    } catch (err) {
        console.error('Error al copiar el texto:', err);
    }
}
