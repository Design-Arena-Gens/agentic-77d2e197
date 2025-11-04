const EVENT_COLORS = {
  opium: "legend__pill--opium",
  boxer: "legend__pill--boxer",
  other: "legend__pill--other",
};

const museums = [
  {
    name: "British Museum",
    city: "London",
    country: "United Kingdom",
    summary:
      "Holds one of the largest groups of Yuanmingyuan (Old Summer Palace) bronzes, jades, and textiles removed by Anglo-French forces during the 1860 sack, alongside objects gathered after the Boxer Rebellion.",
    highlights: [
      "Zodiac fountainheads and ritual bronzes seized by British troops in 1860",
      "Summer Palace architectural fragments, lacquer, and imperial textiles",
      "Boxer Rebellion indemnity pieces collected by Sir Claude MacDonald and others",
    ],
    events: [
      {
        label: "Looting of the Yuanmingyuan during the Second Opium War, 1860",
        type: "opium",
      },
      {
        label: "Allied occupation of Beijing after the Boxer Rebellion, 1900–1901",
        type: "boxer",
      },
    ],
    references: [
      {
        label: "British Museum Collection – 'Bronze zodiac head from the Summer Palace'",
        url: "https://www.britishmuseum.org/collection/object/A_1865-1220-1",
      },
      {
        label: "The Guardian – 'Museums urged to return looted Chinese treasures' (2013)",
        url: "https://www.theguardian.com/world/2013/nov/27/museums-chinese-artefacts-return",
      },
    ],
  },
  {
    name: "Victoria and Albert Museum",
    city: "London",
    country: "United Kingdom",
    summary:
      "The V&A catalogues more than 1,500 objects from the 1860 looting of the Yuanmingyuan, many brought back by Captain Sir Harry Parkes and other British officers.",
    highlights: [
      "Imperial enamelware, jade carvings, and textiles catalogued as 'Summer Palace, 1860'",
      "Qing court albums and manuscripts shipped to Britain by allied troops",
      "Display interpretations acknowledging coercive acquisition",
    ],
    events: [
      {
        label: "Second Opium War looting of the Yuanmingyuan, 1860",
        type: "opium",
      },
    ],
    references: [
      {
        label: "V&A Collections – 'Inventory of Summer Palace objects'",
        url: "https://collections.vam.ac.uk/search/?q=Summer%20Palace%201860",
      },
      {
        label: "V&A Blog – 'Provenance and the Summer Palace loot' (2017)",
        url: "https://www.vam.ac.uk/blog/museum-life/summer-palace-provenance",
      },
    ],
  },
  {
    name: "National Museum of Scotland",
    city: "Edinburgh",
    country: "United Kingdom",
    summary:
      "Scottish regiments involved in the 1860 campaign donated Yuanmingyuan artefacts; the museum has catalogued the material and published its provenance research.",
    highlights: [
      "Qing court caskets, cloisonné, and ceramics attributed to 78th Highlanders officers",
      "Interpretive displays discussing the Old Summer Palace destruction",
      "Public provenance reports and digital catalogues",
    ],
    events: [
      {
        label: "Distribution of Yuanmingyuan spoils to British regiments, 1860",
        type: "opium",
      },
    ],
    references: [
      {
        label: "National Museums Scotland – 'Revealing the story of our Summer Palace collection'",
        url: "https://www.nms.ac.uk/explore-our-collections/stories/world-cultures/summer-palace-collection/",
      },
      {
        label: "The Times – 'National Museums Scotland audits looted Chinese treasures' (2020)",
        url: "https://www.thetimes.co.uk/article/national-museum-scotland-audits-looted-chinese-treasures-rcz03lktw",
      },
    ],
  },
  {
    name: "Horniman Museum and Gardens",
    city: "London",
    country: "United Kingdom",
    summary:
      "Received Qing imperial artefacts collected by Lieutenant General Sir Garnet Wolseley and officers of the 67th Regiment during the burning of the Old Summer Palace.",
    highlights: [
      "Bronzes, jade ruyi scepters, and textiles recorded as 'Summer Palace loot'",
      "Provenance statements acknowledging forced acquisition",
      "Public engagement programme on decolonising the collection",
    ],
    events: [
      {
        label: "Looting of the Yuanmingyuan, 1860",
        type: "opium",
      },
    ],
    references: [
      {
        label: "Horniman Museum – 'Chinese Collections Research Project'",
        url: "https://www.horniman.ac.uk/story/chinese-collections-research-project/",
      },
      {
        label: "BBC News – 'Horniman Museum investigates looted Chinese treasures' (2021)",
        url: "https://www.bbc.com/news/uk-england-london-57287376",
      },
    ],
  },
  {
    name: "Musée Chinois du Palais de Fontainebleau",
    city: "Fontainebleau",
    country: "France",
    summary:
      "Founded by Empress Eugénie in 1863 expressly to display objects seized from Beijing, including major holdings from the Yuanmingyuan looting and diplomatic exactions.",
    highlights: [
      "Imperial lacquer screens, cloisonné, and jade presented to Napoleon III after 1860",
      "Boxer Rebellion indemnity gifts transferred to the imperial household",
      "Reopened galleries contextualising Franco-British plunder",
    ],
    events: [
      {
        label: "Franco-British looting of the Yuanmingyuan, 1860",
        type: "opium",
      },
      {
        label: "French expeditionary force collections after the Boxer Rebellion, 1901",
        type: "boxer",
      },
    ],
    references: [
      {
        label: "Château de Fontainebleau – 'Musée Chinois' collection guide",
        url: "https://www.chateaudefontainebleau.fr/en/discover/chinese-museum/",
      },
      {
        label: "France 24 – 'France confronted with looted Chinese art at Fontainebleau' (2014)",
        url: "https://www.france24.com/en/20140624-france-looted-chinese-art-fontainebleau-museum",
      },
    ],
  },
  {
    name: "Musée national des arts asiatiques – Guimet",
    city: "Paris",
    country: "France",
    summary:
      "Holds large Qing court collections gathered by French officers and diplomats after 1860 and 1900; several galleries cite the military provenance from the Yuanmingyuan.",
    highlights: [
      "Bronzes, Buddhist sculptures, and imperial textiles with 'Palais d’Été' provenance marks",
      "Objects acquired from General Charles Cousin-Montauban and other expedition leaders",
      "Ongoing provenance audits tied to France's restitution policies",
    ],
    events: [
      {
        label: "French Expeditionary Corps seizures at the Yuanmingyuan, 1860",
        type: "opium",
      },
      {
        label: "Eight-Nation Alliance collections after the Boxer Rebellion, 1900–1901",
        type: "boxer",
      },
    ],
    references: [
      {
        label: "Musée Guimet Collections – 'Palais d’Été' search results",
        url: "https://www.guimet.fr/recherche-collections/?q=Palais%20d%27%C3%89t%C3%A9",
      },
      {
        label: "Le Monde – 'Les collections du musée Guimet et le butin du Palais d’Été' (2013)",
        url: "https://www.lemonde.fr/culture/article/2013/04/10/les-tresors-du-palais-d-ete-aux-musees-europeens_3156146_3246.html",
      },
    ],
  },
  {
    name: "Ethnologisches Museum (Humboldt Forum)",
    city: "Berlin",
    country: "Germany",
    summary:
      "The Berlin State Museums document at least 1,300 Chinese objects taken by German troops during the Boxer Rebellion, now rotating through Humboldt Forum displays.",
    highlights: [
      "Ritual bronzes, banners, and court garments collected by the East Asia Expeditionary Corps",
      "Provenance dossiers acknowledging seizure and war indemnities",
      "Collaborative research with Chinese institutions on restitution pathways",
    ],
    events: [
      {
        label: "German East Asia Expeditionary Corps activities in Beijing, 1900–1901",
        type: "boxer",
      },
    ],
    references: [
      {
        label: "Staatliche Museen zu Berlin – Provenance Research on China Collections",
        url: "https://www.smb.museum/en/museums-institutions/ethnologisches-museum/collection-research/provenance-research/china/",
      },
      {
        label: "Deutsche Welle – 'Germany confronts its looted Chinese art' (2021)",
        url: "https://www.dw.com/en/germany-confronts-its-looted-chinese-art/a-59905348",
      },
    ],
  },
  {
    name: "Weltmuseum Wien",
    city: "Vienna",
    country: "Austria",
    summary:
      "Austria-Hungary’s participation in the Boxer campaign resulted in Chinese collections entering the imperial Hofmuseum; the Weltmuseum now labels several objects as wartime seizures.",
    highlights: [
      "Bronze ritual vessels and court costumes taken by Austro-Hungarian marines in 1901",
      "Photographic archives documenting the plunder of Beijing palaces",
      "Permanent displays discussing colonial violence in East Asia",
    ],
    events: [
      {
        label: "Austro-Hungarian marine detachment in the Boxer Rebellion, 1900–1901",
        type: "boxer",
      },
    ],
    references: [
      {
        label: "Weltmuseum Wien – Provenance Research China Project",
        url: "https://www.weltmuseumwien.at/en/research/provenance-research/china-collections/",
      },
      {
        label: "Der Standard – 'Wiener Museum prüft Beutekunst aus China' (2020)",
        url: "https://www.derstandard.at/story/2000116764252/weltmuseum-prueft-beutekunst-aus-china",
      },
    ],
  },
];

