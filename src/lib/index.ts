import { format } from "date-fns";

export const formatDate = (date: Date) => format(date, " ccc. MMMM d, yyyy");

export const formatTime = (date: Date) => format(date, "h:mm a");
