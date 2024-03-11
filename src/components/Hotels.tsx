import React from 'react';

const HotelPage = () => {
  const hotelData = [
    {
        id: 1,
        name: 'Luxury Grand Hotel',
        location: 'New York City',
        price: 320,
        imageUrl: 'https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        name: 'Seaside Resort & Spa',
        location: 'Maldives',
        price: 560,
        imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        name: 'Mountain Lodge Retreat',
        location: 'Swiss Alps',
        price: 480,
        imageUrl: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        name: 'Grand Hotel Europa',
        location: 'Vienna',
        price: 400,
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        name: 'Tropical Paradise Resort',
        location: 'Bali',
        price: 600,
        imageUrl: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        name: 'City View Suites',
        location: 'Dubai',
        price: 750,
        imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        name: 'Cozy Cabin Retreat',
        location: 'Aspen',
        price: 300,
        imageUrl: 'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 8,
        name: 'Seaview Resort & Spa',
        location: 'Phuket',
        price: 500,
        imageUrl: 'https://images.unsplash.com/photo-1573047330191-fb342b1be381?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 9,
        name: 'Mountain Chalet Lodge',
        location: 'Colorado',
        price: 550,
        imageUrl: 'https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 10,
        name: 'Urban Oasis Hotel',
        location: 'Tokyo',
        price: 700,
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 11,
        name: 'Sunny Beach Resort',
        location: 'Cancun',
        price: 800,
        imageUrl: 'https://images.unsplash.com/photo-1562809896-1b1514f40708?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 12,
        name: 'Riverside Inn',
        location: 'Paris',
        price: 450,
        imageUrl: 'https://images.unsplash.com/photo-1594099462046-1df31fd4a66c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 13,
        name: 'Oceanfront Resort',
        location: 'Miami',
        price: 600,
        imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 14,
        name: 'Mountain View Lodge',
        location: 'Aspen',
        price: 800,
        imageUrl: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 15,
        name: 'Coastal Retreat',
        location: 'Sydney',
        price: 700,
        imageUrl: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
      
    
    // Add more hotel data as needed
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Hotel</h1>
          <div className="flex justify-center">
            <input type="text" placeholder="Enter Destination" className="mr-4 py-2 px-4 rounded-lg text-gray-500 focus:outline-none" />
            <input type="date" placeholder="Check-In Date" className="mr-4 py-2 px-4 rounded-lg text-gray-500 focus:outline-none" />
            <input type="date" placeholder="Check-Out Date" className="mr-4 py-2 px-4 rounded-lg text-gray-500 focus:outline-none" />
            <input type="number" placeholder="Guests" className="mr-4 py-2 px-4 rounded-lg text-gray-500 focus:outline-none" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none">Search</button>
          </div>
        </div>
      </section>

      {/* List of Hotels */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Top Hotels</h2>
          <div className="grid grid-cols-10 sm:grid-cols-2 lg:grid-cols-5 gap-8 ">
            {hotelData.map((hotel) => (
              <div key={hotel.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-25 ">
                <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                  <p className="text-gray-700 mb-2">Location: {hotel.location}</p>
                  <p className="text-green-400 font-semibold">Price: ${hotel.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelPage;
