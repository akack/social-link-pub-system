import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.interface';
import { Events } from '../../models/events.interface';
@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  private selectedLink;
  public vip;
  public normal;
  public basic = false;
  public lineup: Artist[] = [];
  public tempArr: Artist[] = [];
  public eventDetails: Events = {
    poster_url: '',
    title: '',
    date: '',
    venue: '',
    description: '',
    lineup: [],
    ticket_price_vip: '',
    ticket_price_normal: ''
  };
  public  artistName: '';
  public performingTime: '';


  constructor() { }

  ngOnInit() {
    console.log('Line Up: ', this.lineup);
  }
  setradio(e: string): void {
    this.selectedLink = e;

  }

  openModal() {
    this.basic = true;

  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      return false;
    }
    return (this.selectedLink === name);
  }

  submitArtist() {
    const artist: Artist = {
      artist_name: this.artistName,
      performing_time: this.performingTime
    };
    this.basic = false;
    this.lineup.push(artist);
    console.log([...this.lineup]);
    this.artistName = '';
    this.performingTime = '';
  }

  getLine() {
    console.log([...this.lineup]);
    return [...this.lineup];
  }

  submitEvent() {
    this.eventDetails.lineup = this.lineup;
    console.log('Event Details: ', this.eventDetails);
  }

}
