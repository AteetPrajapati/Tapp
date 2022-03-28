<template>
  <section class="section section-search">
    <div class="container">
      <div class="banner-wrapper m-auto text-center">
        <div class="banner-header">
          <h1>Search Teacher in <span>Mentoring</span> Appointment</h1>
          <p>
            Discover the best Mentors & institutions the city nearest to you.
          </p>
        </div>

        <!-- Search -->
        <div class="search-box">
          <form action="search.html">
            <div class="form-search">
              <div class="form-inner">
                <div class="form-group search-location">
                  <i class="material-icons">my_location</i>
                  <select class="form-control select">
                    <option>Location</option>
                    <option>Japan</option>
                    <option>France</option>
                  </select>
                </div>
                <div class="form-group search-info">
                  <i class="material-icons">location_city</i>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search School, Online educational centers, etc"
                  />
                </div>
                <button type="submit" class="btn btn-secondary search-btn mt-0">
                  Search <i class="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- /Search -->
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
