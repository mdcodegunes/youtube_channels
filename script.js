const channels = [
    {
        id: 0,
        label: "computer",
        url: "",
        links: [
            { name: "ColdFusion", url: "https://www.youtube.com/@ColdFusion" },
            { name: "Undecided with Matt Ferrell", url: "https://www.youtube.com/@UndecidedMF" },
            { name: "Bloomberg Originals", url: "https://www.youtube.com/@business" },
            { name: "Branch Education", url: "https://www.youtube.com/@BranchEducation" }
        ]
    },
    {
        id: 1,
        label: "gunes",
        url: "",
        links: [
            { name: "Evrim Ağacı", url: "https://www.youtube.com/@evrimagaci" },
            { name: "Bebar Bilim", url: "https://www.youtube.com/@bebarbilim" },
            { name: "Ayhan Tarakçı", url: "https://www.youtube.com/@AyhanTarakci" },
            { name: "Bentropi", url: "https://www.youtube.com/@bentropi" },
            { name: "Aklınızda Bulunsun", url: "https://www.youtube.com/@aklinizdabulunsun" },
            { name: "Portal Video", url: "https://www.youtube.com/@PortalVideo" },
            { name: "FEYreal", url: "https://www.youtube.com/@FEYreal" },
            { name: "Erdi Özüağ", url: "https://www.youtube.com/@ErdiOzuag" },
            { name: "DW Türkçe", url: "https://www.youtube.com/@dwturkce" },
            { name: "Faruk Yılmaz Videoları", url: "https://www.youtube.com/@farukyilmazvideolari" },
            { name: "Dolubatarya", url: "https://www.youtube.com/@dolubatarya" },
            { name: "Teknoloji Hayat", url: "https://www.youtube.com/@TeknolojiHayat" },
            { name: "Mehmet Ali Güldal", url: "https://www.youtube.com/@mehmetaliguldal" },
            { name: "Aposto", url: "https://www.youtube.com/@apostonews" },
            { name: "Akademik Link", url: "https://www.youtube.com/@AkademikLink" },
            { name: "Mesut Çevik", url: "https://www.youtube.com/@MesutCevik" },
            { name: "49W", url: "https://www.youtube.com/@49W" },
            { name: "plus90", url: "https://www.youtube.com/@plus90" },
            { name: "Donanım Haber", url: "https://www.youtube.com/@donanimhabertv" },
            { name: "Haluk Tatar", url: "https://www.youtube.com/@HalukTatar" },
            { name: "Evrim Ağacı 2", url: "https://www.youtube.com/@evrimagaci2" },
            { name: "Ruhicenet Media", url: "https://www.youtube.com/@ruhicenetmedia" },
            { name: "KAFA", url: "https://www.youtube.com/@kafa" },
            { name: "İlber Ortaylı Resmi", url: "https://www.youtube.com/@IlberOrtaylresmi" },
            { name: "Teke Tek Bilim", url: "https://www.youtube.com/@TekeTekBilim" },
            { name: "Özcan Show", url: "https://www.youtube.com/@ozcanshow" },
            { name: "Uzm. Dr. Emre Şengün", url: "https://www.youtube.com/@Uzm.Dr.EmreSengun" },
            { name: "Donanım Haber Plus", url: "https://www.youtube.com/@donanimhaberplus" },
            { name: "Dr. Patoloji", url: "https://www.youtube.com/@Drpatoloji" },
            { name: "Tesla TR Maniac", url: "https://www.youtube.com/@teslatrmaniac" },
            { name: "Dr. Dahiliye", url: "https://www.youtube.com/@drdahiliye" },
            { name: "Diosophia", url: "https://www.youtube.com/@diosophia" },
            { name: "Bilimin Etrafında", url: "https://www.youtube.com/@biliminetrafinda" },
            { name: "OMNIBUS LIVE", url: "https://www.youtube.com/@OMNIBUSLIVE" }
        ]
    },
    {
        id: 2,
        label: "sun",
        url: "",
        links: [
            { name: "English with Lucy", url: "https://www.youtube.com/@EnglishwithLucy" },
            { name: "RobWords", url: "https://www.youtube.com/@RobWords" },
            { name: "Tacappaert", url: "https://www.youtube.com/@tacappaert" },
            { name: "Official OET", url: "https://www.youtube.com/@OfficialOET" },
            { name: "E2 OET", url: "https://www.youtube.com/@E2OET" },
            { name: "mmmEnglish", url: "https://www.youtube.com/@mmmEnglish_Emma" }
        ]
    },
    { id: 3, label: "sole", url: "" },
    { id: 4, label: "soleil", url: "" },
    { id: 5, label: "sol", url: "" },
    { id: 6, label: "osol", url: "" },
    { id: 7, label: "sonne", url: "" },
    { id: 8, label: "shams", url: "" },
    { id: 9, label: "arew", url: "" },
    { id: 10, label: "taiyo", url: "" },
    { id: 11, label: "taeyang", url: "" },
    { id: 12, label: "taiyang", url: "" },
    { id: 13, label: "solntse", url: "" },
    { id: 14, label: "soltnse", url: "" },
    { id: 15, label: "slunce", url: "" },
    { id: 16, label: "slnko", url: "" },
    { id: 17, label: "sonce", url: "" },
    { id: 18, label: "soltnseb", url: "" },
    { id: 19, label: "slonce", url: "" },
    { id: 20, label: "sunce", url: "" },
    { id: 21, label: "nap", url: "" },
    { id: 22, label: "soare", url: "" },
    { id: 23, label: "aurinko", url: "" },
    { id: 24, label: "kunes", url: "" },
    { id: 25, label: "solis", url: "" },
    { id: 26, label: "ilios", url: "" },
    { id: 27, label: "roj", url: "" },
    { id: 28, label: "suryab", url: "" },
    { id: 29, label: "surya", url: "" },
    { id: 30, label: "sooraj", url: "" },
    { id: 31, label: "hus", url: "" },
    { id: 32, label: "zon", url: "" },
    { id: 33, label: "soln", url: "" },
    { id: 34, label: "sold", url: "" },
    { id: 35, label: "solen", url: "" },
    { id: 36, label: "mattroi", url: "" },
    { id: 37, label: "matahari", url: "" },
    { id: 38, label: "soli", url: "" },
    { id: 39, label: "shemesh", url: "" },
    { id: 40, label: "daet", url: "" },
    { id: 41, label: "oraw", url: "" },
    { id: 99, label: "languages", url: "" },
    { id: 101, label: "code", url: "" },
    { id: 102, label: "andphone", url: "" },
    { id: 103, label: "documantary", url: "" },
    { id: 104, label: "film", url: "" },
    { id: 105, label: "anime", url: "" },
    { id: 106, label: "music", url: "" },
    { id: 107, label: "travel", url: "" },
    { id: 108, label: "books", url: "" },
    { id: 109, label: "history", url: "" },
    { id: 110, label: "arts", url: "" },
    { id: 111, label: "shopping", url: "" },
    { id: 112, label: "writer", url: "" },
    { id: 113, label: "philosopher", url: "" },
    { id: 114, label: "technology", url: "" },
    { id: 115, label: "space", url: "" },
    { id: 116, label: "architect", url: "" },
    { id: 117, label: "earth", url: "" },
    { id: 118, label: "magazine", url: "" },
    { id: 119, label: "math", url: "" },
    { id: 120, label: "lifestyle", url: "" },
    { id: 121, label: "plants", url: "" },
    { id: 122, label: "knowledge", url: "" },
    { id: 123, label: "science", url: "" },
    { id: 124, label: "animals", url: "" },
    { id: 125, label: "food", url: "" },
    { id: 126, label: "Encyclopedia", url: "" },
    { id: 127, label: "martialarts", url: "" },
    { id: 128, label: "news", url: "" },
    { id: 129, label: "plab", url: "" },
    { id: 130, label: "podcast", url: "" },
    { id: 131, label: "politics", url: "" },
    { id: 132, label: "sport", url: "" },
    { id: 133, label: "survival", url: "" },
    { id: 134, label: "testosterone", url: "" },
    { id: 135, label: "car", url: "" },
    { id: 136, label: "ai", url: "" },
    { id: 137, label: "pcgames", url: "" },
    { id: 138, label: "youtube", url: "" },
    { id: 139, label: "konutarsa", url: "" },
    { id: 140, label: "religion", url: "" },
    { id: 141, label: "repair", url: "" },
    { id: 150, label: "invest", url: "" },
    { id: 151, label: "freelancer", url: "" },
    { id: 152, label: "logo", url: "" },
    { id: 153, label: "graphicdesigner", url: "" },
    { id: 154, label: "gooogleplaays", url: "" },
    { id: 155, label: "photography", url: "" },
    { id: 156, label: "photo", url: "" },
    { id: 157, label: "aile", url: "" },
    { id: 200, label: "mardinomerligunes", url: "" },
    { id: 201, label: "evdesaglik", url: "" },
    { id: 202, label: "sunsonnegunes", url: "" },
    { id: 203, label: "voyagerandsun", url: "" },
    { id: 204, label: "omergunesks", url: "" },
    { id: 205, label: "drguneskocabas", url: "" },
    { id: 206, label: "forms", url: "" },
    { id: 222, label: "friends", url: "" }
];

