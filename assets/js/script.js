const btn = document.getElementById("share-btn");
const postAuthor = document.getElementById("post-author");
const popupShare = document.getElementById("popup-share-links");

btn.addEventListener("click", () => {
  postAuthor.classList.toggle("share-active");
  popupShare.classList.toggle("share-active");
});
