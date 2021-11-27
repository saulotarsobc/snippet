/* 11:02:16 - 27/11/21 */

var data = [];

var gatilhos = document.querySelectorAll('.gatilho');

gatilhos.forEach(gatilho => {

    gatilho.addEventListener('input', function() {

        data[gatilho.id] = gatilho.value;

        renderJson(data);

    });

});

/* 11:14:09 - 27/11/21 */
var code_json = document.getElementById('code_json');
var code = "";
var seu_codigo = "";

function renderJson(data) {

    code = `"${data.descricao}": {\n`;
    code += `\t"prefix": "${data.atalho}",\n`;
    code += `\t\t"body": [\n`;

    var seu_codigo = data.seu_codigo;
    var seu_codigoSplit = "";
    var body = "";

    if (seu_codigo = "") {
        seu_codigoSplit = seu_codigo.split("\n");

        seu_codigoSplit.forEach(element => {

            if (element != "") {
                body += `\t\t\t"${element}",\n`;
            }

        });

    }


    code += `${body}\n`;
    code += `\t\t],\n`;
    code += `\t"description": "${data.descricao}"\n`;
    code += `}`;

    code_json.value = code;

}





/*  

"${data.descricao}": {
  "prefix": "${data.atalho}",
  "body": [
    "SNIPPED"
  ],
  "description": "${data.descricao}"
}
  
*/

/*
inputs.forEach(function(field, index) {

    pppoe[field.id] = field.value;

});
*/