const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");
const grid = document.querySelector("#channels-grid");
const template = document.querySelector("#channel-card-template");
const jumpStrip = document.querySelector("#jump-strip");
const modal = document.querySelector("#channel-modal");
const modalDialog = modal?.querySelector(".channel-modal__dialog");
const modalTitle = document.querySelector("#channel-modal-title");
const modalSubtitle = modal?.querySelector(".channel-modal__subtitle");
const modalLinks = modal?.querySelector(".channel-modal__links");
const modalCloseButtons = modal ? modal.querySelectorAll("[data-modal-close]") : [];

if (
    !searchInput ||
    !clearButton ||
    !grid ||
    !template ||
    !jumpStrip ||
    !modal ||
    !modalDialog ||
    !modalTitle ||
    !modalSubtitle ||
    !modalLinks
) {
    throw new Error("Required DOM nodes are missing. Check index.html structure.");
}

const normalise = (text) => text.trim().toLowerCase();

const shouldOpenInNewTab = () => !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const isAndroid = /Android/i.test(navigator.userAgent);

const toVideosUrl = (url) => {
    if (!url) {
        return url;
    }

    try {
        const parsed = new URL(url, window.location.origin);
        if (!parsed.pathname.endsWith("/videos")) {
            parsed.pathname = parsed.pathname.replace(/\/$/, "") + "/videos";
        }
        return parsed.toString();
    } catch (error) {
        if (url.startsWith("/")) {
            return url.replace(/\/$/, "") + "/videos";
        }
    }

    return url;
};

