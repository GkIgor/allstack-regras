// Verifica se o navegador suporta a API de instalação de aplicativos da web
if ('getInstalledRelatedApps' in window.navigator) {
  // Verifica se o aplicativo já está instalado
  window.navigator.getInstalledRelatedApps().then(function(apps) {
    if (apps.length > 0) {
      // O aplicativo já está instalado, não exibe a solicitação de instalação
      return;
    }
    // O aplicativo ainda não está instalado, exibe a solicitação de instalação
    var banner = document.createElement('div');
    banner.innerHTML = 'Deseja instalar este aplicativo?';
    var buttonInstall = document.createElement('button');
    buttonInstall.innerText = 'Instalar';
    buttonInstall.addEventListener('click', function() {
      // Inicia o processo de instalação
      window.installPWA();
      banner.remove();
    });
    var buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Não, obrigado';
    buttonCancel.addEventListener('click', function() {
      banner.remove();
    });
    banner.appendChild(buttonInstall);
    banner.appendChild(buttonCancel);
    document.body.appendChild(banner);
  });
}
