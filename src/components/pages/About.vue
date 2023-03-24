<template>
  <div class="-inner -about">
    <div class="-hero-header">
      <div class="-left">
        <h1 class="-headfont -desktop">Remnant<br />Christian<br />Network</h1>
        <h1 class="-headfont -mobile">Remnant Christian<br />Network</h1>
        <img class="-signature" src="/images/signature.png" alt="rcn signature" />
      </div>
      <div class="-right">
        <img src="/images/icon_500x500.png" alt="rcn icon" />
      </div>
    </div>

    <div class="-content">
      <h5 class="-subhead">who we are</h5>
      <div class="-letter">
        <p>Remnant Christian Network (RCN) is a non-denominational ministry headquartered in Makurdi, Benue state with
          apostolic centers in Lagos, Kaduna, Enugu, Ibadan, Calabar and Canada and a host of mission outreaches within
          and outside Nigeria.</p>

        <p>Remnant Christian Network has a singular focus to restore the prayer commission of the church in fulfillment of
          Jesus' proclamation in <strong>Matthew 21:13</strong> that <strong>My house shall be called the house of
            prayer</strong>. It is an apostolic movement that seeks to torpedo world systems and make able ministers out
          of Nigeria's youth, who will take the gospel to every nook and cranny of the earth in tandem with the divine
          mandate for the last apostolic dispensation, as revealed by the ancients that <strong>Nigeria is the
            trigger.</strong></p>

        <p>If the glory of the Lord must fill the earth as the waters cover the sea; if revival must occur before the
          second coming of the Lord, men must watch, pray and spread the good news. This is RCN's mandate to raise
          men-intercessors, prophets, evangelists, teachers.</p>

        <p>As you are fed up of playing church? Are you tired of church overridden by mammon and Babylon? Are you tired of
          sipping milk when you should be chewing strong meat? Are you looking to grow spiritual muscles in Christ? Are
          you searching for a deeper revelation of God? Do you want to be able to sift between the wheat and the chaff and
          gain a proper handle on the truth? Do you want to be a student of the word of God? Do you want to stand out as
          light in these dark days?</p>

        <p>Welcome to Remnant Christian Network, Lagos where you will be taught to access and navigate the immortal realm;
          where you will receive the requisite training and equipping to stand as a soldier in the army of God.</p>

        <p>You can call us by phone or send emails to get more information and we will be glad to see you in one of our
          weekly meetings. You are welcome</p>
      </div>
    </div>
    <div class="-footnotes">
      <div class="-note -values">
        <h5 class="-subhead">our values</h5>
        <p>Dedication, Relevance, Excellence, Accountability, Resilience, Forbearance, Faithfulness</p>
      </div>
      <div class="-note -mission">
        <h5 class="-subhead">our mission</h5>
        <p>To equip ministers of the gospel of our LORD Jesus Christ in Africa and Europe to become effective in the work
          of the ministry</p>
      </div>
      <div class="-note -vision">
        <h5 class="-subhead">our vision</h5>
        <p>To strive for the rebirth of Apostolic Christianity in our generation. <br /><br />Preservation of biblical
          doctrine and living out the truth of God's Word as it is in the Holy Scriptures</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.-about {
  padding: 16px 0;
}

.-hero-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  gap: 96px;
  margin-bottom: 16px;
  width: calc(100% - 32px);
  margin: 0 auto;
}

.-hero-header .-left h1 {
  font-weight: bold;
  font-size: 50px;
  line-height: 1;
  color: var(--rcnaccentblue);
}

.-hero-header .-left .-signature {
  width: 130px;
}

.-hero-header .-left {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-self: center;
}

.-hero-header .-right {
  align-self: center;
  justify-self: flex-start;
}

.-hero-header .-right img {
  width: 80%;
  margin-right: auto;
  background-color: var(--rcnaccentblue);
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 16px 2px rgba(0, 0, 0, 0.3);
}

.-content {
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
  margin-top: 16px;
}

.-content .-subhead {
  text-transform: uppercase;
}


.-content .-letter {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

}

.-footnotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  margin-top: 16px;
}

.-footnotes .-note {}

.-footnotes .-note .-subhead {}

.-footnotes .-note p {}

.-mobile {
  display: none;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {

  .-desktop {
    display: none;
  }

  .-mobile {
    display: block;
    text-align: center;
  }

  .-content,
  .-footnotes {
    width: calc(100% - 32px);
    margin: 0 auto;
  }

  .-footnotes {
    margin-top: 16px;
  }

  .-hero-header .-left h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 1;
    color: var(--rcnaccentblue);
  }

  .-hero-header .-left .-signature {
    width: 100px;
  }
}

@media screen and (max-width: 576px) {
  .-hero-header {
    gap: 8px;
  }

  .-hero-header .-right img {
    width: 100%;
  }

  .-footnotes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 420px) {
  .-footnotes {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>