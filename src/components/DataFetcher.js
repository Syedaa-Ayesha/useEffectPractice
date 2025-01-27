import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes') 
      .then((response) => response.json())
      .then((result) => {
        setData(result.quotes); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    return () => {
      console.log('UI unmounted');
    };
  }, []);

  return (
    <div className="container">
      {loading ? (
        <h1>Loading......</h1>
      ) : (
        <div className="data">
          {data && data.length > 0 ? (
            data.map((quote) => (
              <div key={quote.id} className="quote">
                <p>
                  <strong>{quote.author}:</strong> {quote.quote}
                </p>
              </div>
            ))
          ) : (
            <p>No quotes available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
