document.getElementById("donation-desc").style.display = "block";
document.getElementById("history-desc").style.display = "none";
document.getElementById("donation").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("donation-desc").style.display = "block";
  document.getElementById("history-desc").style.display = "none";
  document.getElementById("donation").classList.add("primary-color");
  document.getElementById("history").classList.remove("primary-color");
});
document.getElementById("history").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("donation-desc").style.display = "none";
  document.getElementById("history-desc").style.display = "block";
  document.getElementById("history").classList.add("primary-color");
  document.getElementById("donation").classList.remove("primary-color");
});
