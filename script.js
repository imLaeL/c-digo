    // const nome = document.getElementById("nome").value;
    // const telefone = document.getElementById("tel").value;
    const buttonSalvar = document.getElementById("salvar");
    const buttonMostrar = document.getElementById("mostrar");
    
   

    

    const contato = {
        nome: "",
        telefone: "",
        getNome: function() {return this.nome;},
        getTelefone: function() {return this.telefone;},
        setNome: function(nom) {this.nome = nom;},
        setTelefone: function(tel) {this.telefone = tel;}
    };

    // buttonSalvar.addEventListener("click", function(){
    //     contato.setNome(nome);
    //     contato.setTelefone(telefone);
    //     divResposta.appendChild(elementoResposta);
    // })

    buttonSalvar.addEventListener("click", function() {
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("tel").value;
        contato.setNome(nome);
        contato.setTelefone(telefone);
        const elementoResposta = document.createElement("p");
        const divResposta = document.getElementById("resposta");
        elementoResposta.textContent = "Contato Salvo !";
        divResposta.appendChild(elementoResposta);
    });
    

    buttonMostrar.addEventListener("click", function() {
        const divContato = document.getElementById("contato");
        const paragrafo = document.createElement("p");
        paragrafo.textContent = "nome: " + contato.getNome() + "telefone: " + contato.getTelefone();
        divContato.appendChild(paragrafo);
    })