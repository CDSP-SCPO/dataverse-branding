<template>
  <div id="app">
    <header>
        <div class="container d-sm-flex justify-content-between align-items-center py-4 flex-wrap">
            <a href="https://data.sciencespo.fr"><component :is="logo" style="height:2.5em"></component></a>
            <div class="language-chooser mt-4 mt-sm-0"><a href="#" @click.prevent="toggleLanguage" class="text-uppercase">{{ otherLanguage }}</a></div>
        </div>
    </header>
    <main class="container my-5">
        <article class="text-center mb-5 py-4">
            <h1 class="text-primary mb-4">data.sciencespo</h1>
            <a href="https://data.sciencespo.fr" class="btn btn-primary btn-lg text-uppercase">{{ translation.exploreBtn }}</a>
        </article>
        <article>
            <article class="mb-5">
                <p>{{ translation.presentation }}</p>
            </article>
            <div class="row">
                <div class="col-lg mb-5 mb-lg-0 mr-lg-2 mr-0">
                    <article class="p-4 card d-flex flex-column h-100">
                        <h4 class="text-primary font-weight-bold text-center mb-4">{{ translation.scpoCollTitle }}</h4>
                        <p>{{ translation.scpoCollPresentation }}</p>
                        <hr class="mt-auto"/>
                        <ul class="mb-0">
                            <li v-html="translation.depositType + ' ' + translation.scpoCollDepositType"></li>
                            <li v-html="translation.depositRequirements + ' ' + translation.scpoCollDepositRequirements"></li>
                            <li v-html="translation.depositDelay + ' ' + translation.scpoCollDepositDelay">}</li>
                            <li v-html="translation.dataAccessDelay + ' ' + translation.scpoCollDataAccessDelay"></li>
                        </ul>
                        <hr/>
                        <address class="text-muted mb-1">{{ translation.contact }} <a href="mailto:databib@sciencespo.fr">databib@sciencespo.fr</a></address>
                        <p class="text-muted">{{ translation.learnMore }} <a :href="translation.scpoCollDepositGuideLink" target="_blank" rel="noopener">{{ translation.scpoCollDepositGuide }}</a></p>
                        <a href="https://data.sciencespo.fr/dataverse/adscpo" class="btn btn-outline-primary btn-lg w-100 text-uppercase">{{ translation.deposit }}</a>
                    </article>
                </div>
                <div class="col-lg">
                    <article class="p-4 card d-flex flex-column h-100">
                        <h4 class="text-primary font-weight-bold text-center mb-4">{{ translation.cdspCollTitle }}</h4>
                        <p>{{ translation.cdspCollPresentation }}</p>
                        <hr class="mt-auto"/>
                        <ul class="mb-0">
                            <li v-html="translation.depositType + ' ' + translation.cdspCollDepositType"></li>
                            <li v-html="translation.depositRequirements + ' ' + translation.cdspCollDepositRequirements"></li>
                            <li v-html="translation.depositDelay + ' ' + translation.cdspCollDepositDelay"></li>
                            <li v-html="translation.dataAccessDelay + ' ' + translation.cdspCollDataAccessDelay"></li>
                        </ul>
                        <hr/>
                        <address class="text-muted mb-1">{{ translation.contact }} <a href="mailto:info.cdsp@sciencespo.fr">info.cdsp@sciencespo.fr</a></address>
                        <p class="text-muted">{{ translation.learnMore }} <a :href="translation.cdspCollDepositGuideLink" target="_blank" rel="noopener">{{ translation.cdspCollDepositGuide }}</a></p>
                        <a href="https://data.sciencespo.fr/dataverse/CDSP" class="btn btn-outline-primary btn-lg w-100 text-uppercase">{{ translation.depositRequest }}</a>
                    </article>
                </div>
            </div>
        </article>
    </main>
    <footer class="bg-light mt-5 py-4 text-muted">
        <div class="container">
            <a :href="translation.scpoLink"><component :is="logo" style="height:1em" class="img-muted"></component></a>
            <div class="mt-2 d-flex justify-content-between">
                <p class="mb-0">27, rue Saint-Guillaume<br/>75337 Paris Cedex 07</p>
                <p class="mb-0 text-right">© 2020 Sciences Po<br/><a href="https://data.sciencespo.fr/misc/cond_jur/ToU.pdf" class="text-muted">{{ translation.tou }}</a></p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import '../dist/css/index.css';
