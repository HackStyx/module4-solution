(function (window) {
    var helloSpeaker = {};
    var sayHello = "Hello";
  
    helloSpeaker.speak = function (name) {
      console.log(sayHello + " " + name);
    }
  
    window.helloSpeaker = helloSpeaker;
  })(window);
  