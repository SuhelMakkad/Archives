( function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

 for (var name of names) {

  nameLower = name.toLowerCase();
  var firstLetter = nameLower.charAt(0);

  if (firstLetter === "j") {
     byeSpeaker.speak(name);
  } else {
     helloSpeaker.speak(name);
  }
}

})(window);
