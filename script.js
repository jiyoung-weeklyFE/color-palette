const btnImage = document.getElementById("image-btn");

btnImage.addEventListener("change", function () {

  const f = new FileReader();

  f.addEventListener("load", () => {
    uploadedImg = f.result;

    document.getElementById("image-display").style.backgroundImage = `url(${uploadedImg})`;
  });

  f.readAsDataURL(this.files[0]);
})