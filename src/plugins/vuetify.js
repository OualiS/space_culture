import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.purple,
            secondary: colors.grey.darken1,
            accent: colors.shades.black,
            error: colors.red.accent3,
            background: colors.grey.lighten5
          },
          dark: {
            primary: colors.grey.lighten5,
            secondary : colors.cyan,
            background: colors.grey.darken4,
          },
        },
      },
});
