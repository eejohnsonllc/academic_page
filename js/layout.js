$(document).ready(function () {

  let $nvbar = `
    <section class="hero is-small" id='banner'>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">

            <span class="navbar-item">
              <a href='mailto:evanej@live.unc.edu'class="button is-dark is-inverted">
                <span class="icon">
                <i class="fas fa-envelope-square"></i>
                </span>
                <span>Email</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body" style="margin-bottom:10px">
    <div class="container">
      <p class="title">
        Evan Johnson
      </p>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth" id="moving">
      <div class="container">
        <ul id="nav-tabs">
          <li data-tab="1" class="is-active">
            <a>Home</a>
          </li>
          <li data-tab="2">
            <a>Publications</a>
          </li>

          <li data-tab="4">
            <a>Data Visualizations</a>
          </li>
          <li data-tab="5">
            <a>Teaching</a>
          </li>
          <li data-tab="6">
          <a>Consulting</a>
        </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
   
    `


  $($nvbar).insertBefore($('section.content:first-of-type'))


  $('.tabs li').on('click', function () {
    console.log('clciked')

    var tab = $(this).data('tab');
    console.log(tab)

    $('.tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    showactive()
    // $('[data-content]').hide();

    // console.log('section[data-content="' + tab + '"]')

    // $('[data-content='+ tab + ']').show()
  });

  function showactive() {
    $('[data-content]').hide()
    $now_active = $('li.is-active').data('tab')
    $('[data-content=' + $now_active + ']').fadeIn("slow")

  }

  showactive()



  let $footer = `
<footer class="footer is-bold is-small" id="footer"
style="padding: 1.5rem 1.5rem 3rem; margin-top: 3rem";
">
  <div class="has-text-centered">
   
      <p class='has-text-light'>Evan Johnson </p>
      <a href="mailto:evanej@live.unc.edu">evanej@live.unc.edu</a>
   
  </div>
</footer>
`

  $('body').append($footer)



  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});

})



//adding the syllabus
var syllabi;
console.log('hi')
$.ajax({
  url: 'https://evanjohnson-web-data.s3.amazonaws.com/syllabi.csv',
  type: 'GET',
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': 'https://evanjohnson-web-data.s3.amazonaws.com/syllabi.csv'
  },
  // contentType: 'text/csv',
  // dataType: 'text/csv',
  success: function (data) {
    // console.log(data)
    syllabi = $.csv.toObjects(data)
    sorted_syllabi = syllabi.sort((a, b) => parseFloat(a.Order) - parseFloat(b.Order));
    console.log(sorted_syllabi)

    sorted_syllabi.forEach(function (element) {
      console.log(element)

      let temp_course = `                  <div>

      <p class="title is-4"> ${element.ClassName} <button class="button is-small is-rounded"><a
                  href="${element.Syllabus}">Syllabus</a></button>
      </p>
      <p class="subtitle is-6">${element.ClassNum} - ${element.SchoolYear}</span>
  
  
          <p class="block">${element.Descption}
          </p>

      <hr>
  </div>`

      $('#course_list').append(temp_course)


    })




  },
  failure: function (error, response) {
    console.log(error)
  },
  error: function (error, response) {
    console.log(error)
    console.log(response)
  }

})


