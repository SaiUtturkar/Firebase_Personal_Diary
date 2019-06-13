var app_firebase = {};
(function(){
    
  // Your web app's Firebase configuration
  var firebaseConfig = {
apiKey: "AIzaSyBR9FwHpJhoeHGD01dGYAXVd2kGbaiTxMk",
    authDomain: "qdemyproj.firebaseapp.com",
    databaseURL: "https://qdemyproj.firebaseio.com",
    projectId: "qdemyproj",
    storageBucket: "qdemyproj.appspot.com",
    messagingSenderId: "943607704458",
    appId: "1:943607704458:web:bbad9f42260938ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_firebase = firebase;
})()