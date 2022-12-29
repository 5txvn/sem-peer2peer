//THIS APP IS NOT THE EXACT COPY OF THE APP STORE BUT IS SIMILAR TO IT ;).... and btw inspired by Aysenur Turk's pen (who i follow A LOT).

const side_bar_btns = document.querySelectorAll("#sidebar-btn");

side_bar_btns.forEach((elem) => {
  elem.addEventListener("click", () => {
    for (let index = 0; index < side_bar_btns.length; index++) {
      side_bar_btns[index].classList.remove("active");
    }
    elem.classList.add("active");
  });
});

let min = true;

document.querySelector(".window__close").addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";

  setTimeout(() => {
    window.alert(
      "Oh No! What did you do? Now you have to refresh to open the app again"
    );
  }, 500);
});

document.querySelector(".window__maximize").addEventListener("click", () => {
  if (min == false) {
    min = true;
    console.log(min);
    document.querySelector(".container").style.width = "90%";
    document.querySelector(".container").style.height = "90%";
  } else {
    min = false;
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".container").style.height = "100%";
  }
});

document.querySelector(".window__minimize").addEventListener("click", () => {
  console.log("hello world");

  document.querySelector(".container").style.transform = "scale(0)";

  setTimeout(() => {
    window.alert(
      "The app is minimized but cannot be opened again because the virtual codepen macos crashed!"
    );
  }, 500);
});

function home() {
  const content = `
  <h1>Welcome to Peer2Peer</h1>
    <div class="ideas">
      <div class="idea">
        <p>MASTER YOUR MAC</p>
        <h1>Make a great<br> handoff</h1>
        <p>Work seamlessly across devices</p>
      </div>

      <div class="idea">
        <p>GET STARTED</p>
        <h1>Apps optimised for mac with M1</h1>
        <p>Work seamlessly across devices</p>
      </div>
    </div>

    <section class="updates">
      <h1>Updates</h1>

      <div class="update update-1">

        <div class="updt-left">
          <img src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png" alt="powerpoint icon" />
          <h1>Microsoft Powerpoint</h1>
        </div>

        <div class="buttons">
          <a href="https://bit.ly/3gdGvT8" target="_warning">
            <button>Update</button>
          </a>
        </div>
      </div>

      <div class="update">

        <div class="updt-left">
          <img src="https://img.icons8.com/color/452/microsoft-word-2019--v2.png" alt="word icon" />
          <h1>Microsoft Word</h1>
        </div>

        <div class="buttons">
          <button style="color: lime;cursor: default">Updated</button>
        </div>
      </div>

      <div class="update">

        <div class="updt-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/788px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" alt="lightroom icon" />
          <h1>Adobe Lightroom</h1>
        </div>

        <div class="buttons">
          <a href="https://bit.ly/3gdGvT8" target="_warning">
            <button>Update</button>
          </a>
        </div>
      </div>

      <div class="update">

        <div class="updt-left">
          <img src="https://developer.apple.com/design/human-interface-guidelines/macos/images/app-icon-realistic-materials_2x.png" alt="xcode icon" />
          <h1>Xcode</h1>
        </div>

        <div class="buttons">
          <a href="https://bit.ly/3gdGvT8" target="_warning">
            <button>Update</button>
          </a>
        </div>
      </div>
    </section>

    <section class="trending">
      <h1>Trending</h1>

      <div class="grid">
        <span class="grid__app">
          <h1>Kindle</h1>

          <button>GET</button>
        </span>

        <span class="grid__app">
          <h1>Slac</h1>

          <button>GET</button>
        </span>

        <span class="grid__app">
          <h1>Magnet</h1>

          <button>₹699</button>
        </span>

        <span class="grid__app">
          <h1>CotEditor</h1>

          <button>GET</button>
        </span>

        <span class="grid__app margin">
          <h1>Twitter</h1>

          <button>GET</button>
        </span>

        <span class="grid__app margin">
          <h1>Notability</h1>

          <button>₹799</button>
        </span>

        <span class="grid__app margin">
          <h1>NDTV</h1>

          <button>GET</button>
        </span>

        <span class="grid__app margin">
          <h1>Rummy</h1>

          <button>₹179</button>
        </span>
      </div>
    </section>
<!--
    <section class="links">
      <a href="#">Privacy Policy -></a>

      <a href="#">Terms and Conditions -></a>

      <a href="#">Report Error -></a>

      <a href="#">
        Parent's guide to Mac app store
      </a>
    </section>
  -->
  </div>
  `
  $(".content").empty()
  $(".content").append(content)
}

function about() {
  $(".content").empty()
  $(".content").append("<h1>About Peer2Peer</h1>")
}