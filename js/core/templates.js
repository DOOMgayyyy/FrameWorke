export * from '../templates/menuTemplate.js';
export * from '../templates/esseTemplate.js';
function Template() {}
Template.prototype.appTemplate = () => '<div data-content="main"></div>';
Template.prototype.menuTemplate = () => { /* HTML меню */ };
Template.prototype.esseTemplate = () => { /* HTML эссе */ };