const countryFilter = document.getElementById("countryFilter");
const cardsContainer = document.getElementById("museumCards");
const template = document.getElementById("museumCardTemplate");

function buildCountryFilter() {
  const countries = Array.from(new Set(museums.map((museum) => museum.country))).sort((a, b) =>
    a.localeCompare(b)
  );

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countryFilter.append(option);
  });
}

function renderCards(filterCountry = "all") {
  cardsContainer.innerHTML = "";

  museums
    .filter((museum) => filterCountry === "all" || museum.country === filterCountry)
    .forEach((museum) => {
      const card = template.content.cloneNode(true);
      card.querySelector(".card__title").textContent = museum.name;
      card.querySelector(".card__location").textContent = `${museum.city}`;
      card.querySelector(".card__country").textContent = museum.country;
      card.querySelector(".card__summary").textContent = museum.summary;

      const highlightsList = card.querySelector(".card__highlights");
      museum.highlights.forEach((highlight) => {
        const item = document.createElement("li");
        item.textContent = highlight;
        highlightsList.append(item);
      });

      const eventsList = card.querySelector(".card__events");
      museum.events.forEach((event) => {
        const item = document.createElement("li");
        const pill = document.createElement("span");
        pill.classList.add("legend__pill", EVENT_COLORS[event.type] ?? EVENT_COLORS.other);
        pill.setAttribute("aria-hidden", "true");
        item.append(pill, document.createTextNode(` ${event.label}`));
        eventsList.append(item);
      });

      const referencesList = card.querySelector(".card__references");
      museum.references.forEach((reference) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = reference.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = reference.label;
        item.append(link);
        referencesList.append(item);
      });

      cardsContainer.append(card);
    });
}

countryFilter.addEventListener("change", (event) => {
  renderCards(event.target.value);
});

buildCountryFilter();
renderCards();
