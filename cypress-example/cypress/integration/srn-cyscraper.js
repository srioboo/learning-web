describe("Collecting Data", () => {
  before(() => {
    //cy.visit('https://bet.szerencsejatek.hu/cmsfiles/otos.html');
    cy.visit("https://www.mayoral.com/es/espana");
  });

  it("get data object", () => {
    cy.contains("Recién nacido").click();
    cy.contains("Ellas").click();
    const results = [];

    cy.get(".menu-lateral-container")
      .each(($data, index) => {
        if (index !== 0) {
          const rowElement = $data.get(0);
          console.log(rowElement);
          /* const cells = rowElement.cells;
          results.push({
            dato: cells[0].innerText,
          });*/
        }
      })
      .then(() => {
        console.log(results);
      });
    /*cy.get("tr")
      .each(($tr, index) => {
        if (index !== 0) {
          const rowElement = $tr.get(0);
          const cells = rowElement.cells;

          results.push({
            year: cells[0].innerText,
            week: cells[1].innerText,
            drawDate: cells[2].innerText,
            numbers: [
              parseInt(cells[11].innerText, 10),
              parseInt(cells[12].innerText, 10),
              parseInt(cells[13].innerText, 10),
              parseInt(cells[14].innerText, 10),
              parseInt(cells[15].innerText, 10),
            ],
          });
        }
      })
      .then(() => {
        console.log(results);
      });*/
  });
});
