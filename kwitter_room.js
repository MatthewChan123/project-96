const firebaseConfig = {
    apiKey: "AIzaSyAHLXPs2Y30i82MZtt92gS1ZtJCede-trs",
    authDomain: "lets-chat-website.firebaseapp.com",
    projectId: "lets-chat-website",
    storageBucket: "lets-chat-website.appspot.com",
    messagingSenderId: "71981551395",
    appId: "1:71981551395:web:cdc368b3e75c8ed9948696",
    measurementId: "G-1YXNJ65LHZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
room_name = document.getElementById("room_name").value;
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'#"+Room_names+"</div><hr>";
document.getElementById("user_name").innerHTML = row;
//End code
});});}
getData();
user_name = localStorage.getItem("user_name")
function rediectToRoomName(Room_names) {
    localStorage.setItem("room_name",room_name);
    window.location = ("kwitter_page.html");
}