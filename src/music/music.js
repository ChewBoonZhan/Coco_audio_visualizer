class music {
  constructor() {}
  init_music() {
    this.music = loadSound("../src/music/resources/coco_lofi.mp3");
  }
  handle_pause_play() {
    if (this.music.isPlaying()) {
      this.music.stop();
    } else {
      this.music.play();
    }
  }
}
