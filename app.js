//header-onscroll
const close1 = document.getElementById("info");
const banner1 = document.getElementById("onscroll-Event");
const info = document.getElementById("info");

const table = document.querySelectorAll(".table-option");
const collapse = document.querySelectorAll(
  ".table-option .table-option__title"
);
const filterTable = document.querySelectorAll(
  ".table-option .table-option__filter-table"
);

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    banner1.style.position = "fixed";
    banner1.style.marginTop = 0;
    banner1.style.zIndex = 100;
    close1.style.display = "none";
  } else {
    close1.style.display = "block";
    banner1.style.position = "";
    // banner1.style.position = "absolute";
    // banner1.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
  let x = screen.width;
  console.log(x);
  if (x < 1100) {
    info.style.display = "none";
  }
  // new
  for (let i = 0; i < collapse.length; i++) {
    if (x > 992) {
      // Nếu lớn hơn 992 thì hiện dấu cộng và mở bảng
      collapse[i].classList.add("table-collapse");
      table[i].style.width = "100%";
      if (collapse[i].classList.contains("table-expand")) {
        filterTable[i].classList.remove("collapse");
      }
    } else {
      collapse[i].classList.add("table-expand");
      collapse[i].style.border = "none";
      table[i].style.width = "30%";
      table[i].style.marginLeft = "12px";
      filterTable[i].classList.add("collapse");
      if (collapse[i].classList.contains("table-collapse")) {
        collapse[i].classList.remove("table-collapse");
      }
    }
  }
}
window.onscroll = function () {
  myFunction();
};
// new
for (let i = 0; i < collapse.length; i++) {
  console.log(collapse[i]);
  //   collapse[i].onclick = checkCollapse(i);
  collapse[i].onclick = function () {
    if (filterTable[i].classList.contains("collapse")) {
      filterTable[i].classList.remove("collapse");
      // thêm bớt class
      collapse[i].classList.replace("table-expand", "table-collapse");
      table[i].style.width = "45%";
    } else {
      filterTable[i].classList.add("collapse");
      collapse[i].style.border = "none";
      // thêm bớt class
      collapse[i].classList.replace("table-collapse", "table-expand");
      table[i].style.width = "30%";
    }
  };
}
