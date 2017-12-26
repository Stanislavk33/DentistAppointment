export class DentistRating {
  rated_id: number;
  rater_id: number;
  rate : number;
  comment: string;

  constructor(rated_id: number, rater_id: number, rate: number, comment: string) {
    this.rated_id = rated_id;
    this.rater_id = rater_id;
    this.rate = rate;
    this.comment = comment;
  }
}
