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
        <li><a href="#" class="nav-link dropdown-toggle d-flex align-items-center" data-toggle="dropdown">
                {{ uid ? userName.name : 'User Account' }}</a>
            
        
              <div class="dropdown-menu">
                <!-- Show Login/Signup if user is not logged in -->
                <a v-if="!uid" href="/login" class="dropdown-item">Login</a>
                <a v-if="!uid" href="/Register" class="dropdown-item">Register</a>

                <!-- Show Logout and user-specific links if user is logged in -->
                <button v-if="uid" class="dropdown-item" @click="logout">Logout</button>
                <a v-if="uid" href="/MyProfile" class="dropdown-item">My Profile</a>
                
              </div>
          </li>
            
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
      uid: sessionStorage.getItem('uid'),
      userName: JSON.parse(sessionStorage.getItem('userName'))
    };
  },
 

  methods: {
    logout() {
      this.uid = "";  // Clear uid
      this.userName = null;  // Clear userName
      sessionStorage.removeItem('uid'); // Clear sessionStorage
      sessionStorage.removeItem('userName'); // Clear sessionStorage
      this.$router.push('/'); // Redirect to home or login page
    }
  }
};
</script>