import * as React from 'react';
import '../../components-story/BookingDiagnosesWidget/booking.css';

const BookingDiagnosesWidget = () => {
  return (
    <iframe
      className='diagnoses-booking-widget'
      src='https://widget.zarezerwuj.pl/757f51d8-6b42-4449-8379-9f99d36367bb'
    />
  );
};

export default BookingDiagnosesWidget;
