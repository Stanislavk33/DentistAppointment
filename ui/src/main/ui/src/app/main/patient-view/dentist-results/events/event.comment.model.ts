export class EventComment {
  eventId: number;
  commenterName: string;
  comment: string;

  constructor(eventId: number, commenterName: string, comment: string) {
    this.eventId = eventId;
    this.commenterName = commenterName;
    this.comment = comment;
  }
}
