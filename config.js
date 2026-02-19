// InaturaLife Config
// Você usa Hotmart e a regra é: liberar Premium pelo EMAIL DA COMPRA.
// Para validar, o app lê uma planilha pública (Google Sheets) publicada como CSV.
//
// 1) No Google Sheets: Arquivo → Compartilhar → Publicar na web
// 2) Escolha a ABA que tem a coluna de emails e selecione formato CSV
// 3) Copie o link (termina com output=csv) e cole em premiumCsvUrl abaixo.
window.INATURA_CONFIG = {
  appName: "InaturaLife",
  premiumProvider: "Hotmart",
  premiumRule: "email-da-compra",
  premiumCsvUrl: "",
  allowOfflinePremiumIfPreviouslyValidated: true
};
