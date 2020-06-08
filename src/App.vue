<template>
  <div id="app">
    <header>
        <div class="container d-sm-flex justify-content-between align-items-center py-4 flex-wrap">
            <a href="/"><component :is="logo" style="height:2.5em"></component></a>
            <div class="language-chooser mt-4 mt-sm-0"><a href="#" @click.prevent="toggleLanguage" class="text-uppercase">{{ otherLanguage }}</a></div>
        </div>
    </header>
    <main class="container my-5">
        <article class="text-center mb-5 py-5 position-relative d-flex flex-column justify-content-center align-items-center">
            <h1 class="text-primary mb-2">data.sciencespo</h1>
            <h4 class="text-muted mb-5">{{ translation.researchDataRepo }}</h4>
            <a href="/dataverse/sciencespo" class="btn btn-primary btn-lg text-uppercase">{{ translation.exploreBtn }}</a>
            <component :is="dvlogo" class="background-logo"></component>
        </article>
        <article>
            <article class="mb-5">
                <p v-html="translation.presentation"></p>
            </article>
            <div class="row">
                <div class="col-lg mb-5 mb-lg-0 mr-lg-2 mr-0">
                    <article class="p-4 card d-flex flex-column h-100">
                        <h4 class="text-primary font-weight-bold text-center mb-4" v-html="translation.scpoCollTitle"></h4>
                        <p v-html="translation.scpoCollPresentation"></p>
                        <hr class="mt-auto"/>
                        <ul class="mb-0">
                            <li class="mb-1" v-html="translation.depositType + ' ' + translation.scpoCollDepositType"></li>
                            <li class="mb-1" v-html="translation.depositRequirements + ' ' + translation.scpoCollDepositRequirements"></li>
                            <li class="mb-1" v-html="translation.depositDelay + ' ' + translation.scpoCollDepositDelay">}</li>
                            <li v-html="translation.dataAccessDelay + ' ' + translation.scpoCollDataAccessDelay"></li>
                        </ul>
                        <hr/>
                        <address class="text-muted mb-1">{{ translation.contact }} <a href="mailto:data.bib@sciencespo.fr">data.bib@sciencespo.fr</a></address>
                        <p class="text-muted mb-1">{{ translation.guides }} <a href="/misc/guides/Guide_DEPOSIT_DSCPO_20200312.pdf">{{ translation.guidesDeposit }}</a> / <a href="/misc/guides/Guide_DOWNLOAD_DSCPO_20200312.pdf">{{ translation.guidesFind }}</a></p>
                        <p class="text-muted">{{ translation.learnMore }} <a :href="translation.scpoCollDepositGuideLink" target="_blank" rel="noopener">{{ translation.scpoCollDepositGuide }}</a></p>
                        <a href="/dataverse/adscpo" class="btn btn-outline-primary btn-lg w-100 text-uppercase">{{ translation.deposit }}</a>
                    </article>
                </div>
                <div class="col-lg">
                    <article class="p-4 card d-flex flex-column h-100">
                        <h4 class="text-primary font-weight-bold text-center mb-4" v-html="translation.cdspCollTitle"></h4>
                        <p v-html="translation.cdspCollPresentation"></p>
                        <hr class="mt-auto"/>
                        <ul class="mb-0">
                            <li class="mb-1" v-html="translation.depositType + ' ' + translation.cdspCollDepositType"></li>
                            <li class="mb-1" v-html="translation.depositRequirements + ' ' + translation.cdspCollDepositRequirements"></li>
                            <li class="mb-1" v-html="translation.depositDelay + ' ' + translation.cdspCollDepositDelay"></li>
                            <li v-html="translation.dataAccessDelay + ' ' + translation.cdspCollDataAccessDelay"></li>
                        </ul>
                        <hr/>
                        <address class="text-muted mb-1">{{ translation.contact }} <a href="mailto:info.cdsp@sciencespo.fr">info.cdsp@sciencespo.fr</a></address>
                        <p class="text-muted mb-1">{{ translation.learnMore }} <a :href="translation.cdspCollDepositGuideLink" target="_blank" rel="noopener">{{ translation.cdspCollDepositGuide }}</a></p>
                        <p class="text-muted" style="visibility:hidden">{{ translation.guides }} TBD</p>
                        <a href="https://cdsp.sciences-po.fr/fr/proposer-des-donnees" class="btn btn-outline-primary btn-lg w-100 text-uppercase">{{ translation.depositRequest }}</a>
                    </article>
                </div>
            </div>
        </article>
    </main>
    <footer class="bg-light mt-5 py-5 text-muted">
        <div class="container d-flex justify-content-between">
            <div>
              <p class="mb-2"><a :href="translation.scpoLink" class="d-flex align-items-center" style="height:1.5em;"><component :is="logo" style="height:1em" class="img-muted"></component></a></p>
              <p class="mb-2">27, rue Saint-Guillaume<br/>75337 Paris Cedex 07</p>
              <p class="mb-0"><small>© 2020 Sciences Po<br/><a href="/misc/cond_jur/ToU.pdf" class="text-muted">{{ translation.tou }}</a></small></p>
            </div>
            <p class="mb-0 mt-auto"><a href="https://dataverse.org" target="_blank" rel="noopener" class="text-muted">Powered by <component :is="dvlogofull" style="height:2.5em" class="img-muted"></component></a></p>
        </div>
    </footer>
  </div>
