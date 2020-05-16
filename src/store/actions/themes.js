export default function toggleTheme(theme, color) {
    return {
        type: 'TOGGLE_THEME',
        theme,
        color
    };
}