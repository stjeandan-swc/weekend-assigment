let isSidenavOpen = false;

function openSidenav() {
  if(!isSidenavOpen) {
    document.getElementById("sidenav").classList.toggle("show-sidenav");
    isSidenavOpen = true;
  }
}

function closeSidenav() {
  if(isSidenavOpen) {
    document.getElementById("sidenav").classList.toggle("show-sidenav");
    isSidenavOpen = false;
  }
}

function contactBtn() {
  let msg = prompt("Please send us a message.");

  if(msg != null && msg != "") {
      userEmail = prompt("Please leave us your Email");

      if(userEmail != null && userEmail != "") {
        alert("Thank you for your message. We will respond in the next 2 days.");
      }
      else {
        alert("Sorry but we did not get your email and have no way to respond.");
      }
  }
  else {
    alert("Sorry but we did not get an acceptable message from you.");
  }
}
