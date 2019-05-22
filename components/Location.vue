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

        <v-btn class="submit" color="primary" @click="submit" >Next Step</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
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
    countries: ["Iran", "Italy", "US", "UK"]
  }),
  computed: {
    addressErrors() {
      const errors = [];
      if (!this.$v.addressLine1.$dirty) return errors;
      !this.$v.addressLine1.required &&
        errors.push("addressLine1 is required.");
      !this.$v.addressLine1.maxLength &&
        errors.push("addressLine1 must be at most 10 characters long");
      return errors;
    },
    postCodeErrors() {
      const errors = [];
      if (!this.$v.postCode.$dirty) {
        return errors;
      }

      !this.$v.postCode.required && errors.push("postCode is required");

      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) {
        return errors;
      }
      !this.$v.city.required && errors.push("city is required");
      return errors;
    },
    stateErrors() {
      const errors = [];
      if (!this.$v.state.$dirty) {
        return errors;
      }
      !this.$v.state.required && errors.push("state is required");
      return errors;
    },
    countryErrors() {
      const errors = [];
      if (!this.$v.country.$dirty) {
        return errors;
      }
      !this.$v.country.required && errors.push("country is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if(this.$v.$invalid)
      return;

      const info = [this.addressLine1, this.addressLine2, this.postCode, this.city, this.state,
        this.country];
        this.$emit('locationInfoWasSet', info);
      
    }
  }
};
</script>

<style>
.submit {
  float: right;
}
</style>
