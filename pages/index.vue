<template>
  <div>
    <i class="material-icons yellow-text text-darken-2">list_alt</i>
    <v-stepper>
      <v-stepper-header>
        <v-stepper-step complete editable step="1">
          <i class="material-icons md-48">not_listed_location</i>
          1) Setup Location
        </v-stepper-step>
        <v-divider>Salam</v-divider>
        <v-stepper-step complete editable step="2">
          <i class="material-icons yellow-text text-darken-2">list_alt</i>
          2) Enter Details
        </v-stepper-step>
        <v-divider>Aleyk</v-divider>
        <v-stepper-step complete editable step="3">
          <i class="material-icons" style="font-size:48px">devices</i>
          3) Select Services
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="2">
          <i class="material-icons" style="font-size:48px">airport_shuttle</i>
          4) Delivery Address
        </v-stepper-step>
        <v-divider>Aleyk</v-divider>
        <v-stepper-step complete editable step="3">
          <i class="material-icons" style="font-size:48px">check_circle</i>
          5) Review and Submit
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-5" color="grey lighten-1" height="20vh"></v-card>
          <v-btn color="primary">Cleick</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>

      <v-stepper-items>
        <v-stepper-content step="2">
          <v-card class="mb-5" color="grey lighten-1" height="20vh"></v-card>
          <v-btn color="primary">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
