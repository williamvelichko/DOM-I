const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");
// const item1 = document.querySelector(".nav-item-1");
// const item2 = document.querySelector("nav-item-2");
// const item3 = document.querySelector(".nav-item-3");
// const item4 = document.querySelector(".nav-item-4");
// const item5 = document.querySelector(".nav-item-5");
// const item6 = document.querySelector(".nav-item-6");

const allNav = document.querySelectorAll("nav a");
console.log(allNav);
allNav[0].className = "nav-item-1";
allNav[1].className = "nav-item-2";
allNav[2].className = "nav-item-3";
allNav[3].className = "nav-item-4";
allNav[4].className = "nav-item-5";
allNav[5].className = "nav-item-6";

allNav[0].textContent = siteContent["nav"]["nav-item-1"];
allNav[1].textContent = siteContent["nav"]["nav-item-2"];
allNav[2].textContent = siteContent["nav"]["nav-item-3"];
allNav[3].textContent = siteContent["nav"]["nav-item-4"];
allNav[4].textContent = siteContent["nav"]["nav-item-5"];
allNav[5].textContent = siteContent["nav"]["nav-item-6"];

// allNav.forEach(function (bar) {
//   console.log(bar);
// });
//logo
const logo = document.querySelector("header .logo");
console.log(logo);
logo.src = siteContent["images"]["logo-img"];
//titel
const bigWord = document.querySelector("h1");
console.log(bigWord);
bigWord.textContent = siteContent.cta.h1;
//button
const press = document.querySelector("button");
press.textContent = siteContent.cta.button;
//picture by button
const pic1 = document.querySelector("#cta-img");
pic1.src = siteContent["images"]["cta-img"];

//top content
const description = document.querySelectorAll(".text-content h4");
console.log(description);

description[0].textContent = siteContent["main-content"]["features-h4"];
description[1].textContent = siteContent["main-content"]["about-h4"];
description[2].textContent = siteContent["main-content"]["services-h4"];
description[3].textContent = siteContent["main-content"]["product-h4"];
description[4].textContent = siteContent["main-content"]["vision-h4"];

const par = document.querySelectorAll(".text-content p");
console.log(par);

par[0].textContent = siteContent["main-content"]["features-content"];
par[1].textContent = siteContent["main-content"]["about-content"];
par[2].textContent = siteContent["main-content"]["services-content"];
par[3].textContent = siteContent["main-content"]["product-content"];
par[4].textContent = siteContent["main-content"]["vision-content"];

const mainImg = document.querySelector(".main-content .middle-img");
mainImg.src = siteContent["images"]["accent-img"];

//section content
const personal = document.querySelector(".contact h4");
personal.textContent = siteContent["contact"]["contact-h4"];

const place = document.querySelectorAll(".contact p");
place[0].textContent = siteContent["contact"]["address"];
place[1].textContent = siteContent["contact"]["phone"];
place[2].textContent = siteContent["contact"]["email"];

//footer
const end = document.querySelector("footer a");
end.textContent = siteContent["footer"]["copyright"];

end.style.marginBottom = "10px";
