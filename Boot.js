var Game={};

Game.Boot=function(game){


};

Game.Boot.prototype={

	init:function(){
		this.stage.disableVisibilityChange=true;
	},
	preload:function(){
		this.load.image('preloaderbar','assets/Preloader.png');
	},
	create:function(){
		this.state.start('Preloader')
	}

}