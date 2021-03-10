const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navItems = document.querySelector('nav')
let item1 = document.createElement("a")
let item2 = document.createElement("a")
item1.innerHTML = "Item 1".fontcolor("green")
item2.innerHTML = "Item 2".fontcolor("green")
navItems.append(item2)
navItems.children[0].innerHTML = siteContent["nav"]["nav-item-1"].fontcolor("green")
navItems.children[1].innerHTML = siteContent["nav"]["nav-item-2"].fontcolor("green")
navItems.children[2].innerHTML = siteContent["nav"]["nav-item-3"].fontcolor("green")
navItems.children[3].innerHTML = siteContent["nav"]["nav-item-4"].fontcolor("green")
navItems.children[4].innerHTML = siteContent["nav"]["nav-item-5"].fontcolor("green")
navItems.children[5].innerHTML = siteContent["nav"]["nav-item-6"].fontcolor("green")
navItems.prepend(item1)
let sectionCta = document.querySelector(".cta")
sectionCta.querySelector(".cta-text h1").innerHTML = siteContent["cta"]["h1"]
sectionCta.querySelector("div button").innerHTML = siteContent["cta"]["button"]
sectionCta.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"])
let sectionMain = document.querySelector(".main-content")
let topContent = sectionMain.querySelector(".top-content")
topContent.children[1].querySelector("h4").innerHTML = siteContent["main-content"]["about-h4"]
topContent.children[1].querySelector("p").innerHTML = siteContent["main-content"]["about-content"]
topContent.children[0].querySelector("h4").innerHTML = siteContent["main-content"]["features-h4"]
topContent.children[0].querySelector("p").innerHTML = siteContent["main-content"]["features-content"]
sectionMain.querySelector("#middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"])
let bottomContent = sectionMain.querySelector(".bottom-content")
bottomContent.children[0].querySelector("h4").innerHTML = siteContent["main-content"]["product-h4"]
bottomContent.children[0].querySelector("p").innerHTML = siteContent["main-content"]["product-content"]
bottomContent.children[1].querySelector("h4").innerHTML = siteContent["main-content"]["services-h4"]
bottomContent.children[1].querySelector("p").innerHTML = siteContent["main-content"]["services-content"]
bottomContent.children[2].querySelector("h4").innerHTML = siteContent["main-content"]["vision-h4"]
bottomContent.children[2].querySelector("p").innerHTML = siteContent["main-content"]["vision-content"]
let selectionContact = document.querySelector(".contact")
selectionContact.querySelector("h4").innerHTML = siteContent["contact"]["contact-h4"]
selectionContact.children[1].innerHTML = siteContent["contact"]["address"]
selectionContact.children[2].innerHTML = siteContent["contact"]["phone"]
selectionContact.children[3].innerHTML = siteContent["contact"]["email"]
let footer = document.querySelector("footer")
footer.querySelector("p").innerHTML = siteContent["footer"]["copyright"]