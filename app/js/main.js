
    'use strict';

     document.addEventListener('DOMContentLoaded', function () {


     // получение данных формы

         const form = document.getElementById('form');
         form.addEventListener('submit', formSend);
     //

     //  функция отправки формы
         
         async function formSend(e) {

             e.preventDefault();

             let error = formValidate(form);

             if (error === 0){

             } else {
                 alert ('Fill required fields!');
             }

         }
     //

     // валидация полей формы

         function formValidate(form) {

             let error = 0;
             let formReq = document.querySelectorAll('._req');

             for (let index = 0; index < formReq.length; index++){
                 const input = formReq[index];


                 formRemoveError(input);

                 if (input.classList.contains('_email')){

                     if(emailTest(input)){
                         formAddError(input);
                         error++;

                     }

                 }
                    else if (input.getAttribute('type') === 'checkbox' && input.checked === false){
                     formAddError(input);
                     error++;

                 }
                    else {

                     if (input.value === ''){
                         formAddError(input);
                             error++;
                     }

                 }
               }

                    return error;

             }

     //

     //    functions toggle class 'error' to a parent and a child

         function formAddError(input) {
             input.parentElement.classList.add('_error');
             // input.parentElement.className += ' _error'; кроссбраузерно

             input.classList.add('_error');
             // input. className += ' _error';
         }

         function formRemoveError(input) {
             input.parentElement.classList.remove('_error');
             input.classList.remove('_error');
         }

     //

     //    regular expression for testing an e-mail

         function emailTest(email) {
             const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
         }

     //

     //    photo preview

         const formImage = document.getElementById('formImage');
         const formPreview = document.getElementById('formPreview');

         formImage.addEventListener('change', () => {

             uploadFile(formImage.files[0]);

         });




     //

     //     uploadFile function

         function  uploadFile(file) {

         //    type file checking
             if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
                 alert ('only ".jpeg", ".png" and ".gif" files are allowed');

                 formImage.value = '';
             }

         //    file size checking
             if (file.size > 2 * 1024 * 1024) {
                 alert ('File size must be less than 2 MB');
             }

         //
         }

     //





     });

