<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-content text-center">
        <div class="banner-heading">
          <h2>ONLINE COURSES TO LEARN</h2>
          <p>Own your future learning new skills online</p>
        </div>
        <div class="banner-forms">
          <form class="banner-form" action="search.html">
            <div class="input-group-form form-style form-br col-md-3 col-12">
              <i class="fas fa-map-marker-alt text-warning"></i>
              <input
                class="input-style-form"
                type="text"
                placeholder="Search Location"
                name="going"
              />
            </div>
            <div class="input-group-form form-style col-md-6 col-12">
              <input
                class="input-style-form"
                type="text"
                placeholder="Search School, Online eductional centers, etc"
                name="going"
              />
            </div>
            <button class="btn button-form col-md-3 col-12" type="submit">
              Search Now
            </button>
          </form>
        </div>
      </div>
      <div class="banner-footer">
        <div class="banner-details">
          <div>
            <div class="banner-card d-flex align-items-center">
              <div class="banner-count">
                <h2>10</h2>
              </div>
              <div class="banner-contents">
                <h2>Global Locations</h2>
                <a href="#"
                  >See all Locations
                  <i class="fas fa-caret-right right-nav-white"></i
                ></a>
              </div>
            </div>
          </div>
          <div>
            <div class="banner-card d-flex align-items-center">
              <div class="banner-count">
                <h2>54</h2>
              </div>
              <div class="banner-contents">
                <h2>Programs Courses</h2>
                <a href="#"
                  >See all Courses
                  <i class="fas fa-caret-right right-nav-white"></i
                ></a>
              </div>
            </div>
          </div>
          <div>
            <div class="banner-card d-flex align-items-center">
              <div class="banner-count">
                <h2>7M</h2>
              </div>
              <div class="banner-contents">
                <h2>Students Globally</h2>
                <a href="#"
                  >Contact us <i class="fas fa-caret-right right-nav-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
