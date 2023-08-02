$.lik = (nome,URL,NUMERO) => {
    let telefoneFormatado = NUMERO.replace(/\(|\)|\s|-/g, '');
    let mensagem = `
    Olá, ${nome} ! 
    %0A
    Você tá na Etapa 1 - Teste Disc
    %0A
    A primeira etapa do processo seletivo é a realização de um teste, não tem resposta certa ou errada, é bem tranquilo. Em menos de 5 minutos você responde:
    %0A
    Link do Teste Disc: ${URL}
    `
    window.open(`https://api.whatsapp.com/send?phone=55${telefoneFormatado}&text=${mensagem}`, '_blank');
    }


    javascript: $.lik("&NOME_CANDIDATO.","&URL.","&TELEFONE.");
    
/////////////////////////////////////////////////////////

    let mensagem = `
A Olá, &P35_NOME. !
%0A
%0A
Você foi aprovado na Etapa 01 em nosso processo seletivo.%0A
Agora você está na Etapa 02 onde deverá participar da entrevista presencial:
%0A
%0A
Você está na etapa 02 e nesse processo é preciso comparecer no endereço abaixo:
%0A
%0A
Entrevista para as Vagas na área de: &P35_PROFISSAO.
%0A Segue o endereço da &P35_NOME_EMPRESA. procurar por &P35_GESTOR.
%0A
%0A
🧑🏻‍💻Entrevista &P35_DATA. - as &P35_HORAS. Horas%0A
📍Endereço: &P35_ENDERECO.
%0A
%0A
Dúvidas entrar em contato &P35_TELEFONE_2. - &P35_GESTOR.
`
window.open(`https://api.whatsapp.com/send?phone=55&P35_TELEFONE.&text=${mensagem}`, '_blank'); // Abre uma nova janela do navegador com o link
