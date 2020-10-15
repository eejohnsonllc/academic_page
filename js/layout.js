$(document).ready(function () {

  let $nvbar = `
    <section class="hero is-dark is-small id='banner">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
   
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
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

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Evan Johnson
      </p>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li data-tab="1" class="is-active">
            <a>Home</a>
          </li>
          <li data-tab="2">
            <a>Publications</a>
          </li>
          <li data-tab="3">
            <a>Working Papers</a>
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
    $('[data-content=' + $now_active + ']').fadeIn( "slow" )

  }
  showactive()





  let $footer = `
<footer class="footer has-background-dark is-bold is-small" 
style="padding: 1.5rem 1.5rem 3rem; margin-top: 3rem;
">
  <div class="has-text-centered">
   
      <p class='has-text-light'>Evan Johnson </p>
      <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">evanej@live.unc.edu</a>
   
  </div>
</footer>
`

  $('body').append($footer)

})