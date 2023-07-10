import React, { useEffect, useState } from 'react';

const UpcomingInterviewPage = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    // Fetch upcoming interview data
    const fetchInterviews = async () => {
      try {
        // Make API request or fetch data from a mock data file
        const response = await fetch('/api/interviews');
        const data = await response.json();
        setInterviews(data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };

    fetchInterviews();
  }, []);

  // Dummy data for demonstration
  const dummyInterviews = [
    {
      id: 1,
      studentName: 'John Doe',
      designation: 'Software Engineer',
      time: '10:00 AM',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      designation: 'UX Designer',
      time: '2:30 PM',
    },
    {
      id: 3,
      studentName: 'Michael Johnson',
      designation: 'Data Analyst',
      time: '4:45 PM',
    },
  ];

  useEffect(() => {
    setInterviews(dummyInterviews);
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="h3">Other Interview</h2>
      </div>

      {interviews.length === 0 ? (
        <div>
          <img src="/no-schedule-icon.png" alt="No Schedule Icon" />
          <h3 className="h5 mt-2">No Interview Schedule for Tomorrow</h3>
        </div>
      ) : (
        interviews.map((interview) => (
          <div className="bg-white p-4 mb-4 rounded shadow" key={interview.id}>
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5">{interview.studentName}</h3>
                <p className="text-muted">{interview.designation}</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="mr-4 mt-4">{interview.time}</p>
                <button className="btn btn-link">View History</button>
                <button className="btn btn-primary ml-4">Join Now</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UpcomingInterviewPage;
