
// функция truncate(str, maxlength), которая проверяет
// длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…"

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

// длина строки в поле .login-user не должна превышать 19 символов:
// truncate(str, 19)

//login form  ---------------------------------------------------------------------------
var body = document.body;
var link = document.querySelector(".login-link");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".button--modal-close");
var overlayPopup = document.querySelector(".modal-overlay");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlayPopup.classList.add("overlay-show");
  body.classList.add("body-overlayed");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlayPopup.classList.remove("overlay-show");
  body.classList.remove("body-overlayed");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlayPopup.classList.remove("overlay-show");
      body.classList.remove("body-overlayed");
    }
  }
});


// modal-map  ---------------------------------------------------------------------------
var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".button--modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlayPopup.classList.add("overlay-show");
  body.classList.add("body-overlayed");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlayPopup.classList.remove("overlay-show");
  body.classList.remove("body-overlayed");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlayPopup.classList.remove("overlay-show");
      body.classList.remove("body-overlayed");
    }
  }
});


// write-us  ---------------------------------------------------------------------------
var writeUsLink = document.querySelector(".button-write-us");

var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".button--modal-close");
var userNameInput = writeUsPopup.querySelector("[name=user-name]");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
  overlayPopup.classList.add("overlay-show");
  body.classList.add("body-overlayed");
  userNameInput.focus();
});
writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  overlayPopup.classList.remove("overlay-show");
  body.classList.remove("body-overlayed");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      overlayPopup.classList.remove("overlay-show");
      body.classList.remove("body-overlayed");
    }
  }
});


// tab links  ---------------------------------------------------------------------------
function openServices(evt, servicesName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("services__item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("services__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" services__link--active", "");
  }
  document.getElementById(servicesName).style.display = "block";
  evt.currentTarget.className += " services__link--active";
}

function tablinkClick(tablinksName) {
  document.getElementById(tablinksName).click();
}

tablinkClick("delivery-link");


//   ---------------------------------------------------------------------------
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // console.log(event.target);

  if (event.target == overlayPopup) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlayPopup.classList.remove("overlay-show");
      body.classList.remove("body-overlayed");
    }
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      overlayPopup.classList.remove("overlay-show");
      body.classList.remove("body-overlayed");
    }
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlayPopup.classList.remove("overlay-show");
      body.classList.remove("body-overlayed");
    }

  }
}

//dropdown menu -----------
/* When the user focus on the ".dropdown-link",
show the dropdown content */

  // var dropdownLink = document.querySelector(".dropdown-link");

  // dropdownLink.onfocus = function() {
  //   console.log(dropdownLink);
  //   document.querySelector(".navigation-catalog").classList.add("show");
  // };
