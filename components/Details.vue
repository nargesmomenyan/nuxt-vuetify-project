<template>
  <div>
    <h2>{{$t("details.title")}}</h2>
    <v-form>
      <v-container>
        <v-text-field :label="$t('details.packageDetails')" v-model="packageDetails"></v-text-field>

        <v-text-field :label="$t('details.weight')" type="number" v-model="weight"></v-text-field>

        <v-text-field :label="$t('details.width')" type="number" v-model="width"></v-text-field>

        <v-text-field :label="$t('details.Height')" type="number" v-model="height"></v-text-field>

        <v-text-field :label="$t('details.Length')" type="number" v-model="length"></v-text-field>

        <v-btn class="previous" @click="previous">{{$t("stepper.previous")}}</v-btn>
        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Details extends Vue {
  constructor(
    private packageDetails: String,
    private weight: Number,
    private width: Number,
    private height: Number,
    private length: Number
  ) {
    super();
    this.packageDetails = "Complete Workstatsion (Monitor)";
    this.weight = 25;
    this.width = 110;
    this.height = 90;
    this.length = 150;
  }
  
 @Emit("detailInfoWasSet")
  submit() {
    const info = [
      this.packageDetails,
      this.weight,
      this.width,
      this.height,
      this.length
    ];
    return info;
  }
  previous() {
    this.$emit("previous", "Details");
  }
}
</script>

<style>
.submit {
  float: left;
}
.previous {
  float: right;
}
</style>
