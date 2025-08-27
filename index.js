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

// document.getElementById("h").addEventListener("click", function () {
//   //   const hHard = document.getElementById("head-heart");
//   //   const h = hHard.innerText;
//   //   const num = parseInt(h);
//   //   num++;
//   //   h = num;

//   const likeNumberSpanTag = document.getElementById("head-heart");
//   const likeNumberStr = likeNumberSpanTag.innerText;

//   let likeNumber = parseInt(likeNumberStr);

//   // Update / Create
//   likeNumber++;

//   // Set in UI
//   likeNumberSpanTag.innerText = likeNumber;
// });