import logo from './assets/logo.svg';

const translation = {
  'en': {
    'title': "Home - data.sciencespo",
    'exploreBtn': "Find and explore data",
    'presentation': "Launched in February 2020, data.sciencespo is a repository that offers visibility, sharing and preservation of data collected, curated and processed at Sciences Po. The repository is based on the Dataverse open-source software and organised into collections. It is indexed by re3data.",
    'scpoCollTitle': "Sciences Po collection (self-deposit)",
    'scpoCollPresentation': "This collection, which is managed by the Direction des ressources et de l'information scientifique (DRIS), is intended to host data produced by researchers affiliated with Sciences Po, following the self-deposit process assisted by the DRIS staff. This collection is expected to be harvested by ISIDORE, BASE, OpenAIRE.",
    'scpoCollDepositType': "self-deposit assisted by the DRIS staff",
    'scpoCollDepositRequirements': "being affiliated with Sciences Po",
    'scpoCollDepositDelay': "immediate",
    'scpoCollDataAccessDelay': "quick",
    'scpoCollDepositGuide': "thematic guide on research data management",
    'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/research-data",
    'cdspCollTitle': "CDSP collection",
    'cdspCollPresentation': "This collection managed by the Centre des données socio-politiques (CDSP) includes the catalogue of surveys, in the social science and humanities, processed and curated by CDSP engineers since 2005. This catalogue brings together surveys produced at Sciences Po and other French and international institutions. It is harvested by the French SHS portal Quetelet-PROGEDO Diffusion and by the CESSDA.",
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
    'learnMore': "To find out more:",
    'scpoLink': "https://www.sciencespo.fr/en",
    'tou': "General terms of use",
  },
  'fr': {
    'title': "Accueil - data.sciencespo",
    'exploreBtn': "Explorer l’entrepôt",
    'presentation': "Lancé en février 2020, data.sciencespo est une plateforme qui facilite la visibilité, la valorisation, le partage et la préservation des données de la recherche en SHS collectées ou traitées à Sciences Po, ainsi que dans d’autres institutions. L’entrepôt est basé sur la solution logicielle libre Dataverse et structuré en collections. Il est référencé par le registre de référence des données de la recherche re3data.",
    'scpoCollTitle': "Collection Sciences Po (auto-dépôt)",
    'scpoCollPresentation': "Cette collection, administrée par la Direction des ressources et de l’information scientifique (DRIS), a vocation à accueillir exclusivement les données produites par les chercheurs affiliés à Sciences Po (données d’enquête, bases de données, etc.), sur le principe d’auto-dépôt accompagné par les services de la DRIS. Cette collection a vocation à être moissonnée par les portails et moteurs de recherche académiques ISIDORE, BASE, OpenAIRE.",
    'scpoCollDepositType': "auto-dépôt avec accompagnement des personnels de la DRIS",
    'scpoCollDepositRequirements': "être affilié à Sciences Po",
    'scpoCollDepositDelay': "instantané",
    'scpoCollDataAccessDelay': "rapide",
    'scpoCollDepositGuide': "guide thématique sur les données de la recherche",
    'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/donnees-de-la-recherche",
    'cdspCollTitle': "Collection CDSP",
    'cdspCollPresentation': "Cette collection administrée par le Centre des données socio-politiques (CDSP) comprend le catalogue d’enquêtes en sciences humaines et sociales traitées et contextualisées par les ingénieurs du CDSP depuis 2005. Ce catalogue rassemble des enquêtes produites à Sciences Po ou dans d'autres institutions françaises et internationales. Il est moissonné par le portail français en SHS, Quetelet-PROGEDO Diffusion et par le portail européen CESSDA.",
    'cdspCollDepositType': "réalisé auprès du CDSPP",
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
