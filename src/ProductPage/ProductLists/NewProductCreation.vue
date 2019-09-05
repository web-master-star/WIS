<template>
    <v-container fluid class="pa-0" grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 xl3>
                <div class="headline font-weight-regular black--text text-xs-center">
                    New Product Creation
                </div>
            </v-flex>
            <v-flex row wrap xs12 sm12 md6 xl6>
                <div id="dateAdded">
                    Date Added: 8/10/2019
                </div>
                <div id="dateAdded">
                    Last Edited: 5:30pm 9/1/2019
                </div>
                <div id="editedBy">
                    Edited By: admin
                </div>
            </v-flex>
            <v-flex row wrap xs12 sm12 md3 xl3>
                <v-btn color="success">Save</v-btn>
                <v-btn flat icon color="secondary">
                    <v-icon large>
                        chevron_left
                    </v-icon>
                </v-btn>
                <v-btn flat icon color="secondary">
                    <v-icon large>
                        chevron_right
                    </v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md2 xl2>
                <div class="text-xs-center">
                    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                </div>
            </v-flex>
            <v-flex xs12 sm12 md5 xl5>
                <v-select
                    :items="categoryItems"
                    label="Category"
                    outline
                    id="categoryVSelect"
                    name="categoryVSelect"
                >
                </v-select>
                <v-select
                    :items="manufacturerItems"
                    label="Manufacturer"
                    outline
                    id="manufacturerVSelect"
                    name="manufacturerVSelect"
                >
                </v-select>
                <v-select
                    :items="modelItems"
                    label="Model"
                    outline
                    id="modelVSelect"
                    name="modelVSelect"
                >
                </v-select>
                <v-text-field
                    label="Display Name"
                    outline
                    id="displayNameVTextField"
                    name="displayNameVTextField"
                ></v-text-field>
                <v-text-field
                    label="URL"
                    outline
                    id="urlVTextField"
                    name="urlVTextField"
                ></v-text-field>
                <v-text-field
                    label="UPC"
                    outline
                    id="upcVTextField"
                    name="upcVTextField"
                ></v-text-field>
                <v-textarea
                    label="Description"
                    outline
                    id="descriptionVTextarea"
                    name="descriptionVTextarea"
                >
                </v-textarea>
                <v-textarea
                    label="Features"
                    outline
                    id="featuresVTextarea"
                    name="featuresVTextarea"
                >
                </v-textarea>
            </v-flex>
            <v-flex xs12 sm12 md5 xl5>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 xl4>
                        <div class="d-block label-customize">
                            WIC Date:
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md4 xl4>
                        <v-menu
                            ref="wicDateMenu"
                            v-model="wicDateMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="wicDate"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="wicDate"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="wicDate" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="wicDateMenu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.wicDateMenu.save(wicDate)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex xs12 sm12 md4 xl4>
                        <v-select
                            :items="displayFormatItems"
                            label="Display Format"
                            outline
                            id="wicDateVSelect"
                            name="wicDateVSelect"
                        >
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 xl4>
                        <div class="d-block label-customize">
                            Release Date:
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md4 xl4>
                        <v-menu
                            ref="releaseDateMenu"
                            v-model="releaseDateMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="releaseDate"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="releaseDate"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="releaseDate" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="releaesDateMenu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.releaseDateMenu.save(releaseDate)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex xs12 sm12 md4 xl4>
                        <v-select
                            :items="displayFormatItems"
                            label="Display Format"
                            outline
                            id="releaseDateVSelect"
                            name="releaseDateVSelect"
                        >
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 xl4>
                        <div class="d-block label-customize">
                            Production Date:
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md4 xl4>
                        <v-menu
                            ref="productionDateMenu"
                            v-model="productionDateMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="productionDate"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="productionDate"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="productionDate" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="productionDateMenu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.productionDateMenu.save(productionDate)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex xs12 sm12 md4 xl4>
                        <v-select
                            :items="displayFormatItems"
                            label="Display Format"
                            outline
                            id="productionDateVSelect"
                            name="productionDateVSelect"
                        >
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 xl4>
                        <div class="d-block label-customize">
                            Released?
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md8 xl8>
                        <v-checkbox
                            color="indigo"
                            id="releasedVCheckbox"
                            name="releasedVCheckbox"
                            hide-details
                            class="checkbox-confirm-customize"
                        >
                        </v-checkbox>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 xl4>
                        <div class="d-block label-customize">
                            Related To:
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md5 xl5>
                        <div class="scroll-area-sm">
                            <VuePerfectScrollbar class="scrollbar-container" v-once>
                                <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">iPhone5</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">iPhone6</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">iPhone7</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">iPhone8</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </VuePerfectScrollbar>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md3 xl3>
                        <v-btn color="success">Add</v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 xl4>
                        <div class="d-block label-customize">
                            Similar To:
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md5 xl5>
                        <div class="scroll-area-sm">
                            <VuePerfectScrollbar class="scrollbar-container" v-once>
                                <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Pixel XL</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Samsung Galaxy S9</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3"></div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Windows Phone</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <v-btn flat icon color="success">
                                                        <v-icon large>
                                                            pe-7s-close
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </VuePerfectScrollbar>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md3 xl3>
                        <v-btn color="success">Add</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import DatePicker from 'vue2-datepicker'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
        
    export default {
        components: {
            vueDropzone: vue2Dropzone,
            DatePicker,
            'font-awesome-icon': FontAwesomeIcon,
            VuePerfectScrollbar,
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
            categoryItems: ['Category1', 'Category2', 'Category3', 'Category4'],
            manufacturerItems: ['Manufacturer1', 'Manufacturer2', 'Manufacturer3', 'Manufacturer4'],
            modelItems: ['Model1', 'Model2', 'Model3', 'Model4'],
            displayFormatItems: ['YYYY/MM/DD', 'MM/DD/YYYY', 'YYYY-MM-DD'],
            wicDateMenu: false,
            wicDate: new Date().toISOString().substr(0, 10),
            releaseDateMenu: false,
            releaseDate: new Date().toISOString().substr(0, 10),
            productionDateMenu: false,
            productionDate: new Date().toISOString().substr(0, 10),
        }),

        methods: {
            
        }
    }
</script>

<style lang="scss">

    .label-customize {
        margin-left: 30px;
        margin-top: 25px;
    }

    .checkbox-confirm-customize {
        margin-top: 25px;
    }

</style>