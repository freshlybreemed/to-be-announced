export interface EventProps {
  name: string;
  image: string;
  location: {
    venue: string;
    address: string;
    placeId: string;
  };
  description: string;
  startDate: string;
  endDate: string;
  slug: string;
  gross: number;
  eventType: string;
  ticketTypes: {
    [ticketName: string]: TicketProps;
  };
}

export interface TicketProps {
  ticketName: string;
  quantity: number;
  price: number;
  sold: number;
  _id: number;
  description: string;
  enabled: boolean;
}

export interface OrderProps {
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  slug: string;
  date: Date;
  total: number;
  cart: {
    [ticketName: string]: EventCartProps;
  };
}

export interface EventCartProps {
  price: number;
  quantity: number;
  ticketName: string;
}
