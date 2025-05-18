const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
