import { Artist } from './artist.interface';

export interface Events {
  title: string;
  date: string;
  venue: string;
  description: string;
  lineup: Artist[];
  poster_url: string;
  ticket_price_vip: string;
  ticket_price_normal: string;
}
