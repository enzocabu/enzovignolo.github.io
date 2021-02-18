console.log(document.getElementsByClassName("studies"));
studiesDetail = document.getElementsByClassName("studies");
experienceDetail = document.getElementsByClassName("experience");
coursesDetail = document.getElementsByClassName("courses");
portfolioDetail = document.getElementsByClassName("portfolio");
contactDetail = document.getElementsByClassName("contact");
for (i in [...Array(2).keys()]) {
  studiesDetail[i].addEventListener("click", () => {
    showDetails("studies-detail", "arrow-1");
  });
}
for (i in [...Array(2).keys()]) {
  experienceDetail[i].addEventListener("click", () => {
    showDetails("work-detail", "arrow-2");
  });
}
for (i in [...Array(2).keys()]) {
  coursesDetail[i].addEventListener("click", () => {
    showDetails("courses-detail", "arrow-3");
  });
}
for (i in [...Array(2).keys()]) {
  portfolioDetail[i].addEventListener("click", () => {
    showDetails("portfolio-detail", "arrow-4");
  });
}
for (i in [...Array(2).keys()]) {
  contactDetail[i].addEventListener("click", () => {
    showDetails("contact-detail", "arrow-5");
  });
}

function showDetails(elementDetail, arrow) {
  console.log(elementDetail);
  element = document.getElementById(elementDetail);
  console.log(element);
  elementStyle = getComputedStyle(element);
  if (elementStyle.maxWidth == "0%") {
    element.style.maxHeight = "500rem";
    element.style.maxWidth = "calc(10rem + 20vw)";
    element.style.transistion = "max-width 2s ,max-height 2s";
    arrowElement = document.getElementById(arrow);
    arrowElement.style.transform = "rotate(0.25turn)";
  } else {
    element.style.maxHeight = "0rem";
    element.style.maxWidth = "0%";
    element.style.transition = "max-width 0.5s, max-height 0.5s";
    arrowElement.style.transform = "rotate(-0.25turn)";
  }
}
