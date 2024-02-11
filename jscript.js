const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
}

function rotateCarousel() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

setInterval(rotateCarousel, 3500);


const chooseFile = document.getElementById("photo");
const imgPreview = document.getElementById("image-preview");

chooseFile.addEventListener("change", function () {
  getImgData();
});
function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" id="phto" />';
    });    
  }
}
  imgPreview.style.display = "none";

var popup=document.getElementById("popup");
var main=document.getElementById("main");
var body=document.getElementById("body");
var btn=document.querySelector(".submit");
  function openPopup(argument) {
generateQrCode();
   
  }
  function closePopup(argument) {
   popup.style.display="none";  
  }

function generateQrCode(argument) {
  if (verifyInputs()==true) {

    var qrImage=document.getElementById('qrImage');
    var code=document.getElementById("code");
    if (code.value.length==5) {
 var value="code agent: "+code.value;
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data="+value;
    btn.innerHTML="chargement...";
    qrImage.onload = function() {
        loadPopup();
        btn.innerHTML="Creer un badge";
    };
    }else{
      alert("Le code agent doit avoir 5 chiffres"); 
    }
   
  } else {
     alert("Veullez remplir tous les champs"); 
    }

}

function loadPopup(argument) {
   
popup.style.display="flex"; 
   popup.style.height=main.offsetHeight+"px";
   window.scrollTo(0,0);
   importValues();
   verifyInputs();
    
}

 var cont=document.getElementById("cardContainer");
 var img=document.getElementById("containing");
 var card=document.getElementById("card");
       var btImage=document.getElementById("btDownload");
       card.style.boxShadow = '';
       btImage.addEventListener("click",()=>{
        domtoimage.toPng(img,{ quality: 1}).then((data)=>{
           var newImg = new Image();
            newImg.src = data;
            var link =document.createElement("a");
            link.download="aaa.png";
            link.href=data;
            link.click();
        });
       });
function printPdf() {
  const image=new Image();
  domtoimage.toPng(img,{ quality: 1}).then((data)=>{
           var newImg = new Image();
            newImg.src = data;
            var link =document.createElement("a");
            link.download="aaa.png";
            link.href=data;
            image.src=data;
 const {jsPDF}= window.jspdf;
  const doc=new jsPDF('p','px','a4');
  const x=(doc.internal.pageSize.width)/6;
        doc.addImage(image,"png",x,15);
        doc.save("sample.pdf");
        });
 
console.log("clicked");
     }
   
   function importValues(argument) {
     var nom=document.getElementById("nom");
     var code=document.getElementById("code");
     var tel=document.getElementById("tel");
     var photo=document.getElementById("phto");
     var bname=document.getElementById("bname");
     var bcode=document.getElementById("bcode");
     var btel=document.getElementById("btel");
     var bphoto=document.getElementById("bphoto");
     bname.innerHTML=nom.value;
     btel.innerHTML="Tel: "+tel.value;
     bcode.innerHTML="Code agent: "+code.value;
     bphoto.src=photo.src;
   }
function verifyInputs(argument) {
 var nom=document.getElementById("nom");
     var code=document.getElementById("code");
     var tel=document.getElementById("tel");
     var photo=document.getElementById("photo");
     if (nom.value=="" || tel.value=="" || photo.files.length==0 || code.value=="") {
      return false;
     }else{
      return true;
     }
}
  closePopup();



