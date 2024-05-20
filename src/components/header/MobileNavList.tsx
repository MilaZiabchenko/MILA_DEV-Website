import { mobileLinksData } from '../../data/links-data';
import MobileNavLink from './MobileNavLink';

const MobileNavList = () => (
  <ul className='mobile-nav-list'>
    {mobileLinksData.map(link => (
      <MobileNavLink key={link.title} link={link} />
    ))}
  </ul>
);

export default MobileNavList;
