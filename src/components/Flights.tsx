import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FlightsPage = () => {
  const frequentFlightsData = [
    {
      id: 1,
      origin: 'New York',
      destination: 'Los Angeles',
      departureDate: '2024-03-15',
      arrivalDate: '2024-03-15',
      numberOfTravelers: 2,
    },
    {
      id: 2,
      origin: 'London ',
      destination: 'Paris',
      departureDate: '2024-03-20',
      arrivalDate: '2024-03-20',
      numberOfTravelers: 1,
    },
    {
      id: 3,
      origin: 'Tokyo',
      destination: 'Seoul',
      departureDate: '2024-03-25',
      arrivalDate: '2024-03-25',
      numberOfTravelers: 3,
    },{
      id: 4,
      origin: 'Paris',
      destination: 'Berlin',
      departureDate: '2024-04-01',
      arrivalDate: '2024-04-01',
      numberOfTravelers: 1,
    },
    {
      id: 5,
      origin: 'Los Angeles',
      destination: 'New York',
      departureDate: '2024-04-05',
      arrivalDate: '2024-04-05',
      numberOfTravelers: 2,
    },
    {
      id: 6,
      origin: 'London',
      destination: 'Rome',
      departureDate: '2024-04-10',
      arrivalDate: '2024-04-10',
      numberOfTravelers: 1,
    },
    {
      id: 7,
      origin: 'Berlin',
      destination: 'Madrid',
      departureDate: '2024-04-15',
      arrivalDate: '2024-04-15',
      numberOfTravelers: 3,
    },
    {
      id: 8,
      origin: 'Sydney',
      destination: 'Tokyo',
      departureDate: '2024-04-20',
      arrivalDate: '2024-04-20',
      numberOfTravelers: 2,
    },
    {
      id: 9,
      origin: 'Seoul',
      destination: 'Shanghai',
      departureDate: '2024-04-25',
      arrivalDate: '2024-04-25',
      numberOfTravelers: 1,
    },
    {
      id: 10,
      origin: 'New York',
      destination: 'Paris',
      departureDate: '2024-05-01',
      arrivalDate: '2024-05-01',
      numberOfTravelers: 2,
    },
  ];
 
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
            <div
              className="absolute inset-0 bg-black opacity-40"
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold md:text-6xl">
              Discover Your Next Adventure
            </h1>
            <p className="mt-4 text-lg">
              Explore amazing destinations and find the best deals for your next trip.
            </p>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <div className={`sticky top-0 z-50 bg-white ${isSticky ? 'shadow-md' : ''}`}>
  <div className="container mx-auto px-4 py-4">
    <p className='text-center mt-4 font-bold text-3xl'>Find Your Flight</p>
    <div className="text-white py-4 px-6 flex justify-center items-center">
      <div className="flex justify-center">
        <input type="text" placeholder="Kathmandu, Nepal" disabled className="mr-4 py-2 px-4 border border-gray-600 text-gray-500 rounded-md focus:outline-none" />
        <input type="text" placeholder="Destination" className="mr-4 py-2 px-4 border border-gray-600 text-gray-500 rounded-md focus:outline-none" />
        <input type="date" placeholder="Departure Date" className="mr-4 py-2 px-4 border border-gray-600 text-gray-500 placeholder-gray-600 rounded-md focus:outline-none" />
        <input type="date" placeholder="Arrival Date" className="mr-4 py-2 px-4 border border-gray-600 text-gray-500 placeholder-gray-600 rounded-md focus:outline-none" />
        <input type="number" placeholder="No of Travellers" className="mr-4 py-2 px-4 border border-gray-600  text-gray-500 rounded-md focus:outline-none" />
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none">Find</button>
      </div>
    </div>
  </div>
</div>


      {/* Tabular List of Frequent Flights */}
      <h2 className="text-center text-3xl font-bold mb-6 mt-6">Frequently Booked Flights</h2>
      <div className="container mx-auto py-12 flex justify-center">
        <div className="w-full max-w-screen-md overflow-hidden shadow-lg rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-500 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Origin</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Departure Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Arrival Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No of Travellers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {frequentFlightsData.map((flight) => (
                  <tr key={flight.id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 text-sm">{flight.origin}</td>
                    <td className="px-6 py-4 text-sm">{flight.destination}</td>
                    <td className="px-6 py-4 text-sm">{flight.departureDate}</td>
                    <td className="px-6 py-4 text-sm">{flight.arrivalDate}</td>
                    <td className="px-6 py-4 text-sm">{flight.numberOfTravelers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightsPage;
