class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // AM
  start() {
  

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }


  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //AA
  play() {
     this.handleElements();

     Player.gtePlayersInfo();

     if(allPlayers !== undefined){
      image(trak, 0, -height * 5, width, height * 6);

      // 2 Crea un bucle for-in para dar una posicion a cada auto en play()

      var index = 0;
      for (var plr in allPlayers) {
        /* Usa datos de la base de datos para mostrar los autos
        en direccion X y Y */
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index].position.x = x;
        cars[index].position.y = y;
        
        // Agregar 1 a cada indice en cada ciclo
        index = index + 1;
      }

      /* 3 Escribe una condicion para mover el auto hacia arriba 
      dentro de play()*/
      if (keyIsDown(UP_ARROW))  {
        player.positionY += 10;
        player.update();
      }
     
      drawSprites();
     }
    }
  }

