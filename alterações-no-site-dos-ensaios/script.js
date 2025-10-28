function procurar() {
    var busca = document.getElementById('dia').value 
    var res = document.querySelector('div#res')
    var b = busca.toLowerCase()
    
        //alterar o IF usando a var B e criar apenas 2 = '1 sexta' e 'primeira sexta' em todos
        //o toLowerCase vai pegar e entrada do user e vai transoformar tudo em minuscula.

    if (b == '1 sexta' || b == 'primeira sexta') {
        res.innerHTML = `<p><strong>1ª Sexta - Hora: 19:30</strong></p>
                         <p>Jd. Liberdade<br>Marialva - Central<br>Jd. Nova Aliança (SDI)<br>Jd. Nova Independência (SDI)<br>Pulinópolis (MÇU)<br>
                         Cafeara (JTÃ)<br>Jd. Pioneiro (PDU)</p>`; 

    } else if (b == '2 sexta' || b == 'segunda sexta') {
        res.innerHTML = `<p><strong>2ª Sexta - Hora: 19:30</strong></p>
                         <p>Jd. Catedral<br>Jd. Piatã<br>Jd. Ebenezer<br>Jd. Montreal - Indiaiá<br>Jd. Olímpico<br>Vila Guardiana (MÇU)<br>
                         Jd. Ouro Verde II (SDI)<br>Jd. das Torres (SDI)<br>Jaguapirã - Central<br>Conj. João de Barros (MVA)<br>Àgua Boa - Central</p>`;  

    } else if (b == '3 sexta' || b == 'terceira sexta') {
        res.innerHTML = `<p><strong>3ª Sexta - Hora: 19:30</strong></p>
                         <p>Conj. Guaiapó<br>Jd. Ouro Cola<br>Maringá Velho<br>Pq. Residencial Tuiuti<br>Vila Operária<br>Pq. Tarumã (Os ensaios serão na igreja Jd. Catedral)<br>Residencial São José (SDI)<br>Miraselva (JTÃ)<br>
                         Dr. Camargo - Central<br>Sarandi - Central<br>Jd. São Rafael (MÇU)<br>São Miguel do Cambuí (MVA) 1<br>Aquidaban (MVA)</p>`; 

    } else if (b == '4 sexta' || b == 'quarta sexta') {
        res.innerHTML = `<p><strong>4ª Sexta - Hora: 19:30</strong></p>
                         <p>Conj. Requião<br>Conj. Giacomo Colombari (MVA)<br>Vale Azul (SDI)<br>Guaraci (JTÃ)<br>Floriano - Central</p>`;  

    } else if (b == 'ultima sexta'|| b == 'última sexta') {
        res.innerHTML = `<p><strong>Última Sexta - Hora: 19:30</strong></p>
                         <p>Vila Morangueira<br>Jd. Continental (Os ensaios serão na igreja Pq. Hortência)<br>Vila Santa Isabel<br>Jd. Esperança (SDI)<br>Floresta - Central<br>
                         Ourizona - Central<br>Prado Ferreira (JTÃ)</p>`;  

    } else if (b == '3 domingo' || busca == 'terceiro domingo' || b == 'domingo') {
        res.innerHTML = `<p><strong>3ª Domingo - Hora: 17:00</strong></p>
                         <p>Pq. Avenida</p>`;  

    } else if (b == '2 segunda' || b == 'segunda segunda') {
        res.innerHTML = `<p><strong>2ª Segunda - Hora: 19:30</strong></p>
                         <p>Jd. Bertioga<br>Jardim Monte Rei<br>Jardim Vitória<br>Loteamento Sumaré<br>Parque Itaipú<br>Jardim Europa (MÇU)<br>Res. Monte Carmelo (PDU)<br>
                         São Jorge do Ivai - Central</p>`; 

    } else if (b == '3 segunda' || b == 'terceira segunda') {
        res.innerHTML = `<p><strong>3ª Segunda - Hora: 19:30</strong></p>
                         <p>Jd. Verônica<br>Pq. Hortência 1ª Parte<br>Vila Santo Antônio<br>Jd. Bela Vista (Antigo Oriental) - (Os ensaios serão na igreja Jd. Oriental)
                         <br>Mandaguaçu - Central<br>Santa Fé (MVA)<br>Paiçandu - Central<br>Jd. Panorama (SDI)<br>Cj. Res. Floresta (SDI)<br>Bentópolis (JTÃ)</p>`;  

    } else if (b == '4 segunda' || b == 'quarta segunda') {
        res.innerHTML = `<p><strong>4ª Segunda - Hora: 19:30</strong></p>
                         <p>Maringá - Central<br>Jd. Oriental (Antigo Diamante)<br>Jd. Alvorada<br>Iguatemi<br>Pq. Alvamar (SDI)<br>Jd. Bela Vista (PDU)</p>`;  

    } else if (b == 'ultima segunda'|| b == 'última segunda') {
        res.innerHTML = `<p><strong>Última Segunda - Hora: 19:30</strong></p>
                         <p>Jd. Universo<br>Pq. Das Laranjeiras<br>Ivatuba - Central<br>Itambé - Central<br>Jd. Independencia 3°Parte (SDI)<br>São Luiz (MVA)</p>`; 

    }  else if (b == '') {
        res.innerHTML = `<p><strong>1ª Sexta - Hora: 19:30</strong></p>
                            <p>Jd. Liberdade<br>Marialva - Central<br>Jd. Nova Aliança (SDI)<br>Jd. Nova Independência (SDI)<br>Pulinópolis (MÇU)<br>Cafeara (JTÃ)<br>
                            Jd. Pioneiro (PDU)</p>
                        <p><strong>2ª Sexta - Hora: 19:30</strong></p>
                            <p>Jd. Catedral<br>Jd. Piatã<br>Jd. Ebenezer<br>Jd. Montreal - Indiaiá<br>Jd. Olímpico<br>Vila Guardiana (MÇU)<br>Jd. Ouro Verde II (SDI)<br>
                            Jd. das Torres (SDI)<br>Jaguapirã - Central<br>Conj. João de Barros (MVA)<br>Àgua Boa - Central</p>
                        <p><strong>3ª Sexta - Hora: 19:30</strong></p>
                            <p>Conj. Guaiapó<br>Jd. Ouro Cola<br>Maringá Velho<br>Pq. Residencial Tuiuti<br>Vila Operária<br>Pq. Tarumã (Os ensaios serão na igreja Jd. Catedral)
                            <br>Residencial São José (SDI)<br>Miraselva (JTÃ)<br>Dr. Camargo - Central<br>Sarandi - Central<br>Jd. São Rafael (MÇU)<br>
                            São Miguel do Cambuí (MVA) 1<br>Aquidaban (MVA)</p> 
                        <p><strong>4ª Sexta - Hora: 19:30</strong></p>
                            <p>Conj. Requião<br>Conj. Giacomo Colombari (MVA)<br>Vale Azul (SDI)<br>Guaraci (JTÃ)<br>Floriano - Central</p>
                        <p><strong>Última Sexta - Hora: 19:30</strong></p>
                            <p>Vila Morangueira<br>Jd. Continental (Os ensaios serão na igreja Pq. Hortência)<br>Vila Santa Isabel<br>Jd. Esperança (SDI)<br>
                            Floresta - Central<br>Ourizona - Central<br>Prado Ferreira (JTÃ)</p>
                        <p><strong>3ª Domingo - Hora: 17:00</strong></p>
                            <p>Pq. Avenida</p>
                        <p><strong>2ª Segunda - Hora: 19:30</strong></p>
                            <p>Jd. Bertioga<br>Jardim Monte Rei<br>Jardim Vitória<br>Loteamento Sumaré<br>Parque Itaipú<br>Jardim Europa (MÇU)<br>Res. Monte Carmelo (PDU)<br>
                            São Jorge do Ivai - Central</p>
                        <p><strong>3ª Segunda - Hora: 19:30</strong></p>
                            <p>Jd. Verônica<br>Pq. Hortência 1ª Parte<br>Vila Santo Antônio<br>Jd. Bela Vista (Antigo Oriental) - (Os ensaios serão na igreja Jd. Oriental)
                            <br>Mandaguaçu - Central<br>Santa Fé (MVA)<br>Paiçandu - Central<br>Jd. Panorama (SDI)<br>Cj. Res. Floresta (SDI)<br>Bentópolis (JTÃ)</p>
                        <p><strong>4ª Segunda - Hora: 19:30</strong></p>
                            <p>Maringá - Central<br>Jd. Oriental (Antigo Diamante)<br>Jd. Alvorada<br>Iguatemi<br>Pq. Alvamar (SDI)<br>Jd. Bela Vista (PDU)</p>
                        <p><strong>Última Segunda - Hora: 19:30</strong></p>
                            <p>Jd. Universo<br>Pq. Das Laranjeiras<br>Ivatuba - Central<br>Itambé - Central<br>Jd. Independencia 3°Parte (SDI)<br>São Luiz (MVA)</p>`; 

    } else if (b == 'segunda'){
        res.innerHTML = `<p><strong>2ª Segunda - Hora: 19:30</strong></p>
                            <p>Jd. Bertioga<br>Jardim Monte Rei<br>Jardim Vitória<br>Loteamento Sumaré<br>Parque Itaipú<br>Jardim Europa (MÇU)<br>Res. Monte Carmelo (PDU)
                            <br>São Jorge do Ivai - Central</p> 
                        <p><strong>3ª Segunda - Hora: 19:30</strong></p>
                            <p>Jd. Verônica<br>Pq. Hortência 1ª Parte<br>Vila Santo Antônio<br>Jd. Bela Vista (Antigo Oriental) - (Os ensaios serão na igreja Jd. Oriental)
                            <br>Mandaguaçu - Central<br>Santa Fé (MVA)<br>Paiçandu - Central<br>Jd. Panorama (SDI)<br>Cj. Res. Floresta (SDI)<br>Bentópolis (JTÃ)</p>  
                        <p><strong>4ª Segunda - Hora: 19:30</strong></p>
                            <p>Maringá - Central<br>Jd. Oriental (Antigo Diamante)<br>Jd. Alvorada<br>Iguatemi<br>Pq. Alvamar (SDI)<br>Jd. Bela Vista (PDU)</p>
                        <p><strong>Última Segunda - Hora: 19:30</strong></p>
                            <p>Jd. Universo<br>Pq. Das Laranjeiras<br>Ivatuba - Central<br>Itambé - Central<br>Jd. Independencia 3°Parte (SDI)<br>São Luiz (MVA)</p>`;  
    } else if (b == 'sexta') {
        res.innerHTML = `<p><strong>1ª Sexta - Hora: 19:30</strong></p>
                            <p>Jd. Liberdade<br>Marialva - Central<br>Jd. Nova Aliança (SDI)<br>Jd. Nova Independência (SDI)<br>Pulinópolis (MÇU)<br>Cafeara (JTÃ)<br>
                            Jd. Pioneiro (PDU)</p>
                        <p><strong>2ª Sexta - Hora: 19:30</strong></p>
                            <p>Jd. Catedral<br>Jd. Piatã<br>Jd. Ebenezer<br>Jd. Montreal - Indiaiá<br>Jd. Olímpico<br>Vila Guardiana (MÇU)<br>Jd. Ouro Verde II (SDI)
                            <br>Jd. das Torres (SDI)<br>Jaguapirã - Central<br>Conj. João de Barros (MVA)<br>Àgua Boa - Central</p>
                        <p><strong>3ª Sexta - Hora: 19:30</strong></p>
                            <p>Conj. Guaiapó<br>Jd. Ouro Cola<br>Maringá Velho<br>Pq. Residencial Tuiuti<br>Vila Operária<br>
                            Pq. Tarumã (Os ensaios serão na igreja Jd. Catedral)<br>Residencial São José (SDI)<br>Miraselva (JTÃ)<br>Dr. Camargo - Central<br>
                            Sarandi - Central<br>Jd. São Rafael (MÇU)<br>São Miguel do Cambuí (MVA) 1<br>Aquidaban (MVA)</p> 
                        <p><strong>4ª Sexta - Hora: 19:30</strong></p>
                            <p>Conj. Requião<br>Conj. Giacomo Colombari (MVA)<br>Vale Azul (SDI)<br>Guaraci (JTÃ)<br>Floriano - Central</p>
                        <p><strong>Última Sexta - Hora: 19:30</strong></p>
                            <p>Vila Morangueira<br>Jd. Continental (Os ensaios serão na igreja Pq. Hortência)<br>Vila Santa Isabel<br>Jd. Esperança (SDI)<br>Floresta - Central
                            <br>Ourizona - Central<br>Prado Ferreira (JTÃ)</p>`;
    } else {
        res.innerHTML = `<p><strong>Não tem ensaio este dia</strong></p>`;
    }

   
}
        
console.log('by: Vitor Huçulak, 2025')


/* o else if ( b == '') é para caso a pesquisa seja vazia, ele vai puxar todos os ensaios
Mas se a pesquisa nao for vazia e não for nenhum dia, ele retorna que nao tem ensaio */