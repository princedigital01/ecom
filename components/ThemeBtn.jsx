<<<<<<< HEAD
"use client"

const ThemeBtn = () => {
    
    const theme1 = { 
        mode: "dark", 
        text: "light" 
    };
    const theme2 = { 
        mode: "light", 
        text: "dark" 
    };

    var theme = theme2

    const changeTheme = () => {
        if (theme.mode == "dark") {
            theme = theme2
        } else {
            theme = theme
        }
        console.log(theme.text)
    }

    return (
        <div className="absolute top-3/4 left-3/4">
            <button className="bg-c-primary p-3" onClick={()=>changeTheme}>theme</button>
        </div>
    )
}

=======
"use client"

const ThemeBtn = () => {
    
    const theme1 = { 
        mode: "dark", 
        text: "light" 
    };
    const theme2 = { 
        mode: "light", 
        text: "dark" 
    };

    var theme = theme2

    const changeTheme = () => {
        if (theme.mode == "dark") {
            theme = theme2
        } else {
            theme = theme
        }
        console.log(theme.text)
    }

    return (
        <div className="absolute top-3/4 left-3/4">
            <button className="bg-c-primary p-3" onClick={()=>changeTheme}>theme</button>
        </div>
    )
}

>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
export default ThemeBtn