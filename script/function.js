function getInputFieldValue(id) {
  const amount = document.getElementById(id).value;
  const convAmount = parseFloat(amount);
  return convAmount;
}
function getTextValue(id) {
  const mainBalance = document.getElementById(id).innerText;
  const convMainBalance = parseFloat(mainBalance);
  return convMainBalance;
}
function getTitle(id) {
  const headerTitle = document.getElementById(id).innerText;
  return headerTitle;
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function createAndSetElement()
{
    
}