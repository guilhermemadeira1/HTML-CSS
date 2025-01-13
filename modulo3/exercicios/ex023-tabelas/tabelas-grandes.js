 //atualizando total (ao inserir diretamente no html)

    //Array.form converte a coleção de elementos HTML num array, para podeer
    // aplica a função forEach() que executa um bloco de código para cada elementos do array.
    
    let pop_cells = Array.from(document.getElementsByClassName('pop'));
    let pop_total = document.getElementById('total');
    let pop_num = [];
    let tot = 0

    if(pop_cells){
        pop_cells.forEach(
            cell => pop_num.push(parseInt(cell.innerText))
        );
        if(pop_num){
            pop_num.forEach(num => tot+=num);
            pop_total.innerText = tot;
        }
    }
    document.getElementById('insert_button')
        .addEventListener('click',()=>{

             //atualizando criando registro na tabela
            let state_name = document.getElementById('state_input').value;
            let pop_number = document.getElementById('pop_input').value;
            let t_body = document.getElementById('table_body');

            let state = document.createElement('td');
            state.setAttribute('class','state');
            
            let population = document.createElement('td')
            population.setAttribute('class','pop');
            
            state.innerText = state_name;
            population.innerText = pop_number;

            let row = document.createElement('tr');
            row.appendChild(state);
            row.appendChild(population);

            t_body.appendChild(row);

            //atualizando total (ao inserir pelo botão)
            let pop_cells = Array.from(document.getElementsByClassName('pop'));
            let pop_total = document.getElementById('total');
            let pop_num = [];
            let tot = 0

            if(pop_cells){
                pop_cells.forEach(
                    cell => pop_num.push(parseInt(cell.innerText))
                );

                if(pop_num){
                    pop_num.forEach(num => tot+=num);
                    pop_total.innerText = tot;
                }
            }
    });
    document.getElementById('delete_button').addEventListener('click',()=>{
        let rows = document.querySelectorAll('#table_body tr');
        let pop_total = document.getElementById('total');

        for (row of rows){
            row.remove();
        }
        pop_total.innerText = 0;
    });