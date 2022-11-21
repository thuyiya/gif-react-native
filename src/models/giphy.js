class Giphy {
  constructor(source) {
    const assign = Object.assign({ title: "", url: "", images: {} }, source);
    this.title = assign.title;
    this.url = assign.url;
    this.images = assign.images;
  }

  getThumbnailGif() {
    return this.images?.preview_gif?.url;
  }

  getOriginalGif() {
    return this.images?.original?.url;
  }

  getJpgUrl() {
    if (this.images["480w_still"] && this.images["480w_still"].url) {
      return this.images["480w_still"].url;
    }

    return this.getThumbnailGif();
  }

  getFixedSmallUrl() {
    if (
      this.images.fixed_width_small_still &&
      this.images.fixed_width_small_still.url
    ) {
      return this.images.fixed_width_small_still.url;
    }

    return this.getThumbnailGif();
  }
}

export default Giphy;
