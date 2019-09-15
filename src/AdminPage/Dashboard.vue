<template>
  <div>
    <div class="content">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Main indicators
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm">View All</button>
          </div>
        </div>
        <div class="no-gutters row">
          <div class="col-sm-6 col-md-4 col-xl-4">
            <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-10 bg-warning"></div>
                <i class="lnr-database text-dark opacity-8"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Total Jobs Posted</div>
                <div class="widget-numbers">937K</div>
                <div class="widget-description opacity-8 text-focus">
                  <div class="d-inline text-danger pr-1">
                    <font-awesome-icon icon="angle-up" />
                    <span class="pl-1">4.1%</span>
                  </div>Grow jobs
                </div>
              </div>
            </div>
            <div class="divider m-0 d-md-none d-sm-block"></div>
          </div>
          <div class="col-sm-6 col-md-4 col-xl-4">
            <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-9 bg-danger"></div>
                <i class="lnr-users text-white"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Registered Users</div>
                <div class="widget-numbers">
                  <span>9M</span>
                </div>
                <div class="widget-description opacity-8 text-focus">
                  Grow Rate:
                  <span class="text-info pl-1">
                    <font-awesome-icon icon="angle-up" />
                    <span class="pl-1">1.1%</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="divider m-0 d-md-none d-sm-block"></div>
          </div>
          <div class="col-sm-12 col-md-4 col-xl-4">
            <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-9 bg-success"></div>
                <i class="lnr-apartment text-white"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Companies</div>
                <div class="widget-numbers text-success">
                  <span>132K</span>
                </div>
                <div class="widget-description text-focus">
                  Increased by
                  <span class="text-warning pl-1">
                    <font-awesome-icon icon="angle-up" />
                    <span class="pl-1">7.35%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center d-block p-3 card-footer">
          <button class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg">
            <span class="mr-2 opacity-7">
              <i class="icon icon-anim-pulse ion-ios-analytics-outline"></i>
            </span>
            <span class="mr-1">View Complete Report</span>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <div
            class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success"
          >
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content pt-3 pl-3 pb-1">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="fsize-4">
                        <small class="opacity-5">$</small>
                        <span>874</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="widget-subheading mb-0 opacity-5">sales last month</h6>
              </div>
              <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                <div class="col-md-12">
                  <trend
                    :data="[0, 8, 5, 7, 7, 8, 5, 2, 7, 8]"
                    :gradient="['var(--success)']"
                    stroke-width="3"
                    :height="80"
                    stroke-linecap="round"
                    auto-draw
                    smooth
                  ></trend>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div
            class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary"
          >
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content pt-3 pl-3 pb-1">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="fsize-4">
                        <small class="opacity-5">$</small>
                        <span>1283</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="widget-subheading mb-0 opacity-5">sales Income</h6>
              </div>
              <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                <div class="col-md-12">
                  <trend
                    :data="[2,8,3,6,8,4,3,6,8,4]"
                    :gradient="['var(--primary)']"
                    stroke-width="3"
                    :height="80"
                    stroke-linecap="round"
                    auto-draw
                    smooth
                  ></trend>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div
            class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning"
          >
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content pt-3 pl-3 pb-1">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="fsize-4">
                        <small class="opacity-5">$</small>
                        <span>1286</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="widget-subheading mb-0 opacity-5">last month sales</h6>
              </div>
              <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                <div class="col-md-12">
                  <trend
                    :data="[5,8,3,6,8,5,3,8,5,3,8]"
                    :gradient="['var(--warning)']"
                    stroke-width="3"
                    :height="80"
                    stroke-linecap="round"
                    auto-draw
                    smooth
                  ></trend>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div
            class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger"
          >
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content pt-3 pl-3 pb-1">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="fsize-4">
                        <small class="opacity-5">$</small>
                        <span>564</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="widget-subheading mb-0 opacity-5">total revenue</h6>
              </div>
              <div class="no-gutters widget-chart-wrapper mt-3 mb-3 pl-0 he-auto row">
                <div class="col-md-12">
                  <trend
                    :data="[5,7,8,2,5,7,4,2,4,9]"
                    :gradient="['var(--danger)']"
                    stroke-width="3"
                    :height="80"
                    stroke-linecap="round"
                    auto-draw
                    smooth
                  ></trend>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-row>
        <b-col md="12">
          <b-card title="List of users" class="main-card mb-3">
            <v-data-table
              :headers="userHeadersDataTable"
              :items="userDataItems"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.fullName }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.signUpBy }}</td>
                <td>{{ props.item.lastActivityBy }}</td>
              </template>
              <v-alert
                v-slot:no-results
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ searchItems }}" found no results.</v-alert>
            </v-data-table>
          </b-card>
        </b-col>
        <!-- <b-col md="6">
          <b-card title="Unreleased product lists" class="main-card mb-3">
            <v-data-table
              :headers="productsByUserHeadersDataTable"
              :items="productsByUerDataItems"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.fullName }}</td>
                <td>{{ props.item.product }}</td>
                <td>{{ props.item.wicDate }}</td>
                <td>{{ props.item.status }}</td>
              </template>
              <v-alert
                v-slot:no-results
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ searchItems }}" found no results.</v-alert>
            </v-data-table>
          </b-card>
        </b-col> -->
      </b-row>
      <!-- <b-row>
        <b-col md="6">
          <b-card title="Number of products by category" class="main-card mb-3">
            <categorybarhoriz></categorybarhoriz>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card title="Number of products by manufacturer" class="main-card mb-3">
            <productbarhoriz></productbarhoriz>
          </b-card>
        </b-col>
      </b-row> -->
    </div>
  </div>
