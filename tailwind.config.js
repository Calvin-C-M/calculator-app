/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "375px",
        lg: "1440px"
      },
      fontSize: {
        numbers: '32px'
      },
      fontWeight: {
        bold: 700
      },
      colors: {
        background: {
          1: {
            primary: "hsl(222, 26%, 31%)",
            secondary: "hsl(223, 31%, 20%)",
            tertiery: "hsl(224, 36%, 15%)"
          },
          2: {
            primary: "hsl(0, 0%, 90%)",
            secondary: "hsl(0, 5%, 81%)",
            tertiery: "hsl(0, 0%, 93%)"
          },
          3: {
            primary: "hsl(268, 75%, 9%)",
            secondary: "hsl(268, 71%, 12%)"
          },
        },
        keys: {
          1: {
            keyBg: {
              1: "hsl(225, 21%, 49%)",
              2: "hsl(6, 63%, 50%)",
              3: "hsl(30, 25%, 89%)"
            },
            keyShadow: {
              1: "hsl(224, 28%, 35%)",
              2: "hsl(6, 70%, 34%)",
              3: "hsl(28, 16%, 65%)"
            }
          },
          2: {
            keyBg: {
              1: "hsl(185, 42%, 37%)",
              2: "hsl(25, 98%, 40%)",
              3: "hsl(45, 7%, 89%)"
            },
            keyShadow: {
              1: "hsl(185, 58%, 25%)",
              2: "hsl(25, 99%, 27%)",
              3: "hsl(35, 11%, 61%)"
            }
          },
          3: {
            keyBg: {
              1: "hsl(281, 89%, 26%)",
              2: "hsl(176, 100%, 44%)",
              3: "hsl(268, 47%, 21%)"
            },
            keyShadow: {
              1: "hsl(285, 91%, 52%)",
              2: "hsl(177, 92%, 70%)",
              3: "hsl(290, 70%, 36%)"
            }
          },
        },
        txt: {
          white: "hsl(0, 0%, 100%)",
          1: "hsl(221, 14%, 31%)",
          2: "hsl(60, 10%, 19%)",
          3: {
            primary: "hsl(52, 100%, 62%)",
            secondary: "hsl(198, 20%, 13%)"
          }
        }
      }
    },
  },
  plugins: [],
}
