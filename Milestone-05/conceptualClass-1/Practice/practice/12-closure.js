function lifeCounter(studentName) {
          let life = 3;
          function counter() {
                    if(life > 0) {
                              life--;
                              console.log(`${studentName} , you lost a life . Lite remaining:${life}`);

                    }
                    else{
                              console.log(`${studentName} , your life is  over! No life left!`);
                    }
          }
          return counter;
}

const rifatAlvi = lifeCounter('Rifat Alvi');
const najiba = lifeCounter('Najiba');
rifatAlvi();
najiba();

rifatAlvi();
rifatAlvi();
najiba()
rifatAlvi();
najiba()
