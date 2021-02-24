var creation_table_global = function(donnees) {
    table = Array.from(d3.group(donnees, function(d) { return d.annee + "-" + d.mois_numero; }))
        .map(function(d) {
            res = {
                annee: parseInt(d[0].split("-")[0]),
                mois: parseInt(d[0].split("-")[1]),
                date: new Date(d[0]),
                ca: Math.round(d3.sum(d[1], function (d) { return d.ca; }))
            };
            return res;
        });
    return table;
}

var creation_table_dep = function(donnees) {
    table = Array.from(d3.group(donnees, function (d) { return d.departement; }))
        .map(function (d) {
            res = {
                departement: d[0],
                ca: Math.round(d3.sum(d[1], function (d) { return d.ca; }))
            };
            return res;
        });
    return d3.sort(table, function (a, b) { return d3.descending(a.ca, b.ca); });
}