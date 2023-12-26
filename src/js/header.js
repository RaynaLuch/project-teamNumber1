export function setNumItems() {
    const itemsNum = JSON.parse(localStorage.getItem("basket"))?.length ?? 0;
    const iCount = document.querySelector(".itemsCount");
    iCount.innerText = itemsNum;
    // console.log(itemsNum);
  };
  setNumItems()