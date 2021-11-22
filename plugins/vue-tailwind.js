import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TRadio,
  TSelect,
} from 'vue-tailwind/dist/components'

const settings = {
  't-radio': {
    component: TRadio,
    props: {
      fixedClasses: 'transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 ' +
        'focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 ' +
        'disabled:cursor-not-allowed',
      classes: 'text-blue-500 border-gray-300',
      variants: {
        error: 'text-red-500 border-red-300',
        success: 'text-green-500 border-green-300'
      }
    }
  },

  't-select': {
    component: TSelect,
    props: {
      fixedClasses: 'block w-full pl-3 pr-10 py-1 transition duration-100 ease-in-out border rounded shadow-sm ' +
        'focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 ' +
        'disabled:cursor-not-allowed text-sm',
      classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
      }
    }
  },
}

Vue.use(VueTailwind, settings)
