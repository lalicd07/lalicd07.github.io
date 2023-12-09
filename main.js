document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const toggleBtn = document.getElementById("custom-toggle-btn");

  const navItems = [
    { text: "Home", url: "index.html" },
    { text: "Services", url: "index.html#services" },
    { text: "School", url: "index.html#school" },
    { text: "Offer", url: "index.html#offer" },
	{ text: "Author", url: "autor.html" },
  ];

  navItems.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item");
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.href = item.url;
    navLink.textContent = item.text;
    navItem.appendChild(navLink);
    navbar.querySelector(".navbar-nav").appendChild(navItem);
  });

  toggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});



$(document).ready(function(){
    let trenutniIndex = 0;
    const $slike = $('.slajder-slika');
    const $prethodna = $('#prethodna');
    const $sledeca = $('#sledeca');

    function prikaziSliku(index) {
        $slike.hide().eq(index).fadeIn();
    }

    function promeniSliku() {
        trenutniIndex = (trenutniIndex + 1) % $slike.length;
        prikaziSliku(trenutniIndex);
    }

    function prethodnaSlika() {
        trenutniIndex = (trenutniIndex - 1 + $slike.length) % $slike.length;
        prikaziSliku(trenutniIndex);
    }

    $prethodna.on('click', prethodnaSlika);
    $sledeca.on('click', promeniSliku);

    setInterval(promeniSliku, 5000); 
    prikaziSliku(trenutniIndex);
});


const objservi = [
    {
        h3: "Internet payments",
        p: "We offer protection when shopping or paying bills online",
        hiden: "You can be sure that your account and card details will stay safe and protected from any attempted theft, and we'll keep track of your cash flow so you can have a complete picture of your cash flow and balance ",
    },
    {
		h3: "Communcating",
        p: "We provide protection when communicating via social networks and via e-mail",
        hiden: "Your email is your privacy and we are here to make sure that your emails and your messages on social networks will remain your privacy",
    },
     {
        h3: "Data protection",
        p: "You can also protect your private data on your computer",
        hiden: "Whether it is on the internet or on your computer and even on your server, all your data will be safe and you can leave your data, images and media on your computer without worrying about any theft.",
    },
];

const nizServi = new Array("service1.png", "service2.png", "service3.png");

const dinamickiSadrzaj = document.querySelector('#condin .row');

objservi.forEach((serv, index) => {
    const kolona = document.createElement('div');
    kolona.classList.add('col-lg-4', 'col-md-6', 'col-sm-12',  'sdivs');

    const slika = document.createElement('img');
    slika.src = `img/${nizServi[index]}`;
    slika.classList.add('img-fluid');

    const naslov = document.createElement('h3');
    naslov.textContent = serv.h3;

    const paragraf = document.createElement('p');
    paragraf.textContent = serv.p;

    const dodatnoInfo = document.createElement('p');
    dodatnoInfo.classList.add('aditional-info', 'display-none');
    dodatnoInfo.textContent = serv.hiden;

    const readMore = document.createElement('span');
    readMore.classList.add('showMore');
    readMore.textContent = 'Read more...';

    kolona.appendChild(slika);
    kolona.appendChild(naslov);
    kolona.appendChild(paragraf);
    kolona.appendChild(dodatnoInfo);
    kolona.appendChild(readMore);

    dinamickiSadrzaj.appendChild(kolona);
});

$(document).ready(function () {
    $(".showMore").click(function () {
        var content = $(this).prev();

        content.slideToggle({
            duration: 300,
            easing: "swing" 
        });

        $(this).text(function (_, text) {
            return text === "Read more..." ? "Read less..." : "Read more...";
        });
    });
});

//tajmer
function updateCountdown() {
  var countDownDate = new Date("Jan 13, 2024 15:00:00").getTime();

  function update() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "EXPIRED";
      document.getElementById("additionalMessage").innerHTML = "The countdown has expired!";
    } else {
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
  }

  setInterval(update, 1000);
}

updateCountdown();


