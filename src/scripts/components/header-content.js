import illustration from "../../image/illustration.png";

class HeaderContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container mt-5 mt-md-2">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-6 text-xs-center text-left text-lg-left">
                                    <div class="header-caption px-4 py-1">
                                        229 negara telah terinfeksi
                                    </div>
                                    <h1 class="text-white header-text pt-2">WASPADA <span class="text-orange">CORONA</span></h1>
                                    <p class="header-subtext text-light text-justify">
                                        Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit akibat infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.
                                    </p>
                                    <a href="https://id.wikipedia.org/wiki/Pandemi_COVID-19" target="_blank" class="text-decoration-none btn-corona-detail d-inline-block">
                                        <h2 class="text-orange">Tentang Covid-19</h2>
                                    </a>
                                </div>
                                <div class="col-12 col-lg-4 position-relative illustration text-center">
                                    <img src="${illustration}" class="img-illustration">
                                </div>
                            </div>
                        </div>`;
  }
}

customElements.define("header-content", HeaderContent);
