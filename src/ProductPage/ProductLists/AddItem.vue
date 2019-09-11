<template>
    <v-card>
        <v-card-title class="headline font-weight-regular bg-dark white--text">When's it coming?</v-card-title>
        <v-card-text>
            <form class="" action="#" method="post">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-xl-2">
                        <b-row>
                            <b-col md="12">
                                <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="col-sm-12 col-md-6 col-xl-5">
                        <div class="card-body">
                            <h5 class="card-title">Item Information</h5>
                            <div class="position-relative form-group">
                                <label for="itemName" class="">Item Name</label>
                                <v-text-field
                                    label="Item Name"
                                    single-line
                                    outline
                                    id="itemName"
                                    name="itemName"
                                ></v-text-field>
                            </div>
                            <div class="position-relative form-group">
                                <label for="itemDescription" class="">Item Description</label>
                                <v-textarea
                                    outline
                                    name="itemDescription"
                                    id="itemDescription"
                                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.">
                                </v-textarea>
                            </div>
                            <div class="position-relative form-group">
                                <label for="exampleSelect" class="">Category</label>
                                <v-select
                                    :items="categoryItems"
                                    outline>
                                </v-select>
                            </div>
                            <h5 class="card-title">When's it coming?</h5>
                            <div class="position-relative form-group row">
                                <div class="col-sm-6 col-md-6 col-xl-6">
                                    <label for="itemName" class="">Exact Release Date</label>
                                    <br>
                                    <v-menu
                                        ref="extractReleaseDateMenu"
                                        v-model="extractReleaseDateMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="extractReleaseDate"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="extractReleaseDate"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="extractReleaseDate" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="extractReleaseDateMenu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.extractReleaseDateMenu.save(extractReleaseDate)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </div>
                                <div class="col-sm-6 col-md-6 col-xl-6">
                                    <v-checkbox
                                        label="Confirmed"
                                        color="indigo"
                                        value="Confirmed"
                                        id="confirmedCheckbox"
                                        name="confirmedCheckbox"
                                        hide-details
                                        class="checkbox-confirm-customize"
                                    ></v-checkbox>
                                </div>
                            </div>
                            <div class="position-relative form-group row">
                                <div class="col-sm-6 col-md-6 col-xl-6">
                                    <label for="itemName" class="">Estimated Release Date</label>
                                    <br>
                                    <v-menu
                                        ref="estimatedReleaseDateMenu"
                                        v-model="estimatedReleaseDateMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="estimatedReleaseDate"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="estimatedReleaseDate"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="estimatedReleaseDate" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="estimatedReleaseDateMenu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.estimatedReleaseDateMenu.save(estimatedReleaseDate)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </div>
                                <div class="col-sm-6 col-md-6 col-xl-6">
                                </div>
                            </div>    
                            <button class="mt-1 btn btn-primary btn-danger btn-submit-customize">Submit</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-xl-5">
                        <div class="card-body">
                            <h5 class="card-title">Tags</h5>
                            <div class="position-relative form-group row">
                                <div class="col-sm-10 col-md-10 col-xl-10">
                                    <label for="search" class="">Search</label>
                                    <v-text-field
                                        label="Search"
                                        single-line
                                        outline
                                        name="search"
                                        id="search"
                                    ></v-text-field>
                                </div>
                                <div class="col-sm-2 col-md-2 col-xl-2">
                                    <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill btn-search-customize" variant="outline-dark"><font-awesome-icon icon="plus"/></b-button>
                                </div>
                            </div>
                            <div class="position-relative form-group">
                                <v-card>
                                    <v-list>
                                        <template v-for="(item, index) in items">
                                            <v-list-tile :key="item.title">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                                        </template>
                                    </v-list>
                                </v-card>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </v-card-text>
  </v-card>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import DatePicker from 'vue2-datepicker'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    
    export default {
        components: {
            PageTitle,
            vueDropzone: vue2Dropzone,
            DatePicker,
            'font-awesome-icon': FontAwesomeIcon,
        },

        data: () => ({
            heading: 'Dropzone',
            subheading: 'Create drag & drop zones for uploading files.',
            icon: 'pe-7s-ticket icon-gradient bg-happy-fisher',


            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" }
            },
            extractReleaseDate: new Date().toISOString().substr(0, 10),
            estimatedReleaseDate: new Date().toISOString().substr(0, 10),
            extractReleaseDateMenu: false,
            estimatedReleaseDateMenu: false,
            items: [
                {
                    title: 'Company: Apple',
                },
                {
                    title: 'Item Type: Cellphone',
                },
                {
                    title: 'Location: United States',
                },
                {
                    title: 'Weight: 2.4 ozs',
                }
            ],
            categoryItems: ['Foo', 'Bar', 'Fizz', 'Buzz']
        }),

        methods: {
            
        }
    }
</script>

<style lang="scss">
    
    .custom-control-input-customize {
        position: relative;
        margin-left: 15px;
        margin-top: 50px;
    }

    .checkbox-confirm-customize {
        margin-top: 40px;
    }

    .btn-submit-customize {
        text-align: center;
    }
    
    .btn-search-customize {
        position: relative;
        margin-top: 35px;
    }

</style>