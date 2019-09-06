<template>
  <div>
    <div class="content">
        <b-row>
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
        </b-row>
        <b-row>
          <b-col md="6">
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
                <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                  Your search for "{{ searchItems }}" found no results.
                </v-alert>
              </v-data-table>
            </b-card>
          </b-col>
          <b-col md="6">
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
                <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                  Your search for "{{ searchItems }}" found no results.
                </v-alert>
              </v-data-table>
            </b-card>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>

  import categorybarhoriz from './Chartjs/CategoryBarHoriz'
  import productbarhoriz from './Chartjs/ProductBarHoriz'

  export default {
    components: {
      categorybarhoriz,
      productbarhoriz,

    },
    data: () => ({
        // return {
            // selected: [],
            // searchItems: '',
            userHeadersDataTable: [
                { text: 'Full Name', value: 'fullName' },
                { text: 'Email', value: 'email' },
                { text: 'Sign Up By', value: 'signUpBy' },
                { text: 'Last Activity By', value: 'lastActivityBy' }
            ],
            userDataItems: [
                {
                    fullName: 'John Smith',
                    email: 'john@gmail.com',
                    signUpBy: '2018/08/30',
                    lastActivityBy: '2019/09/03'
                },
                {
                    fullName: 'Yegor Yuzin',
                    email: 'yegor@gmail.com',
                    signUpBy: '2018/09/21',
                    lastActivityBy: '2019/08/12'
                },
                {
                    fullName: 'Anton Ivanov',
                    email: 'anton@gmail.com',
                    signUpBy: '2019/01/06',
                    lastActivityBy: '2019/06/30'
                },
                {
                    fullName: 'Andrey Krakov',
                    email: 'andrey@gmail.com',
                    signUpBy: '2019/02/24',
                    lastActivityBy: '2019/06/04'
                },
                {
                    fullName: 'Ivan Ivanovic',
                    email: 'ivan@gmail.com',
                    signUpBy: '2019/06/25',
                    lastActivityBy: '2019/08/26'
                }
            ],
            productsByUserHeadersDataTable: [
                { text: 'Full Name', value: 'fullName' },
                { text: 'Product', value: 'product' },
                { text: 'WIC Date', value: 'wicDate' },
                { text: 'Status', value: 'status' }
            ],
            productsByUerDataItems: [
                {
                    fullName: 'John Smith',
                    product: 'product04',
                    wicDate: '2019/09/30',
                    status: 'No stock'
                },
                {
                    fullName: 'Yegor Yuzin',
                    product: 'product05',
                    wicDate: '2018/09/21',
                    status: 'No stock'
                },
                {
                    fullName: 'Anton Ivanov',
                    product: 'product01',
                    wicDate: '2019/10/06',
                    status: 'In progressing'
                },
                {
                    fullName: 'Andrey Krakov',
                    product: 'product03',
                    wicDate: '2019/09/24',
                    status: 'In progressing'
                },
                {
                    fullName: 'Ivan Ivanovic',
                    product: 'product21',
                    wicDate: '2019/09/25',
                    status: 'No stock'
                }
            ]
        // }
    }),

    methods: {
   
    }
  }
</script>
