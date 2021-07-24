
//çalışanlar nesne dizisi
let employees = [ 
           
    { name: "ALİ", image: "images/male.jpg",  nameOfDepartment: "Front End Developer", cv: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, inventore?" },
    { name: "AYŞE", image: "images/female.jpg",  nameOfDepartment: "Full Stack Developer", cv: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat quas ipsum." },
    { name: "MEHMET", image: "images/male2.png",  nameOfDepartment: "Back End Developer", cv: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eos possimus autem dolorem placeat? Mollitia!" },
    { name: "FUNDA", image: "images/female.jpg",  nameOfDepartment: "Game Developer", cv: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }

     
 ];




 const cardTitle = document.querySelector(".card-title");
 const cardText = document.querySelector(".card-text");
 const cardImage = document.querySelector(".card-body img");
 const name_Of_Department = document.querySelector(".nameOfDepartment");





 const btns = document.querySelectorAll("button");
 btns.forEach(function(btn){
     btn.addEventListener("click", changeCard = e => {
         
        if(e.target.id == "btn1"){
            cardTitle.textContent = employees[0].name;
            cardText.innerHTML = employees[0].cv;
            cardImage.setAttribute( "src", employees[0].image)
            name_Of_Department.textContent = employees[0].nameOfDepartment;

            myImage.setAttribute( "src", employees[0].image)

        }

        else if(e.target.id == "btn2"){
          cardTitle.textContent = employees[1].name;
          cardText.innerHTML = employees[1].cv;
          cardImage.setAttribute( "src", employees[1].image)
          name_Of_Department.textContent = employees[1].nameOfDepartment;

          myImage.setAttribute( "src", employees[1].image)

        }

        else if(e.target.id == "btn3"){
            cardTitle.textContent = employees[2].name;
            cardText.innerHTML = employees[2].cv;
            cardImage.setAttribute( "src", employees[2].image)
            name_Of_Department.textContent = employees[2].nameOfDepartment;  

            myImage.setAttribute( "src", employees[2].image)

       }
        else{
            cardTitle.textContent = employees[3].name;
            cardText.innerHTML = employees[3].cv;
            cardImage.setAttribute( "src", employees[3].image)
            name_Of_Department.textContent = employees[3].nameOfDepartment;  

            myImage.setAttribute( "src", employees[3].image)

        }

     
     
     });
 })

// let personelImages = [ "images/male.jpg",  "images/female.jpg"]

//  cardImage.addEventListener("click", show = x => {




//    });

//HTML DEKİ imagePopup'ı aldım
let imagePopup = document.querySelector(".imagePopup");


//BİR TANE imagesBorder class adlı bir div yarattım
let imagesBorder = document.createElement("div");//bir div yarttım v eimagesBorde değişkenine atadım
imagesBorder.className="imagesBorder";// ve yaratığım dive  className verdim

//  classnamei cancel olan bir div yarattım
let cancelBtn = document.createElement("div");
cancelBtn.className="cancel";
cancelBtn.textContent = "X";

imagesBorder.appendChild(cancelBtn);


let myImage = document.createElement("img");//btn bölümünde  if else içerisinde ayarlandı
myImage.src = "images/male.jpg";
myImage.style.width = "100%";


imagesBorder.appendChild(myImage);//foto

//imagePopup içerisine yarattığım divi atadım
imagePopup.appendChild(imagesBorder);//imagePopup içerisne yarattığım  images border tagını atadım chil cocuğu olarak

// console.log(imagePopup)
// console.log(employees[1].image);//src




//  RESİM AÇMA KAPAMA YERİ

cardImage.addEventListener("click", show = () => {

    imagePopup.classList.add("imagePopupShow");
    
    
    
})

cancelBtn.addEventListener("click", close = () => {
    imagePopup.classList.remove("imagePopupShow");
} );

