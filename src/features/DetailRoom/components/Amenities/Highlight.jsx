import classNames from 'classnames/bind';

import { CalendarIcon, DoorOpenIcon, WorkspaceIcon } from '@/assets/svgs';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Highlight = () => {
  const highlightAmenities = [
    {
      icon: <WorkspaceIcon />,
      tittle: 'Dedicated workspace',
      description: 'Dedicated workspace',
    },
    {
      icon: <DoorOpenIcon />,
      tittle: 'Self check-in',
      description: 'Check yourself in with the keypad.',
    },
    {
      icon: <CalendarIcon />,
      tittle: 'Check yourself in with the keypad.',
    },
  ];
  return (
    <div className={cx('section', 'highlight-amenities')}>
      {highlightAmenities &&
        highlightAmenities.map((amenity) => (
          <div className={cx('amenity')}>
            <span className={cx('amenity-icon')}>{amenity.icon}</span>
            <h4 className={cx('amenity-description')}>
              {amenity.tittle}
              <span>{amenity?.description}</span>
            </h4>
          </div>
        ))}
    </div>
  );
};

export default Highlight;
