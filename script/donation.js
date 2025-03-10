document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputFieldValue("donate-amount");
    const mainBalance = getTextValue("nav-balance");
    const donatedBanalce = getTextValue("donate-balance");
    const headerTitle = getTitle("donate-title");

    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Invalid Amount");
    } else {
      const newdonatedBanalce = donatedBanalce + donateAmount;
      const newMainBalance = mainBalance - donateAmount;
      setInnerText("nav-balance", newMainBalance);
      setInnerText("donate-balance", newdonatedBanalce);
      const historyContainer = document.getElementById("history-desc");
      const div = document.createElement("div");
      div.innerHTML = `
            <p class="border border-color p-4 rounded-xl"> ${donateAmount} Tk is Donated for ${headerTitle}</p>
        `;
      historyContainer.appendChild(div);
    }
  });
