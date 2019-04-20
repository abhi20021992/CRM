var request = new XMLHttpRequest();
window.APPLICATION_CONFIG = null;
request.open('GET', '../app/config/config.json', false);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    APPLICATION_CONFIG = JSON.parse(request.responseText);
  } else {
  }
};
request.onerror = function () {
  console.error("Appsettings load failed!")
};
request.send();
