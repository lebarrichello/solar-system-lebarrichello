import React from 'react';
import PropTypes from 'prop-types';
import { GoRocket } from 'react-icons/go';
import { PiCalendarCheckBold } from 'react-icons/pi';
import { FiFlag, FiMapPin } from 'react-icons/fi';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="cards_container">
        <div data-testid="mission-card" className="mission-card">

          <div className="icons_container">
            <GoRocket className="icon" />
            <PiCalendarCheckBold className="icon" />
            <FiFlag className="icon" />
            <FiMapPin className="icon" />
          </div>
          <div className="infos_container">
            <p className="infos" data-testid="mission-name">{name}</p>
            <p className="infos" data-testid="mission-year">{year}</p>
            <p className="infos" data-testid="mission-country">{country}</p>
            <p className="infos" data-testid="mission-destination">{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
