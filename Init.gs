function inicializarProyecto(htmlOutput) {
  return htmlOutput.asTemplate()
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);  
}

function initProyecto() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);  
}

function doGet() {     
    return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);  
}

function buscaContenido(template, callbackname){ 
  var res = new Array();
  res[0] = HtmlService.createTemplateFromFile(template).getRawContent();
  if (callbackname != null) {
    res[1] = callbackname;    
  }
  return res; 
}

function include(filename) {
	return HtmlService.createHtmlOutputFromFile(filename)
    	.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.getContent();
}

function searchContent(template, callbackname) { 
  var res = new Array();
  res[0] = HtmlService.createTemplateFromFile(template).getRawContent();
  if (callbackname != null) {
    res[1] = callbackname;    
  }
  return res; 
}

function getSessionData() {
    Logger.log("getSessionData()");
    var email = Session.getActiveUser().getEmail();
    var date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), Format.date);
    var hr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), Format.time);
    var sheets = JSON.stringify(Sheets);
    return '{"email":"' + email + 
          '","date":"' + date +
          '","time":"' + hr + '"}';
}