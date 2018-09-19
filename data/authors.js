JSON.stringify(
    $("tr")
        .toArray()
        .map(tr => $(tr).find("td.small").toArray())
        .filter(tds => tds.length === 6)
        .map(row => ({
            id: Number($(row[1]).find("a").attr("href").substr(14)),
            name: $(row[1]).text(),
            bookCount: Number(row[2].innerHTML),
        }))
    , null, 2)

JSON.stringify(
    $("div.awardslisting").toArray().map(x => {
        return {
            id: Number($(x).find(".gallery a").attr("href").substr(13)),
            name: $(x).find(".title").text()
        }
    })
    , null, 2)


$(".awardslisting p.title").toArray().map(div => ({
    id: Number($(div).find("a").attr("href").substr(13)),
    title: $(div).text(),
}))