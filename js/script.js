let lightModeActive = true
const lightMode = () => {
    const lightModeButton = document.querySelector('#lightmode-button')
    console.log(lightModeButton)
    lightModeButton.addEventListener('click', (event) => {
        lightModeActive = false
        console.log('click')
        
        const root = document.querySelector(':root');
        rs = getComputedStyle(root);

        const darkColor1 = rs.getPropertyValue('--dark1');
        const darkColor2 = rs.getPropertyValue('--dark2');
        const darkColor3 = rs.getPropertyValue('--dark3');
        const darkColor4 = rs.getPropertyValue('--dark4');
        const darkColor5 = rs.getPropertyValue('--dark5');

        const lightColor1 = rs.getPropertyValue('--light1');
        const lightColor2 = rs.getPropertyValue('--light2');
        const lightColor3 = rs.getPropertyValue('--light3');
        const lightColor4 = rs.getPropertyValue('--light4');
        const lightColor5 = rs.getPropertyValue('--light5');

        if (lightModeActive === true) {
            root.style.setProperty('--dark1', darkColor1);
            root.style.setProperty('--dark2', darkColor2);
            root.style.setProperty('--dark3', darkColor3);
            root.style.setProperty('--dark4', darkColor4);
            root.style.setProperty('--dark5', darkColor5);
        }
        else {
            root.style.setProperty('--light1', lightColor1);
            root.style.setProperty('--light2', lightColor2);
            root.style.setProperty('--light3', lightColor3);
            root.style.setProperty('--light4', lightColor4);
            root.style.setProperty('--light5', lightColor5);

        }
            
    })
}
lightMode()