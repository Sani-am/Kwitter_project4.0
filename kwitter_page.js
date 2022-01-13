var firebaseConfig = {
    apiKey: "AIzaSyDVl2pXa3I0ZH2DEgkfTPVJRGNpU_SiDxw",
    authDomain: "kwitter-project-4b0bb.firebaseapp.com",
    databaseURL: "https://kwitter-project-4b0bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-4b0bb",
    storageBucket: "kwitter-project-4b0bb.appspot.com",
    messagingSenderId: "589795113959",
    appId: "1:589795113959:web:58f7fb7a20eee6337e5b42"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  
user_name= localStorage.getItem("user_name");

     room_name= localStorage.getItem("room_name");

     function send(){

      msg= document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
name:user_name, 
message:msg,
like:0

      });

      document.getElementById("msg").value="";
     }