<template>
  <div>
    <h2>{{$t('location.title')}}</h2>
    <v-form>
      <v-container>
        <v-text-field
          :label="$t('location.addressLine1')"
          v-validate="'required'"
          v-model="addressLine1"
          :counter="10"
          :error-messages="errors.collect('address1')"
          required
        ></v-text-field>

        <v-text-field :label="$t('location.addressLine2')"></v-text-field>

        <v-text-field
          :label="$t('location.postCode')"
          :error-messages="errors.collect('postCode')"
          v-model="postCode"
          v-validate="'required'"
          required
        ></v-text-field>

        <v-text-field
          :label="$t('location.city')"
          :error-messages="errors.collect('city')"
          v-validate="'required'"
          v-model="city"
          required
        ></v-text-field>

        <v-text-field
          :label="$t('location.state')"
          :error-messages="errors.collect('state')"
          v-validate="'required'"
          v-model="state"
          required
        ></v-text-field>

        <v-select
          :label="$t('location.country')"
          :error-messages="errors.collect('country')"
          v-model="country"
          :items="countries"
          v-validate="'required'"
          required
        ></v-select>

        <v-text-field
          :label="$t('location.phoneNo')"
          v-validate="{ required: true, regex: /^[0][9][0-9]{9,9}$/}"
          v-model="phone"
          :error-messages="errors.collect('phoneNo')"
          data-vv-name="phone"
          required
        ></v-text-field>

        <v-text-field
          :label="$t('location.nationalCode')"
          v-validate="{ required: true, regex: /^[0-9]{10,10}$/}"
          v-model="code"
          :error-messages="errors.collect('nationalCode')"
          data-vv-name="code"
          required
        ></v-text-field>

        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { VeeValidate } from "vee-validate";
export default {
  $_veeValidate: {
    validator: "new"
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
      custom: {
        phoneNo: {
          required: () => "شماره همراه را وارد نمایید",
          regex: () => "شماره همراه را صحیح وارد نمایید"
        },
        nationalCode: {
          required: () => "کد ملی را وارد نمایید"
        },
        state: {
          required: () => "استان را وارد نمایید"
        },
        city: {
          required: () => "شهر را وارد نمایید"
        },
        country:{
          required: () => "کشور را وارد نمایید"
        },
        postCode: {
          required: () => "کد پستی را وارد نمایید"
        },
        address1: {
          required: () => "آدرس را وارد نمایید"
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize("fa", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
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
      });
    }
  }
};
</script>

<style>
.submit {
  float: left;
}
</style>
