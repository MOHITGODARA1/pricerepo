let btn=document.querySelector(".submit-form");
const firstname=document.querySelector(".first-name-section");
const firstnameerror=document.querySelector(".no-input-error");
const emailsection=document.querySelector("#email");
const messagesection=document.querySelector("#input");
let namecheck=true;
let emailcheck=true;
let querycheck=true;
let messagecheck=true;
let checkbox=true;
btn.addEventListener("click",()=>{
   
   if (firstname.value.trim() === "") {
      firstnameerror.style.display = "block";
      firstname.style.border="1px solid rgb(243, 27, 27)";
      namecheck=false;
   }
   else {
      firstnameerror.style.display = "none"; 
       firstname.style.border="1px solid rgb(0, 0, 0)";
       namecheck=true;
   }


   if(emailsection.value.trim()===""){
      document.querySelector(".email-input-error").style.display="block";
      emailsection.style.border="1px solid rgb(243, 27, 27)";
      emailcheck=false;
   }else {
      document.querySelector(".email-input-error").style.display = "none"; 
       emailsection.style.border="1px solid rgb(0, 0, 0)";
       emailcheck=true;
   }



   if(messagesection.value.trim()===""){
      document.querySelector(".error-section2").style.display="block";
      messagesection.style.border="1px solid rgb(243, 27, 27)";
      querycheck=false;
   }else {
      document.querySelector(".error-section2").style.display = "none"; 
       messagesection.style.border="1px solid rgb(0, 0, 0)";
      querycheck=true;
   }




   const queryslector=document.querySelector('input[name="firstradio"]:checked');
   if(!queryslector){
      document.querySelector(".error-section").style.display="block";
      messagecheck=false;
   }else{
      document.querySelector(".error-section").style.display="none";
      messagecheck=true;
   }



   const checkboxselector=document.querySelector(".checkbox");
   if(!checkboxselector.checked){
      document.querySelector(".check-erreo").style.display="block";
      checkbox=false;
   }else{
      document.querySelector(".check-erreo").style.display="none";
      checkbox=true;
   }




   if(namecheck && checkbox && messagecheck && querycheck && emailcheck){
      document.querySelector(".popupanimation").style.display="block";
   }
   console.log("clicked");
});