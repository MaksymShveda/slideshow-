
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		perPage    : 3,
        width: "90%",
		fixedWidth: "33%",
        fixedHeight: "33%",
        perMove: 1,
        rewind: true,
        breakpoints:{
        1500:{
            perPage:2,
            fixedWidth: "49%",
            fixedHeight: "49%"
        },
        800:{
            perPage:1,
            fixedHeight:"95%",
            fixedWidth:"95%"
        }
    }
        
	} ).mount();
} );