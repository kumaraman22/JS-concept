function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    function toggleTheme() {
        var currentTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    function loadTheme() {
        var theme = localStorage.getItem('theme') || 'light';
        setTheme(theme);
    }
    
    // Initial theme load
    loadTheme();