export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#14b8a6',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#22c55e',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial',
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active, &:focus, :target': {
            boxShadow: '0 0 0 2px #fff, 0 0 0 4px #6366f1',
            borderColor: '#fff'
          },
        },
      }
    },
  },
};