function preload() {
  this.hightlight_backgrounds = new hightlight_background();
  this.hightlight_backgrounds.init_image();

  this.music1 = new music();
  this.music1.init_music();
}
function setup() {
  gravity = createVector(0, 0.03);
  this.create_canvas();
  this.hightlight_backgrounds.calculate_image_ratio();
  this.hightlight_backgrounds.initialize_image_parameter();
  this.background_color1 = new background_color(
    this.hightlight_backgrounds.get_parameter()
  );
  this.colour = 0;
  this.snows = new Snow(this.hightlight_backgrounds.get_parameter());

  this.detect_music_amp = new detect_amp();

  this.amp_bars1 = new amp_bars(this.hightlight_backgrounds.get_parameter());
}
function windowResized() {
  this.create_canvas();
  this.hightlight_backgrounds.initialize_image_parameter();
  this.background_color1.init_rectangle_dim(
    this.hightlight_backgrounds.get_parameter()
  );
  this.snows.set_image_param(this.hightlight_backgrounds.get_parameter());
  this.amp_bars1.init_x_and_y(this.hightlight_backgrounds.get_parameter());
}
this.create_canvas = function () {
  createCanvas(window.innerWidth, window.innerHeight);
};
function mousePressed() {
  this.music1.handle_pause_play();
}
function draw() {
  this.detect_music_amp.analyze_music_amps();
  set_colour(this.detect_music_amp.get_total_amps());
  background(this.colour);

  this.hightlight_backgrounds.show_image();
  this.background_color1.show(this.detect_music_amp.get_total_amps());
  this.snows.show();

  this.amp_bars1.show(this.detect_music_amp.get_amps());
}
function set_colour(total_amp) {
  if (total_amp < music_data.bin_value_limit) {
    this.colour = map(total_amp, 0, 65792, 0, 300);
  }
}
