
        let personagem = document.querySelector("#perso");
        let lista= new Array();
        document.querySelector("#pesquisar").onclick= function(){
            fetch('https://swapi.dev/api/people/'+personagem.value,
       {
           method:"GET",
           header:{}
       })
       
       .then(function(response){
         return response.json();
       })
       .then(function(pessoa){
           lista.push(pessoa)
           
           let tbody = document.getElementById("tbody");
           tbody.innerText = " ";
            _.forEach(lista, function (list) {
                let tr = tbody.insertRow();

                let td_nome = tr.insertCell();
                let td_altura = tr.insertCell();
                let td_peso = tr.insertCell();
                let td_cabelo = tr.insertCell();

                td_nome.innerText = list.name;
                td_altura.innerText = list.height;
                td_peso.innerText = list.mass;
                td_cabelo.innerText = list.hair_color;

            });
             
       });
        return false  
        }
        document.querySelector("#primeiro").onclick = function() {
            let first = _.first(lista);
            let tr = tbody.insertRow();

                let td_nome = tr.insertCell();
                let td_altura = tr.insertCell();
                let td_peso = tr.insertCell();
                let td_cabelo = tr.insertCell();

                td_nome.innerText = first.name;
                td_altura.innerText = first.height;
                td_peso.innerText = first.mass;
                td_cabelo.innerText = first.hair_color;
        }
        document.querySelector("#ultimo").onclick = function() {
            let last = _.last(lista);
            let tr = tbody.insertRow();

                let td_nome = tr.insertCell();
                let td_altura = tr.insertCell();
                let td_peso = tr.insertCell();
                let td_cabelo = tr.insertCell();

                td_nome.innerText = last.name;
                td_altura.innerText = last.height;
                td_peso.innerText = last.mass;
                td_cabelo.innerText = last.hair_color;
        }
        document.querySelector("#nomes").onclick = function() {
            let mapName = _.map(lista, 'name');
            let mapHeight = _.map(lista, 'height');
            let tr = tbody.insertRow();
                let td_nome = tr.insertCell();
                let td_altura = tr.insertCell();
                td_nome.innerText = mapName.join('\n');
                td_altura.innerText = mapHeight.join('\n');
        }
       