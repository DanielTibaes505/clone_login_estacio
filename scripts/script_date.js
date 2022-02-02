const dataSystem = new Date();

const options = {

    dateStyle: "full"

}
let date_finish = dataSystem.toLocaleDateString('pt-BR', options);

document.getElementById('field_date').innerHTML = date_finish;
