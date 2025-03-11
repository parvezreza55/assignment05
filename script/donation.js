// donate 1

document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputFieldValue("donate-amount");
    const mainBalance = getTextValue("nav-balance");
    const donatedBanalce = getTextValue("donate-balance");
    const headerTitle = getTitle("donate-title");

    if (
      isNaN(donateAmount) ||
      donateAmount <= 0 ||
      donateAmount > mainBalance
    ) {
      alert("Invalid Amount");
      return;
    } else {
      const newdonatedBanalce = donatedBanalce + donateAmount;
      const newMainBalance = mainBalance - donateAmount;
      setInnerText("nav-balance", newMainBalance);
      setInnerText("donate-balance", newdonatedBanalce);
      const historyContainer = document.getElementById("history-desc");
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="border border-color p-4 rounded-xl">
            <p > ${donateAmount} Tk is Donated for ${headerTitle}</p>
            <p > Date:${times()} </p>
           </div>

        `;
      historyContainer.appendChild(div);
    }
  });

// donate 2

document
  .getElementById("donation-btn1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputFieldValue("donate-amount1");
    const mainBalance = getTextValue("nav-balance");
    const donatedBanalce = getTextValue("donate-balance1");
    const headerTitle = getTitle("donate-title1");

    if (
      isNaN(donateAmount) ||
      donateAmount <= 0 ||
      donateAmount > mainBalance
    ) {
      alert("Invalid Amount");
      return;
    } else {
      const newdonatedBanalce = donatedBanalce + donateAmount;
      const newMainBalance = mainBalance - donateAmount;
      setInnerText("nav-balance", newMainBalance);
      setInnerText("donate-balance1", newdonatedBanalce);
      const historyContainer = document.getElementById("history-desc");
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="border border-color p-4 rounded-xl">
            <p > ${donateAmount} Tk is Donated for ${headerTitle}</p>
            <p > Date:${times()} </p>
           </div>

        `;
      historyContainer.appendChild(div);
    }
  });

// donate 3

document
  .getElementById("donation-btn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputFieldValue("donate-amount2");
    const mainBalance = getTextValue("nav-balance");
    const donatedBanalce = getTextValue("donate-balance2");
    const headerTitle = getTitle("donate-title2");

    if (
      isNaN(donateAmount) ||
      donateAmount <= 0 ||
      donateAmount > mainBalance
    ) {
      alert("Invalid Amount");
      return;
    } else {
      const newdonatedBanalce = donatedBanalce + donateAmount;
      const newMainBalance = mainBalance - donateAmount;
      setInnerText("nav-balance", newMainBalance);
      setInnerText("donate-balance2", newdonatedBanalce);
      const historyContainer = document.getElementById("history-desc");
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="border border-color p-4 rounded-xl">
            <p > ${donateAmount} Tk is Donated for ${headerTitle}</p>
            <p > Date:${times()} </p>
           </div>

        `;
      historyContainer.appendChild(div);
    }
  });
