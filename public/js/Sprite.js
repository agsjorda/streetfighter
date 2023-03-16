class Sprite {
	constructor({ position, imageSrc }) {
		this.position = position;
		this.width = 50;
		this.height = 150;
		this.image = new Image();
	}

	draw() {}

	update() {
		this.draw();
	}
}