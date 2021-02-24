load(url("http://fxjollois.github.io/donnees/ca/ca.RData"))

library(tidyverse)
library(jsonlite)
library(lubridate)


ca_tout %>%
  mutate(date = date(paste(annee, mois_numero, 15, sep = "-"))) %>%
  group_by(date) %>%
  summarise(ca = sum(ca)) %>%
  write_csv("evol_ca.csv")

ca_tout %>%
  mutate(date = date(paste(annee, mois_numero, 15, sep = "-"))) %>%
  group_by(date, departement) %>%
  summarise(ca = sum(ca)) %>%
  pivot_wider(values_from = ca, names_from = departement) %>%
  write_csv("evol_ca_dpt.csv")

ca_tout %>%
  group_by(departement) %>%
  summarise(ca = sum(ca)) %>%
  write_csv("dpt_ca.csv")

ca_tout %>%
  group_by(departement, groupe, sous_groupe) %>%
  summarise(ca = sum(ca)) %>%
  write_csv("dpt_details.csv")


ca_tout %>%
  group_by(provenance) %>%
  summarise(ca = sum(ca)) %>%
  write_csv("prov_ca.csv")

ca_tout %>%
  group_by(provenance, departement, annee) %>%
  summarise(ca = sum(ca)) %>%
  write_csv("prov_details.csv")



