import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={<Meta title="About" description="About the App of Common Prayer" />}
  >
    <h1>About</h1>
    <p>This summer, Southwest Bible is focused on the question,</p>
    <div className="text-center font-bold italic">
      &quot;How is your prayer life growing more meaningful?&quot;
    </div>{' '}
    <p>
      To answer this question, we will put prayer into practice. The Bible wants
      each of us to be praying people, but sometimes it&apos;s hard to know
      where to start. This site is to help each person, young and old, grow in
      their prayer life.
    </p>
    <p className="py-2 font-semibold italic">
      This means you! You are invited to journey with us towards a more
      meaningful prayer life, no matter where you are starting today!
    </p>
    <h2 className="text-2xl font-semibold">How it works</h2>
    <p>
      Each day is broken into two sections, Morning and Evening, each with its
      own content.
    </p>
    <ul className="list-inside list-disc">
      <li>SWBC Shared Purpose</li>
      <li>Verses</li>
      <li>Psalms</li>
      <li>Written prayers used by the Church across history</li>
      <li>Questions for reflection</li>
      <li>Special events and challenges</li>
    </ul>
    <h2 className="text-2xl font-semibold">We will be praying for:</h2>
    <ul className="list-inside list-disc">
      <li>
        <span className="font-semibold">Sunday</span> &mdash; Joyful Worship
      </li>
      <li>
        <span className="font-semibold">Monday</span> &mdash; Church Planting
      </li>
      <li>
        <span className="font-semibold">Tuesday</span> &mdash; Evangelism
      </li>
      <li>
        <span className="font-semibold">Wednesday</span> &mdash; Discipleship
      </li>
      <li>
        <span className="font-semibold">Thursday</span> &mdash; Families and our
        Church Family
      </li>
      <li>
        <span className="font-semibold">Friday</span> &mdash; The Lost
      </li>
      <li>
        <span className="font-semibold">Saturday</span> &mdash; Fellow
        Christians facing Persecution
      </li>
    </ul>
  </Main>
);

export default About;
