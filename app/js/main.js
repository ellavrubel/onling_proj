
    'use strict';

     document.addEventListener('DOMContentLoaded', function () {


     // получение данных формы

         const form = document.getElementById('form');
         form.addEventListener('submit', formSend);
         
         async function formSend(e) {

             e.preventDefault();

             let error = formValidate(form);

         }
     //

     // валидация полей формы

         function formValidate(form) {

             let error = 0;
             let formReq = document.querySelectorAll('._req');

             for (let index = 0; index < formReq.length; index++){
                 const input = formReq[index];
             }

         }
     //

     //    functions toggle class 'error' to a parent and a child

         function formAddError(input) {
             input.parentElement.classList.add('_error');
             input.classList.add('_error');
         }

         function formRemoveError(input) {
             input.parentElement.classList.remove('_error');
             input.classList.remove('_error');
         }

     //


     });

