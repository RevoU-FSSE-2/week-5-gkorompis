console.log('week3');

const switchMode = (start)=>{
console.log('switched mode');
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    let dark_mode = rs.getPropertyValue('--dark-mode');
    let bg_color = rs.getPropertyValue('--bg-color');
    let logo =  document.getElementById("app-logo");
    let logo_source =  document.getElementById("app-logo-source");
    let toggle_span = document.getElementById('toggle-span');
    try {
        let check = localStorage.isDark;
        let count = localStorage.count;
        if(check) {
            if (start == 1){
                check = +check == 1 ? 0 : 1;
                console.log(start, 'start');
            }
            console.log('current check:', check)
            dark_mode = check ;
            localStorage.count = count + 1;
            console.log(localStorage.count);
        }
        if(!+dark_mode){
        toggle_span.style.transform ='translateX(33px)';
        console.log(bg_color);
        r.style.setProperty('--bg-color', '#333')
        r.style.setProperty('--dark-mode', '1')
        r.style.setProperty('--text-font-color', '#bfc74d')
        r.style.setProperty('--banner-font-color', '#333')
        r.style.setProperty('--banner-bg-color', '#bfc74d')
        logo.setAttribute('src', './assets/index/cd-invert.png')
        logo_source.setAttribute('srcset', './assets/index/cd-invert-lower.png')
        localStorage.isDark = 1;
    } else {
        toggle_span.style.transform ='translateX(0px)';
        r.style.setProperty('--bg-color', '#bfc74d')
        r.style.setProperty('--dark-mode', '0')
         r.style.setProperty('--text-font-color', '#333')
        r.style.setProperty('--banner-font-color', '#bfc74d')
        r.style.setProperty('--banner-bg-color', '#333') 
        logo.setAttribute('src', './assets/index/cd-black.png');
        logo_source.setAttribute('srcset', './assets/index/cd-black-lower.png')
        localStorage.isDark = 0;
    }
    } catch(err){
        alert('error:', err)
    }   
};

//span on click:
document.getElementById('toggle-span').addEventListener('click', switchMode );

switchMode(1);