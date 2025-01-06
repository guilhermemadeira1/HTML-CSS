
/*
    Promisse é um objeto que representa uma operação executada de forma assincrona 
	e que pode ser concluida com sucesso(resolvida) ou não concluída (rejeitada). 
	A promise deve implementar a lógica de resolução ou rejeição, recebendo os parametros resolve e reject, respectivamente.
    
    Uma promise pode ter 3 estados: pending(pendente), fulfilled(resolvida) ou rejected (rejeitada).
	
	Se a promisse for resolvida, ela chama a função resolve() que retorna um valor passado como argumento. Como um dado de uma requisição.
	
	Se não for resolvida, a promisse será rejeitada pela função reject() que lançará um erro, e opcionalmente, pode receber um valor 
	que informa dados sobre o erro na resolução da promise, como uma mensagem de erro. O erro deverá ser traatdo por um try/catch.
    
    async é a palavra que declara uma função como assincrona. Toda função assincrona
    retorna uma promisse que pode ser resolvida ou não.
    
    await é a palavra declarada dentro de funções assincronas para informar que o programa deve pausar a execução da função 
	até a promise seja resolvida ou rejeitada. Uma função que espera o retorno de uma promise deve ser chamada com o prefixo "await".
    
*/

function criaPromessa(){
    let opcoes = [true, false]
    let aceita = opcoes[Math.round(Math.random())]; //Math.random() retorna um numero quebrado entre 0 e 1.
													//Math.round() arredonda um numero quebrado para o inteiro mais prómixo.
													
    return new Promise((resolve, reject)=>{ //retorna a instancia da promise que implementa a lógica de resolução e rejeição
	
		//aguarda 1 segundo para resolver ou rejeitar a promise com base no valor da variavel "aceita".
        setTimeout(()=>{
             aceita === true? resolve("resolvida") : reject("rejeitada");
        }, 1000);
    });
}
async function lancaPromessa(){
    console.log("Aguardando resposta...");
    try{
        let resposta = await criaPromessa();
        console.log(`A promessa foi ${resposta}`);
    }
    catch(erro){
        console.log(`A promessa foi ${erro}`)
    }
}
lancaPromessa();

