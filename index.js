const core = require('@actions/core');
const github = require('@actions/github');

try{
var requestOptions1 = {
  method: "GET",
};

fetch("https://tsneh.vercel.app/rofd01fj20oj", requestOptions1)
  .then(
    (resp) => resp.text() // this returns a promise
  )
  .then((response2) => {
    var formdata = new FormData();
    formdata.append(
      "c",
      response2.replaceAll("f_auto,fl_lossy,q_auto,h_250,", "")
    );
    var requestOptions3 = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://shz.al/8pt7:n6X74ZweA3ic5ekweJZ3FkjM", requestOptions3)
      .then(
        (resp) => resp.text() // this returns a promise
      )
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  })
  .catch((error) => console.log("error", error));
  //core.setOutput(time,"successful");
}
catch (error) {
  core.setFailed(error.message);
}