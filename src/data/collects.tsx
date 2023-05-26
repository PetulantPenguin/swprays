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
  {
    id: 4,
    blurb: 'Salvation Offered Freely to All',
    text: (
      <div>
        O God, you have created all things by the power of your Word, and you
        renew the earth by your Spirit: Give the water of life to all who thirst
        for you, that they may bring forth abundant fruit in your glorious
        kingdom; through Jesus Christ our Lord.{' '}
        <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 5,
    blurb: 'For the Whole Church',
    text: (
      <div>
        Let us pray for the holy Church throughout the world: that the Lord our
        God may preserve her in unity, peace, and safety, bringing into divine
        subjection all powers and principalities; and that he may grant us to
        dwell in such peace and tranquility that we may show forth the glory of
        God. Silence Almighty Father, we pray for your holy catholic Church.
        Fill it with all truth, in all truth, with all peace. Where it is
        corrupt, purify it; where it is in error, direct it; where in anything
        it is amiss, reform it; where it is right, strengthen it; where it is in
        want, provide for it; where it is divided, reunite it; for the sake of
        Jesus Christ your Son our Savior.{' '}
        <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
];

export default collects;
