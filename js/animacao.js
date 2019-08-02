	//Endereço do site que tem os códigos e arquivo para instalação https://github.com/scrollreveal/scrollreveal/wiki/Configuration-(v3.x)
		
		//se tirar o {reset: true} o site só ira animar os elemento na primeira vez. 
		//se manter, sempre que passar pelos elementos eles irão apresentar com a animação colocada
		window.sr = ScrollReveal({reset: true});
		sr.reveal('.card-um', {
			origin: 'left',
			distance: '20px',
			duration: 2000,
		});
		sr.reveal('.card-dois', {
			//de qual sentido ele irá aparecer bottom, left, right ou top
			origin: 'bottom',
			
			distance: '20px',
			//duração para o elemento aparecer na tela
			duration: 2000,
			//scala de profundidade com que o elemento vem aparecendo na tela
			scale: 0.1,
			//rotação do elemento
			rotate: { x: 50, y:25, z: 100 }
		});
		sr.reveal('.card-tres', {
			origin: 'right',
			distance: '30px',
			duration: 2000
		});
		sr.reveal('.video-titulo', {
			origin: 'left',
			distance: '30px',
			duration: 2000
		});
		sr.reveal('.video-parag', {
			origin: 'right',
			distance: '50px',
			duration: 2000
		});
		sr.reveal('.video-cont', {
			origin: 'bottom',
			distance: '30px',
			duration: 2000
		});
		sr.reveal('.art-um', {
			origin: 'bottom',
			distance: '30px',
			duration: 2000
		});
		sr.reveal('.art-dois', {
			origin: 'bottom',
			distance: '30px',
			duration: 2000
		});
		sr.reveal('.art-tres', {
			origin: 'bottom',
			distance: '30px',
			duration: 2000
		});