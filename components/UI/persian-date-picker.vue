<template>
    <div>
         <v-menu       
            v-model="datePickerMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                v-model="persianDate"
                :label="$t('location.shipdate')"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="gregorianDate"
              @input="datePickerMenu = false"
              @change="save"
              reactive: true
              locale="fa"
              :min  = "new Date().toISOString().substr(0,10)"
            ></v-date-picker>
          </v-menu>
    </div>
</template>

<script>
import moment from 'moment-jalaali'

export default {
  data:()=>({
    datePickerMenu: false,
  }),
    props:{
        gregorianDate:{
          default:'',
          type:String
          },          
        persianDate:{
          default: "",
          type: String
          }
    },
    methods: {  
        save(inputDate){        
          this.persianDate = moment(inputDate).format('jYYYY/jMM/jDD');
          // console.log(inputDate);
          // console.log(this.persianShipDate);
          this.$emit('selectedDate', {gregorianDate: this.gregorianDate, persianDate: this.persianDate });
        }
  },
  created(){
    console.log(this.persianDate);
    console.log(this.gregorianDate);

    if( moment(this.persianDate).isValid()){
     // this.gregorianDate = moment.from(this.persianDate,'en', 'YYYY/MM/DD').format('YYYY/MM/DD');
      return;
    }
    if(this.gregorianDate ===''){
      this.gregorianDate =new Date().toISOString().substr(0,10);
    }

    this.persianDate = moment(this.gregorianDate).format('jYYYY/jMM/jDD');
  
    console.log(this.persianDate);
    console.log(this.gregorianDate);

  }    
}
</script>

