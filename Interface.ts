// this are the protocols // ios example in ts

// interface takePhoto{}
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

// Interface Story
interface Story {
  createStory(): void;
}

// Implementation of interface TakePhoto
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}
