<template>
  <div>
    <v-container>
      <v-stepper v-model="purchaseState">
        <v-stepper-header class="stepper__header">
          <div class="step" v-for="(step, index) in steps" :key="index">
            <v-stepper-step
              :edit-icon="'check'"
              :complete-icon="'edit'"
              :step="index+1"
              :complete="(index+1)<=purchaseState"
              :editable="(index+1) < purchaseState"
            >
              <div style="text-align:center">
                <i class="material-icons" style="font-size:48px">{{step.icon}}</i>

                <div>{{step.label}}</div>
              </div>
              <v-divider></v-divider>
            </v-stepper-step>
          </div>
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
            <app-services @servicesWasSet="setServicesInfo" @previous="previous($event)"></app-services>
          </v-stepper-content>
        </v-stepper-items>

        <v-stepper-items>
          <v-stepper-content step="4">
            <h2>Review Your Details and Submit</h2>
            <br>
            <br>

            <v-list>
              <h3>Current Address</h3>
              <div v-for="item in locationInfo">
                <div class="list">{{item}}</div>
              </div>
            </v-list>
            <br>
            <hr>
            <br>
            <v-list>
              <h3>Delivery Details</h3>
              <div v-for="item in detailInfo">
                <div class="list">{{item}}</div>
              </div>
            </v-list>
            <br>
            <hr>
            <br>
            <v-list>
              <h3>Delivery Service Type</h3>
              <div v-for="item in servicesInfo">
                <div class="list">{{item}}</div>
              </div>
            </v-list>

            <v-btn class="previous" @click="previous('submit')">previous</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
import Location from "~/components/Location";
import Details from "~/components/Details";
import Services from "~/components/Services";

export default {
  data: () => ({
    steps: [
      {
        label: "آدرس",
        completed: false,
        icon: "not_listed_location"
      },
      {
        label: "جزئیات بسته",
        completed: false,
        icon: "list_alt"
      },
      {
        label: "انتخاب سرویس",
        completed: false,
        icon: "devices"
      },
      {
        label: "تأیید",
        completed: false,
        icon: "airport_shuttle"
      }
    ],
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
      switch ($event) {
        case "Details":
          this.purchaseState = 1;
          break;
        case "Services":
          this.purchaseState = 2;
          break;
        case "submit":
          this.purchaseState = 3;
          break;
        default:
          this.purchaseState = 1;
      }
    }
  }
};
</script>
<style scoped>
.list,
h3 {
  padding-left: 20px;
}

.step {
  margin: 0 auto;
}

.stepper__header {
  height: 100%;
}
</style>
