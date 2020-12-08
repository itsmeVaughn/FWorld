$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    };
    date_input.datepicker(options);
})

$(document).ready(function () {
    var stepper = new Stepper($('.bs-stepper')[0])
  })

  var stepper1Node = document.querySelector('#stepper1')
  var stepper1 = new Stepper(document.querySelector('#stepper1'))

  stepper1Node.addEventListener('show.bs-stepper', function (event) {
    console.warn('show.bs-stepper', event)
  })
  stepper1Node.addEventListener('shown.bs-stepper', function (event) {
    console.warn('shown.bs-stepper', event)
  })

  var stepper2 = new Stepper(document.querySelector('#stepper2'), {
    linear: false,
    animation: true
  })
  var stepper3 = new Stepper(document.querySelector('#stepper3'), {
    animation: true
  })
  var stepper4 = new Stepper(document.querySelector('#stepper4'))