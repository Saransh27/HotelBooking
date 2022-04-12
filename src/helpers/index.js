export const generateBookingKey = ({ room, bookingDate }) =>
  `${room}-${bookingDate.split('-').join('')}`;
