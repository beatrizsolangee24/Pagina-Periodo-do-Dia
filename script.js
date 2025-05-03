function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var titulo = window.document.getElementById('titulo')
    var final = window.document.getElementById('final')

 var hora = 22

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        titulo.innerHTML = 'Periodo: Manhã'
        img.src = './src/manha.svg'
        document.body.style.background = '#AFC6D0'
        titulo.style.color = '#FDE9D0'
         final.style.color = '#A76D5C'

    }else if (hora >=12 && hora < 18){
         titulo.innerHTML = 'Periodo: Tarde'
        img.src = './src/tarde.svg'
         document.body.style.background = '#ECAB82'
          titulo.style.color = '#FDE9D0'
           final.style.color = '#AA4F30'
    }else{
         titulo.innerHTML = 'Periodo: Noite'
        img.src = './src/noite.svg'
         document.body.style.background = '#19253A'
          titulo.style.color = '#FDE9D0'
          final.style.color = '#F3C9A2'
    }
}
