import Handlebars from 'handlebars';


// Renders handlebars to .html page.
//  id = string (required). #id of the Handlebars template <script> text-align
//  idTarget = string (required). #id of the html element render target
//  context = object. Optional JSON object that provides data to Handlebars
export const renderHandlebars = (id, idTarget, context) => {
  // Retrieve the template data from the HTML.
  const template = document.getElementById(id).innerHTML;

  // Compile the template data into a function
  const templateScript = Handlebars.compile(template);

  const html = templateScript(context);
  // Insert the HTML code into the page
  document.getElementById(idTarget).innerHTML = html;
};

// Register a partial template to the handlebars object.
//  object: required. Format:
//     name: string
//     body: string (template)
export const registerPartial = (object) => {
  Handlebars.registerPartial(object.name, object.body);
};
