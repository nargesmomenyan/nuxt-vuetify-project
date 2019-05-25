<template>
  <div>
    <h2>{{$t("services.title")}}</h2>
    <v-form>
      <v-container>
        <v-select
          :label="$t('services.DeliveryType')"
          v-model="deliveryType"
          :items="deliveryTypes"
          @change="$v.deliveryType.$touch()"
          @blur="$v.deliveryType.$touch()"
          :error-messages="deliveryTypeErrors"
        ></v-select>

        <v-select
          :label="$t('services.PackagingType')"
          v-model="packagingType"
          :items="packagingTypes"
          @change="$v.packagingType.$touch()"
          @blur="$v.packagingType.$touch()"
          :error-messages="packagingTypeErrors"
        ></v-select>

        <v-select
          :label="$t('services.time')"
          v-model="deliveryWindow"
          :items="deliveryWindows"
          @change="$v.deliveryWindow.$touch()"
          @blur="$v.deliveryWindow.$touch()"
          :error-messages="deliveryWindowErrors"
        ></v-select>

        <v-btn class="previous" @click="previous">{{$t("stepper.previous")}}</v-btn>
        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
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
    deliveryType: { required },
    packagingType: { required },
    deliveryWindow: { required }
  },
  data: () => ({
    deliveryType: "",
    packagingType: "",
    deliveryWindow: "",
    deliveryTypes: [
      "Overnight Delivery (within 48 hours)",
      "Express Delivery (within 5 working days)"
    ],
    packagingTypes: ["Regular Packaging", "Oversized Packaging"],
    deliveryWindows: ["Morning", "Afternoon"]
  }),
  computed: {
    deliveryTypeErrors() {
      const errors = [];
      if (!this.$v.deliveryType.$dirty) {
        return errors;
      }
      !this.$v.deliveryType.required && errors.push("DeliveryType is required");
      return errors;
    },
    packagingTypeErrors() {
      const errors = [];
      if (!this.$v.packagingType.$dirty) {
        return errors;
      }
      !this.$v.packagingType.required &&
        errors.push("PackagingType is required");
      return errors;
    },
    deliveryWindowErrors() {
      const errors = [];
      if (!this.$v.deliveryWindow.$dirty) {
        return errors;
      }
      !this.$v.deliveryWindow.required &&
        errors.push("DeliveryWindow is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if(this.$v.$invalid)
      return;
      const info = [this.deliveryType, this.packagingType, this.deliveryWindow];
      this.$emit("servicesWasSet", info);
    },
    previous() {
      this.$emit("previous", "Services");
    }
  }
};
</script>
<style>
.submit {
  float: left;
}
.previous {
  float: right;
}
</style>
