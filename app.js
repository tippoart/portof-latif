// CV Download
document.getElementById("downloadCV").addEventListener("click", function (e) {
  e.preventDefault();

  const link = document.createElement("a");
  link.href = "cv/CV LATIF ARDIANSYAH.pdf"; 
  link.download = "CV-Latif-Ardiansyah.pdf"; 
  link.style.display = "none"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// 3D Card Effect
const card = document.querySelector(".card-3d");

if (card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(900px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
}
