var Ene = {

    utils: {

        collisioni: function(box){

            //Se sei orizzontalmente allineato all'oggetto -->
            if (TuoPlayer.y < (box.y + box.height) & (TuoPlayer.y + TuoPlayer.height) > box.y){

                // --> Controlla se ne superi i limiti -->
                if ((TuoPlayer.x + TuoPlayer.width + TuoPlayer.TuaVelocitaOrizzontale) > box.x & TuoPlayer.x + TuoPlayer.TuaVelocitaOrizzontale < (box.x + box.width)){
                   
                    // --> Se si azzera la velocita.
                    TuoPlayer.TuaVelocitaOrizzontale = 0;
                }
            }

            if (TuoPlayer.x < (box.x + box.width) & (TuoPlayer.x + TuoPlayer.width) > box.x){
                
                if ((TuoPlayer.y + TuoPlayer.height + TuoPlayer.TuaVelocitaVerticale) > box.y & TuoPlayer.y + TuoPlayer.TuaVelocitaVerticale < (box.y + box.height)){
                  
                    TuoPlayer.TuaVelocitaVerticale = 0;
                }
            }
        },

        collisioniArrayOggetti: function(box){

            for(let i = 0; i < box.length; i++){

                myGameArea.draw(box[i]);
                Ene.utils.collisioni(box[i]);
            }
        },

        collisioniBordi: function() {

            if (TuoPlayer.x + TuoPlayer.TuaVelocitaOrizzontale < 0) { //Se stai per toccare il bordo, la velocita diventa 0
                
                TuoPlayer.TuaVelocitaOrizzontale = 0; 
            }

            if (TuoPlayer.y + TuoPlayer.TuaVelocitaVerticale < 0) {
                
                TuoPlayer.TuaVelocitaVerticale = 0; 
            }

            if (TuoPlayer.x + TuoPlayer.width + TuoPlayer.TuaVelocitaOrizzontale > myGameArea.canvas.width) { //Nono superare il bordo del canvas
               
                TuoPlayer.TuaVelocitaOrizzontale = 0; 
            }

            if (TuoPlayer.y + TuoPlayer.height + TuoPlayer.TuaVelocitaVerticale > myGameArea.canvas.height) {
               
                TuoPlayer.TuaVelocitaVerticale = 0; 
            }
        },

        movimento: function() {

            TuoPlayer.TuaVelocitaOrizzontale = TuaVelocitaMovimento * (keyboard.right - keyboard.left); //Vedi Ene.others #2
            TuoPlayer.TuaVelocitaVerticale = TuaVelocitaMovimento * (keyboard.down - keyboard.up);

            //Calcoli relativi al movimento (collisioni, bordi, meccaniche, etc)

            TuoPlayer.x += TuoPlayer.TuaVelocitaOrizzontale; //Sommiamo le velocita alle posizioni del player
            TuoPlayer.y += TuoPlayer.TuaVelocitaVerticale;
        },

        keyboard: { //Oggetto per tenere conto dei tasti premuti, boolean variano a seconda degli event listener (vedi Ene.others #1)
           
            up: false,
            down: false,
            left: false,
            right: false,
            spacebar: false
        }
        
    },

    templates: {
                

        arrayBlocchi: [ //Array

            { // [0]

                width : 50, 
                height : 50, 
                x: 100, 
                y: 100, 
                color: "red"
            },

            { // [1]

                width : 100, 
                height : 100, 
                x: 300, 
                y: 200,
                color: "blue"
            },

            { // [2]

                width : 50, 
                height : 100, 
                x: 500, 
                y: 150,
                color: "green"
            }],

        TuoPlayer: {

            width: 50,
            height: 50,
            x: 100,
            y: 100,
            TuaVelocitaOrizzontale: 0,
            TuaVelocitaVerticale: 0,
            color: "red"
        }
    },

    others: {

        /* #1

        <--- Da mettere fuori dall'oggetto Ene --->

        document.addEventListener('keydown', function(event) {
            switch (event.key) {
                case "ArrowLeft": keyboard.left = true;
                break;
                case "ArrowRight": keyboard.right = true;
                break;
                case "ArrowUp": keyboard.up = true;
                break;
                case "ArrowDown": keyboard.down = true;
                break;
                case " ": keyboard.spacebar = true;
                break;
            }
        });
        
        document.addEventListener('keyup', function(event) {
            switch (event.key) {
                case "ArrowLeft": keyboard.left = false;
                break;
                case "ArrowRight": keyboard.right = false;
                break;
                case "ArrowUp": keyboard.up = false;
                break;
                case "ArrowDown": keyboard.down = false;
                break;
            }
        });

        <--- Da mettere fuori dall'oggetto Ene --->

        */

        /* #2 
        Se destra è vero, quindi è uguale a 1 (true == 1, false == 0), e sinistra è falsa, quindi è uguale a 0,
        il risultato della parentesi è -1. Moltiplicando la velocita di movimento, un attributo di TuoPlayer,
        per il risultato di questa parentesi troviamo la velocita alla quale TuoPlayer si muovera nella direzione 
        scelta, in questo caso sinistra (negativo == sinistra, positivo == destra). */
    }


    // <Ev/>
}
