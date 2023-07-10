import React, { useEffect, useState } from 'react';
import { MdEventBusy } from 'react-icons/md';

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

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="h3">Tomorrow Interview</h2>
      </div>

      {interviews.length === 0 ? (
        <div className="text-center">
          <MdEventBusy size={64} color="#ccc" />
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
                <p className="mr-4">{interview.time}</p>
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
