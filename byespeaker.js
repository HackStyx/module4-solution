(function (window) {
    var byeSpeaker = {};
    var sayGoodbye = "Good Bye";
  
    byeSpeaker.speak = function (name) {
      console.log(sayGoodbye + " " + name);
    }
  
    window.byeSpeaker = byeSpeaker;
  })(window);
  