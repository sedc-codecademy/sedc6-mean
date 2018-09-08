let globalData = [];

$(() => {
    $("#load").on("click", async () => {
        const response = await fetch(`/api/authors`);
        globalData = await response.json();
        showAuthors({ page: 0, pageSize: 20 });
    });

    $("#prev").on("click", () => {});
    $("#next").on("click", () => {});
})

// const showAuthors = (params) => {
//     const page = params.page
//     console.log("page", page);
// }

const showAuthors = ({ page, pageSize }) => {
    const first = page * pageSize;
    const last = (page + 1) * pageSize;
    const authors = globalData.slice(first, last);
    renderAuthors(authors);
}

const renderAuthors = (authors) => {
    
    $('#authors').empty().append(`<tr>
        <th> ID </th>
        <th> Name </th>
        <th> Books </th>
    </tr>`);

    for (let index = 0; index < authors.length; index++) {
        const author = authors[index];
        $('#authors tr:last').after(`<tr>
            <td>${author.id}</td>
            <td>${author.name}</td>
            <td>${author.bookCount}</td>
        </tr>`);
    }
}