const buildIntentUrl = (url) => {
    const stripped = url.replace(/^https?:\/\//, "");
    const fallback = encodeURIComponent(url);
    return `intent://${stripped}#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=${fallback};end`;
};

const getChannelLinks = (channel) => {
    if (!channel) {
        return [];
    }

    if (Array.isArray(channel.links) && channel.links.length) {
        return channel.links.filter((entry) => entry && entry.url);
    }

    if (channel.url) {
        return [
            {
                name: channel.label || `Channel ${channel.id}`,
                url: channel.url
            }
        ];
    }

    return [];
};

const createLinkElement = (channel, entry, index, openInNewTab = shouldOpenInNewTab()) => {
    if (!channel || !entry || !entry.url) {
        return null;
    }

    const anchor = document.createElement("a");
    anchor.className = "channel-link";

    const finalUrl = toVideosUrl(entry.url);
    const label = (entry.name || channel.label || `Channel ${channel.id}`).trim();

    anchor.href = finalUrl;
    anchor.dataset.fallbackUrl = finalUrl;
    anchor.dataset.channelId = String(channel.id);
    anchor.dataset.linkIndex = String(index);
    anchor.textContent = label;
    anchor.setAttribute("aria-label", `Open ${label} on YouTube`);

    if (openInNewTab) {
        anchor.target = "_blank";
        anchor.rel = "noopener";
    }

    return anchor;
};

let mobileHandlersInitialized = false;

const closeModal = () => {
    modalLinks.innerHTML = "";
    if (typeof modal.close === "function" && modal.open) {
        modal.close();
    } else {
        modal.removeAttribute("open");
    }
    document.body.classList.remove("is-modal-open");
};

const openModal = (channel) => {
    if (!channel) return;

    modalTitle.textContent = `Channel ${channel.id}`;
    if (channel.label) {
        modalSubtitle.textContent = channel.label;
        modalSubtitle.hidden = false;
    } else {
        modalSubtitle.textContent = "";
        modalSubtitle.hidden = true;
    }

    modalLinks.innerHTML = "";
    const links = getChannelLinks(channel);
    const fragment = document.createDocumentFragment();
    const openInNewTab = shouldOpenInNewTab();

    links.forEach((entry, index) => {
        const anchor = createLinkElement(channel, entry, index, openInNewTab);
        if (anchor) fragment.appendChild(anchor);
    });

    if (!fragment.children || fragment.children.length === 0) {
        const p = document.createElement("p");
        p.className = "channel-modal__empty";
        p.textContent = "No links for this channel.";
        modalLinks.appendChild(p);
    } else {
        modalLinks.appendChild(fragment);
    }

    document.body.classList.add("is-modal-open");
    if (typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        modal.setAttribute("open", "open");
    }
};

const initMobileHandlers = () => {
    if (!isAndroid || mobileHandlersInitialized) {
        return;
    }

    grid.addEventListener("click", (event) => {
        const target = event.target.closest(".channel-link");
        if (!target) {
            return;
        }

        const fallbackUrl = target.dataset.fallbackUrl;
        if (!fallbackUrl) {
            return;
        }

        event.preventDefault();
        const intentUrl = buildIntentUrl(fallbackUrl);
        window.location.href = intentUrl;

        setTimeout(() => {
            window.location.href = fallbackUrl;
        }, 800);
    });

    mobileHandlersInitialized = true;
};

const setActiveJump = (channelId) => {
    if (!jumpStrip.children.length) {
        return;
    }

    for (const link of jumpStrip.querySelectorAll("a")) {
        if (link.dataset.channelId === String(channelId)) {
            link.classList.add("is-active");
        } else {
            link.classList.remove("is-active");
        }
    }
};

const updateJumpStrip = (items) => {
    jumpStrip.innerHTML = "";

    if (!items.length) {
        jumpStrip.hidden = true;
        return;
    }

    const fragment = document.createDocumentFragment();

    for (const channel of items) {
        const link = document.createElement("a");
        link.href = `#channel-${channel.id}`;
        link.textContent = channel.id;
        link.dataset.channelId = String(channel.id);
        fragment.appendChild(link);
    }

    jumpStrip.appendChild(fragment);
    jumpStrip.hidden = false;
    setActiveJump(items[0].id);
};

const renderChannels = (items) => {
    grid.innerHTML = "";

    if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = "No matches found. Try a different number or name.";
        grid.append(empty);
        return;
    }

    const fragment = document.createDocumentFragment();

    for (const channel of items) {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".channel-card");
        const numberEl = clone.querySelector(".channel-number");
        const titleEl = clone.querySelector(".channel-title");
        const toggleBtn = clone.querySelector(".toggle-links");
        const linksPanel = clone.querySelector(".channel-links");
        const linksScroll = clone.querySelector(".links-scroll");

        card.id = `channel-${channel.id}`;
    const panelId = `channel-links-${channel.id}`;
    linksPanel.id = panelId;
    toggleBtn.setAttribute("aria-controls", panelId);
        numberEl.textContent = channel.id;
        titleEl.textContent = channel.label;
        linksScroll.innerHTML = "";

        let linkCount = 0;

        const multiLinks = Array.isArray(channel.links) ? channel.links : null;

        if (multiLinks && multiLinks.length) {
            const visibleCount = 5;
            multiLinks.forEach((entry, index) => {
                if (!entry || !entry.url) return;

                const anchor = createLinkElement(channel, entry, index);
                if (!anchor) return;

                // Show only first N links; others remain scrollable inside the panel
                if (index < visibleCount) {
                    linksScroll.appendChild(anchor);
                } else {
                    // Append to the scroll area as well so it's accessible when expanded
                    linksScroll.appendChild(anchor);
                }

                linkCount += 1;
            });

        } else if (channel.url) {
            const finalUrl = toVideosUrl(channel.url);
            const anchor = document.createElement("a");
            anchor.className = "channel-link";
            if (shouldOpenInNewTab()) {
                anchor.target = "_blank";
                anchor.rel = "noopener";
            }
            anchor.textContent = "Open channel";
            anchor.href = finalUrl;
            anchor.dataset.fallbackUrl = finalUrl;
            anchor.setAttribute("aria-label", `Open ${channel.label} on YouTube`);
            linksScroll.appendChild(anchor);
            linkCount = 1;
        } else {
            const placeholder = document.createElement("span");
            placeholder.className = "channel-link is-empty";
            placeholder.textContent = "Link coming soon";
            linksScroll.appendChild(placeholder);
            linkCount = 0;
        }

        if (linkCount > 0) {
            linksPanel.hidden = false;
            card.classList.add("has-links");
            card.classList.add("is-expanded");
            card.classList.remove("is-collapsed");
            toggleBtn.hidden = false;
            toggleBtn.textContent = "Hide links";
            toggleBtn.setAttribute("aria-expanded", "true");

            toggleBtn.addEventListener("click", () => {
                const expanded = card.classList.toggle("is-expanded");
                card.classList.toggle("is-collapsed", !expanded);
                linksPanel.hidden = !expanded;
                toggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
                toggleBtn.textContent = expanded ? "Hide links" : "Show links";
                if (expanded) {
                    setActiveJump(channel.id);
                }
            });

            // clicking the number opens the modal as well
            const numberButton = numberEl;
            numberButton.style.cursor = "pointer";
            numberButton.addEventListener("click", () => openModal(channel));

            card.addEventListener("mouseenter", () => setActiveJump(channel.id));
            card.addEventListener("focusin", () => setActiveJump(channel.id));
        } else {
            card.classList.remove("has-links");
            card.classList.remove("is-expanded");
            card.classList.remove("is-collapsed");
            linksPanel.hidden = false;
            toggleBtn.hidden = true;
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.removeAttribute("aria-controls");
        }

        fragment.appendChild(clone);
    }

    grid.appendChild(fragment);
    updateJumpStrip(items);
    initMobileHandlers();
};

const handleSearch = () => {
    const term = normalise(searchInput.value);

    if (!term) {
        renderChannels(channels);
        return;
    }

    const filtered = channels.filter((channel) => {
        const idMatch = String(channel.id).includes(term);
        const labelMatch = normalise(channel.label).includes(term);
        return idMatch || labelMatch;
    });

    renderChannels(filtered);
};

searchInput.addEventListener("input", handleSearch);
clearButton.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    renderChannels(channels);
});

document.addEventListener("DOMContentLoaded", () => {
    renderChannels(channels);
    initMobileHandlers();

    for (const button of modalCloseButtons) {
        button.addEventListener("click", () => {
            closeModal();
        });
    }

    modal.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    jumpStrip.addEventListener("click", (event) => {
        const link = event.target.closest("a[data-channel-id]");
        if (!link) {
            return;
        }
        event.preventDefault();
        const { channelId } = link.dataset;
        setActiveJump(channelId);

        const channel = channels.find((c) => String(c.id) === String(channelId));
        if (!channel) return;

        // Open a modal with the full link list for this channel
        openModal(channel);
    });
});

export { channels, renderChannels };
