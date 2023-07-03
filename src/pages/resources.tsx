import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Resources = () => (
  <Main meta={<Meta title="Resources" description="Resources" />}>
    <h1>Resources</h1>

    <h2>Prayer Challenge</h2>
    <table className="challenge">
      <thead>
        <tr>
          <th>Minutes </th>
          <th>Minutes </th>
          <th>Minutes </th>
          <th>What To Do</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Praise and Adoration (Psalms)</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Silence / Listening to God / Unstructured Adoration</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Confession</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Singing</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Old Testament Reading / Meditating / Memorizing</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>
            Interacting with God over the passages - Silence / Prayer /
            Listening to God
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Thanksgiving</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>New Testament Reading / Meditating / Memorizing</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>
            Interacting with God over the passages - Silence / Prayer /
            Listening to God
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Intercession for Others</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Reading in Proverbs</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Prayer for myself</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Singing</td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>
            Meditation and Prayer about what God showed me through this time.
            Planning personal changes.
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>Praise and Adoration</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>2.5 Hours</td>
          <td>3 Hours</td>
          <td>45 Min. 5 Hours</td>
          <td>&nbsp;</td>
        </tr>
      </tfoot>
    </table>

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
