<template>
    <v-container fluid class="pa-0" grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 xl3>
                <div class="headline font-weight-regular black--text text-xs-center">
                    Product Lists
                </div>
            </v-flex>
            <v-flex xs12 sm12 md3 xl3>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="searchItems"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                >
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md6 xl6>
                <v-btn>Add New</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 xl12>
                <v-data-table
                    v-model="selected"
                    :headers="headersDataTable"
                    :items="dataItems"
                    :search="searchItems"
                    item-key="wicID"
                    select-all
                    class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>
                            <v-checkbox
                                v-model="props.selected"
                                primary
                                hide-details
                            >
                            </v-checkbox>
                        </td>
                        <td class="text-xs-right">{{ props.item.wicID }}</td>
                        <td class="text-xs-right">{{ props.item.Name }}</td>
                        <td class="text-xs-right">{{ props.item.Category }}</td>
                        <td class="text-xs-right">{{ props.item.Manufacturer }}</td>
                        <td class="text-xs-right">{{ props.item.Model }}</td>
                        <td class="text-xs-right">{{ props.item.WICDate }}</td>
                        <td class="text-xs-right">{{ props.item.WICDateDisplayFormat }}</td>
                        <td class="text-xs-right">{{ props.item.ReleaseDate }}</td>
                        <td class="text-xs-right">{{ props.item.ReleaseDateDisplayFormat }}</td>
                        <td class="text-xs-right">{{ props.item.ProductionDate }}</td>
                        <td class="text-xs-right">{{ props.item.ReleaseStatus }}</td>
                        <td class="text-xs-right">{{ props.item.IsRelatedTo }}</td>
                        <td class="text-xs-right">{{ props.item.DateAdded }}</td>
                        <td class="text-xs-right">{{ props.item.LastEditAt }}</td>
                        <td class="text-xs-right">{{ props.item.LastEditBy }}</td>
                    </template>
                    <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                        Your search for "{{ searchItems }}" found no results.
                    </v-alert>
                </v-data-table>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 xl12>
                <v-btn color="primary">Export</v-btn>
                <v-btn color="primary">Import</v-btn>
            </v-flex>
        </v-layout>   
    </v-container>
</template>

<script>

    export default {
        data () {
            return {
                selected: [],
                searchItems: '',
                headersDataTable: [
                    { text: 'wicID', value: 'wicID' },
                    { text: 'Name', value: 'Name' },
                    { text: 'Category', value: 'Category' },
                    { text: 'Manufacturer', value: 'Manufacturer' },
                    { text: 'Model', value: 'Model' },
                    { text: 'WIC Date', value: 'WICDate' },
                    { text: 'WIC date display format', value: 'WICDateDisplayFormat' },
                    { text: 'Release Date', value: 'ReleaseDate' },
                    { text: 'Release Date Display Format', value: 'ReleaseDateDisplayFormat' },
                    { text: 'Production Date', value: 'ProductionDate' },
                    { text: 'Release Status', value: 'ReleaseStatus' },
                    { text: 'IsRelatedTo', value: 'IsRelatedTo' },
                    { text: 'Date Added', value: 'DateAdded' },
                    { text: 'Last Edit At', value: 'LastEditAt' },
                    { text: 'Last Edit By', value: 'LastEditBy' }
                ],
                dataItems: [
                    {
                        wicID: '1',
                        Name: 'Apple iPhone XR 2019',
                        Category: 'Mobile',
                        Manufacturer: 'Apple',
                        Model: 'iPhone XR',
                        WICDate: '2019/04/01',
                        WICDateDisplayFormat: 'YYYY/MM/DD',
                        ReleaseDate: '2019/05/01',
                        ReleaseDateDisplayFormat: 'YYYY/MM/DD',
                        ProductionDate: '2019',
                        ReleaseStatus: 'Yes',
                        IsRelatedTo: 'Apple iPhone XR 2018',
                        DateAdded: '2019/07/01',
                        LastEditAt: '2019/08/01',
                        LastEditBy: 'admin'
                    },
                    {
                        wicID: '2',
                        Name: 'Samsung Galaxy Note 10+ 5G',
                        Category: 'Mobile',
                        Manufacturer: 'Samsung',
                        Model: 'Samsung Galaxy Note 10+ 5G',
                        WICDate: '2019/04/01',
                        WICDateDisplayFormat: 'YYYY/MM/DD',
                        ReleaseDate: '2019/05/01',
                        ReleaseDateDisplayFormat: 'YYYY/MM/DD',
                        ProductionDate: '2019',
                        ReleaseStatus: 'Yes',
                        IsRelatedTo: 'Samsung Galaxy Note 10+',
                        DateAdded: '2019/07/01',
                        LastEditAt: '2019/08/01',
                        LastEditBy: 'admin'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>