$(document).ready(function () {
$(".Join").hide();
$("#joinus").click(function (e) {
e.preventDefault();
$(".Join").show();
});
$("#closeModal").click(function (e) {
e.preventDefault();
$(".Join").hide();
});
let fullname = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
let mailReg = /^[A-z0-9-\.]{3,30}@[a-z]{2,8}\.(com|rs)$/;
$("#joinForm :input").blur(function () {
if ($(this).val().length == 0) {
$(this).addClass("errorInput");
$(this).next().text("Please fill up empty field");
} else {
$(this).removeClass("errorInput");
$(this).next().text(``);
}
});
$("#sub").click(function (e) {
e.preventDefault();
if (!fullname.test($("#FullName").val())) {
$("#FullName")
.next()
.text("Incorect name, example:\"Dunja Lalic\"");
$("#FullName").addClass("errorInput");
} else {
$("#FullName").next().text(``);
$("#FullName").removeClass("errorInput");
}
if (!mailReg.test($("#mail").val())) {
$("#mail").next().text("incorrect email, must contain @ and, must end with .com or .rs");
$("#mail").addClass("errorInput");
} else {
$("#mail").next().text(``);
$("#mail").removeClass("errorInput");
}

for (let i = 0; i < $(".errorJoin").length; i++) {
if ($(".errorJoin").text() != "") {
$("#successfulJoin").html("");
$("#successfulJoin").removeClass("scsJoin");
break;
} else {
$("#successfulJoin").addClass("scsJoin");
$("#successfulJoin").html("You have successfully submitted your application");
}
}
});
});

document.addEventListener("DOMContentLoaded", function () {
  const slajder = document.querySelector(".slajder-pod");
  const strelicaLevo = document.querySelector(".left");
  const strelicaDesno = document.querySelector(".right");

  let trenutniIndex = 0;

  strelicaDesno.addEventListener("click", function () {
    trenutniIndex += 2; 

    if (trenutniIndex >= slajder.children.length - 1) {
      trenutniIndex = slajder.children.length - 2; 
      strelicaDesno.disabled = true; 
    }

    strelicaLevo.disabled = false; 

    updateSlajder();
  });

  strelicaLevo.addEventListener("click", function () {
    trenutniIndex -= 2; 

    if (trenutniIndex <= 0) {
      trenutniIndex = 0; 
      strelicaLevo.disabled = true; 
    }

    strelicaDesno.disabled = false; 

    updateSlajder();
  });

  function updateSlajder() {
    const novaTransformacija = -trenutniIndex * 50 + "%";
    slajder.style.transform = "translateX(" + novaTransformacija + ")";
  }
});

var objName, objLastName, objAddress, objCity, objPhone, objEmail, objOrderDdl, arrOrder, arrTerms;

var reFullname=/^([A-Z][a-z]{2,14}){1,3}$/;
var reAddress=/^(([A-Z][a-z]{1,15}(\.)?)|([1-9][0-9]{0,2}(\.)?))[a-zA-Z0-9\s\/\-]+$/;
var reEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var reCity = /^([A-Z][a-z]{2,14})+$/;
var rePhone= /^[0-9]{1,15}$/;

window.onload=function(){
	
	submitBtn = document.querySelector("#btn-order");
	submitBtn.addEventListener("click", formValidationOnSubmit);


    objName=document.querySelector("#user-name");
    objLastName=document.querySelector("#user-lastname");
    objAddress=document.querySelector("#user-address");
    objCity=document.querySelector("#user-city");
    objPhone=document.querySelector("#user-phone");
    objEmail=document.querySelector("#user-email");
    arrOrder=document.getElementsByName("orderer");
    arrTerms=document.getElementsByName("terms");


    objName.addEventListener("blur",function(){
        regexValidation(reFullname, objName);
    });

    objLastName.addEventListener("blur",function(){
        regexValidation(reFullname, objLastName);
    });

    objAddress.addEventListener("blur",function(){
        regexValidation(reAddress, objAddress);
    });

    objCity.addEventListener("blur",function(){
        regexValidation(reCity, objCity);
    });

    objPhone.addEventListener("blur",function(){
        regexValidation(rePhone, objPhone);
    });

    objEmail.addEventListener("blur",function(){
        regexValidation(reEmail, objEmail);
    });

    createDdl();
	
    let ddl=document.querySelector("#order-method");
    ddl.addEventListener("click",checkDdl);

    submitBtn.addEventListener("click", formValidationOnSubmit);
}

function formValidationOnSubmit(){
    regexValidation(reFullname, objName);
    regexValidation(reFullname, objLastName);
    regexValidation(reAddress, objAddress);
    regexValidation(reCity, objCity);
    regexValidation(rePhone, objPhone);
    regexValidation(reEmail, objEmail);

    checkDdl();

    let chbTerms= document.querySelector("#terms");
    try{
        if(!chbTerms.checked){
            chbTerms[0].nextElementSibling.nextElementSibling.classList.remove("d-none");
            chbTerms[0].nextElementSibling.nextElementSibling.classList.add("d-block");
            throw("Niste procitali uslove koriscenja!");
        }
        else{
            chbTerms[0].nextElementSibling.nextElementSibling.classList.add("d-none");
            chbTerms[0].nextElementSibling.nextElementSibling.classList.remove("d-block");
            chbTerms[0].nextElementSibling.nextElementSibling.innerHTML="";
        }
    }
    catch(error) {
				chbTerms.nextElementSibling.nextElementSibling.innerHTML=error;
    }
}

