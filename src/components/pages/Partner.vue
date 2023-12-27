<template>
  <div class="-partner">
    <div class="-inner">
      <div class="-hero-banner -posrel">
        <div class="-hero-title -posabs">
          <h1 class="-headfont">Partner With Us</h1>
          <p class="-subline">To raise people passionately committed to the advancement of God's Kingdom by first giving of themselves to
            the LORD and the resources entrusted in their hands to his work</p>
        </div>
        <img class="-desktop" src="/images/partners_1511x495.jpg" alt="partners banner" />
        <img class="-mobile" src="/images/partners_1000x495.jpg" alt="partners banner" />
      </div>
      <div class="-content">
        <p>This provides a systematic framework for the ministry's partnership initiative in direct fulfilment of the
          corporate mandate of the network. In view of the various projects embarked upon by the ministry; it necessitates
          that we strategically build a storehouse of resources in anticipation of the day to day demands of the work. The
          ministry is saddled with a huge task to bear the yoke side by side the Master, hence the need to create this
          platform to accommodate the various cares in and out-reach of His divine assignment.</p>
        <h5 class="-subhead">Vision</h5>
        <p>Raising strong Kindgom pillars. We aim to raise people passionately committed to the advancement of God's
          Kingdom by first giving of themselves to the LORD and the resources entrusted in their hands to His work.</p>
        <h5 class="-subhead">Mission</h5>
        <div>
          <p>To effectively mobilize and deploy resources for the building of an Apostolic Community where the weak become
            strong for an active participation in the Ministry of the Word and Prayers through</p>
          <ol>
            <li>- Missions and Outreaches</li>
            <li>- Church Planting and Support</li>
            <li>- Welfare and Helps Community</li>
            <li>- Development Initiatives</li>
          </ol>
        </div>
        <h5 class="-subhead">Scope of Engagement</h5>
        <p>RCN Remnant Kingdom Stewards (RKS) covers the global network of believers who are committed to the Biblical
          principles of Righteous Living. Our goal is to connect the committed pillars of the ministry, provide a detailed
          reporting system and reinforce the set objectives of the ministry. The result is an informed platform for
          various forms of financial engagement that strengthen the mutuality of our covenant relationship as we see in
          <strong>2Corinthians 9:6-14</strong>. The early church forged such a synergy in resources in <strong>Acts
            4:32</strong> that greatly impacted the degree of power available to the Apostles in <strong>Acts
            4:33</strong> and ensured that no one lacked <strong>Acts 4:34</strong>
        </p>
        <h5 class="-subhead">Responsibilities</h5>
        <div>
          <p>The committee members are persons in the Ministry who have shared vision with the set man in ensuring that
            the mandate of the LORD committed to him towards building a strong Apostolic Christian Community is
            actualized. Our responsibilities therefore are outlined as follows:</p>
          <ol>
            <li>- Develop and Manage a database of partners</li>
            <li>- Organize events for partners such as partners conferences and gala dinner.</li>
            <li>- Periodic articles and newsletters posted on the website for partners.</li>
            <li>- Prayer requests and partners' welfare</li>
            <li>- Reporting and audit of funds from partners</li>
          </ol>
        </div>
        <h5 class="-subhead">Becoming a Partner</h5>
        <p>Becoming an RKS partner requires a sacrificial commitment from each partner to first give of themselves to God
          in a consecrated lifestyle. Every act of generousity must be channelled from right and honest living. Every
          committed partner must be intentional and Spirit-driven. We look forward to being committed to the mandate given
          to God's servant Apostle Arome Osayi in uplifting him and the ministry before God in prayers, that the work of
          God may continually advance. We desire volunteered time and skill to fit the needs that arise in-house and
          commitment from financial resources on periodic basis as each partner is able. Here attached is a detailed form
          for potential partners to fill with their information, after which a unique membership number will be assigned
          to each RKS partner so they can, from time to time, be updated with relevant information from the ministry and
          with respect to their membership status. Robust communication will be established between each partner and the
          ministry to receive notifications about all our events and outreaches as we progress.</p>
      </div>

      <h5 class="-subhead -pcf">Partner Commitment Form</h5>
      <div class="-form-bank-details">
        <form @submit.prevent="handleFormSubmission" class="-partner-form">
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email address" required />
          <PhoneNumberInput class="-phoneNumber" @entered="handlePhoneNumber" />
          <input name="address" type="text" placeholder="Address" required />
          <button type="submit" class="-btn -posrel">
            <span class="-clickable -posabs" data-type="submit partner"></span>
            <span class="-spin-loader"></span>
            <span class="-txt">submit</span>
          </button>
          <p class="-status" data-type="error"></p>
        </form>
        <div class="-bank-details">
          <h5 class="-subhead">Account Details</h5>
          <div class="-account">
            <p class="-key">Account Name:</p>
            <p class="-value">Remnant Christian Network Ministry</p>
            <p class="-key">Bank Name:</p>
            <p class="-value">First Bank PLC</p>
            <p class="-key">NGN:</p>
            <p class="-value">2031730750</p>
            <p class="-key">USD:</p>
            <p class="-value">2031730183</p>
            <p class="-key">GBP:</p>
            <p class="-value">2031730217</p>
            <p class="-key">EUR:</p>
            <p class="-value">2031730200</p>
          </div>
          <NuxtLink href="/give" class="-btn">Give</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iApiOptions, iMessage, iPhone } from '~~/src/types';
