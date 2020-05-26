export interface EventProps {
  name: string;
  image: string;
  location: any;
  description: string;
  startDate: string;
  endDate: string;
  slug: string;
  eventType: string;
  ticketTypes: TicketProps[];
}

export interface TicketProps {
  ticketName: string;
  quantity: number;
  price: number;
  _id: number;
  description: string;
  enabled: boolean;
}

export interface EventCartProps {
  price: number;
  quantity: number;
  ticketName: string;
}
