export function setNumItems() {
    if (localStorage.length !== 0) {
    const itemsNum = JSON.parse(localStorage.getItem("basket")).length;
    const iCount = document.getElementById("itemsCount");
    iCount.innerText = itemsNum;
    console.log(itemsNum);
  }
  };
  setNumItems()