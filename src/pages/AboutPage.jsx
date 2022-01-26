import React from 'react';
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const AboutPage = () => {
  return <div>
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback about ur service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">
            {<FaHome size={30} />}

          </Link>
        </p>
      </div>
    </Card>

  </div>;
};

export default AboutPage;
