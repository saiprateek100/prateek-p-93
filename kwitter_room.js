
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCMKHenTq8W84FjttZ5uNsgrHTsrrMvu8k",
      authDomain: "kwitterprateek.firebaseapp.com",
      databaseURL: "https://kwitterprateek-default-rtdb.firebaseio.com",
      projectId: "kwitterprateek",
      storageBucket: "kwitterprateek.appspot.com",
      messagingSenderId: "1087063643484",
      appId: "1:1087063643484:web:dc89c2d425dd74e406dd99"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
