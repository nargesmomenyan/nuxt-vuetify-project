<template>
  <div>
    <h2>Enter the Details of your Delivery</h2>
    <v-form>
      <v-container>
        <v-text-field
          label="Package Details"
          required
          v-model="packageDetails"
          :error-messages="packageDetailsErrors"
          @input="$v.packageDetails.$touch()"
          @blur="$v.packageDetails.$touch()"
        ></v-text-field>

        <v-text-field
          label="weight"
          type="number"
          v-model="weight"
          required
          @input="$v.weight.$touch()"
          @blur="$v.weight.$touch()"
          :error-messages="weightErrors"
        ></v-text-field>

        <v-text-field
          label="Width"
          required
          type="number"
          v-model="width"
          @input="$v.width.$touch()"
          @blur="$v.width.$touch()"
          :error-messages="widthErrors"
        ></v-text-field>

        <v-text-field
          label="Height"
          required
          type="number"
          v-model="height"
          @input="$v.height.$touch()"
          @blur="$v.height.$touch()"
          :error-messages="heightErrors"
        ></v-text-field>

        <v-text-field
          label="Length"
          type="number"
          v-model="length"
          @change="$v.length.$touch()"
          @blur="$v.length.$touch()"
          :error-messages="lengthErrors"
        ></v-text-field>

        <v-btn class="previous" @click="previous">previous</v-btn>
        <v-btn class="submit" color="primary" @click="submit">Next Step</v-btn>
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
    packageDetails: { required },
    weight: { required },
    width: { required },
    height: { required },
    length: { required }
  },
  data: () => ({
    packageDetails: "Complete Workstatsion (Monitor)",
    weight: 25,
    width: 110,
    height: 90,
    length: 150
  }),
  computed: {
    packageDetailsErrors() {
      const errors = [];
      if (!this.$v.packageDetails.$dirty) return errors;
      !this.$v.packageDetails.required &&
        errors.push("packageDetails is required.");
      return errors;
    },
    weightErrors() {
      const errors = [];
      if (!this.$v.weight.$dirty) {
        return errors;
      }

      !this.$v.weight.required && errors.push("weight is required");

      return errors;
    },
    widthErrors() {
      const errors = [];
      if (!this.$v.width.$dirty) {
        return errors;
      }
      !this.$v.width.required && errors.push("width is required");
      return errors;
    },
    heightErrors() {
      const errors = [];
      if (!this.$v.height.$dirty) {
        return errors;
      }
      !this.$v.height.required && errors.push("height is required");
      return errors;
    },
    lengthErrors() {
      const errors = [];
      if (!this.$v.length.$dirty) {
        return errors;
      }
      !this.$v.length.required && errors.push("length is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if(this.$v.$invalid)
      return;
      const info = [
        this.packageDetails,
        this.weight,
        this.width,
        this.height,
        this.length
      ];
      this.$emit("detailInfoWasSet", info);
    },
    previous() {
      this.$emit("previous", "Details");
    }
  }
};
</script>
<style>
.submit {
  float: right;
}
.previous {
  float: left;
}
</style>
