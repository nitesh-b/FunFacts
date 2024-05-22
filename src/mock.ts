import { HomeListItemProps } from "./components/HomeListItem";

// Function to generate random data
const generateRandomData = (): HomeListItemProps => {
    const eventNames = [
      'Concert',
      'Conference',
      'Meetup',
      'Workshop',
      'Seminar',
      'Festival',
      'Exhibition',
      'Webinar',
      'Party',
      'Networking Event',
    ];
    const eventAddresses = [
      '123 Main St',
      '456 Elm St',
      '789 Oak St',
      '101 Maple Ave',
      '202 Pine St',
      '303 Cedar St',
      '404 Birch St',
      '505 Walnut St',
      '606 Cherry St',
      '707 Ash St',
    ];
  
    const randomIndex = Math.floor(Math.random() * 10);
    const eventDateTS = Date.now() + Math.floor(Math.random() * 1000000000); // Random future timestamp
    const eventName = eventNames[randomIndex];
    const eventAddress = eventAddresses[randomIndex];
  
    return {
      eventDateTS,
      eventName,
      eventAddress,
    };
  };
  
  // Generate an array of 10 random items
  const generateRandomDataArray = (): HomeListItemProps[] => {
    return Array.from({ length: 5 }, generateRandomData);
  };
  
  export const randomHomeListItemArray = generateRandomDataArray();