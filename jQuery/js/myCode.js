// // // /// <reference path="../globals/jquery/index.d.ts" />
// // // //jQuery >> js library

// // // //write less do more

// // // // let div = document.getElementById('demo');

// // // // div.style.width = '0px';
// // // // div.style.height = '0px';
// // // // div.style.margin = '0px';
// // // // div.style.padding = '0px';
// // // // div.style.opacity = '0';
// // // // div.style.transition = 'all 30s';

// // // /**
// // //  * //effects
// // //  *
// // //  *  $('#demo').hide(30000);
// // //  *  $("#demo").show(3000);
// // //  *  $("#demo").toggle(3000);
// // //  *
// // //  *
// // //  * $("#demo").slideUp(3000);
// // //  *  $("#demo").slideDown(3000);
// // //  * slideToggle(3000);
// // //  *
// // //  * fadeIn(3000);
// // //  *  $("#demo").fadeOut(3000);
// // //  *   $("#demo").fadeToggle(3000);
// // //  * fadeTo(3000,.5);
// // //  *
// // //  * // $('#demo').hide(3000).slideDown(4000).slideUp(5000); //chaining
// // //  *
// // //  * //callbabcks
// // //  *
// // //  *
// // //     // $('#demo1').slideUp(3000 , function(){

// // //     //     $('#demo2').slideUp(3000 , function(){

// // //     //         $('#demo3').slideUp(3000);

// // //     //     });

// // //     // });
// // //  *
// // //  *
// // //  *
// // //  *
// // //  *
// // //  */

// // // let div = $("#demo");

// // // $(".btn").click(function (e) {

// // // //   $("#demo1").animate(
// // // //     {
// // // //       width: "+=100px",
// // // //       height: "500px",
// // // //       borderRadius: "50%",

// // // //     },
// // // //     5000
// // // //   );

// // // // $('#demo1').animate({width:'500px'},2000);

// // // // $('#demo1').animate({height:'500px'},2000);
// // // // $('#demo1').animate({borderRadius:'50%'},2000)

// // // // $('#demo1').delay(2000).animate({width:'500px'},2000).animate({height:'500px'},2000).animate({borderRadius:'50%'},2000);

// // // // $('#demo1').animate({width:"500px"},3000 , function(){
// // // //     $('#demo2').animate({width:"600px"},3000 , function(){
// // // //         $('#demo3').animate({width:"700px"},3000)
// // // //     })
// // // // })

// // // });

// // // let h1s = $("h1");

// // $('section').animate({width:'100%',},2000)

// // $('section').animate({height:'100%',},2000 , function(){

// //     $('h1').fadeIn(2000 , function(){

// //         $('.item').slideDown(2000)
// //     })

// // })





// /*
// //setters & getters html (dom){

//     //$('h1').html();
//     h1.text();
//     $('#inp').val()
//     .attr('src')
//     .css()

// ------------------------------
// addClass(['rounded-circle','bg-dark']);
// removeClass('img-fluid');
// toggleClass('rounded-circle');

//---------------------
//width , height

// let x = $('.test').height(); //height
// let x = $('.test').innerHeight(); //height + padding
// let x = $('.test').outerHeight(); //height + padding + border

//

// let h1 = $('h1');

// $('.btn').click(function(){

//  //let x =    $('h1').html(); //getter

//  //$('h1').html('merit magdy')
//  //$('h1').html(`${x}<span>hello</span>`); //setter
// //  console.log(x)
// //  let x = h1.text(); //get

// //  //h1.text('ay7aga');

// //  h1.text('<span>hello</span>');

// // let x = $('#inp').val();//getter

// // $('#inp').val('ahmed'); //setter

// // let x = $('a').attr('href'); //getter
// // //$('img').attr('src','images/two.png');
// // $('img').attr('class','rounded-circle');

// // let x  = $('#demo1').css('animationName');//get

// //$('#demo1').css('borderRadius','50%')

// $('#demo1').css({
//     borderRadius:'50%',
//     backgroundColor:'teal',
//     transition:'all 1s',
//     backgroundImage:'url(images/two.png)'

// })

// console.log(x);

// })

// ui develio developer html , css , basics , boostrap

//freelancing  upwork , freelancers , guru , خمسات

// $('.small-img').click(function(){

//    let smallSrc =  $(this).attr('src') ; //get return
//    $('.main-img').attr('src',smallSrc) ; //get return

// })

//let x = $('.test').css('height');

// let x = $('.test').height(); //height
// let x = $('.test').innerHeight(); //height + padding
// let x = $('.test').outerHeight(); //height + padding + border

// // let x = $('.parent').height(); //

// console.log(x);

// $(".btn").click(function () {
//   //  $('.demo').append("hello");
//   //  $('.demo').append("<h1>hello</h1>");
//   //$('.demo').prepend("<h1>hello</h1>");
//   // $('.demo').after("<h1>hello</h1>");
//   // $('.demo').before("<h1>hello</h1>");
//   //$('.demo').empty();
//   // $('.demo').remove();
//   // $('.demo').append($('#demo2'));
// });


//traversing

/**
 * $('span').parents()
 * $('span').parents('div')
 * $('span').parentsUntil('body').
 * 
 * 
 * 
 * $('section').children()
 * $('section').children('h3')
 * $('section').find('*')
 * $('section').find('span')
 * 
 * 
 * 
 * 
 * $('#test').siblings()
 * $('#test').siblings('div')
 * $('#test').next()
 * $('#test').nextAll()
 * $('#test').nextUntil('#asmaa')
 * 
 * 
 * 
 * $('span').eq('2')
 * $('span').last()
 * $('span').first()
 * $('span').not('#asmaa')
 * $('span').filter('.text-canter')
 * 
 * 
 */

$('span').filter('.text-canter').css({ border: '3px solid black', borderRadius: '30px' })