function regexValidation(re, obj) {
    try {
        if (!re.test(obj.value)) {
            obj.nextElementSibling.classList.remove("d-none");
            obj.nextElementSibling.classList.add("d-block");

            if (obj == objName || obj == objLastName) {
                throw "It must contain at least one capital letter and a maximum of 15 lowercase letters.";
            } else if (obj == objAddress) {
                throw "This is an incorrect address, an example of how it should look..";
            } else if (obj == objCity) {
                throw "Incorrect city, an example of how it should look..";
            } else if (obj == objPhone) {
                throw "Incorrect phone number, an example of how it should look..";
            } else if (obj == objEmail) {
                throw "Incorrect email address, an example of how it should look..";
            }
        } else {
            obj.previousElementSibling.classList.remove("d-inline");
            obj.previousElementSibling.classList.add("d-none");
            obj.nextElementSibling.classList.remove("d-block");
            obj.nextElementSibling.classList.add("d-none");
            obj.nextElementSibling.innerHTML = "";
        }
    } catch (err) {
        obj.previousElementSibling.classList.remove("d-none");
        obj.previousElementSibling.classList.add("d-inline");
        obj.nextElementSibling.innerHTML = err;
    }
}


function createDdl() {
    let optionsText= ["Choose a package","Basic package","Advanced package","Premium package","Special offer"];
    let optionsValues= ["0","1","2","3","4"];

    objOrderDdl= document.createElement("select");
    objOrderDdl.setAttribute("id","order-method");
    objOrderDdl.classList.add("form-selection","custom-select");

    let opt0= document.createElement("option");
    opt0.setAttribute("value", "0");
    opt0.innerHTML=optionsText[0];

    objOrderDdl.appendChild(opt0);
    for(let i=1;i<optionsText.length;i++) {
        let newOpt=document.createElement("option");
        newOpt.setAttribute("value", optionsValues[i]);
        let  newOptText = document.createTextNode(optionsText[i]);
        newOpt.appendChild(newOptText);

        objOrderDdl.appendChild(newOpt);
    }
    document.querySelector("#ddl-container").appendChild(objOrderDdl);
}

function checkDdl(){
    let ddlContainer= document.querySelector("#ddl-container");
    let ddl=document.querySelector("#order-method");
    try{
        if(ddl.options[ddl.options.selectedIndex].value=="0"){
            ddlContainer.nextElementSibling.classList.remove("d-none");
            ddlContainer.nextElementSibling.classList.add("d-block");
            throw("You need to choose the package price.");
        }
        else{
            ddlContainer.nextElementSibling.classList.remove("d-block");
            ddlContainer.nextElementSibling.classList.add("d-none");
        }
    }
    catch (err) {
        ddlContainer.nextElementSibling.innerHTML=err;
    }
}

function handleScroll() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {
    handleScroll();
};

document.addEventListener("DOMContentLoaded", function() {
    var socialIcons = [
        { icon: 'facebook', link: 'https://sr-rs.facebook.com/' },
        { icon: 'instagram', link: 'https://www.instagram.com/lalicdunja/' },
        { icon: 'file', link: 'DokumentacijaSajt.pdf' },
        { icon: 'sitemap', link: 'sitemap.xml' },
        { icon: 'r', link: 'robots.txt' }
    ];

    var socialIconsContainer = document.getElementById('socialIcons');
    socialIcons.forEach(function(iconData) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var icon = document.createElement('i');

        if (iconData.icon === 'facebook' || iconData.icon === 'instagram') {
            icon.classList.add('fab', 'fa-' + iconData.icon);
        } else {
            icon.classList.add('fa-solid', 'fa-' + iconData.icon);
        }

        a.href = iconData.link;
        a.appendChild(icon);
        li.appendChild(a);
        socialIconsContainer.appendChild(li);
    });

    var footerLinks = [
        { text: 'Home', link: 'index.html' },
        { text: 'Services', link: 'index.html#services' },
        { text: 'School', link: 'index.html#school' },
        { text: 'Offer', link: 'index.html#offer' },
        { text: 'Author', link: 'autor.html' }
    ];

    var footerLinksContainer = document.getElementById('footerLinks');
    footerLinks.forEach(function(linkData) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = linkData.link;
        a.textContent = linkData.text;
        li.appendChild(a);
        footerLinksContainer.appendChild(li);
    });
});

