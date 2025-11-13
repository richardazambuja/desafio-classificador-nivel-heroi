let nameUser = ["Juan Perez", "Carla Gomes", "Ricardo Linchester"];
nameUser = nameUser[Math.floor(Math.random() * nameUser.length)]; // Seleciona um nome aleatório do array
let experienciaUser = Math.floor(Math.random() * 15000); // Gera um número aleatório entre 0 e 14999

console.log(nameUser + " tem " + experienciaUser + " pontos de experiência.");

if (experienciaUser < 1000) {
    console.log(nameUser + "É ferro");
}

else if (experienciaUser >= 1001 && experienciaUser <= 2000) {
    onsole.log(nameUser + " é Bronze");
}

else if (experienciaUser >= 2001 && experienciaUser <= 5000) {
    console.log(nameUser + " é Prata");
}

else if (experienciaUser >= 5001 && experienciaUser <= 7000) {
    console.log(nameUser + " é Ouro");
}

else if (experienciaUser >= 7001 && experienciaUser <= 8000) {
    console.log(nameUser + " é Platina");
}

else if (experienciaUser >= 8001 && experienciaUser <= 9000) {
    console.log(nameUser + " é Ascendente");
}

else if (experienciaUser >= 9001 && experienciaUser <= 10000) {
    console.log(nameUser + " é Imortal");
}

else {
    console.log(nameUser + " é Radiante");
}
