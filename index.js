studiesDetail = document.getElementById("studies");
experienceDetail = document.getElementById("experience");
coursesDetail = document.getElementById("courses");
portfolioDetail = document.getElementById("portfolio");
contactDetail = document.getElementById("contact");
studiesDetail.addEventListener("click", () => {
  showDetails("studies-detail");
});
experienceDetail.addEventListener("click", () => {
  showDetails("work-detail");
});
coursesDetail.addEventListener("click", () => {
  showDetails("courses-detail");
});
portfolioDetail.addEventListener("click", () => {
  showDetails("portfolio-detail");
});
contactDetail.addEventListener("click", () => {
  showDetails("contact-detail");
});

function showDetails(elementDetail) {
  element = document.getElementById(elementDetail);
  elementStyle = getComputedStyle(element);
  if (elementStyle.maxHeight == "0px") {
    element.style.maxHeight = "1000px";
  } else {
    element.style.maxHeight = "0px";
  }
}
