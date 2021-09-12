var firebaseConfig = {
      apiKey: "AIzaSyClPqZkTjATUJPygnLG0MniSWrTyU-jQmg",
      authDomain: "let-s-chat-web-app-p-93-p-97.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-p-93-p-97-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-p-93-p-97",
      storageBucket: "let-s-chat-web-app-p-93-p-97.appspot.com",
      messagingSenderId: "135371528756",
      appId: "1:135371528756:web:8678720a5a2abebc428861",
      measurementId: "G-WGGV76M5NZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="lets_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="lets_chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

