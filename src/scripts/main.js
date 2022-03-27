import "../scripts/components/navbar.js";
import "../scripts/components/header-content.js";
import "../scripts/components/header-footer.js";
import "../scripts/data/corona-report.js";
import "../scripts/data/corona-report-indo.js";

const main = () => {
  const baseUrl = "https://covid19.mathdro.id/api";

  const getDataGlobal = () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((results) => {
        const coronaReportGlobalElement = document.querySelector("corona-report");
        coronaReportGlobalElement.coronaItemGlobal = results;
      })
      .catch((error) => showResponseMessage(error));
  };

  const getDataIndo = () => {
    fetch(`${baseUrl}/countries/Indonesia/`)
      .then((response) => response.json())
      .then((results) => {
        const coronaReportElement = document.querySelector("corona-report-indo");
        coronaReportElement.coronaItemIndo = results;
      })
      .catch((error) => showResponseMessage(error));
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  getDataIndo();
  getDataGlobal();
};

export default main;
