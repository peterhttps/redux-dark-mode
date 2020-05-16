const INITIAL_STATE = {
    currentTheme: {
        theme: "Light",
        color: "#FFFFFF"
    },
    colors: {
        light: "#FFFFFF",
        dark: "#191919"
    }
    
};

export default function themeReducer(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_THEME') {
        
        return { ...state, currentTheme: { theme: action.theme, color: action.color }  }
    }

    return state;
}