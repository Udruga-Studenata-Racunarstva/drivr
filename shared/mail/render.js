const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const inlineCss = require('inline-css');

const BASE_PATH = path.join(__dirname, './templates/');

const render = async (templateName, data) => {
  const templatePath = path.join(BASE_PATH, `${templateName}/`, `${templateName}.html`);
  const template = fs.readFileSync(templatePath, 'utf8');

  return inlineCss(template, { url: `file://${templatePath}` })
    .then((html) => handlebars.compile(html)(data));
};

const renderText = (templateName, data) => {
  const templatePath = path.join(BASE_PATH, `${templateName}/`, `${templateName}.txt`);
  const template = fs.readFileSync(templatePath, 'utf8');
  return handlebars.compile(template)(data);
};

module.exports = {
  render, renderText,
};
