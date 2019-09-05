<template>
    <v-container fluid class="pa-0" grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 xl3>
                <div class="headline font-weight-regular black--text text-xs-center">
                    Customer Lists
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
                        <td class="text-xs-right">{{ props.item.userID }}</td>
                        <td class="text-xs-right">{{ props.item.fullName }}</td>
                        <td class="text-xs-right">{{ props.item.email }}</td>
                        <td class="text-xs-right">{{ props.item.signUpBy }}</td>
                        <td class="text-xs-right">{{ props.item.lastActivityBy }}</td>
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
                    { text: 'ID', value: 'userID' },
                    { text: 'Full Name', value: 'fullName' },
                    { text: 'Email', value: 'email' },
                    { text: 'Sign Up By', value: 'signUpBy' },
                    { text: 'Last Activity By', value: 'lastActivityBy' }
                ],
                dataItems: [
                    {
                        userID: '1',
                        fullName: 'John Smith',
                        email: 'john@gmail.com',
                        signUpBy: 'Apple',
                        lastActivityBy: 'iPhone XR'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>