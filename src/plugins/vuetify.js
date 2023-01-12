
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const Theme = {
  dark: true,
  colors: {
    bg: "#1D1026",
    accent: "#E84A45",
    primary: "#AB2343",
    secondary: "#620E30",
    darker: "#370728",
    text: "#ffffff",
    textSecondary: "#faabab",
    secondaryTransparent: "#620E3060",
  }
}

export default createVuetify({
  theme: {
    defaultTheme: "Theme",
    themes: {
      Theme
    }
  },
  icons:{
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})