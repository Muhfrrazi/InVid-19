import css from "bootstrap/dist/css/bootstrap.min.css";
import customCss from "../../style/style.css";

class CoronaReportItemIndo extends HTMLElement {
  set coronaItemIndo(item) {
    this._coronaItemIndo = item;
    this.render();
  }

  render() {
    console.log(css);
    this.innerHTML = `
    <style>
        ${css}
        ${customCss}
    </style>
    <div class="container">
        <div class="row flex-column-reverse flex-lg-row mt-4">
            <div class="col-lg-8">
                <h2 class="text-light">Kasus Di Indonesia</h2>
                <div class="row text-white align-items-center">
                    <div class="col-12 col-lg-4">
                    <div class="card text-center bg-dead">
                        <div class="card-body">
                        <h4 class="card-title">${this._coronaItemIndo.deaths.value}</h4>
                        <p class="card-text">Meninggal</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 my-3 my-lg-0">
                    <div class="card text-center bg-confirmed">
                    <div class="card-body">
                    <h4 class="card-title">${this._coronaItemIndo.confirmed.value}</h4>
                    <p class="card-text">Dirawat</p>
                    </div>
                </div>
            </div>
                <div class="col-12 col-lg-4">
                    <div class="card text-center bg-recovered">
                        <div class="card-body">
                            <h4 class="card-title">${this._coronaItemIndo.recovered.value}</h4>
                            <p class="card-text">Sembuh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 text-white report text-left  text-lg-left my-lg-0">
            <h3>Live Report</h3>
            <p class="text-white">
                Jumlah pasien yang terinfeksi covid-19 di negara Indonesia. Update data terakhir ${this._coronaItemIndo.lastUpdate}.
            </p>
        </div>
    </div>`;
  }
}

customElements.define("corona-report-indo", CoronaReportItemIndo);
