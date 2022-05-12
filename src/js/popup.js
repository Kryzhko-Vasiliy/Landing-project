// alert ("One-project")
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

popupLinks.forEach(popupLink => {
  popupLink.addEventListener("click", function (event) {
    event.preventDefault();
    const popupName = event.target.getAttribute('href').replace('#', '');   
    const curentPopup = document.getElementById(popupName);
    popupOpen(curentPopup);
  });
});

const popupCloseIcon = document.querySelectorAll('.close-popup');
  
popupCloseIcon.forEach(element => {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    popupClose(event.target.closest('.popup'));
  });
});

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
  
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      // bodyLock();
    }

    curentPopup.classList.add('open');

    console.log(curentPopup);

    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
  