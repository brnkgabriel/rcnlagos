<template>
  <div class="-inner -about">
    <div class="-hero-header">
      <div class="-left">
        <h1 class="-headfont -desktop">The<br />President</h1>
        <h1 class="-headfont -mobile">The President</h1>
        <img class="-signature" src="/images/signature.png" alt="rcn signature" />
      </div>
      <div class="-right relative">
        <img class="-arome-osayi absolute" src="/images/arome-osayi.png" alt="apostle arome osayi" />
        <img class="-bg-img" src="/images/icon_500x500.png" alt="rcn icon" />
      </div>
    </div>

    <div class="-content">
      <div class="-letter">
        <p>
          <strong>Arome Osayi</strong> (The Set Man of Remnant Christian Network) was born on 2<sup>nd</sup> December, 1977, the fifth child in a family of seven, to
          late Chief Paul Ameh Osayi - a career civil servant and Mrs. Mamuna Osayi - a career nurse in the capital city
          of Makurdi, Benue State, Nigeria. His parents were devout Christians and were fully invested in raising him and
          his siblings in the ways of the Lord. His parents' commitment to God would yield hundred percent result as he
          and all his six siblings would personally get to know the Lord at a young age.
        </p>

        <p>
          Arome got saved at the age of seven. His battle for destiny began in his mother's womb as he was born with
          facial palsy - which massively impaired his speech and left half of his face paralysed. Though vocally
          disadvantaged from birth, his getting to meet the Lord early enough on account of his parents' commitment to the
          Lord set him on a great collision course with destiny.
        </p>

        <p>
          His tongue would be loosened in a momentous encounter he had with Jesus at the age of thirteen. It was at this
          encounter that he received the call to be God's mouthpiece to the nations. His teenage years right into his mid
          twenties were replete with pushing, stretching, daring and adventuring into the full gamut of this call. His
          progress was slow but steady; his strides in the pursuit of God were rhythmic and his following o f Jesus Christ
          has been a concatenation of obedience, consistency and service born out of deep-seated hunger and love for God.
        </p>

        <p>
          In October 2002, shortly after completing his tertiary education with a B.Sc. in Chemistry from Benue State
          University, Makurdi, and being on the cusp of successfully rounding off the mandatory one-year national service
          in Kano State, Nigeria, his dealings with God culminated in an apostolic mandate with the thrust to reinforce,
          intensify and scale up the apostolic recovery in the body of Christ across the nations. And in December 2006, he
          founded the Remnant Christian Network.
        </p>

        <p>
          In recent years, Remnant Christian Network has witnessed such a transcontinental upsurge as it rapidly morphs
          into a place where the gospel of the kingdom of Christ is preached with great grace in revelation, inspiration,
          illumination, signs, miracles, and prophetic breakthroughs as God conﬁrms His word in the mouth of His servant
          and as men come into their ordinations in God. Its borderless, tentacular penetration across the nations
          conspicuously places it in the vanguard of the current apostolic recovery taking place on the planet from the
          Sub-Saharan African front. The Network is run with a divine policy direction from Isaiah 37:31.
        </p>

        <p>
          Arome Osayi has a summarized mission statement: <strong>To strive towards the rebirth of Apostolic
            Christianity</strong>
        </p>

        <p>
          He believes that in the years to come, people from all nations of the world will come to the RCN Embassy which
          is the ministry’s international headquarters domiciled in Makurdi, Benue State, Nigeria to experience the true
          God as well as get in tune with accurate apostolic patterns that they can replicate in their different nations.
          The RCN Embassy is currently under construction.
        </p>

        <p>
          Arome’s apostolic mandate is two-pronged: stretching from within the body of Christ to the marketplace. In
          keeping with the schematics of this mandate, in 2004, he got a job in the then newly- created PPPRA (Petroleum
          Products Pricing Regulatory Agency) an organisation charged with the responsibility of regulating the prices of
          petroleum products sold and consumed in Nigeria as a pioneer staff and would go on to meritoriously serve there
          for sixteen years. So, for nearly two decades he has been an apostle to the body of Christ and in the
          marketplace.
        </p>

        <p>
          Arome Osayi is an apostle of the Lord Jesus Christ, author, mentor, entrepreneur and philanthropist. He is
          married to Dinna, and their union is blessed with two children
        </p>
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

.-hero-header .-right .-bg-img {
  width: 70%;
  margin-right: auto;
  background-color: var(--rcnaccentblue);
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 16px 2px rgba(0, 0, 0, 0.3);
}

.-hero-header .-right .-arome-osayi {
  position: absolute;
  height: 100%;
  border-radius: 50%;
}


.-content {
  width: calc(100% - 32px);
  margin: 0 auto;
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

@media screen and (max-width: 420px) { 
}

@media screen and (min-width: 320px) and (max-width: 420px) {}</style>