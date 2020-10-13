function bounceOff(){
    if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
        && fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2
        ){
        movingRect.velocityX = (-1) * movingRect.velocityX;
        fixedRect.velocityX = (-1) * fixedRect.velocityX;
        }
        if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
         && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
            movingRect.velocityY = (-1) * movingRect.velocityY;
            fixedRect.velocityY = (-1) * fixedRect.velocityY;
         }
}