/* Semantica dos textos e paragrafos. O script será dividido em blocos para melhor adaptação dos usuarios. Sigam os comentarios para se localizarem. O script será feito utilizando desestruturação para melhor legibilidade e garantir facilidade na manutenção. Disponivel em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/


//Bloco utilizado para configuracao dos spans em textos.
const texto = {
  span: {
    configurarVamos: () => {
      let elemento_vamos = document.getElementById('vamos');
      let X = window.innerWidth;
      if (X < 395) {
        let p = elemento_vamos.innerText.trimStart();
        p = p.charAt(0).toLocaleUpperCase() + p.slice(1);
        elemento_vamos.textContent = p;
      }
    }
  }
}

// Chamando funções no carregamento da pagina.
window.addEventListener('load', texto.span.configurarVamos)
