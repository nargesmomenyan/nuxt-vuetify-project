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
          required
        ></v-text-field>
        <span>{{ errors.first('addressLine1') }}</span>

        <v-text-field :label="$t('location.addressLine2')"></v-text-field>

        <v-text-field :label="$t('postCode')" v-model="postCode" v-validate="'required'" required></v-text-field>

        <v-text-field :label="$t('city')" v-validate="'required'" v-model="city" required></v-text-field>

        <v-text-field :label="$t('state')" v-validate="'required'" v-model="state" required></v-text-field>

        <v-select
          :label="$t('country')"
          v-model="country"
          :items="countries"
          v-validate="'required'"
          required
        ></v-select>

        <v-btn class="submit" color="primary" @click="submit">{{$t("nextStep")}}</v-btn>
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
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize("fa", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
      // if (this.$validator.$invalid) return;

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
