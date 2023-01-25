function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date();
    const hora = retornaHora(data);
    console.log(hora);

} catch (error) { // Tratar erro
    // console.log(error);
} finally {
   console.log('Tenha um bom dia!');
}





// try {// É executada quando não há erro
//     console.log('Abrir arquivo.');
//     console.log('Manipulei o arquivo e gerou erro.');
//     console.log('Fechei o arquivo.');

//     try {
//         console.log(b);
//     } catch (error) {
//         console.log('Deu erro');
//     } finally{
//         console.log('Também sou finally');
//     }

// } catch (error) {// É executada quando há erros
//     console.log('Tratando o erro.');
// } finally { // Sempre é executado
//     console.log('FINALLY: Eu sempre sou executado.');
// }