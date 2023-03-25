<template>
  <div class="-inner -about">
    <div class="-hero-header">
      <div class="-left">
        <h1 class="-headfont -desktop">The Birth of<br />RCN Lagos</h1>
        <h1 class="-headfont -mobile">The Birth of<br />RCN Lagos</h1>
        <img class="-signature" src="/images/signature.png" alt="rcn signature" />
      </div>
      <div class="-right relative">
        <img class="-pastor absolute" src="/images/RevAustinUkporhe.png" alt="rev austin ukporhe" />
        <img class="-bg-img" src="/images/icon_500x500.png" alt="rcn icon" />
      </div>
    </div>

    <div class="-content">
      <blockquote class="-letter">
        <p>Apostle Arome came into my life at a time when my business was adrift. The year was 2015, I was battling a
          multitude of issues and had pretty much put ministry on hold. My younger brother, who felt that I needed
          sufficient spiritual covering and fathering, which I wasn't getting at my place of worship then, handed me
          Apostle Arome's messages. I played the message titled <strong>Staying Power</strong> and immediately got an
          earful of someone blasting in tongues. It was Apostle. I was instantly captivated. I thought to myself,
          <strong>Who is this man? Where is he from?</strong> He reminded me of my church in Sokoto and I couldn't help
          feeling at home. I listened to that message several times that day and afterwards collected his number.</p>
        <p>We chatted for six months and eventually organized a meeting. The first day he met me, the first words out of
          his mouth were, <strong>When are you going to start what God has called you to do?</strong> He bagan to hold
          in-door bible studies with me and my wife, Pastor Grace, Pastor Victor and his wife, Motunrayo and Pastor Abbey.
          We ran those bible studies till very late at night, twice a week. We prayed, and studied the word and ate
          sumptuous meals prepared by my wife before we called it a night.</p>
        <p>Apostle Arome was so keen on me fulfilling God's call upon my life that when our team of five decided to hold
          our inaugural summit under the auspices of Global Intercessors Network on the 14th of August, 2014, Apostle
          Arome gave us the cash we used to secure the venue (₦45,000) as well as paid me an honorarium when we concluded
          the meeting. I was blown away by his selflessness. We planned to hold the second summit in December of the same
          year, but it did not work out. The following year, when we were trying to work out the modalities of registering
          Global Intercessors Network ministry, God spoke to us, questioning why we wanted to go ahead with Global
          Intercessors Network when He had already sent Apostle to teach, train and equip in this generation. He told us
          to give up Global Intercessors Network and join the Remnant Christian Network bandwagon. This we did gladly and
          haven't looked back since. we continued with in-door bible studies and during one of those meetings, Apostle
          singled me out for prayers and it was then the mantle of leadership of Remnant Christian Network, Lagos was laid
          upon me.</p>
        <p>Although RCN Lagos takes its bearing from Remnant Christian Network, Makurdi, its shape, rhythm and growth has
          been entirely organic. This is possible because the father of the commission Apostle Arome does not believe in
          emphasizing money or cloning ministries or persons. RCN Lagos runs according to the uniqueness of our territory
          because Apostle believes ministries should operate according to the uniqueness of their territory, therefore
          although all branches are pursuing the same vision, they are quite different in outlook and structure.</p>
        <p>RCN Lagos is simply a ministry responding to the burdens in our generation and I am humbled to be leading that
          charge.</p><cite><strong>Austin Ukporhe</strong><br>Point Man - RCN Lagos</cite>
      </blockquote>
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

.-hero-header .-right .-bg-img {
  width: 70%;
  margin-right: auto;
  background-color: var(--rcnaccentblue);
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 16px 2px rgba(0, 0, 0, 0.3);
}

.-hero-header .-right .-pastor {
  position: absolute;
  height: 100%;
  border-radius: 50%;
}

.-content {
  margin: 0 auto;
  width: 100%;
  margin-top: 32px;
}

.-content .-subhead {
  text-transform: uppercase;
}


.-content .-letter {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

}

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

  .-content {
    width: calc(100% - 32px);
    margin: 0 auto;
  }

  .-content {
    margin-top: 32px;
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

  .-hero-header .-right .-bg-img {
    width: 100%;
  }
}

@media screen and (max-width: 420px) {}

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>