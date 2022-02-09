
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBZVQPwjiv0MqlVt8TIerkdYoZINPhNQV4",
      authDomain: "kwitter-58288.firebaseapp.com",
      databaseURL: "https://kwitter-58288-default-rtdb.firebaseio.com",
      projectId: "kwitter-58288",
      storageBucket: "kwitter-58288.appspot.com",
      messagingSenderId: "894329207827",
      appId: "1:894329207827:web:a1da0d41c4d8c07cdf93e6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