</template>

<script>
import categorybarhoriz from "./Chartjs/CategoryBarHoriz";
import productbarhoriz from "./Chartjs/ProductBarHoriz";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faCheck,
  faCalendarAlt,
  faAngleDown,
  faAngleUp,
  faTh
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Trend from "vuetrend";

export default {
  components: {
    categorybarhoriz,
    productbarhoriz,
    "font-awesome-icon": FontAwesomeIcon,
    trend: Trend
  },
  data: () => ({
    userHeadersDataTable: [
      { text: "Full Name", value: "fullName" },
      { text: "Email", value: "email" },
      { text: "Sign Up By", value: "signUpBy" },
      { text: "Last Activity By", value: "lastActivityBy" }
    ],
    userDataItems: [
      {
        fullName: "John Smith",
        email: "john@gmail.com",
        signUpBy: "2018/08/30",
        lastActivityBy: "2019/09/03"
      },
      {
        fullName: "Yegor Yuzin",
        email: "yegor@gmail.com",
        signUpBy: "2018/09/21",
        lastActivityBy: "2019/08/12"
      },
      {
        fullName: "Anton Ivanov",
        email: "anton@gmail.com",
        signUpBy: "2019/01/06",
        lastActivityBy: "2019/06/30"
      },
      {
        fullName: "Andrey Krakov",
        email: "andrey@gmail.com",
        signUpBy: "2019/02/24",
        lastActivityBy: "2019/06/04"
      },
      {
        fullName: "Ivan Ivanovic",
        email: "ivan@gmail.com",
        signUpBy: "2019/06/25",
        lastActivityBy: "2019/08/26"
      }
    ],
    productsByUserHeadersDataTable: [
      { text: "Full Name", value: "fullName" },
      { text: "Product", value: "product" },
      { text: "WIC Date", value: "wicDate" },
      { text: "Status", value: "status" }
    ],
    productsByUerDataItems: [
      {
        fullName: "John Smith",
        product: "product04",
        wicDate: "2019/09/30",
        status: "No stock"
      },
      {
        fullName: "Yegor Yuzin",
        product: "product05",
        wicDate: "2018/09/21",
        status: "No stock"
      },
      {
        fullName: "Anton Ivanov",
        product: "product01",
        wicDate: "2019/10/06",
        status: "In progressing"
      },
      {
        fullName: "Andrey Krakov",
        product: "product03",
        wicDate: "2019/09/24",
        status: "In progressing"
      },
      {
        fullName: "Ivan Ivanovic",
        product: "product21",
        wicDate: "2019/09/25",
        status: "No stock"
      }
    ]
    // }
  }),

  methods: {}
};
</script>
