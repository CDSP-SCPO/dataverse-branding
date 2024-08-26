<script setup>

import {computed, ref} from 'vue'
import '../dist/css/index.css';
import Logo from './assets/logo.svg?component';
import DVLogofull from './assets/dv-logo.svg?component';
import LogoFULL from './assets/logo-full-FR.svg?component';
import LogoFULLEN from './assets/logo-full-EN.svg?component';
import LeftArrow from './assets/left-arrow.svg?component';

const translations = {
    'en': {
        'title': "data.sciencespo",
        'login': 'Login',
        'home': "Home",
        'researchDataRepo': "Research data repository of Sciences Po",
        'exploreBtn': "Find and explore data",
        'presentation': "Launched in February 2020, data.sciencespo is a repository that offers visibility, sharing and preservation of data collected, curated and processed at Sciences Po. The repository is based on the Dataverse open-source software and organised into collections. It is indexed by re3data and its resources are showcased on the national research data repository <a href='https://entrepot.recherche.data.gouv.fr/dataverse/sciencespo'>Recherche Data Gouv</a>.",
        'scpoCollTitle': "Sciences Po collection <span class='text-muted'>(self-deposit)</span>",
        'scpoCollPresentation': "Based on the principle of self-deposit, this collection managed by the <a href='https://www.sciencespo.fr/bibliotheque/en.html'>DRIS</a> services enables rapid deposit of data produced by Sciences Po researchers.",
        'scpoCollDepositType': "self-deposit assisted by the DRIS staff",
        'scpoCollDepositRequirements': "being affiliated with Sciences Po",
        'scpoCollDepositDelay': "immediate",
        'scpoCollDataAccessDelay': "quick",
        'scpoCollDepositGuide': "thematic guide on research data management",
        'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/research-data",
        'cdspCollTitle': "CDSP collection",
        'cdspCollPresentation': "A catalog of surveys in the humanities and social sciences, certified <a href='https://www.coretrustseal.org/about/'>CoreTrustSeal</a>, whose repository is supported by <a href='https://cdsp.sciences-po.fr/en/'>CDDP</a> engineers.",
        'cdspCollDepositType': "curated at the CDSP",
        'cdspCollDepositRequirements': "deposit request and agreement",
        'cdspCollDepositDelay': "several months",
        'cdspCollDataAccessDelay': "quick",
        'cdspCollDepositGuide': "data deposit at the CDSP",
        'cdspCollCreateAccount': "Create account",
        'cdspCollFindRessources': "Find ressources",
        'cdspCollDownloadData': "Download data",
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
        'tutoIntro': "The CDSP is currently working on the production of tutorials for users. The tutorials will soon be available in this section.",
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
    },
    'fr': {
        'title': "data.sciencespo",
        'login': "Se connecter",
        'home': "Accueil",
        'researchDataRepo': "Entrepôt de données de la recherche de Sciences Po",
        'exploreBtn': "Explorer l’entrepôt",
        'presentation': "Lancée en février 2020, data.sciencespo est une plateforme qui facilite la visibilité, la valorisation, le partage et la préservation des données de la recherche en SHS collectées ou traitées à Sciences Po, ainsi que dans d’autres institutions. L’entrepôt est basé sur la solution logicielle libre Dataverse et structuré en collections. Il est référencé par le registre de référence des données de la recherche re3data et présent dans la collection catalogues de l'entrepôt national <a href='https://entrepot.recherche.data.gouv.fr/dataverse/sciencespo'>Recherche Data Gouv</a>.",
        'scpoCollTitle': "Collection Sciences Po <span class='text-muted'>(auto-dépôt)</a>",
        'scpoCollPresentation': "Fondée sur le principe de l'auto-dépôt, cette collection gérée par les services de la <a href='https://www.sciencespo.fr/bibliotheque/fr.html'>DRIS</a> permet un dépôt rapide des données produites par les chercheurs de Sciences Po",
        'scpoCollDepositType': "auto-dépôt avec accompagnement des personnels de la DRIS",
        'scpoCollDepositRequirements': "être affilié à Sciences Po",
        'scpoCollDepositDelay': "instantané",
        'scpoCollDataAccessDelay': "rapide",
        'scpoCollDepositGuide': "guide thématique sur les données de la recherche",
        'scpoCollDepositGuideLink': "https://sciencespo.libguides.com/donnees-de-la-recherche",
        'cdspCollTitle': "Collection CDSP",
        'cdspCollPresentation': "Un catalogue d'enquêtes en sciences humaines et sociales, certifié <a href='https://www.coretrustseal.org/about/'>CoreTrustSeal</a>, dont le dépôt est accompagné par les ingénieurs du <a href='https://cdsp.sciences-po.fr/fr/'>CDSP</a>.",
        'cdspCollDepositType': "réalisé auprès du CDSP",
        'cdspCollDepositRequirements': "demande de dépôt et acceptation par le CDSP",
        'cdspCollDepositDelay': "généralement un mois après l'acceptation du dépôt, pour une première version",
        'cdspCollDataAccessDelay': "rapide",
        'cdspCollDepositGuide': "Procédures d'accès aux données",
        'cdspCollCreateAccount': "Se créer un compte utilisateur",
        'cdspCollFindRessources': "Trouver des ressources",
        'cdspCollDownloadData': "Télécharger des données",
        'ExploreData': "Explorer les données",
        'cdspCollDepositGuideLink': "https://cdsp.sciences-po.fr/fr/deposer-des-donnees",
        'cdspCollFindGuide': "Procédure de proposition de données au CDSP",
        'cdspCollFindGuideLink': "https://cdsp.sciences-po.fr/fr/commander-des-donnees",
        "cdspCollLatestUpdates": "Dernières mises à jour",
        'depositType': "<b>Type de dépôt</b> :",
        'depositRequirements': "<b>Conditions de dépôt</b> :",
        'depositDelay': "<b>Délai de dépôt</b> :",
        'dataAccessDelay': "<b>Délai d’accès aux données</b> :",
        'deposit': "Déposer des données",
        'depositRequest': "Faire une demande de dépôt",
        'tutoTitle': "Tutoriels",
        'tutoIntro': "Le CDSP travaille actuellement à la réalisation de tutoriels à destinations des utilisateurs. <br> Les tutoriels seront bientôt disponibles dans cette section.",
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

fetch('https://data.sciencespo.fr/api/search?q=*&subtree=cdsp&fq=publicationStatus:Published&type=dataset&sort=date&order=desc&per_page=3&start=0', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en'
    }
})
    .then(response => response.json())
    .then(data => {
        if (firstPageResults.value) {
            firstPageResults.value = data.data.items;
        } else {
            console.error('Erreur : firstPageResults.value n\'est pas défini.');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
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
                    <a href="https://data.sciencespo.fr/loginpage.xhtml" class="grey-link text-uppercase"
                       v-html="translation.login"></a>
                    <a href="#" @click.prevent="toggleLanguage"
                       class="text-uppercase language-chooser ml-5 red-box">{{ otherLanguage }}</a>
                </div>
            </div>
        </header>

        <main v-if="visibleSection !== 'cdsp' && visibleSection !== 'adsp'"
              class="flex-shrink-0 d-flex align-items-center">
            <div class="container container-custom">
                <!-- Section principale -->
                <div class="row justify-content-center align-items-center">
                    <!-- Premier bloc -->
                    <div class="col-lg-6">
                        <div class="block mb-5">
                            <a href="#" @click.prevent="showSection('cdsp')"
                               class="d-flex flex-column align-items-center text-center">
                                <div class="align-self-stretch mb-3">
                                    <LogoFULLEN v-if="language === 'en'" class="svg-container"/>
                                    <LogoFULL v-else class="svg-container"/>
                                </div>
                            </a>
                            <p class="pt-2" v-html="translation.cdspCollPresentation"></p>
                        </div>
                    </div>
                    <!-- Deuxième bloc -->
                    <div class="col-lg-6">
                        <div class="block mb-5">
                            <a href="#" @click.prevent="showSection('adsp')"
                               class="d-flex flex-column align-items-center text-center">
                                <div class="svg-container align-self-stretch mb-3">
                                    <h4 class="text-primary font-weight-bold text-center mb-4 mt-2"
                                        v-html="translation.scpoCollTitle" style="font-size: 2.2em"></h4>

                                </div>
                            </a>
                            <p class="pt-2" v-html="translation.scpoCollPresentation"></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <main v-if="visibleSection === 'cdsp'" class="pb-5">


            <div class="container">
                <a href="/" class="position-absolute mt-2 grey-link">
                    <LeftArrow class="svg-arrow-container mr-2"/>{{ translation.home }}</a>
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
                            <div class="col-lg mb-5 mb-lg-0 mr-lg-2 mr-0">
                                <article class="p-4 card d-flex flex-column h-100">
                                    <h4 class="text-primary font-weight-bold text-center mb-4"
                                        v-html="translation.tutoTitle"></h4>
                                    <p class="mb-4" v-html="translation.tutoIntro"></p>

<!--
                                    <div class="row to-gap justify-content-center">
                                        <div class="col-5">
                                            <h5 class="text-center" v-html="translation.cdspCollCreateAccount"></h5>
                                            <div class="video-thumbnail">
                                                <a href="https://www.youtube.com/watch?v=iTOrmvRkL6U" target="_blank">
                                                    <img src="https://img.youtube.com/vi/iTOrmvRkL6U/0.jpg"
                                                         alt="Video Thumbnail" class="thumbnail-image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <h5 class="text-center" v-html="translation.cdspCollFindRessources"></h5>
                                            <div class="video-thumbnail">
                                                <a href="https://www.youtube.com/watch?v=iTOrmvRkL6U" target="_blank">
                                                    <img src="https://img.youtube.com/vi/iTOrmvRkL6U/0.jpg"
                                                         alt="Video Thumbnail" class="thumbnail-image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <h5 class="text-center" v-html="translation.cdspCollDownloadData"></h5>
                                            <div class="video-thumbnail">
                                                <a href="https://www.youtube.com/watch?v=iTOrmvRkL6U" target="_blank">
                                                    <img src="https://img.youtube.com/vi/iTOrmvRkL6U/0.jpg"
                                                         alt="Video Thumbnail" class="thumbnail-image">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
-->


                                </article>
                            </div>
                            <div class="col-lg">
                                <article class="p-4 card d-flex flex-column h-100">
                                    <h4 class="text-primary font-weight-bold text-center mb-4"
                                        v-html="translation.cdspCollLatestUpdates">
                                    </h4>
                                    <div v-for="(item, index) in firstPageResults" :key="item.global_id">
                                        <a class="survey-links" :href="item.url" target="_blank">
                                            <h5 class="mb-0">{{ item.name }}</h5>
                                            <i>{{ formatDate(item.published_at) }}</i>
                                            <p class="mt-2">{{ truncateDescription(item.description) }}</p>
                                        </a>
                                        <!-- Ne pas afficher <hr> après le dernier élément -->
                                        <hr v-if="index < 2" class="mt-1">
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </main>

        <main v-if="visibleSection === 'adsp'" class="pb-5">
            <div class="container">
                <a href="/" class="position-absolute mt-2 grey-link">
                    <LeftArrow class="svg-arrow-container mr-2"/>{{ translation.home }}</a>
                <div class="container">
                    <article id="id_adsp" class="pt-5" v-if="visibleSection === 'adsp'">
                        <div class="row text-center mb-5">
                            <div class="col-12">
                                <h2 class="text-primary mb-2" v-html="translation.scpoCollTitle"></h2>
                                <h4 class="text-muted mb-5" v-html="translation.drisAdministration"></h4>
                            </div>
                        </div>

                        <div class="col-lg mb-5 mb-lg-0 mr-lg-2 mr-0">
                            <article class="p-4 card d-flex flex-column h-100">
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
                                <div class="d-flex ">
                                    <a href="/dataverse/adscpo"
                                       class="mr-1 btn btn-outline-primary btn-lg w-100 text-uppercase">{{
                                            translation.ExploreData
                                        }}</a>
                                    <a href="https://sciencespo.libguides.com/donnees-de-la-recherche"
                                       class="ml-1 btn btn-outline-primary btn-lg w-100 text-uppercase">{{
                                            translation.deposit
                                        }}</a>

                                </div>
                            </article>
                        </div>
                    </article>
                </div>
            </div>
        </main>

        <footer class="bg-light mt-5 py-5 text-muted">
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







