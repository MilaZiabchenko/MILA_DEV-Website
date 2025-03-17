import type { ReactElement } from 'react';

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
