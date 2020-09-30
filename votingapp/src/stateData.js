const stateData = [
    {
        name: 'Alabama',
        url: 'https://www.alabamainteractive.org/sos/voter_registration/instructions.action',
        online: 'Monday, October 19, 2020',
        mailIn: 'Monday, October 19, 2020',
        inPerson: 'Monday, October 19, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Alaska',
        url: 'https://voterregistration.alaska.gov/Registration/RegistrationDetails?haveValidAKDL=true',
        online: 'Sunday, October 4, 2020',
        mailIn: 'Sunday, October 4, 2020',
        inPerson: 'Sunday, October 4, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'American Samoa',
        url: 'https://aselectionoffice.gov/node/7',
        online: null,
        mailIn: null,
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Arizona',
        url: 'https://servicearizona.com/VoterRegistration/register?execution=e1s1',
        online: 'Monday, October 5, 2020',
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Arkansas',
        url: 'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information',
        online: null,
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'California',
        url: 'https://covr.sos.ca.gov/',
        online: 'Monday, October 19, 2020',
        mailIn: 'Monday, October 19, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tusday, November 3, 2020'
    },
    {
        name: 'Colorado',
        url: 'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml',
        online: 'Monday, October 26, 2020',
        mailIn: 'Monday, October 26, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Connecticut',
        url: 'https://voterregistration.ct.gov/OLVR/prefix.do',
        online: 'Tuesday, October 27, 2020',
        mailIn: 'Tuesday, October 27, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Delaware',
        url: 'https://ivote.de.gov/voterview/registrant/newregistrant',
        online: 'Saturday, October 10, 2020',
        mailIn: 'Saturday, October 10, 2020',
        inPerson: 'Saturday, October 10, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'DC',
        url: 'https://forms.dc.gov/f/DC_Voter_Registration_Form?ref=voteusa',
        online: null,
        mailIn: 'Tuesday, October 13, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: null
    },
    {
        name: 'Florida',
        url: 'https://registertovoteflorida.gov/eligibilityreactive',
        online: 'Monday, October 5, 2020',
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Georgia',
        url: 'https://registertovote.sos.ga.gov/GAOLVR/welcometoga.do#no-back-button',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Hawaii',
        url: 'https://olvr.hawaii.gov/register.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Idaho',
        url: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx?ref=voteusa',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Illinois',
        url: 'https://ova.elections.il.gov/Step0.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Indiana',
        url: 'https://indianavoters.in.gov/?ref=voteusa',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Iowa',
        url: 'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration&?ref=voteusa',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Kansas',
        url: 'https://www.kdor.ks.gov/Apps/VoterReg/secure/default.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Kentucky',
        url: 'https://vrsws.sos.ky.gov/ovrweb/?ref=voteusa',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Louisiana',
        url: 'https://voterportal.sos.la.gov/VoterRegistration',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Maine',
        url: 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html?ref=voteusa',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Maryland',
        url: 'https://elections.maryland.gov/voter_registration/application.html',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Massachusetts',
        url: 'https://www.sec.state.ma.us/OVR/Pages/CheckEligibility.aspx?&Action=Register',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Michigan',
        url: 'https://mvic.sos.state.mi.us/RegisterVoter',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Minnesota',
        url: 'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Mississippi',
        url: 'https://www.vote.org/register-to-vote/mississippi/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Missouri',
        url: 'https://s1.sos.mo.gov/elections/voterregistration',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Montana',
        url: 'https://www.vote.org/register-to-vote/montana/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Nebraska',
        url: 'https://www.nebraska.gov/apps-sos-voter-registration/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Nevada',
        url: 'https://www.registertovotenv.gov/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'New Hampshire',
        url: 'https://sos.nh.gov/elections/voters/register-to-vote/town-or-city-clerk-s-office/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'New Jersey',
        url: 'https://voter.svrs.nj.gov/register',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'New Mexico',
        url: 'https://portal.sos.state.nm.us/OVR/(S(r52ixg1k5n1bltkptf5mthpk))/WebPages/DomesticApplication.aspx?AspxAutoDetectCookieSupport=1',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'New York',
        url: 'https://voterreg.dmv.ny.gov/MotorVoter/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'North Carolina',
        url: 'https://payments.ncdot.gov/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'North Dakota',
        url: 'https://howto.vote/register/en/nd.html',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Ohio',
        url: 'https://howto.vote/register/en/nd.html',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Oklahoma',
        url: 'https://www.ok.gov/elections/documents/Oklahoma%20Voter%20Registration%20Application%20form%20v4-20%20SEB%20web.pdf',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Oregon',
        url: 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Pennsylvania',
        url: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Rhode Island',
        url: 'https://vote.sos.ri.gov/Home/RegistertoVote?ActiveFlag=1',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'South Carolina',
        url: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'South Dakota',
        url: 'https://www.vote.org/register-to-vote/south-dakota/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Tennessee',
        url: 'https://ovr.govote.tn.gov/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Texas',
        url: 'https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Utah',
        url: 'https://secure.utah.gov/voterreg/index.html',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Vermont',
        url: 'https://olvr.vermont.gov/',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Virginia',
        url: 'https://vote.elections.virginia.gov/Registration/DmvLookup',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Washington',
        url: 'https://olvr.votewa.gov/VoterIdentification.aspx',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'West Virginia',
        url: 'https://ovr.sos.wv.gov/Register/Landing#Qualifications',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Wisconsin',
        url: 'https://myvote.wi.gov/en-us/RegisterToVote',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    },
    {
        name: 'Wyoming',
        url: 'https://sos.wyo.gov/Forms/Elections/General/VoterRegistrationForm.pdf',
        online: '',
        mailIn: '',
        inPerson: '',
        general: ''
    }
]

export default stateData;



