const path = require("path");
const fs = require("fs");

//establishes that the templates are in the template file so that we can grab them easier 
const templatesDir = path.resolve(__dirname, "..");

//this will be a function that determines what kind of employee you have, and renders the apporpriate template based on that 
const render = employees => {
    //creates our html array 
    const html = []
    //determines what kind of employee it is and fires that function for that type 
    html.push(employees.filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager)))
    html.push(employees.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)))
    html.push(employees.filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern)))


    return renderMain(html.join(""))
}

//this will render a manager
const renderManager = manager => {
    //the template will grab the manager template 
    let template = fs.readFileSync(path.resolve(templatesDir, "./lib/manager.html"), "utf8");
    //this will find name in the template and replace it with manager.getName()
    template = replacePlaceholders(template, "getRole", manager["getRole"]);
    template = replacePlaceholders(template, "name", manager["name"]);
    template = replacePlaceholders(template, "id", manager["id"]);
    template = replacePlaceholders(template, "email", manager["email"]);
    template = replacePlaceholders(template, "officeNumber", manager["officeNumber"]);
    return template;
}

const renderEngineer = engineer => {
    //the template will grab the engineer template 
    let template = fs.readFileSync(path.resolve(templatesDir, "./lib/engineer.html"), "utf8");
    //this will find name in the template and replace it with manager.getName()
    template = replacePlaceholders(template, "getRole", engineer["getRole"]);
    template = replacePlaceholders(template, "name", engineer["name"]);
    template = replacePlaceholders(template, "id", engineer["id"]);
    template = replacePlaceholders(template, "email", engineer["email"]);
    template = replacePlaceholders(template, "github", engineer["github"]);
    return template;
}

const renderIntern = intern => {
    //the template will grab the intern template 
    let template = fs.readFileSync(path.resolve(templatesDir, "./lib/intern.html"), "utf8");
    //this will find name in the template and replace it with manager.getName()
    template = replacePlaceholders(template, "getRole", intern["getRole"]);
    template = replacePlaceholders(template, "name", intern["name"]);
    template = replacePlaceholders(template, "id", intern["id"]);
    template = replacePlaceholders(template, "email", intern["email"]);
    template = replacePlaceholders(template, "school", intern["school"]);
    return template;

}

//the regular expression function that finds the placeholder 
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
}

//finds the "teams" template 
const renderMain = html => {
    //this finds the main.html and writes to the piece that says team 
    const template = fs.readFileSync(path.resolve(templatesDir, "./lib/main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

module.exports = render