<script setup>

import { computed, ref} from 'vue'
import '../dist/css/index.css';
import Logo from './assets/logo.svg?component';
import DVLogo from './assets/dv-logo-red.svg?component';
import DVLogofull from './assets/dv-logo.svg?component';

const translations = {
  'en': {
    'title': "data.sciencespo",
    'researchDataRepo': "Research data repository of Sciences Po",
    'exploreBtn': "Find and explore data",
    'presentation': "Launched in February 2020, data.sciencespo is a repository that offers visibility, sharing and preservation of data collected, curated and processed at Sciences Po. The repository is based on the Dataverse open-source software and organised into collections. It is indexed by re3data and its resources are showcased on the national research data repository <a href='https://entrepot.recherche.data.gouv.fr/dataverse/sciencespo'>Recherche Data Gouv</a>.",
    'scpoCollTitle': "Sciences Po collection <span class='text-muted'>(self-deposit)</span>",
    'scpoCollPresentation': "This collection, which is managed by the Direction des ressources et de l'information scientifique (DRIS), is intended to host data produced by researchers affiliated with Sciences Po, following the self-deposit process assisted by the DRIS staff. This collection is expected to be harvested by ISIDORE, BASE, OpenAIRE.",
    'scpoCollDepositType': "self-deposit assisted by the DRIS staff",
    'scpoCollDepositRequirements': "being affiliated with Sciences Po",
    'scpoCollDepositDelay': "immediate",
    'scpoCollDataAccessDelay': "quick",
    'scpoCollDepositGuide': "thematic guide on research data management",
    'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/research-data",
    'cdspCollTitle': "CDSP collection",
    'cdspCollPresentation': "This collection managed by the Centre des données socio-politiques (CDSP) includes the <a href='/dataverse/cdsp'>catalogue of surveys, in the social science and humanities, processed and curated by CDSP engineers</a> since 2005. This catalogue brings together surveys produced at Sciences Po and other French and international institutions. It is harvested by the European <a href='https://datacatalogue.cessda.eu' target='_blank' rel='noopener'>CESSDA catalogue</a>, the French SSH portal Isidore and signalled by the national Research Infrastructure Progedo.",
    'cdspCollDepositType': "curated at the CDSP",
    'cdspCollDepositRequirements': "deposit request and agreement",
    'cdspCollDepositDelay': "several months",
    'cdspCollDataAccessDelay': "quick",
    'cdspCollDepositGuide': "data deposit at the CDSP",
    'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/en/deposer-des-donnees",
    'cdspCollFindGuide': "data access",
    'cdspCollFindGuideLink': "https://cdsp.sciences-po.fr/en/commander-des-donnees",
    'depositType': "<b>Type of deposit</b>:",
    'depositRequirements': "<b>Deposit requirements</b>:",
    'depositDelay': "<b>Deposit delay</b>:",
    'dataAccessDelay': "<b>Data access delay</b>:",
    'deposit': "Deposit",
    'depositRequest': "Make a deposit request",
    'contact': "Contact:",
    'guides': "Guidebooks:",
    'guidesDeposit': "deposit data",
    'guidesDepositLink': "https://sciencespo.libguides.com/ld.php?content_id=34525576",
    'guidesFind': "find data",
    'guidesFindLink': "https://sciencespo.libguides.com/ld.php?content_id=34525575",
    'learnMore': "To find out more:",
    'scpoLink': "https://www.sciencespo.fr/en",
    'tou': "General terms of use",
  },
  'fr': {
    'title': "data.sciencespo",
    'researchDataRepo': "Entrepôt de données de la recherche de Sciences Po",
    'exploreBtn': "Explorer l’entrepôt",
    'presentation': "Lancée en février 2020, data.sciencespo est une plateforme qui facilite la visibilité, la valorisation, le partage et la préservation des données de la recherche en SHS collectées ou traitées à Sciences Po, ainsi que dans d’autres institutions. L’entrepôt est basé sur la solution logicielle libre Dataverse et structuré en collections. Il est référencé par le registre de référence des données de la recherche re3data et présent dans la collection catalogues de l'entrepôt national <a href='https://entrepot.recherche.data.gouv.fr/dataverse/sciencespo'>Recherche Data Gouv</a>.",
    'scpoCollTitle': "Collection Sciences Po <span class='text-muted'>(auto-dépôt)</a>",
    'scpoCollPresentation': "Cette collection, administrée par la Direction des ressources et de l’information scientifique (DRIS), a vocation à accueillir exclusivement les données produites par les chercheurs affiliés à Sciences Po (données d’enquête, bases de données, etc.), sur le principe d’auto-dépôt accompagné par les services de la DRIS. Cette collection a vocation à être moissonnée par les portails et moteurs de recherche académiques ISIDORE, BASE, OpenAIRE.",
    'scpoCollDepositType': "auto-dépôt avec accompagnement des personnels de la DRIS",
    'scpoCollDepositRequirements': "être affilié à Sciences Po",
    'scpoCollDepositDelay': "instantané",
    'scpoCollDataAccessDelay': "rapide",
    'scpoCollDepositGuide': "guide thématique sur les données de la recherche",
    'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/donnees-de-la-recherche",
    'cdspCollTitle': "Collection CDSP",
    'cdspCollPresentation': "Cette collection administrée par le Centre des données socio-politiques (CDSP) comprend le <a href='/dataverse/cdsp'>catalogue d’enquêtes en sciences humaines et sociales traitées et contextualisées par les ingénieurs du CDSP</a> depuis 2005. Ce catalogue rassemble des enquêtes produites à Sciences Po ou dans d'autres institutions françaises et internationales. Il est moissonné par le portail français en SHS Isidore, par le <a href='https://datacatalogue.cessda.eu' target='_blank' rel='noopener'>portail européen CESSDA</a>, et référencé par l'infrastructure de recherche PROGEDO.",
    'cdspCollDepositType': "réalisé auprès du CDSP",
    'cdspCollDepositRequirements': "demande de dépôt et acceptation par le CDSP",
    'cdspCollDepositDelay': "généralement un mois après l'acceptation du dépôt, pour une première version",
    'cdspCollDataAccessDelay': "rapide",
    'cdspCollDepositGuide': "Procédures d'accès aux données",
    'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/fr/deposer-des-donnees",
    'cdspCollFindGuide': "Procédure de proposition de données au CDSP",
    'cdspCollFindGuideLink': "https://cdsp.sciences-po.fr/fr/commander-des-donnees",
    'depositType': "<b>Type de dépôt</b> :",
    'depositRequirements': "<b>Conditions de dépôt</b> :",
    'depositDelay': "<b>Délai de dépôt</b> :",
    'dataAccessDelay': "<b>Délai d’accès aux données</b> :",
    'deposit': "Déposer des données",
    'depositRequest': "Faire une demande de dépôt",
    'contact': "Contact :",
    'guides': "Guides :",
    'guidesDeposit': "déposer des données",
    'guidesDepositLink': "http://sciencespo.libguides.com/ld.php?content_id=34525450",
    'guidesFind': "trouver des données",
    'guidesFindLink': "http://sciencespo.libguides.com/ld.php?content_id=34525448",
    'learnMore': "Pour en savoir plus :",
    'scpoLink': "https://www.sciencespo.fr/fr",
    'tou': "Conditions générales d'utilisation",
  },
}

