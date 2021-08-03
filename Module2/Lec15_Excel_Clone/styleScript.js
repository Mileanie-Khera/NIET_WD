let allAlignmentOptions = document.querySelectorAll(".align-cell-content span");
let allColorOptions = document.querySelectorAll(".cell-color-options span");
let allStyleOptions = document.querySelectorAll(".bold-italics-underline span")
let menuBarOptions = document.querySelectorAll(".menu-bar-section div");

let fileOptions = menuBarOptions[0];

let body = document.querySelector("body");

let leftAlign = allAlignmentOptions[0];
let centerAlign = allAlignmentOptions[1];
let rightAlign = allAlignmentOptions[2];

let bgColorPicker = allColorOptions[0];
let fontColorPicker = allColorOptions[1];

let boldOption = allStyleOptions[0];
let italicsOption = allStyleOptions[1];
let underlinedOption = allStyleOptions[2];

leftAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "left";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "left";
  }
});

rightAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "right";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "right";
  }
});

centerAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "center";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "center";
  }
});

bgColorPicker.addEventListener("click", function () {
  let colorPickerElement = document.createElement("input");
  colorPickerElement.type = "color";
  body.append(colorPickerElement);
  colorPickerElement.click();

  colorPickerElement.addEventListener("input", function (e) {
    console.log(e.currentTarget.value);
    if (lastCell) {
      lastCell.style.backgroundColor = e.currentTarget.value;
      let address = lastCell.getAttribute("data-address");
      dataObj[address].bgColor = e.currentTarget.value;
    }
  });
});

fontColorPicker.addEventListener("click", function () {
  let colorPickerElement = document.createElement("input");
  colorPickerElement.type = "color";
  body.append(colorPickerElement);
  colorPickerElement.click();

  colorPickerElement.addEventListener("input", function (e) {
    console.log(e.currentTarget.value);
    if (lastCell) {
      lastCell.style.color = e.currentTarget.value;
      let address = lastCell.getAttribute("data-address");
      dataObj[address].color = e.currentTarget.value;
    }
  });
});

fileOptions.addEventListener("click", function () {
  let isOpen = fileOptions.getAttribute("data-open");
  if (isOpen == "true") {
    fileOptions.setAttribute("data-open", "false");
    document.querySelector(".file-drop-down").remove();
  } else {
    fileOptions.setAttribute("data-open", "true");

    let dropDown = document.createElement("div");
    dropDown.innerHTML = "<p>Save</p><p>Clear</p>";

    let allOptions = dropDown.querySelectorAll("p");

    allOptions[0].addEventListener("click", function () {
      localStorage.setItem("sheet", JSON.stringify(dataObj));
    });

    allOptions[1].addEventListener("click", function () {
      localStorage.setItem("sheet", "");
    });

    dropDown.classList.add("file-drop-down");
    fileOptions.append(dropDown);
  }
});
boldOption.addEventListener("click",function () {
  if(lastCell){
    if (lastCell.classList.contains("bold-selected")) {
      lastCell.classList.remove("bold-selected");
    } else {
      lastCell.classList.add("bold-selected");      
    }
  }
})
italicsOption.addEventListener("click",function () {
  if(lastCell){
    if (lastCell.classList.contains("italics-selected")) {
      lastCell.classList.remove("italics-selected");
    } else {
      lastCell.classList.add("italics-selected");      
    }
  }
})
underlinedOption.addEventListener("click",function () {
  if(lastCell){
    if (lastCell.classList.contains("underlined-selected")) {
      lastCell.classList.remove("underlined-selected");
    } else {
      lastCell.classList.add("underlined-selected");      
    }
  }
})