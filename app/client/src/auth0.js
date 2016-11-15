'use strict';

var lock = new Auth0Lock('jWd5ZBXe4EXRKHYODw3rdcjDucpAnIQq', 'pepetopo.eu.auth0.com');
var btnLogin = document.getElementById('btn_login');
var btnLogout = document.getElementById('btn_logout');

function showProfileInfo(profile) {
  console.log(profile);
  document.getElementById('nickname').textContent = profile.name;
  btnLogout.style.display = 'block';
  btnLogin.style.display = 'none';
  var body = JSON.stringify({
    name: profile.name,
    id: profile.clientID
  });
  fetch('/login', { method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: body }).then(function (response) {
    return response.json();
  }).then(function (data) {
    sessionStorage.setItem('userToken', data);
  });
}

function retrieveProfile() {
  var idToken = localStorage.getItem('id_token');
  if (idToken) {
    lock.getProfile(idToken, function (err, profile) {
      if (err) {
        alert('There was an error getting the profile: ' + err.message);
      } else {
        showProfileInfo(profile);
      }
    });
  }
}

lock.on('authenticated', function (authResult) {
  lock.getProfile(authResult.idToken, function (error, profile) {
    if (error) return;
    localStorage.setItem('id_token', authResult.idToken);
    // Display user information
    showProfileInfo(profile);
  });
});

btnLogin.addEventListener('click', function () {
  lock.show();
});

btnLogout.addEventListener('click', function () {
  localStorage.removeItem('id_token');
  sessionStorage.removeItem('userToken');
  window.location.reload();
});

retrieveProfile();
//# sourceMappingURL=E:\GitHub\ostoslista\scripts\maps\auth0.js.map