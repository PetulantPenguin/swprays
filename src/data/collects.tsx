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
  {
    id: 6,
    blurb: 'For Joy',
    text: (
      <div className="text-center">
        <div>O CHRIST,</div>
        <div>All thy ways of mercy tend to and end in</div>
        <div>my delight.</div>
        <div>Thou didst weep, sorrow, suffer that I might rejoice.</div>
        <div>For my joy thou hast sent the Comforter,</div>
        <div>multiplied thy promises,</div>
        <div>shown me my future happiness,</div>
        <div>given me a living fountain.</div>
        <div>Thou art preparing joy for me and me for joy;</div>
        <div>I pray for joy, wait for joy, long for joy;</div>
        <div>give me more than I can hold, desire, or think of.</div>
        <div>Measure out to me my times and degrees of joy,</div>
        <div>at my work, business, duties.</div>
        <div>If I weep at night, give me joy in the morning.</div>
        <div>Let me rest in the thought of thy love,</div>
        <div>pardon for sin, my title to heaven,</div>
        <div>my future unspotted state.</div>
        <div>I am an unworthy recipient of thy grace.</div>
        <div>I often disesteem thy blood and slight thy love,</div>
        <div>but can in repentance draw water</div>
        <div>from the wells of thy joyous forgiveness.</div>
        <div>Let my heart leap towards the eternal sabbath,</div>
        <div>where the work of redemption, sanctiﬁcation,</div>
        <div>preservation, gloriﬁcation is ﬁnished</div>
        <div>and perfected for ever,</div>
        <div>where thou wilt rejoice over me with joy.</div>
        <div>There is no joy like the joy of heaven,</div>
        <div>for in that state are no sad divisions,</div>
        <div>unchristian quarrels,</div>
        <div>contentions, evil designs,</div>
        <div>weariness, hunger, cold,</div>
        <div>sadness, sin, suffering,</div>
        <div>persecutions, toils of duty.</div>
        <div>O healthful place where none are sick!</div>
        <div>O happy land where all are kings!</div>
        <div>O holy assembly where all are priests!</div>
        <div>How free a state where none are servants</div>
        <div>except to thee!</div>
        <div>Bring me speedily to the land of joy.</div>
      </div>
    ) as ReactNode,
    where: 'Valley of Vision',
  },
  {
    id: 7,
    blurb: 'For the Mission of the Church',
    text: (
      <div className="text-center">
        O God, our heavenly Father, you manifested your love by sending your
        only-begotten Son into the world, that all might live through him: Pour
        out your Spirit on your Church, that we may fulfill his command to
        preach the Gospel to all people. Send forth laborers into your harvest;
        defend them in all dangers and temptations; and hasten the time when the
        fullness of the Gentiles shall be gathered in, and faithful Israel shall
        be saved; through your Son Jesus Christ our Lord.{' '}
        <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 8,
    blurb: 'Memorial Day',
    text: (
      <div className="text-center">
        O King and Judge of the nations: We remember before you with grateful
        hearts the men and women of our armed forces, who in the day of decision
        ventured much for the liberties we now enjoy; grant that we may not rest
        until all the people of this land share the benefits of true freedom and
        gladly accept its disciplines; through Jesus Christ our Lord, who with
        you and the Holy Spirit lives and reigns, now and for ever.{' '}
        <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 9,
    blurb: 'Knowing Desiring Loving',
    text: (
      <>
        I beg you, most loving Savior, to reveal yourself to us, that knowing
        you we may desire you, that desiring you we may love you, that loving
        you we may ever hold you in our thoughts.{' '}
        <span className="font-bold">Amen.</span>
      </>
    ) as ReactNode,
    where: 'Saint Columbanus (543-615)',
  },
  {
    id: 10,
    blurb: 'Shepherd through the Night',
    text: (
      <div className="text-center">
        Watch, O Lord,
        <br />
        with those who wake,
        <br />
        or watch or weep tonight,
        <br />
        and give your angels charge
        <br />
        over those who sleep.
        <br />
        <br />
        Tend your sick ones,
        <br />
        O Lord Jesus Christ;
        <br />
        rest your weary ones;
        <br />
        bless your dying ones;
        <br />
        soothe your suffering ones;
        <br />
        pity your afflicted ones;
        <br />
        shield your joyous ones;
        <br />
        and all for your love&apos;s sake.
        <br />
        <br />
        Amen.
      </div>
    ) as ReactNode,
    where: 'St. Augustine',
  },
  {
    id: 11,
    blurb: 'For Mission',
    text: (
      <div>
        Lord Jesus Christ, you stretched out your arms of love on the hard wood
        of the Cross that everyone might come within the reach of your saving
        embrace: So clothe us in your Spirit that we, reaching forth our hands
        in love, may bring those who do not know you to the knowledge and love
        of you; for the honor of your Name.{' '}
        <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 12,
    blurb: 'Preparation for Public Worship',
    text: (
      <div>
        Guide and direct us, O Lord, always and everywhere with your holy light,
        that we may discern with clear vision your presence among us, and
        partake with worthy intention of your divine mysteries. We ask this for
        Jesus Christ’s sake. <span className="font-bold">Amen.</span>
      </div>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
  {
    id: 13,
    blurb: 'Te Deum Laudamus (We Praise You, O God)',
    intro: (
      <>
        Canticles are songs the church sings or chants together as a way of
        praying and praising God. We encourage you to join with your family,
        spouse, friends in reading this Canticle together this evening.
      </>
    ) as ReactNode,
    text: (
      <>
        <div className="pb-2 text-center italic">
          The following Canticle is sung or said, all standing
        </div>
        <div className="pl-4">
          <div>We praise you, O God; we acclaim you as Lord;</div>
          <div className="pl-8">
            all creation worships you, the Father everlasting.
          </div>
          <div>To you all angels, all the powers of heaven,</div>
          <div className="pl-8">
            the cherubim and seraphim, sing in endless praise:
          </div>
          <div>Holy, Holy, Holy, Lord God of power and might,</div>
          <div className="pl-8">heaven and earth are full of your glory.</div>
          <div>The glorious company of apostles praise you.</div>
          <div className="pl-8">
            The noble fellowship of prophets praise you.
          </div>
          <div>The white-robed army of martyrs praise you.</div>
          <div className="pl-8">
            Throughout the world the holy Church acclaims you:
          </div>
          <div className="pl-8">Father, of majesty unbounded,</div>
          <div>your true and only Son, worthy of all praise,</div>
          <div className="pl-8">and the Holy Spirit, advocate and guide.</div>
          <div>You, Christ, are the king of glory,</div>
          <div className="pl-8">the eternal Son of the Father.</div>
          <div>When you took our flesh to set us free</div>
          <div className="pl-8">you humbly chose the Virgin’s womb.</div>
          <div>You overcame the sting of death</div>
          <div className="pl-8">
            and opened the kingdom of heaven to all believers.
          </div>
          <div>You are seated at God’s right hand in glory.</div>
          <div className="pl-8">
            We believe that you will come to be our judge.
          </div>
          <div>Come then, Lord, and help your people,</div>
          <div className="pl-8">bought with the price of your own blood,</div>
          <div>and bring us with your saints</div>
          <div>to glory everlasting.</div>
        </div>
      </>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
    commentary: (
      <>
        <span className="font-bold">
          This Canticle begins our new section in the prayer arena&mdash;People.
        </span>
        This week, we will be joining with fellow believers to pray together.
        This can be your family, your friends, a random person at church,
        anyone!
      </>
    ) as ReactNode,
  },
  {
    id: 14,
    blurb: 'A Prayer of St. John Chrysostom',
    text: (
      <>
        Almighty God, you have given us grace at this time, with one accord to
        make our common supplications to you; and you have promised through your
        well-beloved Son that when two or three are gathered together in his
        Name you will grant their requests: Fulfill now, O Lord, our desires and
        petitions as may be best for us; granting us in this world knowledge of
        your truth, and in the age to come life everlasting. Amen.
      </>
    ) as ReactNode,
    where: 'Book of Common Prayer (2019)',
  },
];

export default collects;
