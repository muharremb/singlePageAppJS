!function(){var t={635:function(t,i,e){const s=e(177),h=e(251),n=e(430),o=e(186);function a(t){this.tileSize=t,this.cakeman=new Image,this.cakeman.src="./images/cakemanClosed.png",this.wall=new Image,this.wall.src="./images/wall.png",this.dot=new Image,this.dot.src="./images/dot.png",this.tiles=[[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],[1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],[1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],[1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,3,0,0,0,1],[1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1],[1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],[1,1,1,1,0,1,2,2,2,2,2,2,2,2,1,0,1,1,1,1],[1,1,1,1,0,1,2,1,1,1,1,1,1,2,1,0,1,1,1,1],[2,2,7,2,0,2,2,1,1,1,1,1,1,2,2,0,2,2,2,2],[1,1,1,1,0,1,2,1,1,1,1,1,1,2,1,0,1,1,1,1],[1,1,1,1,0,1,2,2,2,2,2,2,2,2,1,0,1,1,1,1],[1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],[1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],[1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1],[1,0,0,0,6,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1],[1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],[1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],[1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],this.ghostNode=null}a.prototype.setCanvas=function(t){t.width=this.tiles[0].length*this.tileSize,t.height=this.tiles.length*this.tileSize},a.prototype.draw=function(t,i){for(let i=0;i<this.tiles.length;i++)for(let e=0;e<this.tiles[i].length;e++){let s=this.tiles[i][e];1===s?this.drawWall(t,e,i,this.tileSize):0===s?this.drawDot(t,e,i,this.tileSize):2===s&&this.drawEmpty(t,e,i,this.tileSize)}t.clearRect(0,0,480,24),t.font="16px Comic Sans MS",t.fillStyle="white",t.fillText(`Score: ${i.score}`,30,18),t.fillText(`Countdown: ${i.timeLeft}`,360,18)},a.prototype.drawDot=function(t,i,e,s){t.drawImage(this.dot,i*this.tileSize,e*this.tileSize,s,s)},a.prototype.drawWall=function(t,i,e,s){t.drawImage(this.wall,i*this.tileSize,e*this.tileSize,s,s)},a.prototype.drawEmpty=function(t,i,e,s){t.fillStyle="black",t.fillRect(i*this.tileSize,e*this.tileSize,s,s)},a.prototype.getCakeman=function(){for(let t=0;t<this.tiles.length;t++)for(let i=0;i<this.tiles[t].length;i++)if(7===this.tiles[t][i])return this.tiles[t][i]=0,new s({position:[i*this.tileSize,t*this.tileSize],size:this.tileSize,tileMap:this})},a.prototype.getGhost=function(){for(let t=0;t<this.tiles.length;t++)for(let i=0;i<this.tiles[t].length;i++){let e=this.tiles[t][i];if(3===e){this.tiles[t][i]=0;let e=new h({position:[i*this.tileSize,t*this.tileSize],size:this.tileSize,tileMap:this,id:3});return this.ghostNode=new n({position:[t,i]}),e}if(4===e)return this.tiles[t][i]=0,new h({position:[i*this.tileSize,t*this.tileSize],size:this.tileSize,tileMap:this,id:4});if(5===e)return this.tiles[t][i]=0,new h({position:[i*this.tileSize,t*this.tileSize],size:this.tileSize,tileMap:this,id:5});if(6===e)return this.tiles[t][i]=0,new h({position:[i*this.tileSize,t*this.tileSize],size:this.tileSize,tileMap:this,id:6})}},a.prototype.didCollidedWithEnv=function(t,i,e){if(null!==typeof e){if(Number.isInteger(t/this.tileSize)&&Number.isInteger(i/this.tileSize)){let s=0,h=0,n=0,a=0;switch(e){case o.right:n=t+this.tileSize,s=n/this.tileSize,h=i/this.tileSize;break;case o.left:n=t-this.tileSize,s=n/this.tileSize,h=i/this.tileSize;break;case o.up:a=i-this.tileSize,h=a/this.tileSize,s=t/this.tileSize;break;case o.down:a=i+this.tileSize,h=a/this.tileSize,s=t/this.tileSize}if(1===this.tiles[h][s])return!0}return!1}},a.prototype.removeDot=function(t,i){const e=i/this.tileSize,s=t/this.tileSize;return!(!Number.isInteger(e)||!Number.isInteger(s)||0!==this.tiles[e][s]||(this.tiles[e][s]=2,0))},a.prototype.buildTree=function(t,i){let e=0,s=Math.floor(t.x/24),h=Math.floor(t.y/24),a=new n({position:[s,h]}),l=Math.floor(i.x/24),r=Math.floor(i.y/24),c=[];c.push(a);let p=!1,d=[];for(;c.length&&!p;){let t=c.shift(),i=t.x,s=t.y;if(1!==this.tiles[i+1][s]&&void 0!==this.tiles[i+1]){var u=new n({position:[i+1,s]});if(!d.includes(u)&&(c.push(u),d.push(u),t.addChild(u),u.assignParent(t),i+1===l&&s===r)){p=!0;break}}if(1!==this.tiles[i][s+1]&&void 0!==this.tiles[i][s+1]&&(u=new n({position:[i,s+1]}),!d.includes(u)&&(c.push(u),d.push(u),t.addChild(u),u.assignParent(t),i===l&&s+1===r))){p=!0;break}if(1!==this.tiles[i-1][s]&&void 0!==this.tiles[i-1]&&(u=new n({position:[i-1,s]}),!d.includes(u)&&(c.push(u),d.push(u),t.addChild(u),u.assignParent(t),i-1===l&&s===r))){p=!0;break}if(1!==this.tiles[i][s-1]&&void 0!==this.tiles[i][s-1]&&(u=new n({position:[i,s-1]}),!d.includes(u)&&(c.push(u),d.push(u),t.addChild(u),u.assignParent(t),i===l&&s-1===r))){p=!0;break}if(e+=1,100===e)return 777}let m=d[d.length-1],g=[m],f=m;for(;f.parent!==a;)g.push(f),f=f.parent;let y=g[g.length-1];return y.x===a.x?y.y>=a.y?o.down:o.up:y.y===a.y?y.x>=a.x?o.right:o.left:void 0},a.prototype.gameOverScreen=function(t,i){t.font="20px Comic Sans MS",t.fillStyle="white",t.fillText("Game Over",185,296),t.fillText(`Score: ${i.score}`,196,320)},a.prototype.winScreen=function(t,i){t.font="20px Comic Sans MS",t.fillStyle="white",t.fillText("You win!",185,296),t.fillText(`Score: ${i.score}`,196,320)},t.exports=a},177:function(t,i,e){const s=e(186);function h(t){this.x=t.position[0],this.y=t.position[1],this.tileSize=t.size,this.velocity=2,this.tileMap=t.tileMap,this.currentMovingDirection=null,this.requestedMovingDirection=null,this.animateTimer=null,this.animateDefault=10,this.rotation={right:0,down:1,left:2,up:3},this.cakemanRotation=this.rotation.right,this.dotsLeft=0,this.hasMoved=!1,this.score=0,this.timeLeft=120,document.addEventListener("keydown",this.keydown.bind(this)),this.loadCakemanImages()}h.prototype.draw=function(t){this.move(),this.animate(),this.removeDot();let i=this.tileSize/2;t.save(),t.translate(this.x+i,this.y+i),t.rotate(90*this.cakemanRotation*Math.PI/180),t.drawImage(this.cakemanImages[this.cakemanImageIndex],-i,-i,this.tileSize,this.tileSize),t.restore()},h.prototype.timer=function(){let t=setInterval((i=>{this.timeLeft<0&&clearInterval(t),this.timeLeft-=1}),1e3)},h.prototype.move=function(){if(this.currentMovingDirection!==this.requestedMovingDirection&&this.x%this.tileSize==0&&this.y%this.tileSize==0&&(this.tileMap.didCollidedWithEnv(this.x,this.y,this.requestedMovingDirection)||(this.currentMovingDirection=this.requestedMovingDirection)),this.tileMap.didCollidedWithEnv(this.x,this.y,this.currentMovingDirection))return this.animateTimer=null,void(this.cakemanImageIndex=0);switch(this.currentMovingDirection&&!this.animateTimer&&(this.animateTimer=this.animateDefault),this.currentMovingDirection){case s.up:this.y-=this.velocity,this.cakemanRotation=this.rotation.up;break;case s.down:this.y+=this.velocity,this.cakemanRotation=this.rotation.down;break;case s.left:this.x-=this.velocity,this.x<12&&(this.x=23*this.tileMap.tiles[0].length),this.cakemanRotation=this.rotation.left;break;case s.right:this.x+=this.velocity,this.x>=23*this.tileMap.tiles[0].length&&(this.x=0),this.cakemanRotation=this.rotation.right}},h.prototype.loadCakemanImages=function(){const t=new Image;t.src="./images/cakemanClosed.png";const i=new Image;i.src="./images/cakemanHalfOpen.png";const e=new Image;e.src="./images/cakemanFullOpen.png";const s=new Image;s.src="./images/cakemanHalfOpen.png",this.cakemanImages=[t,i,e,s],this.cakemanImageIndex=0},h.prototype.keydown=function(t){const i=[38,40,37,39];i.includes(t.keyCode)&&!this.hasMoved&&this.timer(),i.includes(t.keyCode)&&(this.hasMoved=!0),38===t.keyCode&&(this.currentMovingDirection===s.down&&(this.currentMovingDirection=s.up),this.requestedMovingDirection=s.up),40===t.keyCode&&(this.currentMovingDirection===s.up&&(this.currentMovingDirection=s.down),this.requestedMovingDirection=s.down),37===t.keyCode&&(this.currentMovingDirection===s.right&&(this.currentMovingDirection=s.left),this.requestedMovingDirection=s.left),39===t.keyCode&&(this.currentMovingDirection===s.left&&(this.currentMovingDirection=s.right),this.requestedMovingDirection=s.right)},h.prototype.animate=function(){this.animateTimer&&(this.animateTimer-=1,0===this.animateTimer&&(this.animateTimer=this.animateDefault,this.cakemanImageIndex+=1,this.cakemanImageIndex===this.cakemanImages.length&&(this.cakemanImageIndex=0)))},h.prototype.removeDot=function(){this.tileMap.removeDot(this.x,this.y)&&(this.score+=1)},t.exports=h},273:function(t,i,e){const s=e(635);function h(t){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.tileSize=24,this.velocity=2}e(177),h.prototype.setCanvasSize=function(){this.tileMap.setCanvas(this.canvas)},h.prototype.start=function(){this.tileMap=new s(this.tileSize),this.cakeman=this.tileMap.getCakeman(),this.ghost=this.tileMap.getGhost(),this.blueGhost=this.tileMap.getGhost(),this.purpleGhost=this.tileMap.getGhost(),this.pinkGhost=this.tileMap.getGhost(),this.setCanvasSize(),this.myInterval=setInterval(this.gameIter.bind(this),15)},h.prototype.stop=function(){clearInterval(this.myInterval)},h.prototype.gameIter=function(){this.isLost()||(this.tileMap.draw(this.ctx,this.cakeman),this.cakeman.draw(this.ctx),this.ghost.draw(this.ctx,this.pause(),this.cakeman),this.blueGhost.draw(this.ctx,this.pause(),this.cakeman),this.purpleGhost.draw(this.ctx,this.pause(),this.cakeman),this.pinkGhost.draw(this.ctx,this.pause(),this.cakeman))},h.prototype.pause=function(){return!this.cakeman.hasMoved},h.prototype.isLost=function(){return this.cakeman.x<this.ghost.x+16&&this.cakeman.x+16>this.ghost.x&&this.cakeman.y<this.ghost.y+16&&16+this.cakeman.y>this.ghost.y||this.cakeman.x<this.blueGhost.x+16&&this.cakeman.x+16>this.blueGhost.x&&this.cakeman.y<this.blueGhost.y+16&&16+this.cakeman.y>this.blueGhost.y||this.cakeman.x<this.purpleGhost.x+16&&this.cakeman.x+16>this.purpleGhost.x&&this.cakeman.y<this.purpleGhost.y+16&&16+this.cakeman.y>this.purpleGhost.y||this.cakeman.x<this.pinkGhost.x+16&&this.cakeman.x+16>this.pinkGhost.x&&this.cakeman.y<this.pinkGhost.y+16&&16+this.cakeman.y>this.pinkGhost.y||this.cakeman.timeLeft<=-1?(this.tileMap.gameOverScreen(this.ctx,this.cakeman),setTimeout((()=>location.reload()),7e3),!0):(this.isWin()&&this.tileMap.winScreen(this.ctx,this.cakeman),!1)},h.prototype.isWin=function(){return 0===this.tileMap.tiles.flat().filter((t=>0===t)).length},t.exports=h},251:function(t,i,e){const s=e(186),h=e(53);function n(t,i){return t=Math.ceil(t),i=Math.floor(i),Math.floor(Math.random()*(i-t+1))+t}function o(t){this.x=t.position[0],this.y=t.position[1],this.tileSize=t.size,this.velocity=2,this.tileMap=t.tileMap,this.id=t.id,this.movingDirection=n(1,4),this.loadGhostImage()}o.prototype.draw=function(t,i,e){i||(this.changeDirection(e),this.move(e)),t.drawImage(this.ghostImage,this.x,this.y,this.tileSize,this.tileSize)},o.prototype.mockMove=function(t){let i=null,e=null;if(!this.tileMap.didCollidedWithEnv(this.x,this.y,t))return t===s.up?(e=this.y-this.velocity,[this.x,e]):t===s.down?(e=this.y+this.velocity,[this.x,e]):t===s.right?(i=this.x+this.velocity,[i,this.y]):(i=this.x-this.velocity,[i,this.y])},o.prototype.move=function(t){if(!this.tileMap.didCollidedWithEnv(this.x,this.y,this.movingDirection))switch(this.movingDirection){case s.up:this.y-=this.velocity;break;case s.down:this.y+=this.velocity;break;case s.left:this.x-=this.velocity,this.x<12&&(this.x=23*this.tileMap.tiles[0].length);break;case s.right:this.x+=this.velocity,this.x>=23*this.tileMap.tiles[0].length&&(this.x=0)}},o.prototype.changeDirection=function(t){let i=null,e=[];if(this.x%this.tileSize==0&&this.y%this.tileSize==0){for(let i=1;i<5;i++)this.tileMap.didCollidedWithEnv(this.x,this.y,i)||(h.dist(this.mockMove(i),[t.x,t.y]),e.push(i));e=e.filter((t=>t!==5-this.movingDirection)),i=n(1,2)<3?e[Math.floor(Math.random()*e.length)]:h.findDirectionForGhost(this,t,this.tileMap),this.movingDirection=i}},o.prototype.loadGhostImage=function(){this.ghostImage=new Image,3===this.id?this.ghostImage.src="./images/redGhost.png":4===this.id?this.ghostImage.src="./images/blueGhost.png":5===this.id?this.ghostImage.src="./images/purpleGhost.png":6===this.id&&(this.ghostImage.src="./images/pinkGhost.png")},t.exports=o},186:function(t){t.exports={up:4,down:1,left:2,right:3}},430:function(t,i,e){function s(t){this.x=t.position[0],this.y=t.position[1],this.parent=null,this.children=[]}e(635),s.prototype.addChild=function(t){this.children.push(t)},s.prototype.assignParent=function(t){this.parent=t},t.exports=s},53:function(t,i,e){const s=e(186),h={dist(t,i){return Math.sqrt(Math.pow(t[0]-i[0],2)+Math.pow(t[1]-i[1],2))},findDirectionForGhost(t,i,e){let h=Math.abs(t.x-i.x),n=Math.abs(t.y-i.y),o=t.MovingDirection;return h>=n?t.x>=i.x?e.didCollidedWithEnv(t.x,t.y,s.left)||s.left===5-o?e.didCollidedWithEnv(t.x,t.y,s.up)||s.up===5-o?s.down:s.up:s.left:e.didCollidedWithEnv(t.x,t.y,s.right)||s.right===5-o?e.didCollidedWithEnv(t.x,t.y,s.up)||s.up===5-o?s.down:s.up:s.right:t.y>=i.x?e.didCollidedWithEnv(t.x,t.y,s.up)||s.up===5-o?e.didCollidedWithEnv(t.x,t.y,s.right)||s.right===5-o?s.left:s.right:s.up:e.didCollidedWithEnv(t.x,t.y,s.down)||s.down===5-o?e.didCollidedWithEnv(t.x,t.y,s.right)||s.right===5-o?s.left:s.right:s.down}};t.exports=h}},i={};function e(s){var h=i[s];if(void 0!==h)return h.exports;var n=i[s]={exports:{}};return t[s](n,n.exports,e),n.exports}!function(){const t=e(273);document.addEventListener("DOMContentLoaded",(()=>{const i=document.getElementById("game-canvas");new t(i).start()}))}()}();
//# sourceMappingURL=main.js.map