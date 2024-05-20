import { NavLink } from 'react-router-dom';
import { desktopLinksData } from '../../data/links-data';

const DesktopNavList = () => (
  <ul className='desktop-nav-list'>
    {desktopLinksData.map(link => (
      <li key={link.title}>
        <NavLink to={link.path}>{link.title}</NavLink>
      </li>
    ))}
  </ul>
);

export default DesktopNavList;
