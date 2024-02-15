const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
 var nom=document.getElementById("nom");
     var code=document.getElementById("code");
     var tel=document.getElementById("tel");
     var photo=document.getElementById("photo");
var snom=document.getElementById("snom");
     var scode=document.getElementById("scode");
     var stel=document.getElementById("sphone");
     var sphoto=document.getElementById("sphoto");
     var source="";
let currentIndex = 0;
let currentIndex1 = 0;

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


const imgPreview = document.getElementById("image-preview");

photo.addEventListener("change", function () {
  getImgData();
});
function getImgData() {
  const files = photo.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" id="phto" />';
      source=this.result;
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
var loader=document.getElementById('loader');
 loader.style.display="none";
function generateQrCode(argument) {
  if (verifyInputs()==true) {

    var qrImage=document.getElementById('qrImage');
    if (code.value.length==5) {
      scode.innerHTML="";
      scode.style.display="none";
 var value="code agent: "+code.value;
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data="+value;
    loader.style.display="block";
    btn.innerHTML="chargement...";

    qrImage.onload = function() {
        loadPopup();
        btn.innerHTML="Creer un badge";
        loader.style.display="none";

         displayError(nom,snom,"La saisie d'un nom est onligatoire",false);
    displayError(code,scode,"La saisie d'un code agent est obligatoire",false);
    displayError(tel,stel,"La saisie d'un numero de telephone est obligatoire",false);
    displayError(photo,sphoto,"Vous devez choisir un photo",true);
    };
    }else{
      scode.innerHTML="Le code agent doit avoir 5 chiffres"; 
       scode.style.display="block";
    }
   
  } else {
    displayError(nom,snom,"La saisie d'un nom est onligatoire",false);
    displayError(code,scode,"La saisie d'un code agent est obligatoire",false);
    displayError(tel,stel,"La saisie d'un numero de telephone est obligatoire",false);
    displayError(photo,sphoto,"Vous devez choisir un photo",true);
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
 card.style.fontFeatureSettings = '"liga" 0';
       var btImage=document.getElementById("btDownload");
       card.style.boxShadow = '';
       btImage.addEventListener("click",()=>{
        domtoimage.toPng(img,{ quality: 1}).then((data)=>{
           var newImg = new Image();
            newImg.src = data;
            var link =document.createElement("a");
            link.download=code.value+".png";
            link.href=data;
            link.click();
        });

});
function printPdf() {
        const { jsPDF } = window.jspdf;

  const image=new Image();
domtoimage.toPng(card,{ quality: 1}).then((data)=>{
           var newImg = new Image();
            newImg.src = data;
            var link =document.createElement("a");
            image.src=data;
             const doc = new jsPDF('p', 'px','a6');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const widthRatio = pageWidth / image.width;
    const heightRatio = pageHeight / image.height;
    const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

    const canvasWidth = image.width * ratio;
    const canvasHeight = image.height * ratio;

    doc.addImage(image, 'PNG', 25, 15, image.width, image.height);
        doc.save(code.value+".pdf");
        });
   
    
     }
   
   function importValues(argument) {

     var bname=document.getElementById("bname");
     var bcode=document.getElementById("bcode");
     var btel=document.getElementById("btel");
     var bphoto=document.getElementById("bphoto");
     bname.innerHTML=nom.value;
     btel.innerHTML="Tel: "+tel.value;
     bcode.innerHTML="Code agent: "+code.value;
     bphoto.src=source;
   }
function verifyInputs(argument) {
     if (nom.value=="" || tel.value=="" || photo.files.length==0 || code.value=="") {
      return false;
     }else{
      return true;
     }
}
function displayError(compnt,elm,text,isFile) {
  if (isFile==false) {
     if (compnt.value==""){
      elm.innerHTML=text;
      elm.style.display="block";
 }else{
  elm.innerHTML="";
  elm.style.display="none";
 }

}else{
    if (compnt.files.length=="") {
      elm.innerHTML=text;
      elm.style.display="block";
 }else{
  elm.innerHTML="";
  elm.style.display="none";
 }
}

}

function openPreview(argument) {
  var popPreview=document.getElementById("popup1");
  var image=document.getElementById("imgPopPreview");
   window.scrollTo(0,0);
   domtoimage.toPng(img,{ quality: 1}).then((data)=>{
           var newImg = new Image();
            image.src = data;
            image.onload=function(){
popPreview.style.display="block"; 
   popPreview.style.height=main.offsetHeight+"px";
            }
        });
}

function closePreview(argument) {
  var popPreview=document.getElementById("popup1");
  popPreview.style.display="none";
}

function redirect(argument) {
  window.open("https://play.google.com/store/apps/details?id=bi.hogi.efeza");
}

  closePopup();
