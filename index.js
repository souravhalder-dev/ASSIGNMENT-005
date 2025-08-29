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
const callhistory = document.getElementsByClassName("call");

for (let c of callhistory) {
  c.addEventListener("click", function (e) {
    const clickedButton = e.currentTarget;
    const card = clickedButton.closest(".card");
    const cpyElement = card.querySelector(".cpy");

    const number = cpyElement.innerText;
    console.log(number);

    //
    const clickedButtons = e.currentTarget;
    const cards = clickedButtons.closest(".card");
    const subTitles = cards.querySelector(".tx");

    const subTitle = subTitles.innerText;
    console.log(subTitle);
    const c = document.getElementById("coin");
    const cN = parseInt(c.innerText);

    if (!isNaN(cN)) {
      if (cN > 0) {
        alert(`📞 Calling to ${subTitle} ${number}...`);
        const less = cN - 20;
        c.innerText = less;
        console.log("Remaining coins:", less);
      } else {
        alert("❌ Not available coins, must 20 coins to call");
        return;
      }
    } else {
      console.error("The value in #coin is not a valid number.");
      return;
    }

    const historyContainer = document.getElementById("history-container");
    const history = document.createElement("div");
    const time = new Date().toLocaleTimeString();

    history.innerHTML = `
      <div class="flex items-center justify-between bg-gray-100 p-4 rounded-xl mt-5">
        <div>
          <h3 class="font-semibold">${subTitle}</h3>
          <p class="text-xl">${number}</p>
        </div>
        <p>${time}</p>
      </div>
    `;

    historyContainer.prepend(history);

    const clearBtn = document.getElementById("clear");
    clearBtn.onclick = function () {
      historyContainer.innerText = "";
    };
  });
}
