class HeaderFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container text-center mt-4 pb-3">
                            <p class="footer">&copy; - Muhammad Fachrurrazi - Dicoding Indonesia.</p>
                        </div>`;
  }
}

customElements.define("header-footer", HeaderFooter);
