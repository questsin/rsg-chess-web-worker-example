// import a web worker
var worker = new Worker("worker.js");

// run loop with the worker
document.querySelector("#b1").addEventListener("click", function() {
  // set up response method
  worker.addEventListener("message", function(e) {
    if (e.data !== null && e.data !== "start") {
      document.querySelector("#container2").innerHTML = JSON.stringify(e.data);
    }
  });

  // start the process
  worker.postMessage("start");
});

// test the UI responsibility
document.querySelector("#b3").addEventListener("click", function() {
  document.querySelector("#container1").innerHTML =
    "If everything works you'll see a randm number, otherwise the page will freeze for few seconds...: " +
    Math.floor(Math.random() * 100);

  document.querySelector("#container1").style.color = getRandomColor();
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
