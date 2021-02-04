studiesDetail = document.getElementsByClassName("studies");
experienceDetail = document.getElementsByClassName("experience");
coursesDetail = document.getElementsByClassName("courses");
portfolioDetail = document.getElementsByClassName("portfolio");
contactDetail = document.getElementsByClassName("contact");
for (i in [...Array(2).keys()]) {
  studiesDetail[i].addEventListener("click", () => {
    showDetails("studies-detail");
  });
}
for (i in [...Array(2).keys()]) {
  experienceDetail[i].addEventListener("click", () => {
    showDetails("work-detail");
  });
}
for (i in [...Array(2).keys()]) {
  coursesDetail[i].addEventListener("click", () => {
    showDetails("courses-detail");
  });
}
for (i in [...Array(2).keys()]) {
  portfolioDetail[i].addEventListener("click", () => {
    showDetails("portfolio-detail");
  });
}
for (i in [...Array(2).keys()]) {
  contactDetail[i].addEventListener("click", () => {
    showDetails("contact-detail");
  });
}

function showDetails(elementDetail) {
  element = document.getElementById(elementDetail);
  elementStyle = getComputedStyle(element);
  if (elementStyle.maxHeight == "0px") {
    element.style.maxHeight = "1000px";
    element.style.transistion = "max-height 2s";
  } else {
    element.style.maxHeight = "0px";
    element.style.transition = "max-height 0.5s";
  }
}
