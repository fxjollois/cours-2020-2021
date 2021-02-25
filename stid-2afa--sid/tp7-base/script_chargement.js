/*global d3*/
d3.csv(
    "evol_ca.csv", 
    function(d) { 
        return { date: new Date(d.date), ca: Math.round(d.ca) };
    }).then( 
    function(donnees) {
        var totalWidth = Math.floor(d3.select("#global_evolution").style("width").replace("px", "")), 
            totalHeight = 300,
            margin = {top: 10, right: 20, bottom: 20, left: 40},
            width = totalWidth - margin.left - margin.right,
            height = totalHeight - margin.top - margin.bottom,
            date_min = d3.min(donnees, function(d) { return d.date; }),
            date_max = d3.max(donnees, function(d) { return d.date; }),
            ca_max = d3.max(donnees, function(d) { return d.ca});

        var x = d3.scaleLinear()
            .domain([date_min, date_max]) 
            .range([0, width]),
          y = d3.scaleLinear()  
            .domain([0, ca_max])     
            .range([height, 0]);

        var svg = d3.select("#global_evolution").html("").append("svg")
          .attr("width", totalWidth)
          .attr("height", totalHeight)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

        var ligne = d3.line()
          .x(function (d) { return x(d.date); })
          .y(function (d) { return y(d.ca); });
        svg.append("path")
          .datum(donnees)
          .attr("fill", "none")
          .attr("stroke", "black")
          .attr("stroke-width", 5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", ligne);

        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")));
        svg.append("g")
          .call(d3.axisLeft(y).ticks(5).tickFormat(function(d) { return d/1e6 + "M€"; }));
        d3.selectAll(".domain").remove();
        
        d3.csv(
            "evol_ca_dpt.csv", 
            function(d) { 
                d.date = new Date(d.date);
                return d;
            }).then(
            function(donnees_dpt) {
                var series = d3.stack().keys(donnees_dpt.columns.slice(1))(donnees_dpt);
                var area = d3.area()
                    .x(function(d) { return x(d.data.date); })
                    .y0(function(d) { return y(d[0]); })
                    .y1(function(d) { return y(d[1]); })
                var color = d3.scaleOrdinal()
                    .domain(donnees_dpt.columns.slice(1))
                    .range(d3.schemeCategory10);
                svg.append("g")
                    .selectAll("path")
                    .data(series)
                    .join("path")
                        .attr("fill", function(d) { return color(d); })
                        .attr("class", "zone")
                        .attr("d", area);
                
                var legende_svg = d3.select("#global_legende").html("").append("svg")
                    .attr("width", Math.floor(d3.select("#global_legende").style("width").replace("px", "")))
                    .attr("height", totalHeight);
                
                var color_y = d3.scaleBand()
                    .domain(donnees_dpt.columns.slice(1))
                    .range([totalHeight, 0])
                    .padding(.2);
                
                legende_svg.selectAll(".legende")
                    .data(donnees_dpt.columns.slice(1))
                    .enter()
                    .append("rect")
                    .attr("x", margin.left)
                    .attr("width", color_y.bandwidth())
                    .attr("y", function (d) { return color_y(d); })
                    .attr("height", color_y.bandwidth())
                    .attr("fill", function (d) { return color(d); })
                legende_svg.selectAll(".legende")
                    .data(donnees_dpt.columns.slice(1))
                    .enter()
                    .append("text")
                    .attr("x", margin.left + color_y.bandwidth() + 10)
                    .attr("y", function (d) { return color_y(d) + color_y.bandwidth() / 2; })
                    .style("alignment-baseline", "middle")
                    .text(function (d) { return d; })
        })
    }
);

d3.csv(
    "dpt_ca.csv",
    function (d) {
        d.ca = Math.round(d.ca);
        return d;
    }).then(
    function (donnees) {
        var lignes = d3.select("#dep_table table tbody").selectAll("tr")
            .data(donnees)
            .enter()
            .append("tr")
            .attr("class", "departement")
            .on("click", function() {
                var dpt_choisi = d3.select(this).datum().departement;
                // Mettre ici la demande sur l'onglet Départements
                d3.select("#graph_dep").html("");
                d3.csv("evol_ca_dpt.csv", function(d) {
                    d.date = new Date(d.date);
                    return d;
                }).then(function (donnees_dpt) {
                    var totalWidth = Math.floor(d3.select("#graph_dep").style("width").replace("px", "")), 
                        totalHeight = 300,
                        margin = {top: 30, right: 20, bottom: 20, left: 50},
                        width = totalWidth - margin.left - margin.right,
                        height = totalHeight - margin.top - margin.bottom,
                        date_min = d3.min(donnees_dpt, function(d) { return d.date; }),
                        date_max = d3.max(donnees_dpt, function(d) { return d.date; }),
                        ca_max = d3.max(donnees_dpt, function(d) { return d[dpt_choisi]});

                    var x = d3.scaleLinear()
                        .domain([date_min, date_max]) 
                        .range([0, width]),
                      y = d3.scaleLinear()  
                        .domain([0, ca_max * 1.1])     
                        .range([height, 0]);

                    var svg = d3.select("#graph_dep").html("").append("svg")
                      .attr("width", totalWidth)
                      .attr("height", totalHeight)
                      .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

                    var ligne = d3.line()
                      .x(function (d) { return x(d.date); })
                      .y(function (d) { return y(d[dpt_choisi]); });
                    svg.append("path")
                      .datum(donnees_dpt)
                      .attr("fill", "none")
                      .attr("stroke", "black")
                      .attr("stroke-width", 5)
                      .attr("stroke-linejoin", "round")
                      .attr("stroke-linecap", "round")
                      .attr("d", ligne);

                    svg.append("g")
                      .attr("transform", "translate(0," + height + ")")
                      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")));
                    svg.append("g")
                      .call(d3.axisLeft(y).ticks(5).tickFormat(function(d) { return d/1e6 + "M€"; }));
                    d3.selectAll(".domain").remove();
                    
                    svg.append("text")
                        .attr("x", totalWidth / 2)
                        .attr("y", -15)
                        .style("text-anchor", "middle")
                        .text(dpt_choisi)
                })
                
                d3.select("#table_dep").style("visibility", "visible");
                d3.select("#table_dep table tbody").html("");
                d3.csv("dpt_details.csv", function(d) {
                    d.ca = Math.round(d.ca);
                    return d;
                }).then(function (donnees_dpt) {
                    var details = d3.filter(donnees_dpt, function (d) { return d.departement == dpt_choisi; });
                    var lignes = d3.select("#table_dep table tbody").selectAll("tr")
                        .data(details)
                        .enter()
                        .append("tr")
                     lignes.selectAll("td")
                        .data(function (d) { return Object.values(d); })
                        .enter()
                        .append("td")
                        .style("text-align", function(d, i) { return i == 3 ? "right" : "left"; })
                        .html(function (d) { return d.toLocaleString(); })
                })
            });

        lignes.selectAll("td")
            .data(function (d) { return [d.departement, d.ca]; })
            .enter()
            .append("td")
            .style("text-align", function(d, i) { return i == 1 ? "right" : "left"; })
            .html(function (d) { return d.toLocaleString(); })
    }
);


d3.csv(
    "prov_ca.csv",
    function (d) {
        d.ca = Math.round(d.ca);
        return d;
    }).then(
    function (donnees) {
        // Que mettre ici pour réaliser la demande sur l'onglet Provenances ?
    }
);

