var myPythonScriptPath = "src/processImagen-paralel.py";

// Use python shell
var { PythonShell } = require("python-shell");
var pyshell = new PythonShell(myPythonScriptPath);

module.exports.processImage = function (rutasfotos) {
  console.log("compythonentra");
  pyshell.send(JSON.stringify(rutasfotos));

  pyshell.on("message", function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log("Desde pyhton: ", message);
  });

  // end the input stream and allow the process to exit
  pyshell.end(function (err) {
    if (err) {
      throw err;
    }

    console.log("finished");
  });
};
