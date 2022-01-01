<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <b-form>
          <b-form-group label="Currency:" v-slot="{ ariaDescribedby }">
            <b-form-radio-group v-model="form.currency">
              <b-form-radio :aria-describedby="ariaDescribedby" value="USD">
                USD
              </b-form-radio>
              <b-form-radio :aria-describedby="ariaDescribedby" value="VND">
                VND
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group label="Salary">
            <b-form-input v-model="form.salary" type="number" />
          </b-form-group>
          <b-form-group label="Number of dependants">
            <b-form-input v-model="form.dependant" type="number" />
          </b-form-group>
        </b-form>
      </b-col>
      <b-col>
        <p>
          Deduction:
          <money-display :amount="deduction" />
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from './typed-vue';
import MoneyDisplay from './components/MoneyDisplay.vue';
import { grossToNet } from './utils/converter';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      form: {
        currency: 'USD',
        dependant: 0,
        salary: 0,
      },
    };
  },

  computed: {
    deduction(): number {
      let salary = this.form.salary * this.$store.state.rate;

      return grossToNet({
        salary,
        noOfDependants: this.form.dependant,
      });
    },
  },
  components: { MoneyDisplay },
});
</script>

<style lang="scss"></style>
