import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Resources = () => (
  <Main meta={<Meta title="Resources" description="Resources" />}>
    <h1>Resources</h1>

    <h2>List of Books on Prayer</h2>
    <ol className="list-inside list-decimal">
      <li>
        <span className="underline">Transforming Prayer</span> by Daniel
        Henderson{' '}
      </li>
      <li>
        <span className="underline">Prayer</span> by Timothy Keller{' '}
      </li>
      <li>
        <span className="underline">Augustine on Prayer</span> by Thomas A. Hand
      </li>
      <li>
        <span className="underline">The Valley of Vision</span> by Arthur
        Bennett
      </li>
      <li>
        <span className="underline">The Power of Prayer</span> by Charles
        Spurgeon{' '}
      </li>
      <li>
        <span className="underline">A Praying Life</span> by Paul E. Miller
      </li>
      <li>
        <span className="underline">Talking to God</span> by Thomas L. Constable
      </li>
      <li>
        <span className="underline">12 Days of Deeper Prayer</span> by Jim Maxim{' '}
      </li>
      <li>
        <span className="underline">
          Prayer: Communing with God in Everything
        </span>{' '}
        by A. W. Tozer
      </li>
      <li>
        <span className="underline">
          Prayer and Worship: A Spiritual Formation Guide - A Renovare Resource
        </span>{' '}
        by Julia L. Roller
      </li>
    </ol>
  </Main>
);

export default Resources;
