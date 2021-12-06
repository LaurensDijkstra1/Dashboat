import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TButton,
  TRadio,
  TSelect,
  TTable,
  TInput,
  TTextarea,
  TAlert,
} from 'vue-tailwind/dist/components'

const settings = {
  't-button': {
    component: TButton,
    props: {
      fixedClasses:
        'block px-4 py-1 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 ' +
        'focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-500' +
        'shadow-sm rounded border border-gray-300',
      classes: 'dark:bg-gray-500 dark:text-white',
      variants: {
        primary: 'hover:bg-indigo-800 bg-indigo-700 border-none text-white',
        secondary:
          'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
        error:
          'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
        success:
          'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
        link: 'text-blue-500 underline hover:text-blue-600',
      },
    },
  },

  't-radio': {
    component: TRadio,
    props: {
      fixedClasses:
        'transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 ' +
        'focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 ' +
        'disabled:cursor-not-allowed dark:bg-gray-500',
      classes: 'text-blue-500 border-gray-300',
      variants: {
        error: 'text-red-500 border-red-300',
        success: 'text-green-500 border-green-300',
      },
    },
  },

  't-select': {
    component: TSelect,
    props: {
      fixedClasses:
        'block w-full pl-3 pr-10 py-1 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm dark:bg-gray-500 dark:text-white fill-current dark:text-white',
      classes:
        'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success:
          'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
      },
    },
  },

  't-table': {
    component: TTable,
    props: {
      classes: {
        table:
          'min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border', //"hidden" table duplicates
        thead: 'bg-white divide-gray-200 text-left',
        theadTr: '',
        theadTh:
          'px-3 py-2 font-semibold text-left bg-white dark:bg-gray-600 border-b',
        tbody: 'bg-white divide-y divide-gray-100',
        th: 'px-6 py-3 text-left font-bold text-gray-800 uppercase tracking-wider',
        tr: '',
        td: 'px-3 py-2 whitespace-no-wrap',
        tfoot: '',
        tfootTr: '',
        tfootTd: '',
      },
    },
  },

  't-input': {
    component: TInput,
    props: {
      fixedClasses:
        'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes:
        'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success:
          'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
      },
    },
  },

  't-textarea': {
    component: TTextarea,
    props: {
      fixedClasses:
        'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes:
        'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success:
          'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
      },
    },
  },

  't-alert': {
    component: TAlert,
    props: {
      fixedClasses: {
        wrapper: 'relative flex items-center p-4 border-l-4  rounded shadow-sm',
        body: 'flex-grow',
        close:
          'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        closeIcon: 'fill-current h-4 w-4',
      },
      classes: {
        wrapper: 'bg-blue-50 border-blue-500',
        body: 'text-blue-700',
        close: 'text-blue-500 hover:bg-blue-200',
      },
      variants: {
        danger: {
          wrapper: 'bg-red-50 border-red-500',
          body: 'text-red-700',
          close: 'text-red-500 hover:bg-red-200',
        },
        success: {
          wrapper: 'bg-green-100 border-green-500',
          body: 'text-red-50',
          close: 'text-green-500 hover:bg-green-200',
        },
      },
    },
  },
}

Vue.use(VueTailwind, settings)
