var Snake = ( function () {

    const INITIAL_TAIL = 4;
    var fixedTail = true;

    var intervaLID;

    var gridSize = 400/tileCount;

    const INITIAL_PLAYER = { x: Math.floor(tileCOunt / 2), y:
Math.floor(tileCount / 2) }

var velocity = { x:0, y:0 };
var player = { x: INITIAL_PLAYER.x, y: INITIAL_PLAYER.y };

var reward = 0;
var points = 0
var pointsMax = 0;

var ActionEnum = { 'none' :0, 'up':1, 'down':2, 'left':3, 'right':4};

Object.freeze(ActionEnum);
var lastAction = ActionEnum.none;

function setup() {
    canv = document.getElementById('gc');
    ctx = canv.getContext('2d');

    game.reset();
}

var game = {

    reset: function () {
        ctx.fillStyle = 'grey';
        ctx.fillRect(0, 0, canv.width, canv.height);
        tail = INITIAL_TAIL;
        points = 0;
        velocity.x = 0;
        velocity.y = 0;
        player.x = INITIAL_PLAYER.x;
        player.y = INITIAL_PLAYER.y;
        // this.RandomFruit();
        reward = -1;

        lastAction = ActionEnum.none;

        trail = [];
        trail.push({ x: player.x, y: player.y });
        // for(var i=0; i<tail; i++) trail.push({ x: player.x, y:player>y });
    },

    action: {
        up: function () {
            if (lastAction != ActionEnum.down){
                velocity.x = 0;
                velocity.y = -1;
            }
        },

        down: function () {
            if (lastAction != ActionEnum.up){
                velocity.x = 0;
                velocity.y = 1;
            }
        },
        left: function () {
            if (lastAction != ActionEnum.right){
                velocity.x = -1;
                velocity.y = 0;
            }
        },
        right: function () {
            if (lastAction != ActionEnum.left){
                velocity.x = 1;
                velocity.y = 0;
            }
        }
    
