import React, { useEffect, useState } from 'react';
import Card from './Component/card';

function App() {

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched student data:", data);
        setStudent(data);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      {student && (
        <Card 
          id={student.id}
          name={student.name}
          studentClass={student.class}
        />
      )}
    </div>
  );
}

export default App;