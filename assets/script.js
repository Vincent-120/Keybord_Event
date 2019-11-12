window.addEventListener('keydown',function change (e){
    let key = e.keyCode;
    
    switch (key) {
        case 48:
            document.getElementById('character').style.backgroundColor ="blue"
            break;
        case 49:
            document.getElementById('character').style.backgroundColor ="yellow"
            break;
        case 50:
            document.getElementById('character').style.backgroundColor ="green"
            break;
        case 51:
            document.getElementById('character').style.backgroundColor ="lightblue"
            break;
        case 52:
            document.getElementById('character').style.backgroundColor ="red"
            break;
        case 53:
            document.getElementById('character').style.backgroundColor ="orange"
            break;
        case 54:
            document.getElementById('character').style.backgroundColor ="purple"
            break;
        case 55:
            document.getElementById('character').style.backgroundColor ="pink"
            break;
        case 56:
            document.getElementById('character').style.backgroundColor ="brown"
            break;
        case 57: 
            document.getElementById('character').style.backgroundColor ="darkblue"
            break;
        default:
                document.getElementById('character').style.backgroundColor ="blue"
            break;
    }
})