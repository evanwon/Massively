(function (window, document) {
    var addAnchors = () => {
        var headings = document.querySelectorAll('.content h1, .content h2, .content h3, .content h4, .content h5, .content h6')
        headings.forEach((heading) => {
            heading.insertAdjacentHTML('afterbegin', `
                <a href="#${heading.id}" class="anchor-link">
                    <svg width="1em" height="0.85em" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </a>
            `)
        })
    }

    document.addEventListener('DOMContentLoaded', addAnchors)
})(window, document);
