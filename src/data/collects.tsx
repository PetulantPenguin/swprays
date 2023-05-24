import type { ReactNode } from 'react';

const collects: Prayer[] = [
  {
    id: 1,
    blurb: 'For Joy in God’s Creation',
    text: (
      <div>
        O heavenly Father,
        <br />
        you have filled the world with beauty:
        <br />
        Open our eyes to behold your gracious hand in all your works;
        <br />
        that, rejoicing in your whole creation,
        <br />
        we may learn to serve you with gladness;
        <br />
        for the sake of him through whom all things were made,
        <br />
        your Son Jesus Christ our Lord. <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 2,
    blurb: 'For a Spirit of Evangelism',
    text: (
      <div>
        Almighty God our Savior,
        <br />
        you desire that none should perish,
        <br />
        and you have taught us through your Son
        <br />
        that there is great joy in heaven
        <br />
        over every sinner who repents:
        <br />
        Grant that our hearts may ache for a lost and broken world.
        <br />
        May your Holy Spirit work through our words, deeds, and prayers,
        <br />
        that the lost may be found and the dead made alive,
        <br />
        and that all your redeemed may rejoice around your throne; <br />
        through Jesus Christ our Lord. <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 3,
    blurb: 'Preparation for Worship',
    text: (
      <div>
        Everlasting God,
        <br />
        in whom we live and move and have our being:
        <br />
        You have made us for yourself,
        <br />
        so that our hearts are restless
        <br />
        until they rest in you.
        <br />
        Give us purity of heart and strength of purpose,
        <br />
        that no selfish passion may hinder us from knowing your will,
        <br />
        no weakness keep us from doing it;
        <br />
        that in your light we may see light clearly,
        <br />
        and in your service find perfect freedom;
        <br />
        through Jesus Christ our Lord,
        <br />
        who lives and reigns with you and the Holy Spirit,
        <br />
        one God, now and forever. <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Worship (1993)',
  },
];

export default collects;
