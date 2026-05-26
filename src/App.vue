<script setup>

import {computed, ref} from 'vue'

const loginUrl = import.meta.env.VITE_LOGIN_URL
import '../dist/css/index.css';
import Logo from './assets/logo.svg?component';
import DVLogofull from './assets/dv-logo.svg?component';
import LogoFULL from './assets/logo-full-FR.svg?component';
import LogoFULLEN from './assets/logo-full-EN.svg?component';
import LeftArrow from './assets/left-arrow.svg?component';
import EmblemScpo from './assets/emblem.svg?component'
import DVLogo from './assets/dv-logo-red.svg?component';

const translations = {
    'en': {
        'title': "data.sciencespo",
        'login': 'Login',
        'home': "Home",
        'researchDataRepo': "Research data repository of Sciences Po",
        'exploreBtn': "Find and explore data",
        'presentation': "Launched in February 2020, data.sciencespo is a repository that offers visibility, sharing and preservation of data collected, curated and processed at Sciences Po. The repository is based on the Dataverse open-source software and organised into collections. It is indexed by re3data and its resources are showcased on the national research data repository <a href='https://entrepot.recherche.data.gouv.fr/dataverse/sciencespo'>Recherche Data Gouv</a>.",
        'scpoCollTitle': "SCIENCES&nbsp;PO COLLECTION <br> <span class='text-muted'>(self-deposit)</span>",
        'scpoCollPresentation': "A data catalog, based on self-deposit principle, managed and supported by the <a href='https://www.sciencespo.fr/bibliotheque/fr/services/doctorants-et-chercheurs/gestion-des-donnees-de-la-recherche/'>DRIS</a>, with the Sciences Po's research units.",
        'scpoCollDepositType': "self-deposit assisted by the DRIS staff",
        'scpoCollDepositRequirements': "being affiliated with Sciences Po",
        'scpoCollDepositDelay': "immediate",
        'scpoCollDataAccessDelay': "quick",
        'scpoCollDepositGuide': "thematic guide on research data management",
        'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/research-data",
        'cdspCollTitle': "CDSP collection",
        'cdspCollPresentation': "A catalog of surveys in the humanities and social sciences, certified <a href='https://www.coretrustseal.org/about/'>CoreTrustSeal</a>, whose curation is supported by <a href='https://www.sciencespo.fr/cdsp/en/'>CDSP</a> data engineers. The survey selection criteria are available <a href='https://www.sciencespo.fr/cdsp/files/criteres-selection-enquetes-page-cdsp_1VJTWhA.pdf'>here</a>.",
        'cdspCollDepositType': "curated at the CDSP",
        'cdspCollDepositRequirements': "deposit request and agreement",
        'cdspCollDepositDelay': "several months",
        'cdspCollDataAccessDelay': "quick",
        'cdspCollDepositGuide': "data deposit at the CDSP",
        'cdspCollCreateAccount': "Creating an account",
        'cdspCollFindRessources': "Finding data <br>",
        'cdspCollDownloadData': "Downloading data",
        'ExploreData': "Explore data",
        'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/en/deposer-des-donnees",
        'cdspCollFindGuide': "data access",
        'cdspCollFindGuideLink': "https://cdsp.sciences-po.fr/en/commander-des-donnees",
        "cdspCollLatestUpdates": "Latest updates",
        'depositType': "<b>Type of deposit</b>:",
        'depositRequirements': "<b>Deposit requirements</b>:",
        'depositDelay': "<b>Deposit delay</b>:",
        'dataAccessDelay': "<b>Data access delay</b>:",
        'deposit': "Deposit data",
        'depositRequest': "Make a deposit request",
        'tutoTitle': "Tutorials",
        'contact': "Contact:",
        'guides': "Guidebooks:",
        'guidesDeposit': "deposit data",
        'guidesDepositLink': "https://sciencespo.libguides.com/ld.php?content_id=34525576",
        'guidesFind': "find data",
        'guidesFindLink': "https://sciencespo.libguides.com/ld.php?content_id=34525575",
        'learnMore': "To find out more:",
        'scpoLink': "https://www.sciencespo.fr/en",
        'tou': "General terms of use",
        'drisAdministration': "Collection mangaed by DRIS",
        'langSwitch': "Switch to French",
    },
    'fr': {
        'title': "data.sciencespo",
        'login': "Se connecter",
        'home': "Accueil",
        'researchDataRepo': "L'entrepôt de données de la recherche de Sciences Po",
        'exploreBtn': "Explorer l'entrepôt",
        'presentation': "Lancée en février 2020, data.sciencespo est une plateforme qui facilite la visibilité, la valorisation, le partage et la préservation des données de la recherche en SHS collectées ou traitées à Sciences Po, ainsi que dans d'autres institutions. L'entrepôt est basé sur la solution logicielle libre Dataverse et structuré en collections. Il est référencé par le registre de référence des données de la recherche re3data et présent dans la collection catalogues de l'entrepôt national <a href='https://entrepot.recherche.data.gouv.fr/dataverse/sciencespo'>Recherche Data Gouv</a>.",
        'scpoCollTitle': "COLLECTION SCIENCES&nbsp;PO <br> <span class='text-muted'>(auto-dépôt)</span>",
        'scpoCollPresentation': "Un catalogue de données, fondé sur le principe de l'auto-dépôt, géré et accompagné par la <a href='https://www.sciencespo.fr/bibliotheque/fr/services/doctorants-et-chercheurs/gestion-des-donnees-de-la-recherche/'>DRIS</a> en lien avec les unités de recherche de Sciences Po.",
        'scpoCollDepositType': "auto-dépôt avec accompagnement des personnels de la DRIS",
        'scpoCollDepositRequirements': "être affilié à Sciences Po",
        'scpoCollDepositDelay': "instantané",
        'scpoCollDataAccessDelay': "rapide",
        'scpoCollDepositGuide': "guide thématique sur les données de la recherche",
        'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/donnees-de-la-recherche",
        'cdspCollTitle': "Collection CDSP",
        'cdspCollPresentation': "Un catalogue d'enquêtes en sciences humaines et sociales, certifié <a href='https://www.coretrustseal.org/about/'>CoreTrustSeal</a>, dont la curation est réalisée par les ingénieurs du <a href='https://www.sciencespo.fr/cdsp/fr/'>CDSP</a>. Les critères de sélection des enquêtes sont consultables <a href='https://www.sciencespo.fr/cdsp/files/criteres-selection-enquetes-page-cdsp_1VJTWhA.pdf'>ici</a>.",
        'cdspCollDepositType': "réalisé auprès du CDSP",
        'cdspCollDepositRequirements': "demande de dépôt et acceptation par le CDSP",
        'cdspCollDepositDelay': "généralement un mois après l'acceptation du dépôt, pour une première version",
        'cdspCollDataAccessDelay': "rapide",
        'cdspCollDepositGuide': "Procédures d'accès aux données",
        'cdspCollCreateAccount': "Se créer un compte",
        'cdspCollFindRessources': "Trouver des données",
        'cdspCollDownloadData': "Télécharger des données",
        'ExploreData': "Explorer les données",
        'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/fr/deposer-des-donnees",
        'cdspCollFindGuide': "Procédure de proposition de données au CDSP",
        'cdspCollFindGuideLink': "https://cdsp.sciences-po.fr/fr/commander-des-donnees",
        "cdspCollLatestUpdates": "Dernières mises à jour",
        'depositType': "<b>Type de dépôt</b> :",
        'depositRequirements': "<b>Conditions de dépôt</b> :",
        'depositDelay': "<b>Délai de dépôt</b> :",
        'dataAccessDelay': "<b>Délai d'accès aux données</b> :",
        'deposit': "Déposer des données",
        'depositRequest': "Faire une demande de dépôt",
        'tutoTitle': "Tutoriels",
        'contact': "Contact :",
        'guides': "Guides :",
        'guidesDeposit': "déposer des données",
        'guidesDepositLink': "http://sciencespo.libguides.com/ld.php?content_id=34525450",
        'guidesFind': "trouver des données",
        'guidesFindLink': "http://sciencespo.libguides.com/ld.php?content_id=34525448",
        'learnMore': "Pour en savoir plus :",
        'scpoLink': "https://www.sciencespo.fr/fr",
        'tou': "Conditions générales d'utilisation",
        'drisAdministration': "Collection administrée par la DRIS",
        'langSwitch': "Passer en anglais",
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

// Gestion du call api pour récupérer les dernières mises en ligne
const firstPageResults = ref([]);
const loadingResults = ref(true);

fetch('/api/search?q=*&subtree=cdsp&fq=publicationStatus:Published&type=dataset&sort=date&order=desc&per_page=3&start=0', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en'
    }
})
    .then(response => response.json())
    .then(data => {
        if (data && data.data && data.data.items) {
            firstPageResults.value = data.data.items;
        } else {
            console.error('Réponse API inattendue:', data);
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    })
    .finally(() => {
        loadingResults.value = false;
    });


// Fonction pour tronquer la description
const truncateDescription = (description) => {
    if (description.length > 175) {
        return description.substring(0, 175) + '...';
    }
    return description;
};


// Fonction pour formater la date en format français
const formatDate = (isoDate) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(isoDate).toLocaleDateString('fr-FR', options);
};

