var next_click=document.querySelectorAll(".next_button");
var main_form=document.querySelectorAll(".main");
var step_list=document.querySelectorAll(".progress-bar li");
var num=document.querySelector(".step-number");
let formnumber=0;

function formValidation()
{
var ufname = document.registration.fname;
var ulname = document.registration.lname;
var umname = document.registration.mname;
var uid = document.registration.id;
var uyearLevel = document.registration.yearLevel;
var uprogram = document.registration.program;
}function allLetter(ufname){
var letters = /^[A-Za-z]+$/;
if(ufname.value.match(letters))
{
return true;
}
else
{
alert('First name must have alphabet characters only');
ufname.focus();
return false;
}
}
function allLetter(ulname){
var letters = /^[A-Za-z]+$/;
if(ulname.value.match(letters))
{
return true;
}
else
{
alert('Last name must have alphabet characters only');
ulname.focus();
return false;
}
}
function allLetter(umname){
var letters = /^[A-Za-z]+$/;
if(umname.value.match(letters))
{
return true;
}
else
{
alert('Middle name must have alphabet characters only');
umname.focus();
return false;
}
}function uid_validation(uid)
{   
var numbers = /^[0-9]+$/;
if(uid.value.match(numbers))
{
return true;
}
else
{
alert('Student Number code must have numeric characters only');
uid.focus();
return false;
}
}
function uid_validation1(uid,my)
{
if (uid == 0 ||uid >= my || uid < mx)
{
alert("Student Number should not be empty / length be "+my);
passid.focus();
return false;
}
return true;
}
function yearselect(uyearLevel)
{
if(uyearLevel.value == "Default")
{
alert('Select your current year level');
uyearLevel.focus();
return false;
}
else
{
return true;
}
}function programselect(uprogram)
{
if(uprogram.value == "Default")
{
alert('Select your program');
uprogram.focus();
return false;
}
else
{
return true;
}
}
next_click.forEach(function(next_click_form){
    next_click_form.addEventListener('click',function(){
        if(!validateform()){
            return false
        }
       formnumber++;
       updateform();
       progress_forward();
       contentchange();
    });
}); 

var back_click=document.querySelectorAll(".back_button");
back_click.forEach(function(back_click_form){
    back_click_form.addEventListener('click',function(){
       formnumber--;
       updateform();
       progress_backward();
       contentchange();
    });
});

var username=document.querySelector("#user_name");
var shownname=document.querySelector(".shown_name");
 

var submit_click=document.querySelectorAll(".submit_button");
submit_click.forEach(function(submit_click_form){
    submit_click_form.addEventListener('click',function(){
       shownname.innerHTML= username.value;
       formnumber++;
       updateform(); 
    });
});

var heart=document.querySelector(".fa-heart");
heart.addEventListener('click',function(){
   heart.classList.toggle('heart');
});


var share=document.querySelector(".fa-share-alt");
share.addEventListener('click',function(){
   share.classList.toggle('share');
});

 

function updateform(){
    main_form.forEach(function(mainform_number){
        mainform_number.classList.remove('active');
    })
    main_form[formnumber].classList.add('active');
} 
 
function progress_forward(){
    // step_list.forEach(list => {
        
    //     list.classList.remove('active');
         
    // }); 
    
     
    num.innerHTML=formnumber+1;
    step_list[formnumber].classList.add('active');
}  

function progress_backward(){
    var form_num=formnumber+1;
    step_list[form_num].classList.remove('active');
    num.innerHTML = form_num;
} 
 
var step_num_content=document.querySelectorAll(".step-number-content");

 function contentchange(){
     step_num_content.forEach(function(content){
        content.classList.remove('active'); 
        content.classList.add('d-none');
     }); 
     step_num_content[formnumber].classList.add('active');
 } 
 
 
function validateform(){
    validate=true;
    var validate_inputs=document.querySelectorAll(".main.active input");
    validate_inputs.forEach(function(vaildate_input){
        vaildate_input.classList.remove('warning');
        if(vaildate_input.hasAttribute('require')){
            if(vaildate_input.value.length==0){
                validate=false;
                vaildate_input.classList.add('warning');
            }
        }
    });
    return validate;
    
}