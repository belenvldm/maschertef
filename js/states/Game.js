var Jueguin = Jueguin || {};

// Creo las variables del juego
var scoreUno;           // Puntaje del jugador uno
var unoTxt;             // Texto de puntaje jugador uno
var scoreUnoTxt;        // Texto de puntaje jugador uno
var winTxt;             // Texto ganador
var timeTxt;            // Texto time
var elTime;             // Counter
var sarten;             // Sprites de los alimentos
var lechuga;            
var queso;              
var tomate;             
var pan;                
var pan2;               
var bgW;

Jueguin.GameState = {
    init: function() {
        scoreUno = 0;
    },

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);       // Fisica del juego
        this.background = this.add.sprite(0, 0, 'fondo');           // agrego el fondo

        // Textos de puntajes y tiempo
        unoTxt = this.game.add.text(this.game.world.centerX - 690, this.game.world.centerY - 370, 'Puntaje: ', {fontSize: '32px',fill: '#000'});
        scoreUnoTxt = this.game.add.text(this.game.world.centerX - 560, this.game.world.centerY - 370, '0', {fontSize: '32px',fill: '#000'});

        timeTxt = this.game.add.text(this.game.world.centerX + 460, this.game.world.centerY - 370, 'Tiempo: ', {fontSize: '32px',fill: '#000'});
        elTime = this.game.time.events.add(Phaser.Timer.SECOND * 6, theEnd, this);  // Tiempo de juego
        // !Textos de puntajes y tiempo

        sarten = this.sarten = this.game.add.sprite(this.game.world.width - 1160, this.game.world.height - 340, 'sarten');          // agrego la sarten

        // Agrego los sprites de los alimentos y le aplico la fisica
        pan = this.game.add.sprite(this.game.world.width - 800, this.game.world.height - 340, 'pan');
        lechuga = this.game.add.sprite(this.game.world.width - 600, this.game.world.height - 340, 'lechuga');
        tomate = this.game.add.sprite(this.game.world.width - 400, this.game.world.height - 340, 'tomate'); 
        queso = this.game.add.sprite(this.game.world.width - 800, this.game.world.height - 130, 'queso');  
        pan2 = this.game.add.sprite(this.game.world.width - 600, this.game.world.height - 130, 'pan');
     
        this.game.physics.arcade.enable(pan);
        this.game.physics.arcade.enable(pan2);
        this.game.physics.arcade.enable(lechuga);
        this.game.physics.arcade.enable(queso);
        this.game.physics.arcade.enable(tomate);
        this.game.physics.arcade.enable(sarten);
        // !Agrego los sprites de los alimentos

        // Aplico el drag and drop a los alimentos
        pan.inputEnabled = true;
        pan.input.enableDrag();
        pan.events.onDragStop.add(stopDrag, this);
        
        pan2.inputEnabled = true;
        pan2.input.enableDrag();
        pan2.events.onDragStop.add(stopDrag, this);
        
        lechuga.inputEnabled = true;
        lechuga.input.enableDrag();
        lechuga.events.onDragStop.add(stopDrag, this);
        
        tomate.inputEnabled = true;
        tomate.input.enableDrag();
        tomate.events.onDragStop.add(stopDrag, this);
        
        queso.inputEnabled = true;
        queso.input.enableDrag();
        queso.events.onDragStop.add(stopDrag, this);
        // !Aplico el drag and drop a los alimentos

        function theEnd() {
            this.andTheWinnerIs();
            this.render();
        }
        
        // Pausa del juego
        // Agrego texto que sirve como boton para pausra el juego
        pauseButton = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 370, 'Pausar', { font: '28px Arial', fill: '#222' });
        pauseButton.inputEnabled = true;                    // Que sirva como boton
        pauseButton.events.onInputUp.add(function () {
            Jueguin.game.paused = true;                     // Pausar el juego
            pauseButton.text = 'Jugar';                     // Cambia el texto del boton
        });
        
        this.game.input.onDown.add(unpause, self);          // Listener para sacar la pausa
        
        function unpause(){
            if(Jueguin.game.paused) {
                Jueguin.game.paused = false;                // Reanudar el juego
                pauseButton.text = 'Pausar';                // Cambia el texto del boton
            }
        }
    },

    update: function() {
    },

    andTheWinnerIs: function () {
        bgW = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bgWin');
        bgW.anchor.setTo(0.5);
        bgW.scale.setTo(2,2);
        winTxt = Jueguin.game.add.text(Jueguin.game.world.centerX - 300, Jueguin.game.world.centerY, "", {fontSize: '48px',fill: '#fff'});
        winTxt.text = "Fin de tu partida, Tu puntaje es:" + scoreUno + "\n el de Dany es: 500";

        var competencia = localStorage.getItem("competencia");
        fin(competencia, scoreUno);

        Jueguin.game.time.events.add(Phaser.Timer.SECOND * 4, inicio, this);
        function inicio() {
            Jueguin.game.state.start('Menu');
        }
    },

    render: function() {
        timeTxt.text = 'Time: ' + this.game.time.events.duration;
    },
};

function stopDrag() {
    //chequeo si se hace overlap entre los dos sprites
    if(this.game.physics.arcade.overlap(lechuga, sarten)) {
        //si se hace se le suma al puntaje
        scoreUnoTxt.text = scoreUno +=100;

        //se destruye el sprite si el overlap se hace
        lechuga.destroy();
    } else {
        //sino se deja en la posicion original
        lechuga.x = this.game.world.width - 600;
        lechuga.y =  this.game.world.height - 340;
    }

    if (this.game.physics.arcade.overlap(pan, sarten)) {
        scoreUnoTxt.text = scoreUno +=100;
        pan.destroy();
    } else {
        pan.x = this.game.world.width - 800;
        pan.y = this.game.world.height - 340;    
    }


    if (this.game.physics.arcade.overlap(pan2, sarten)) {
        scoreUnoTxt.text = scoreUno +=100;
        pan2.destroy();
    } else {    
        pan2.x = this.game.world.width - 600;
        pan2.y = this.game.world.height - 130;
    }


    if (this.game.physics.arcade.overlap(tomate, sarten)){  
        scoreUnoTxt.text = scoreUno +=100;
        tomate.destroy();
    } else {
        tomate.x = this.game.world.width - 400;
        tomate.y = this.game.world.height - 340;
    }


    if (this.game.physics.arcade.overlap(queso, sarten)) {
        scoreUnoTxt.text = scoreUno +=100;
        queso.destroy();
    } else {
        queso.x = this.game.world.width - 800;
        queso.y = this.game.world.height - 130;
    }

    if (scoreUno == 500) {
        this.andTheWinnerIs();
    }
}