</script>

<template>
    <div class="page-container">
        <header>
            <div id="id_accueil" class="container d-sm-flex justify-content-between align-items-center py-4 flex-wrap">
                <a href="/">
                    <Logo style="height:2.5em"/>
                </a>
                <div class="mt-4 mt-sm-0">
                    <a :href="loginUrl" class="grey-link text-uppercase"
                       v-html="translation.login"></a>
                    <a href="#" @click.prevent="toggleLanguage"
                       class="text-uppercase language-chooser ms-3 ms-sm-5 red-box"
                       :aria-label="translation.langSwitch">{{ otherLanguage }}</a>
                </div>
            </div>
        </header>

        <transition name="fade" mode="out-in">
            <main v-if="visibleSection !== 'cdsp' && visibleSection !== 'adsp'"
                  key="home"
                  class="home-section flex-shrink-0">
                <article
                    class="hero-section text-center mb-3 py-3 mt-3 position-relative d-flex flex-column justify-content-center align-items-center">
                    <h1 class="text-primary mb-2">data.sciencespo</h1>
                    <h4 class="text-muted mb-3">{{ translation.researchDataRepo }}</h4>
                    <DVLogo class="background-logo"/>
                </article>
                <div class="container container-custom mt-1">
                    <div class="row justify-content-center align-items-start">
                        <!-- Bloc CDSP -->
                        <div class="custom-col px-3">
                            <div class="d-flex flex-column mb-3 mt-3 collection-card">
                                <a href="#" @click.prevent="showSection('cdsp')"
                                   class="d-flex flex-column align-items-center text-center block">
                                    <div class="align-self-stretch mb-3">
                                        <LogoFULLEN v-if="language === 'en'" class="svg-container" alt="Banque de données du CDSP"/>
                                        <LogoFULL v-else class="svg-container" alt="Banque de données du CDSP"/>
                                    </div>
                                </a>
                                <p class="pt-2 mb-0" v-html="translation.cdspCollPresentation"></p>
                            </div>
                        </div>
                        <!-- Bloc Sciences Po -->
                        <div class="custom-col px-3">
                            <div class="d-flex flex-column mb-3 mt-3 collection-card">
                                <a href="#" @click.prevent="showSection('adsp')"
                                   class="d-flex flex-column align-items-center text-center block text-decoration-none">
                                    <div class="emblem-header w-100 mb-3">
                                        <EmblemScpo class="emblem-scpo" alt="Sciences Po"/>
                                        <h4 class="text-primary fw-bold mt-2" v-html="translation.scpoCollTitle"
                                            style="font-size: 2em;"></h4>
                                    </div>
                                </a>
                                <p class="pt-2 mb-0" v-html="translation.scpoCollPresentation"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <main v-else-if="visibleSection === 'cdsp'" key="cdsp" class="pb-5">
                <div class="container-md">
                    <a href="/" class="back-link mt-2 grey-link">
                        <LeftArrow class="svg-arrow-container me-2"/>
                        {{ translation.home }}</a>
                    <div>
                        <!-- Section conditionnelle pour 'Collection CDSP' -->
                        <article id="id_cdsp" class="pt-5">
                            <div class="row mb-3 d-flex pb-5 pt-3">
                                <div class="col text-center">
                                    <LogoFULL class="svg-container"/>
                                </div>
                            </div>
                            <div class="row text-center mb-5">
                                <div class="col-12 d-flex justify-content-center">
                                    <a href="/dataverse/cdsp"
                                       class="btn btn-outline-primary btn-lg text-uppercase mx-2">{{
                                            translation.ExploreData
                                        }}</a>
                                    <a href="https://cdsp.sciences-po.fr/fr/proposer-des-donnees/"
                                       class="btn btn-outline-primary btn-lg text-uppercase mx-2">{{
                                            translation.deposit
                                        }}</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg mb-5 mb-lg-0 me-lg-2 me-0">
                                    <article class="p-4 card d-flex flex-column h-100">
                                        <h4 class="text-primary fw-bold text-center mb-4"
                                            v-html="translation.tutoTitle"></h4>

                                        <div class="row to-gap justify-content-center">
                                            <div class="col-6 text-center">
                                                <h5 class="text-center title-video fw-bold"
                                                    v-html="translation.cdspCollCreateAccount"></h5>
                                                <div class="video-thumbnail">
                                                    <a href="https://www.youtube.com/watch?v=GdLg2PFQgH4" target="_blank">
                                                        <img src="https://img.youtube.com/vi/GdLg2PFQgH4/0.jpg"
                                                             alt="Video Thumbnail" class="thumbnail-image">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-6 text-center">
                                                <h5 class="text-center title-video fw-bold"
                                                    v-html="translation.cdspCollFindRessources"></h5>
                                                <div class="video-thumbnail">
                                                    <a href="https://www.youtube.com/watch?v=1jEram-UFC4" target="_blank">
                                                        <img src="https://img.youtube.com/vi/1jEram-UFC4/0.jpg"
                                                             alt="Video Thumbnail" class="thumbnail-image">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-6 text-center">
                                                <h5 class="text-center title-video fw-bold"
                                                    v-html="translation.cdspCollDownloadData"></h5>
                                                <div class="video-thumbnail">
                                                    <a href="https://www.youtube.com/watch?v=qs6-IFfHmls" target="_blank">
                                                        <img src="https://img.youtube.com/vi/qs6-IFfHmls/0.jpg"
                                                             alt="Video Thumbnail" class="thumbnail-image">
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                    </article>
                                </div>
                                <div class="col-lg">
                                    <article class="p-4 card d-flex flex-column h-100">
                                        <h4 class="text-primary fw-bold text-center mb-4"
                                            v-html="translation.cdspCollLatestUpdates">
                                        </h4>
                                        <p v-if="loadingResults" class="text-muted text-center">Chargement...</p>
                                        <p v-else-if="firstPageResults.length === 0" class="text-muted text-center">Aucune donnée disponible.</p>
                                        <template v-else>
                                            <div v-for="(item, index) in firstPageResults" :key="item.global_id">
                                                <a class="survey-links" :href="item.url" target="_blank">
                                                    <h5 class="mb-0">{{ item.name }}</h5>
                                                    <i>{{ formatDate(item.published_at) }}</i>
                                                    <p class="mt-2">{{ truncateDescription(item.description) }}</p>
                                                </a>
                                                <hr v-if="index < firstPageResults.length - 1" class="mt-1">
                                            </div>
                                        </template>
                                    </article>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </main>

            <main v-else-if="visibleSection === 'adsp'" key="adsp" class="section-page">
                <div class="container py-3">
                    <a href="/" class="back-link grey-link">
                        <LeftArrow class="svg-arrow-container me-2"/>
                        {{ translation.home }}</a>
                    <article id="id_adsp">
                        <div class="row text-center mb-3">
                            <div class="col-12">
                                <h2 class="text-primary mb-2" v-html="translation.scpoCollTitle"></h2>
                                <h4 class="text-muted mb-3" v-html="translation.drisAdministration"></h4>
                            </div>
                        </div>

                        <div class="col-lg mb-3 mb-lg-0">
                            <article class="p-3 card d-flex flex-column h-100">
                                <p v-html="translation.scpoCollPresentation"></p>
                                <hr class="mt-auto"/>
                                <ul class="mb-0">
                                    <li class="mb-1"
                                        v-html="translation.depositType + ' ' + translation.scpoCollDepositType"></li>
                                    <li class="mb-1"
                                        v-html="translation.depositRequirements + ' ' + translation.scpoCollDepositRequirements"></li>
                                    <li class="mb-1"
                                        v-html="translation.depositDelay + ' ' + translation.scpoCollDepositDelay"></li>
                                    <li v-html="translation.dataAccessDelay + ' ' + translation.scpoCollDataAccessDelay"></li>
                                </ul>
                                <hr/>
                                <address class="text-muted mb-1">{{ translation.contact }} <a
                                    href="mailto:data.bib@sciencespo.fr">data.bib@sciencespo.fr</a></address>
                                <p class="text-muted mb-1">{{ translation.guides }} <a
                                    :href="translation.guidesDepositLink">{{ translation.guidesDeposit }}</a> / <a
                                    :href="translation.guidesFindLink">{{ translation.guidesFind }}</a></p>
                                <p class="text-muted">{{ translation.learnMore }} <a
                                    :href="translation.scpoCollDepositGuideLink" target="_blank"
                                    rel="noopener">{{ translation.scpoCollDepositGuide }}</a></p>
                                <div class="btn-group-responsive">
                                    <a href="/dataverse/adscpo"
                                       class="btn btn-outline-primary btn-lg text-uppercase">{{
                                            translation.ExploreData
                                        }}</a>
                                    <a href="https://sciencespo.libguides.com/donnees-de-la-recherche"
                                       class="btn btn-outline-primary btn-lg text-uppercase">{{
                                            translation.deposit
                                        }}</a>
                                </div>
                            </article>
                        </div>
                    </article>
                </div>
            </main>
        </transition>

        <footer class="bg-light mt-auto py-4 text-muted">
            <div class="container d-sm-flex justify-content-between">
                <div>
                    <p class="mb-2"><a :href="translation.scpoLink" class="d-inline-flex align-items-center"
                                       style="height:1.5em;">
                        <Logo style="height:1em" class="img-muted"/>
                    </a></p>
                    <p class="mb-2">27, rue Saint-Guillaume<br/>75337 Paris Cedex 07</p>
                    <p class="mb-0"><small>© {{ new Date().getFullYear() }} Sciences Po<br/><a
                        href="/misc/cond_jur/ToU.pdf" class="text-muted">{{ translation.tou }}</a></small></p>
                </div>
                <p class="mb-0 mt-4 mt-sm-auto"><a href="https://dataverse.org" target="_blank" rel="noopener"
                                                   class="text-muted">Powered by
                    <DVLogofull style="height:2.5em" class="img-muted"/>
                </a></p>
            </div>
        </footer>
    </div>
</template>


<script>
export default {
    data() {
        return {
            visibleSection: null,
        };
    },
    methods: {
        showSection(section) {
            this.visibleSection = section;
            window.scrollTo({top: 0, behavior: 'smooth'});
        },
        checkURLParams() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('section')) {
                const section = urlParams.get('section');
                if (section === 'cdsp' || section === 'adsp') {
                    this.showSection(section);
                }
            }
        }
    },
    mounted() {
        this.checkURLParams();
    }
};
</script>
