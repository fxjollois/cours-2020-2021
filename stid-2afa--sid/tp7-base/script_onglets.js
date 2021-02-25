/*global d3*/
d3.selectAll(".onglet_menu")
    .data(["onglet_global", "onglet_dep", "onglet_prov"])
    .property("onglet", function (d) { return d; })
    .on("click", function() {
        d3.selectAll(".onglet").style("display", "none");
        d3.select("#" + this.onglet).style("display", "block");
        d3.selectAll(".onglet_menu").classed("pure-menu-selected", false);
        d3.select(this).classed("pure-menu-selected", true);
})