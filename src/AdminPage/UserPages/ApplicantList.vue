<template>
  <v-card class='mx-auto'>
    <v-toolbar color='deep-purple accent-4' cards dark flat>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card-title class='title font-weight-regular'>Applicant List</v-card-title>
    </v-toolbar>
    <v-form ref='form' v-model='form' class='pa-3 pt-4'>
      <v-text-field
        v-model='fullName'
        :rules='[rules.fullNameCheck(1)]'
        color='deep-purple'
        label='Full Name'
        style='min-height: 96px'
        type='text'
      ></v-text-field>
      <v-text-field
        v-model='email'
        :rules='[rules.email]'
        color='deep-purple'
        label='Email'
        style='min-height: 96px'
        type='email'
      ></v-text-field>

      <v-text-field v-model='phone' color='deep-purple' label='Phone number' mask='phone'></v-text-field>
      <v-toolbar flat color='white'>
        <v-toolbar-title>My Education</v-toolbar-title>
        <v-divider class='mx-2' inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model='dialog' max-width='500px'>
          <template v-slot:activator='{ on }'>
            <v-btn color='primary' dark class='mb-2' v-on='on'>New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class='headline'>{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model='editedItem.no' label='No'></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model='editedItem.school' label='School'></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model='editedItem.period' label='Period'></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color='blue darken-1' flat @click='close'>Cancel</v-btn>
              <v-btn color='blue darken-1' flat @click='save'>Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table :headers='headers' :items='educations' class='elevation-1'>
        <template v-slot:items='props'>
          <td>{{ props.item.no }}</td>
          <td class='text-xs-left'>{{ props.item.school }}</td>
          <td class='text-xs-left'>{{ props.item.period }}</td>
          <td class='justify-center'>
            <v-icon small class='mr-2' @click='editItem(props.item)'>edit</v-icon>
            <v-icon small @click='deleteItem(props.item)'>delete</v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <v-btn color='primary' @click='initialize'>Reset</v-btn>
        </template>
      </v-data-table>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled='!form'
        :loading='isLoading'
        class='white--text'
        color='deep-purple accent-4'
        depressed
        @click='dataSave'
      >Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    form: false,
    isLoading: false,
    fullName: undefined,
    email: undefined,
    phone: undefined,
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      fullNameCheck: len => v =>
        (v || '').length >= len || `Please enter a full name`,
      length: len => v =>
        (v || '').length >= len || `Invalid character length, required ${len}`
    },
    headers: [
      {
        text: 'No',
        align: 'left',
        sortable: true,
        value: 'no'
      },
      { text: 'School', value: 'school' },
      { text: 'Period', value: 'period' }
    ],
    editedIndex: -1,
    editedItem: {
      no: '',
      school: '',
      period: ''
    },
    defaultItem: {
      no: '',
      school: '',
      period: ''
    },
    educations: [],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.educations = [
        {
          no: '1',
          school: 'European Collegium Private School',
          period: '1999~2011'
        },
        {
          no: '2',
          school:
            'Zaporizhzhya Institute of Economics and Information Technologies',
          period: '2011-2014'
        }
      ]
    },
    editItem(item) {
      this.editedIndex = this.educations.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.educations.indexOf(item);
      confirm('Are you sure you want to delete this item?') &&
        this.educations.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.educations[this.editedIndex], this.editedItem);
      } else {
        this.educations.push(this.editedItem);
      }
      this.close();
    },
    dataSave() {
      alert('User profile has been saved successfully!');
    }
  }
};
</script>