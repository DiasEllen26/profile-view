export interface User {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    location: {
      country: string;
    };
    picture: {
      medium: string;
    };
  }
  