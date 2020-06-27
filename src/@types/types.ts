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
    lat: number;
    lng: number;
    timeZoneId: string;
  };
  description: string;
  startDate: Date;
  organizerId: string;
  tickets: OrderProps[];
  endDate: Date;
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

export interface UserTicketProps {
  ticketName: string;
  price: number;
  _id: number;
  description: string;
  donation: boolean;
  free: boolean;
  barCode:string;
  fee: number;
  orderId: string;
  checkedIn: boolean;
  checkInDate:Date;
}

export interface OrderProps {
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  slug: string;
  orderDate: Date;
  total: number;
  cart: {
    [ticketName: string]: EventCartProps;
  };
  checkedIn: boolean;
  cancelled: boolean;
  refunded: boolean;
  status: string;
  orderId: string;
}

export interface EventCartProps {
  price: number;
  quantity: number;
  fee: number;
  _id: string;
  ticketNumber:string;
  ticketName: string;
}
