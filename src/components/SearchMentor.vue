<template>
  <div>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8 col-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Search
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">
              2245 matches found for : Mentors In Florida
            </h2>
          </div>
          <div class="col-md-4 col-12 d-md-block d-none">
            <div class="sort-by">
              <span class="sort-title">Sort by</span>
              <span class="sortby-fliter">
                <select class="select">
                  <option>Select</option>
                  <option class="sorting">Rating</option>
                  <option class="sorting">Popular</option>
                  <option class="sorting">Latest</option>
                  <option class="sorting">Free</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <button
              id="filter_btn"
              type="button"
              class="btn btn-secondary filter-button"
            >
              <i class="fa fa-filter"></i> Filter
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
            <!-- Search Filter -->
            <div
              id="filter-side"
              class="card search-filter filter-menu-wrapper"
            >
              <div class="card-header">
                <h4 class="card-title mb-0">Search Filter</h4>
              </div>
              <div class="card-body">
                <div class="filter-widget">
                  <div class="cal-icon">
                    <input
                      type="text"
                      class="form-control datetimepicker"
                      placeholder="Select Date"
                    />
                  </div>
                </div>
                <div class="filter-widget">
                  <h4>Grade</h4>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="1-4" checked />
                      <span class="checkmark"></span> Grade 1-4
                    </label>
                  </div>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="5-9" />
                      <span class="checkmark"></span> Grade 5-9
                    </label>
                  </div>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="10" checked />
                      <span class="checkmark"></span> Grade 10
                    </label>
                  </div>
                </div>
                <div class="filter-widget">
                  <h4>Subject</h4>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="10" checked />
                      <span class="checkmark"></span> Mathematics
                    </label>
                  </div>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="select_specialist" checked />
                      <span class="checkmark"></span> English
                    </label>
                  </div>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span class="checkmark"></span> Physics
                    </label>
                  </div>
                </div>
                <div class="filter-widget">
                  <h4>Type</h4>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="10" checked />
                      <span class="checkmark"></span> Online
                    </label>
                  </div>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="select_specialist" checked />
                      <span class="checkmark"></span> Offline
                    </label>
                  </div>
                </div>
                <div class="filter-widget">
                  <div>
                    <h4>Blog Category</h4>
                    <select class="form-control">
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                    </select>
                  </div>
                </div>
                <div class="filter-widget">
                  <div>
                    <h4>Language Spoken</h4>
                    <select class="form-control">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>Romanian</option>
                    </select>
                  </div>
                </div>
                <div class="filter-widget">
                  <h4>Gender</h4>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="1-4" checked />
                      <span class="checkmark"></span> Male
                    </label>
                  </div>
                  <div>
                    <label class="custom_check">
                      <input type="checkbox" name="5-9" />
                      <span class="checkmark"></span> Female
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    style="width: 48%"
                    type="button"
                    class="btn btn-secondary mx-auto"
                  >
                    Search
                  </button>
                  <button
                    style="width: 48%; float: right"
                    type="button"
                    class="btn btn-light"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <!-- /Search Filter -->
          </div>

          <div class="col-md-12 col-lg-8 col-xl-9">
            <!-- Mentor Widget -->
            <div class="row">
              <div
                class="mendor-box col-md-6 col-lg-6 col-xl-3"
                v-for="(e, index) in teacherList"
                :key="index"
              >
                <div class="mendor-img">
                  <a href="profile.html">
                    <img
                      class="img-fluid"
                      alt=""
                      src="assets/img/mendor/mendor-01.jpg"
                    />
                  </a>
                  <div class="country">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ e.location.location }}
                  </div>
                </div>
                <div class="mendor-content">
                  <h3 class="title">
                    <a href="profile.html">{{ e.title }}</a>
                  </h3>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="my-1">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.84375 0C2.95149 0 3.05483 0.0428012 3.13101 0.118988C3.2072 0.195175 3.25 0.298506 3.25 0.40625V0.8125H9.75V0.40625C9.75 0.298506 9.7928 0.195175 9.86899 0.118988C9.94517 0.0428012 10.0485 0 10.1562 0C10.264 0 10.3673 0.0428012 10.4435 0.118988C10.5197 0.195175 10.5625 0.298506 10.5625 0.40625V0.8125H11.375C11.806 0.8125 12.2193 0.983705 12.524 1.28845C12.8288 1.5932 13 2.00652 13 2.4375V11.375C13 11.806 12.8288 12.2193 12.524 12.524C12.2193 12.8288 11.806 13 11.375 13H1.625C1.19402 13 0.780698 12.8288 0.475951 12.524C0.171205 12.2193 0 11.806 0 11.375V2.4375C0 2.00652 0.171205 1.5932 0.475951 1.28845C0.780698 0.983705 1.19402 0.8125 1.625 0.8125H2.4375V0.40625C2.4375 0.298506 2.4803 0.195175 2.55649 0.118988C2.63267 0.0428012 2.73601 0 2.84375 0V0ZM0.8125 3.25V11.375C0.8125 11.5905 0.898102 11.7972 1.05048 11.9495C1.20285 12.1019 1.40951 12.1875 1.625 12.1875H11.375C11.5905 12.1875 11.7972 12.1019 11.9495 11.9495C12.1019 11.7972 12.1875 11.5905 12.1875 11.375V3.25H0.8125Z"
                        fill="#585A5D"
                      />
                    </svg>

                    <span class="ml-1">
                      Available
                      <span class="text-green">Next Tuesday</span></span
                    >
                  </p>
                  <p class="my-1">
                    <svg
                      style="margin-left: -2px; margin-right: 2px"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10.7812C7.4184 10.7812 7.33822 10.7599 7.26738 10.7194L3.16406 8.37417C3.12841 8.35359 3.08796 8.34276 3.04679 8.34277C3.00562 8.34279 2.96518 8.35365 2.92954 8.37426C2.8939 8.39487 2.86432 8.42451 2.84377 8.46019C2.82322 8.49586 2.81244 8.53632 2.8125 8.57749V10.7812C2.81243 10.8649 2.83475 10.947 2.87715 11.0191C2.91955 11.0913 2.98048 11.1507 3.05361 11.1914L7.27236 13.5351C7.342 13.5738 7.42034 13.5941 7.5 13.5941C7.57966 13.5941 7.658 13.5738 7.72763 13.5351L11.9464 11.1914C12.0195 11.1507 12.0804 11.0913 12.1228 11.0191C12.1652 10.947 12.1876 10.8649 12.1875 10.7812V8.57749C12.1876 8.53632 12.1768 8.49586 12.1562 8.46019C12.1357 8.42451 12.1061 8.39487 12.0705 8.37426C12.0348 8.35365 11.9944 8.34279 11.9532 8.34277C11.912 8.34276 11.8716 8.35359 11.8359 8.37417L7.73261 10.7194C7.66178 10.7599 7.5816 10.7812 7.5 10.7812Z"
                        fill="#585A5D"
                      />
                      <path
                        d="M14.529 5.58103V5.5778C14.5214 5.5035 14.4961 5.43209 14.4554 5.36951C14.4146 5.30693 14.3595 5.255 14.2946 5.21804L7.73208 1.46804C7.66124 1.42755 7.58106 1.40625 7.49946 1.40625C7.41787 1.40625 7.33768 1.42755 7.26685 1.46804L0.70435 5.21804C0.632627 5.25904 0.573017 5.31828 0.531557 5.38974C0.490098 5.4612 0.468262 5.54235 0.468262 5.62497C0.468262 5.70759 0.490098 5.78874 0.531557 5.8602C0.573017 5.93166 0.632627 5.9909 0.70435 6.0319L7.26685 9.7819C7.33768 9.82239 7.41787 9.84369 7.49946 9.84369C7.58106 9.84369 7.66124 9.82239 7.73208 9.7819L13.5059 6.48278C13.5148 6.47763 13.525 6.47492 13.5353 6.47493C13.5456 6.47494 13.5557 6.47767 13.5646 6.48284C13.5735 6.48801 13.5809 6.49544 13.586 6.50438C13.5912 6.51332 13.5938 6.52345 13.5938 6.53376V10.768C13.5938 11.0203 13.7877 11.2368 14.04 11.2494C14.1034 11.2524 14.1667 11.2426 14.2262 11.2204C14.2856 11.1983 14.34 11.1643 14.3859 11.1205C14.4318 11.0768 14.4684 11.0241 14.4934 10.9658C14.5184 10.9075 14.5313 10.8447 14.5313 10.7812V5.62497C14.5313 5.61029 14.5305 5.59562 14.529 5.58103V5.58103Z"
                        fill="#585A5D"
                      />
                    </svg>

                    <span class="ml-1">{{ getSUbjecys(e.subjects) }}</span>
                  </p>
                  <p class="my-1">
                    <svg
                      style="margin-right: 2px"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 0H1.25C0.560625 0 0 0.547385 0 1.22048V7.93312C0 8.60621 0.560625 9.1536 1.25 9.1536H3.75L2.625 10.6182L3.625 11.3505L5.3125 9.1536H7.1875L8.875 11.3505L9.875 10.6182L8.75 9.1536H11.25C11.9394 9.1536 12.5 8.60621 12.5 7.93312V1.22048C12.5 0.547385 11.9394 0 11.25 0ZM1.25 7.93312V1.22048H11.25L11.2506 7.93312H1.25Z"
                        fill="#585858"
                      />
                    </svg>
                    <span class="ml-1">{{ getGrades(e.grades) }}</span>
                  </p>
                  <div class="price-list">
                    <div
                      style="
                        width: 100%;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 33px;
                        /* identical to box height */
                        color: #585a5d;
                      "
                    >
                      {{ e.hourly_rate }}
                      <span style="font-weight: 300; font-size: 12px"
                        >KWD/ hr</span
                      >
                      <button
                        style="float: right"
                        type="button"
                        class="btn btn-outline-secondary mx-auto"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Mentor Widget -->

            <!-- /Mentor Widget -->

            <div class="load-more text-center">
              <a class="btn btn-primary btn-sm" href="javascript:void(0);"
                >Load More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchMentor",
  components: {},
  data() {
    return {
      teacherList: {},
    };
  },
  created() {
    this.getTeachers();
  },
  methods: {
    getTeachers() {
      axios
        .get("https://teacherapp-api.herokuapp.com/api/teacher-list/")
        .then((data) => {
          this.teacherList = data.data;
          console.log(this.teacherList);
        });
    },
    getSUbjecys(vals) {
      let str = ", ";
      vals.forEach((e) => {
        str = str + e.subject;
      });
      return str.startsWith(",") ? str.replace(",", " ") : str;
    },
    getGrades(vals) {
      vals.forEach((e) => {
        e.grade = "Grade " + e.grade;
      });
      return "grade;";
    },
  },
};
</script>

<style>
</style>
