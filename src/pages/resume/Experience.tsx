import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Experience = ({
  children
}: {
  children: ReactElement | ReactElement[];
}) => (
  <section className='experience'>
    <h3>Experience</h3>
    {children}
  </section>
);

export default Experience;
