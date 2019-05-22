<template>
  <div>
    <v-stepper v-model="purchaseState">
      <v-stepper-header>
        <v-stepper-step :complete="purchaseState>1" editable step="1">
          <i class="material-icons" style="font-size:48px">not_listed_location</i>
          1) Setup Location
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="purchaseState>2" editable step="2">
          <i class="material-icons" style="font-size:48px">list_alt</i>
          2) Enter Details
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="purchaseState>3" editable step="3">
          <i class="material-icons" style="font-size:48px">devices</i>
          3) Select Services
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="4">
          <i class="material-icons" style="font-size:48px">airport_shuttle</i>
          4) Review and Submit
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
      <br>
      <br>
      <v-stepper-items>
        <v-stepper-content step="1">
          <app-location @locationInfoWasSet="setLocationInfo"></app-location>
        </v-stepper-content>
      </v-stepper-items>

      <v-stepper-items>
        <v-stepper-content step="2">
          <app-details @detailInfoWasSet="setDetailsInfo" @previous="previous"></app-details>
        </v-stepper-content>
      </v-stepper-items>

      <v-stepper-items>
        <v-stepper-content step="3">
          <app-services @servicesWasSet="setServicesInfo" @previous="previous"></app-services>
        </v-stepper-content>
      </v-stepper-items>

      <v-stepper-items>
        <v-stepper-content step="4">
          <h2>Review Your Details and Submit</h2>
          <br>
          <br>
          
           <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Current Address</v-list-item-title>
                <div v-for="item in locationInfo">
              <v-list-item-subtitle>{{item}}</v-list-item-subtitle>
              </div>
              </v-list-item-content>
            </v-list-item>
          <br>
          <hr>
          <br>
          <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Delivery Details</v-list-item-title>
                <div v-for="item in detailInfo">
              <v-list-item-subtitle>{{item}}</v-list-item-subtitle>
              </div>
              </v-list-item-content>
            </v-list-item>
          <br>
          <hr>
          <br>
          <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Delivery Service Type</v-list-item-title>
                <div v-for="item in servicesInfo">
              <v-list-item-subtitle>{{item}}</v-list-item-subtitle>
              </div>
              </v-list-item-content>
            </v-list-item>
           
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import Location from "~/components/Location";
import Details from "~/components/Details";
import Services from "~/components/Services";

export default {
  data: () => ({
    purchaseState: 1,
    locationInfo: [],
    detailInfo: [],
    servicesInfo: []
  }),
  components: {
    appLocation: Location,
    appDetails: Details,
    appServices: Services
  },
  methods: {
    setLocationInfo($event) {
      this.locationInfo = $event;
      this.purchaseState = 2;
    },
    setDetailsInfo($event) {
      this.detailInfo = $event;
      this.purchaseState = 3;
    },
    setServicesInfo($event) {
      this.servicesInfo = $event;
      this.purchaseState = 4;
    },
    previous($event) {
      console.log("previous");
      switch ($event) {
        case "Details":
          this.purchaseState = 1;
        case "Services":
          this.purchaseState = 2;
        default:
          this.purchaseState = 1;
      }
    }
  }
};
</script>
<style scoped>

</style>
