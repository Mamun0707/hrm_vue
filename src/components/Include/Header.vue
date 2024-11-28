<template>

<header class="templateux-navbar" role="banner">

<div class="container"  data-aos="fade-down">
  <div class="row">

    <div class="col-3 templateux-logo">
      <a href="index.html" class="animsition-link">Human Resources</a>
    </div>
    <nav class="col-9 site-nav">
      <button class="d-block d-md-none hamburger hamburger--spin templateux-toggle templateux-toggle-light ml-auto templateux-toggle-menu" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button> <!-- .templateux-toggle -->

      <ul class="sf-menu templateux-menu d-none d-md-block">
        <li class="active">
          <a href="index.html" class="animsition-link">Home</a>
        </li>
        <li><a href="about.html" class="animsition-link">About</a></li>
        <li>
          <a href="/Career" class="animsition-link">Career</a>
        </li>
        <li><a href="/Blog" class="animsition-link">Blog</a></li>
        <li><a href="contact.html" class="animsition-link">Contact</a></li>
      </ul> <!-- .templateux-menu -->

    </nav> <!-- .site-nav -->
    

  </div> <!-- .row -->
</div> <!-- .container -->
</header> <!-- .templateux-navba -->


</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.uid="";
      sessionStorage.setItem('uid', '');
      window.location.reload();
    }
  }
}
</script>