const browserLanguage = window.navigator.language || window.navigator.language;
const language = ref(browserLanguage.includes('fr') ? 'fr' : 'en');

const translation = computed(() => {
  return translations[language.value];
});
const otherLanguage = computed(() => {
  return language.value === 'en' ? 'fr' : 'en';
});

function changeLanguage(newLang) {
  language.value = newLang;
  document.documentElement.setAttribute('lang', language.value);
  document.title = translation.value.title;
}
function toggleLanguage() {
  changeLanguage(otherLanguage.value);
}

// set start dom state
changeLanguage(language.value);
</script>

<template>
  <header>
      <div class="container d-sm-flex justify-content-between align-items-center py-4 flex-wrap">
          <a href="/"><Logo style="height:2.5em"/></a>
          <div class="language-chooser mt-4 mt-sm-0"><a href="#" @click.prevent="toggleLanguage" class="text-uppercase">{{ otherLanguage }}</a></div>
      </div>
  </header>
  <main class="container my-5">
      <article class="text-center mb-5 py-5 position-relative d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-primary mb-2">data.sciencespo</h1>
          <h4 class="text-muted mb-5">{{ translation.researchDataRepo }}</h4>
          <a href="/dataverse/sciencespo" class="btn btn-primary btn-lg text-uppercase">{{ translation.exploreBtn }}</a>
          <DVLogo class="background-logo"/>
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
                          <li class="mb-1" v-html="translation.depositDelay + ' ' + translation.scpoCollDepositDelay"></li>
                          <li v-html="translation.dataAccessDelay + ' ' + translation.scpoCollDataAccessDelay"></li>
                      </ul>
                      <hr/>
                      <address class="text-muted mb-1">{{ translation.contact }} <a href="mailto:data.bib@sciencespo.fr">data.bib@sciencespo.fr</a></address>
                      <p class="text-muted mb-1">{{ translation.guides }} <a :href="translation.guidesDepositLink">{{ translation.guidesDeposit }}</a> / <a :href="translation.guidesFindLink">{{ translation.guidesFind }}</a></p>
                      <p class="text-muted">{{ translation.learnMore }} <a :href="translation.scpoCollDepositGuideLink" target="_blank" rel="noopener">{{ translation.scpoCollDepositGuide }}</a></p>
                      <a href="/dataverse/adscpo" class="btn btn-outline-primary btn-lg w-100 text-uppercase">{{ translation.deposit }}</a>
                  </article>
              </div>
              <div class="col-lg">
                  <article class="p-4 card d-flex flex-column h-100">
                      <h4 class="text-primary font-weight-bold text-center mb-4"><a href="https://data.sciencespo.fr/dataverse/cdsp" target='_blank' rel='noopener' v-html="translation.cdspCollTitle"></a></h4>
                      <p v-html="translation.cdspCollPresentation"></p>
                      <hr class="mt-auto"/>
                      <ul class="mb-0">
                          <li class="mb-1" v-html="translation.depositType + ' ' + translation.cdspCollDepositType"></li>
                          <li class="mb-1" v-html="translation.depositRequirements + ' ' + translation.cdspCollDepositRequirements"></li>
                          <li class="mb-1" v-html="translation.depositDelay + ' ' + translation.cdspCollDepositDelay"></li>
                      </ul>
                      <hr/>
                      <address class="text-muted mb-1">{{ translation.contact }} <a href="mailto:info.cdsp@sciencespo.fr">info.cdsp@sciencespo.fr</a></address>
                      <p class="text-muted mb-1">{{ translation.guides }} <a :href="translation.cdspCollFindGuideLink">{{ translation.cdspCollFindGuide }}</a> / <a :href="translation.cdspCollDepositGuideLink">{{ translation.cdspCollDepositGuide }}</a></p>
                      <p class="text-muted" style="visibility:hidden">{{ translation.guides }} TBD</p>
                      <a href="https://cdsp.sciences-po.fr/fr/proposer-des-donnees" class="btn btn-outline-primary btn-lg w-100 text-uppercase">{{ translation.depositRequest }}</a>
                  </article>
              </div>
          </div>
      </article>
  </main>
  <footer class="bg-light mt-5 py-5 text-muted">
      <div class="container d-sm-flex justify-content-between">
          <div>
            <p class="mb-2"><a :href="translation.scpoLink" class="d-inline-flex align-items-center" style="height:1.5em;"><Logo style="height:1em" class="img-muted"/></a></p>
            <p class="mb-2">27, rue Saint-Guillaume<br/>75337 Paris Cedex 07</p>
            <p class="mb-0"><small>© {{ new Date().getFullYear() }} Sciences Po<br/><a href="/misc/cond_jur/ToU.pdf" class="text-muted">{{ translation.tou }}</a></small></p>
          </div>
          <p class="mb-0 mt-4 mt-sm-auto"><a href="https://dataverse.org" target="_blank" rel="noopener" class="text-muted">Powered by <DVLogofull style="height:2.5em" class="img-muted"/></a></p>
      </div>
  </footer>
</template>
