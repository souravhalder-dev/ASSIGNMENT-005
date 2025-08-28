const sd = document.getElementsByClassName("heart-card");

for (let i = 0; i < sd.length; i++) {
  sd[i].addEventListener("click", function () {
    const likeNumberSpanTag = document.getElementById("head-heart");
    const likeNumberStr = likeNumberSpanTag.innerText;

    let likeNumber = parseInt(likeNumberStr);

    likeNumber++;

    likeNumberSpanTag.innerText = likeNumber;
  });
}
// 2

const copyButtons = document.querySelectorAll(".cp");

function handleCopyClick(event) {
  const clickedButton = event.currentTarget;

  const card = clickedButton.closest(".card");

  const cpyElement = card.querySelector(".cpy");

  const textToCopy = cpyElement.innerText;
  //
  const likeNumberSpanTag = document.getElementById("cop");
  const likeNumberStr = likeNumberSpanTag.innerText;
  let likeNumber = parseInt(likeNumberStr);
  likeNumber++;
  likeNumberSpanTag.innerText = likeNumber;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Your calling number " + textToCopy + " is copied");
    })
    .catch((err) => {
      console.error("Copy failed: ", err);
    });
}

copyButtons.forEach((btn) => {
  btn.addEventListener("click", handleCopyClick);
});

// 3
document.getElementById("call").addEventListener("click", function () {
  const c = document.getElementById("coin");
  const cN = parseInt(c.innerText);
  if (cN < 20) {
    console.log("❌ Not available coins, must 20 coins to call");
  }
});