import PhoneNumberInput from '../partials/PhoneNumberInput.vue';
import { useGtag } from "vue-gtag-next"

const { event } = useGtag()

const { globalState } = useGlobals()

const pNumber = ref<iPhone>({
  countryCode: "",
  countryName: "",
  phoneNumber: ""
})
const handlePhoneNumber = (iphone: iPhone) => pNumber.value = iphone

const handleFormSubmission = (evt: Event) => {
  const form = evt.target as HTMLFormElement
  const formData = new FormData(form)
  const entries = Object.fromEntries(formData.entries())
  // *****
  entries.phoneNumber = pNumber.value.phoneNumber
  entries.countryCode = pNumber.value.countryCode
  entries.countryName = pNumber.value.countryName

  event('partnerpage_form', {
    'name': entries.name,
    'email': entries.email,
    'phoneNumber': entries.phoneNumber,
    'value': 1
  })

  const messages: iMessage = {
    errorMessage: "You're already a partner",
    successMessage: "Successfully submitted"
  }
  const apiOptions: iApiOptions = {
    collection: constants.RCNLAGOSCOLLECTION,
    id: constants.PARTNERSID,
    dataToStore: {
      ...entries,
      date: new Date().toLocaleString(),
    },
    wrapperHTML: el(constants.PARTNERWRAPQUERY) as HTMLElement,
    statusHTML: el(constants.PARTNERSTATUSQUERY) as HTMLElement
  }

  postForm(apiOptions, messages, constants.PARTNERAPI)
}


</script>
<style scoped>

.-pcf {
  text-align: center;
  width: 100%;
}
.-partner>.-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-bottom: 16px;
}

.-partner .-hero-banner {
  background-color: black;
  aspect-ratio: 1511 / 495;
  width: 100%;
}

.-partner .-hero-banner .-hero-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: calc(100% - 32px);
}

.-partner .-hero-banner .-hero-title h1,
.-partner .-hero-banner .-hero-title p {
  color: white;
  text-align: center;
}

.-partner .-hero-banner .-hero-title h1 {
  font-size: 60px;
  font-weight: bold;
}

.-partner img {
  opacity: .2;
}

.-mobile {
  display: none;
}

.-form-bank-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.-partner-form {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.-partner-form .-btn {
  justify-self: center;
  width: 50%;
}

.-bank-details {
  background-color: var(--rcnaccentblue);
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
}


.-bank-details .-btn {
  background-color: white;
  color: var(--rcnaccentblue) !important;
  font-weight: bold;
  box-shadow: 0px 4px 20px -5px white;
}

.-bank-details .-subhead {
  margin: unset !important;
}

.-bank-details .-account {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 8px;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  
  .-form-bank-details {
    display: flex;
  }
  .-partner-form, .-bank-details {
    width: 50%;
  }
  
  .-partner-form input {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {

  .-form-bank-details {
    display: grid;
  }
  .-partner-form, .-bank-details {
    width: 100%;
  }

  .-partner .-hero-banner .-hero-title h1 {
    font-size: 32px
  }

  .-partner .-hero-banner .-hero-title {
    width: 90%;
  }

  .-mobile {
    display: block;
  }

  .-desktop {
    display: none;
  }

  .-partner .-hero-banner {
    background-color: black;
    aspect-ratio: 1000 / 495;
  }

  .-form-bank-details {
    grid-template-columns: repeat(1, 1fr);
  }

  .-partner-form .-btn {
    width: 100%;
  }

  .-bank-details .-btn {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 420px) { 

  .-partner .-hero-banner .-hero-title {
    width: calc(100% - 16px);
  }

}

@media screen and (min-width: 320px) and (max-width: 420px) {}
</style>