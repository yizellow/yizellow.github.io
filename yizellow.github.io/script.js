function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const content = document.querySelector(".content");

  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
    content.style.marginLeft = "250px";
  } else {
    sidebar.style.left = "-250px";
    content.style.marginLeft = "0";
  }
}