</template>

<script>
import '../dist/css/index.css';
import logo from './assets/logo.svg';
import dvlogo from './assets/dv-logo-red.svg';
import dvlogofull from './assets/dv-logo.svg';

const translation = {
  'en': {
    'title': "data.sciencespo",
    'researchDataRepo': "Research data repository of Sciences Po",
    'exploreBtn': "Find and explore data",
    'presentation': "Launched in February 2020, data.sciencespo is a repository that offers visibility, sharing and preservation of data collected, curated and processed at Sciences Po. The repository is based on the Dataverse open-source software and organised into collections. It is indexed by re3data.",
    'scpoCollTitle': "Sciences Po collection <span class='text-muted'>(self-deposit)</span>",
    'scpoCollPresentation': "This collection, which is managed by the Direction des ressources et de l'information scientifique (DRIS), is intended to host data produced by researchers affiliated with Sciences Po, following the self-deposit process assisted by the DRIS staff. This collection is expected to be harvested by ISIDORE, BASE, OpenAIRE.",
    'scpoCollDepositType': "self-deposit assisted by the DRIS staff",
    'scpoCollDepositRequirements': "being affiliated with Sciences Po",
    'scpoCollDepositDelay': "immediate",
    'scpoCollDataAccessDelay': "quick",
    'scpoCollDepositGuide': "thematic guide on research data management",
    'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/research-data",
    'cdspCollTitle': "CDSP collection",
    'cdspCollPresentation': "This collection managed by the Centre des données socio-politiques (CDSP) includes the <a href='/dataverse/cdsp'>catalogue of surveys, in the social science and humanities, processed and curated by CDSP engineers</a> since 2005. This catalogue brings together surveys produced at Sciences Po and other French and international institutions. It is harvested by the French SSH portal Quetelet-PROGEDO Diffusion and by the <a href='https://datacatalogue.cessda.eu'>CESSDA catalogue</a>.",
    'cdspCollDepositType': "at the CDSP",
    'cdspCollDepositRequirements': "deposit request and agreement",
    'cdspCollDepositDelay': "several months",
    'cdspCollDataAccessDelay': "quick",
    'cdspCollDepositGuide': "data deposit at the CDSP",
    'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/en/deposer-des-donnees",
    'depositType': "<b>Type of deposit</b>:",
    'depositRequirements': "<b>Deposit requirements</b>:",
    'depositDelay': "<b>Deposit delay</b>:",
    'dataAccessDelay': "<b>Data access delay</b>:",
    'deposit': "Deposit",
    'depositRequest': "Make a deposit request",
    'contact': "Contact:",
    'guides': "Guidebooks:",
    'guidesDeposit': "deposit data",
    'guidesFind': "find data",
    'learnMore': "To find out more:",
    'scpoLink': "https://www.sciencespo.fr/en",
    'tou': "General terms of use",
  },
  'fr': {
    'title': "data.sciencespo",
    'researchDataRepo': "Entrepôt de données de la recherche de Sciences Po",
    'exploreBtn': "Explorer l’entrepôt",
    'presentation': "Lancé en février 2020, data.sciencespo est une plateforme qui facilite la visibilité, la valorisation, le partage et la préservation des données de la recherche en SHS collectées ou traitées à Sciences Po, ainsi que dans d’autres institutions. L’entrepôt est basé sur la solution logicielle libre Dataverse et structuré en collections. Il est référencé par le registre de référence des données de la recherche re3data.",
    'scpoCollTitle': "Collection Sciences Po <span class='text-muted'>(auto-dépôt)</a>",
    'scpoCollPresentation': "Cette collection, administrée par la Direction des ressources et de l’information scientifique (DRIS), a vocation à accueillir exclusivement les données produites par les chercheurs affiliés à Sciences Po (données d’enquête, bases de données, etc.), sur le principe d’auto-dépôt accompagné par les services de la DRIS. Cette collection a vocation à être moissonnée par les portails et moteurs de recherche académiques ISIDORE, BASE, OpenAIRE.",
    'scpoCollDepositType': "auto-dépôt avec accompagnement des personnels de la DRIS",
    'scpoCollDepositRequirements': "être affilié à Sciences Po",
    'scpoCollDepositDelay': "instantané",
    'scpoCollDataAccessDelay': "rapide",
    'scpoCollDepositGuide': "guide thématique sur les données de la recherche",
    'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/donnees-de-la-recherche",
    'cdspCollTitle': "Collection CDSP",
    'cdspCollPresentation': "Cette collection administrée par le Centre des données socio-politiques (CDSP) comprend le <a href='/dataverse/cdsp'>catalogue d’enquêtes en sciences humaines et sociales traitées et contextualisées par les ingénieurs du CDSP</a> depuis 2005. Ce catalogue rassemble des enquêtes produites à Sciences Po ou dans d'autres institutions françaises et internationales. Il est moissonné par le portail français en SHS, Quetelet-PROGEDO Diffusion et par le <a href='https://datacatalogue.cessda.eu'>portail européen CESSDA</a>.",
    'cdspCollDepositType': "réalisé auprès du CDSP",
    'cdspCollDepositRequirements': "demande de dépôt et acceptation par le CDSP",
    'cdspCollDepositDelay': "plusieurs mois",
    'cdspCollDataAccessDelay': "rapide",
    'cdspCollDepositGuide': "procédure de proposition de données au CDSP",
    'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/fr/deposer-des-donnees",
    'depositType': "<b>Type de dépôt</b> :",
    'depositRequirements': "<b>Conditions de dépôt</b> :",
    'depositDelay': "<b>Délai de dépôt</b> :",
    'dataAccessDelay': "<b>Délai d’accès aux données</b> :",
    'deposit': "Déposer des données",
    'depositRequest': "Faire une demande de dépôt",
    'contact': "Contact :",
    'guides': "Guides :",
    'guidesDeposit': "déposer des données",
    'guidesFind': "trouver des données",
    'learnMore': "Pour en savoir plus :",
    'scpoLink': "https://www.sciencespo.fr/fr",
    'tou': "Conditions générales d'utilisation",
  },
}

export default {
  name: 'App',
  created() {
    const browserLanguage = window.navigator.userLanguage || window.navigator.language;
    this.language = browserLanguage == 'fr' ? browserLanguage : 'en';
    this.changeLanguage(this.language);
  },
  data() {
    return {
      'language': this.language,
      'logo': logo,
      'dvlogo': dvlogo,
      'dvlogofull': dvlogofull,
    };
  },
  computed: {
    translation() {
      return translation[this.language];
    },
    otherLanguage() {
      return this.language === 'en' ? 'fr' : 'en';
    }
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
      document.documentElement.setAttribute('lang', this.language);
      document.title = this.translation.title;
    },
    toggleLanguage() {
      this.changeLanguage(this.otherLanguage);
    },
  },
}
</script>
