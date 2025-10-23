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
    { id: 1, label: "gunes", url: "" },
    { id: 2, label: "sun", url: "" },
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

if (!searchInput || !clearButton || !grid || !template) {
    throw new Error("Required DOM nodes are missing. Check index.html structure.");
}

const normalise = (text) => text.trim().toLowerCase();

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
        const numberEl = clone.querySelector(".channel-number");
        const titleEl = clone.querySelector(".channel-title");
        const linkWrapper = clone.querySelector(".channel-link-wrapper");
        const linkEl = clone.querySelector(".channel-link");

        numberEl.textContent = channel.id;
        titleEl.textContent = channel.label;

        const multiLinks = Array.isArray(channel.links) ? channel.links : null;

        if (multiLinks && multiLinks.length) {
            linkWrapper.innerHTML = "";

            multiLinks.forEach((entry, index) => {
                if (!entry || !entry.url) {
                    return;
                }

                const anchor = document.createElement("a");
                anchor.className = "channel-link";
                anchor.target = "_blank";
                anchor.rel = "noopener";
                anchor.textContent = entry.name || `Channel ${index + 1}`;
                anchor.href = toVideosUrl(entry.url);
                anchor.setAttribute(
                    "aria-label",
                    `Open ${(entry.name || channel.label).trim()} on YouTube`
                );

                linkWrapper.appendChild(anchor);

                if (index < multiLinks.length - 1) {
                    linkWrapper.appendChild(document.createElement("br"));
                }
            });

            if (!linkWrapper.children.length) {
                linkWrapper.appendChild(linkEl);
                linkEl.textContent = "Link coming soon";
                linkEl.href = "#";
                linkEl.classList.add("is-empty");
                linkEl.setAttribute("aria-label", `${channel.label} link coming soon`);
            }
        } else if (channel.url) {
            linkEl.textContent = "Open channel";
            linkEl.href = toVideosUrl(channel.url);
            linkEl.classList.remove("is-empty");
            linkEl.setAttribute("aria-label", `Open ${channel.label} on YouTube`);
        } else {
            linkEl.textContent = "Link coming soon";
            linkEl.href = "#";
            linkEl.classList.add("is-empty");
            linkEl.setAttribute("aria-label", `${channel.label} link coming soon`);
        }

        fragment.appendChild(clone);
    }

    grid.appendChild(fragment);
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
});

export { channels, renderChannels };
