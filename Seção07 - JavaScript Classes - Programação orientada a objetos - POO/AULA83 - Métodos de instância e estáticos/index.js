class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }
     // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }
   // Método estático
    static trocaPilha() { // Quando um método é estatico só consigo acessar ele pela própria classe, e não por suas instancias.
        // Métodos estáticos não tem acesso aos dados da intâncias.
        console.log('Ok, vou trocar');
    }

}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

