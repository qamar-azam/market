export interface ThemeType {
  colors: {
    body: string
    header: string
    text: string
    highlight: string
    link: string
  }

  font: {
    body: '"Open Sans", sans-serif'
    heading: '"Open Sans", sans-serif'
  }
}
export const theme = {
  default: {
    colors: {
      body: "#fafafa",
      text: "#525252",
      highlight: "#1ea4ce",
      link: "#191919",
    },

    font: {
      body: '"Open Sans", sans-serif',
      heading: '"Open Sans", sans-serif',
    },

    header: {
      bgColor: "#1ea4ce",
    },

    footer: {
      txtColor: "#1ea4ce",
    },

    button: {
      txtColor: "#fff",
      bgColor: "#1ea4ce",
    },

    form: {
      background: "#fff",
      label: {
        color: "#525252",
        size: "14px",
      },
      input: {
        background: "transparent",
        border: "#e0e0e0",
      },
    },
  },
}
