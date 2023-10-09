
export class FaceSnap{

  // Pour minimiser le code et avoir la meme chose on peut faire :
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;
  // le point d'interrogation si une variable est optionnelle

  // ou ça

  // constructor(
  //   public title: string,
  //   public description: string,
  //   public createdDate: Date,
  //   public snaps: number,
  //   public imageUrl: string) {
  // }

// Ou bien

  // title : string;
  // description : string;
  // createdDate : Date;
  // snaps : number;
  // imageUrl : string;
  //
  // constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string) {
  //   this.title = title;
  //   this.description = description;
  //   this.createdDate = createdDate;
  //   this.snaps = snaps;
  //   this.imageUrl = imageUrl;
  // }

}
