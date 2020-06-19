export interface EventProps {
  name: string;
  image: string;
  location: {
    venue: string;
    city: string;
    state: string;
    zip: string;
    address: string;
    placeId: string;
  };
  description: string;
  startDate: string;
  organizerId: string;
  tickets: OrderProps[];
  endDate: string;
  slug: string;
  password: string;
  refunds: boolean;
  gross: number;
  listed: boolean;
  eventType: string;
  ticketTypes: {
    [ticketName: string]: TicketProps;
  };
  updatedAt: string;
  publishDate: string;
}

export interface TicketProps {
  ticketName: string;
  quantity: number;
  price: number;
  sold: number;
  _id: number;
  description: string;
  donation: boolean;
  free: boolean;
  ticketEndDate: string;
  enabled: boolean;
  fee: number;
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
  fee: number;
  ticketName: string;
}
