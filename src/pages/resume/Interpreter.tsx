import { Link } from 'react-router-dom';
import Contact from './Contact';
import Languages from './Languages';
import Experience from './Experience';
import Education from './Education';

const Interpreter = () => (
  <>
    <section className='presentation'>
      <h2>
        Hi, I'm <strong>Mila Ziabchenko</strong> 🎇
      </h2>
      <p>
        I'm a professional Interpreter of English, Italian, Spanish, Russian and
        Ukrainian languages 🌐
      </p>
      <p>
        I've been helping people from various countries and different walks of life
        to communicate for many years now.
      </p>
      <p>
        I also have several years of experience in teaching languages,
        translating, and writing original articles about web development in{' '}
        <Link to='/articles'>my blog →</Link>
      </p>
      <p>Mastering languages is my lifelong passion 🤍</p>
    </section>
    <div className='grid'>
      <Contact />
      <Languages />
    </div>
    <Experience>
      <article>
        <h4>🔆 Interpreter at KLS Translation Agency</h4>
        <h5>2024 - present</h5>
        <p>
          Interpret at various events held by international organizations,
          such as IOM, EUAM Ukraine, and IREX.
        </p>
        <p>
          Provide interpreting services during meetings with representatives of
          the U.S. Department of State, EU and UN agencies.
        </p>
      </article>
      <article>
        <h4>🔆 Interpreter (English, Italian, Spanish, Ukrainian, Russian)</h4>
        <h5>2012 - present</h5>
        <p>
          Work as a Freelance Interpreter and sometimes Translator in various domains —
          technology, business, finance, education, media, tourism, healthcare, law, and
          other spheres.
        </p>
        <p>
          Provide interpreting services during meetings with government and
          business representatives.
        </p>
        <p>
          Facilitate negotiations between two or more parties who speak different
          languages.
        </p>
        <p>Mediate discussions between the speaker and the audience.</p>
        <p>
          Accompany international visitors to various meetings and events across
          Ukraine.
        </p>
      </article>
      <article>
        <h4>🔆 Technical Writer</h4>
        <h5>2023 - 2024</h5>
        <p>
          Wrote original in-depth articles about web development in{' '}
          <Link to='/articles'>my blog →</Link>
        </p>
      </article>
      <article>
        <h4>🔆 International Adoption Specialist</h4>
        <h5>2003 - 2012</h5>
        <p>
          Worked as an Interpreter for Italian and Spanish adoptive couples who
          went through a long and hard process of adoption in Ukraine.
        </p>
        <p>
          Facilitated communication between adoptive parents and their adoptive
          children, and assisted them in all the paperwork related to the
          adoption.
        </p>
        <p>
          Represented adoptive parents in various institutions — local
          administrations, courts, ministries, embassies, and others.
        </p>
        <p>
          Helped dozens of Ukrainian orphans from institutions to join permanent,
          loving families 👨‍👩‍👧‍👦
        </p>
      </article>
      <article>
        <h4>🔆 Teacher of Italian as a Foreign Language</h4>
        <h5>2000 - 2003</h5>
        <p>
          Taught Italian language at the First Kyiv State Foreign Languages
          Courses in an innovative and creative way, using communicative and other
          approaches, and making the learning process engaging, fun and effective
          👩‍🏫
        </p>
      </article>
    </Experience>
    <Education>
      <article>
        <h4>👩‍🎓 First Kyiv State Foreign Languages Courses</h4>
        <h5>1999 - 2001</h5>
        <p>Italian Language Translator Diploma</p>
        <h5>1999 - 2001</h5>
        <p>Spanish Language Translator Diploma</p>
      </article>
    </Education>
  </>
);

export default Interpreter;
