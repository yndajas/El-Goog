const injectHeader = (pageTitle) => {
  document.getElementsByTagName("header")[0].innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><h1>
          <span class="red">E</span><span class="green">l</span>
          <span class="blue">G</span><span class="yellow">o</span
          ><span class="red">o</span><span class="blue">g</span>
        </h1></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkupHead"
        aria-controls="navbarNavAltMarkupHead"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkupHead">
        <ul class="navbar-nav ml-auto mt-2">
          <li class="nav-item">
            <a class="nav-link${
              pageTitle === "Search" ? " active" : ""
            }" href="/"
              >Search</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link${
              pageTitle === "Images" ? " active" : ""
            }" href="images.html"
              >Images</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link${
              pageTitle === "Advanced" ? " active" : ""
            }" href="advanced.html"
              >Advanced</a
            >
          </li>
        </ul>
      </div>
    </div>
    </nav>
  `;
};

const injectFooter = () => {
  document.getElementsByTagName("footer")[0].innerHTML = `
    <nav class="navbar navbar-light">
      <div class="container text-right">
        <ul class="navbar-nav col-12" id="copyright">
          <li class="nav-item">
            <span class="navbar-text">
              &copy; Ynda Jas
              <script>
                document.write(new Date().getFullYear());
              </script></span
            >
          </li>
        </ul>
      </div>
    </nav>
  `;
};

const injectHeaderAndFooter = () => {
  const pageTitle = document.title.slice(0, -10);

  injectHeader(pageTitle);
  injectFooter();

  document.getElementsByTagName("body")[0].style.display = "";
};

injectHeaderAndFooter();
