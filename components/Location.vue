<template>
  <div>
    <h2>Setup Your Current Location</h2>
    <v-form>
      <v-container>
        <v-text-field
          label="Address Line 1"
          required
          v-model="addressLine1"
          :counter="10"
          :error-messages="addressErrors"
          @input="$v.addressLine1.$touch()"
          @blur="$v.addressLine1.$touch()"
        ></v-text-field>

        <v-text-field label="Address Line 2"></v-text-field>

        <v-text-field
          label="Postcode"
          v-model="postCode"
          required
          @input="$v.postCode.$touch()"
          @blur="$v.postCode.$touch()"
          :error-messages="postCodeErrors"
        ></v-text-field>

        <v-text-field
          label="City"
          required
          v-model="city"
          @input="$v.city.$touch()"
          @blur="$v.city.$touch()"
          :error-messages="cityErrors"
        ></v-text-field>

        <v-text-field
          label="State"
          required
          v-model="state"
          @input="$v.state.$touch()"
          @blur="$v.state.$touch()"
          :error-messages="stateErrors"
        ></v-text-field>

        <v-select
          label="Country"
          v-model="country"
          :items="countries"
          @change="$v.country.$touch()"
          @blur="$v.country.$touch()"
          :error-messages="countryErrors"
        ></v-select>

        <v-btn class="submit" color="primary" @click="submit">Next Step</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { VeeValidate } from "vee-validate";

export default {
  mixins: [validationMixin],

  validations: {
    addressLine1: { required, maxLength: maxLength(10) },
    postCode: { required },
    city: { required },
    state: { required },
    country: { required }
  },
  data: () => ({
    addressLine1: "",
    addressLine2: "",
    postCode: 3000,
    city: "Tehran",
    state: "Tehran",
    country: "Iran",
    countries: ["Iran", "Italy", "US", "UK"],
    dictionary: {
      custome: {
        addressLine1: {
          required: () => "آدرس 1 را وارد کنید",
          max: "آدرس 1 نباید بیشتر از 200 کاراکتر باشد"
        },
        postCode: {
          required: () => "کد پستی را وارد کنید"
        },
        city: {
          required: () => "شهر را وارد کنید"
        },
        state: {
          required: () => "استان را وارد کنید"
        },
        country: {
          required: () => "کشور مورد نظر را انتخاب کنید"
        },
      }
    }
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
      if (this.$validator.$invalid) return;

      const info = [
        this.addressLine1,
        this.addressLine2,
        this.postCode,
        this.city,
        this.state,
        this.country
      ];
      this.$emit("locationInfoWasSet", info);
    }
  }
};
</script>

<style>
.submit {
  float: right;
}
</style>
