import logo from "../../image/icon.png";

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar justify-content-center p-4">
                            <a href="index.html" class="text-decoration-none text-center">
                                <img src="${logo}" alt="logo" class="img-fluid" width="100px">
                                <h1 class="text-light">In<span class="text-orange">Vid</span></h1>
                            </a>
                        </nav>`;
  }
}

customElements.define("nav-bar", Navbar);
