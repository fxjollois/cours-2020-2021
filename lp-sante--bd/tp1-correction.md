# Langage SQL

#### Quels sont les actrices ayant comme prénom “Penelope” ?

```
SELECT *
	FROM actor
    WHERE first_name LIKE "penelope";
```
    
#### Quels sont les clients inactifs (`active` est égal à 0) ?
```
SELECT *
	FROM customer
    WHERE active = 0;
```
    
#### Quels sont les 10 films les plus longs ?
```
SELECT title, length
	FROM film
    ORDER BY 2 desc
    LIMIT 10;
```
    
#### Quels films ont le mot “dinosaur” dans leur titre ?
```
SELECT title
	FROM film
    WHERE title LIKE "%dinosaur%";
```
    
#### Quels sont les films ayant le mot “scientist” dans leur description ? (attention, cet attribut est de type BLOB - on ne peut pas chercher dedans une sous-chaine directement)
```
SELECT title, description
	FROM film
    WHERE description like "%scientist%";
```

#### Afficher pour chaque film son titre, son “âge”, sa durée en heures (de type “1h43”)
```
SELECT title, 
		release_year, DATE("now") - release_year AS Age,
        length, length / 60 AS "Heures", length % 60 AS "Minutes",
        (length / 60) || "h" || (CASE
        	WHEN (length % 60) < 10 THEN "0" || (length % 60)
            ELSE length % 60
        END) AS "Durée"
	FROM film;    
```

#### Calculer pour chaque location (rental) la durée en jours de celle-ci
```
SELECT rental_id, rental_date, return_date,
		ROUND(julianday(return_date) - julianday(rental_date)) AS "Nb jours arrondi",
        CEIL(julianday(return_date) - julianday(rental_date)) AS "Nb jours entamés",
        FLOOR(julianday(return_date) - julianday(rental_date)) AS "Nb jours complets"
	FROM rental;
```

#### Pour chaque type de film (rating), donner le nombre de films
```
SELECT rating, count(*) AS "Nb films"
	FROM film
    GROUP BY rating
    ORDER BY 2 desc;
```

#### Quelle est l’année où il y a le plus de films sortis ?
```
SELECT release_year, count(*) AS "Nb films"
	FROM film
    GROUP BY release_year
    ORDER BY 2 desc;
```

#### Quels sont les 10 prénoms d’acteur/actrice les plus utilisés ?
```
SELECT first_name, count(*) AS "Nb"
	FROM actor
    GROUP BY first_name
    ORDER BY 2 DESC
    LIMIT 10;
```

#### Pour chaque catégorie, donner le nombre de films
```
SELECT name, count(*) AS "Nb films"
	FROM category 
    	INNER JOIN film_category on category.category_id = film_category.category_id
    GROUP BY name
    ORDER BY 2 desc;
```

#### Quels sont les 10 films dont on a le plus de copies en stock ?
```
SELECT title, count(*) AS "Nb copies"
	FROM film
    	INNER JOIN inventory on film.film_id = inventory.film_id
    GROUP BY title
    ORDER BY 2 desc
    LIMIT 10;
```

#### Dans quels pays y a t’il des locations ?
```
SELECT DISTINCT country
	FROM country, city, address, customer, rental
    WHERE country.country_id = city.country_id
    AND city.city_id = address.city_id
    AND address.address_id = customer.address_id
    AND customer.customer_id = rental.customer_id
    ORDER BY 1;
```

#### Quels sont les 10 acteurs ayant joué dans le plus de films ?
```
SELECT actor.actor_id, first_name, last_name, count(*) AS "nb films"
	FROM actor INNER join film_actor on actor.actor_id = film_actor.actor_id
    GROUP BY actor.actor_id, first_name, last_name
    ORDER BY "nb films" DESC
    LIMIT 10;
```

#### Donner pour chaque client le nombre de ses réservations ?
```
SELECT customer.customer_id, first_name, last_name, count(rental_id) AS "Nb réservations"
	FROM customer left outer join rental on customer.customer_id = rental.customer_id
    GROUP BY customer.customer_id, first_name, last_name
    ORDER BY "Nb réservations";
```

#### Donner le montant total des paiements par pays
```
SELECT country, round(sum(amount), 2) AS "Paiements"
	FROM country, city, address, customer, payment
    WHERE country.country_id = city.country_id
    AND city.city_id = address.city_id
    AND address.address_id = customer.address_id
    AND customer.customer_id = payment.customer_id
    GROUP BY country
    ORDER BY 2 desc;
```

#### Quels sont les 10 films les plus rentables (qui ont généré le plus gros montant de paiement) ?
```
SELECT film.film_id, title, round(sum(amount), 2) AS "Paiements"
	FROM film, inventory, rental, payment
    WHERE film.film_id = inventory.film_id
    AND inventory.inventory_id = rental.inventory_id
    AND rental.rental_id = payment.rental_id
    GROUP BY film.film_id, title
    ORDER BY "Paiements" desc
    LIMIT 10;
```

#### Quels sont les prix moyens de location par catégorie ?
```
SELECT name, round(avg(rental_rate), 2) AS "Prix moyens"
	FROM category
    	inner JOIN film_category on category.category_id = film_category.category_id
        INNER JOIN film on film_category.film_id = film.film_id
    GROUP BY name
    ORDER BY name;
```

#### Existe-t’il des clients ayant le même nom et le même prénom que des acteurs ? (si oui, lesquels)
```
SELECT C.first_name, C.last_name
	FROM customer C, actor A
    WHERE C.first_name = A.first_name
    AND C.last_name = A.last_name;
```

#### Existe-t’il un pays (si oui le(s)quel(s)) pour lequel nous avons des clients, sans avoir de magasins ?
```
SELECT country
	FROM country, city, address, customer
    WHERE country.country_id = city.country_id
    AND city.city_id = address.city_id 
    AND address.address_id = customer.address_id
EXCEPT
SELECT country
	FROM country, city, address, store
    WHERE country.country_id = city.country_id
    AND city.city_id = address.city_id 
    AND address.address_id = store.address_id;
```

#### Combien y a t’il de réservations en moyenne par client ? (donner aussi le minimum et le maximum)
```
SELECT ROUND(AVG(nb_res), 1) AS "Nb réservations moyen", 
		min(nb_res) AS "Nb réservations minimum", 
        max(nb_res) AS "Nb réservations maximum"
	FROM (SELECT customer_id, count(*) AS nb_res
			FROM rental
    		GROUP BY customer_id);
```

#### Des clients louent parfois plusieurs fois le même film : quel est le record ? Donner le nom des clients et des films concernés.
```
SELECT customer.customer_id, first_name, last_name, title, count(*) AS "Nb locations"
	FROM customer, rental, inventory, film
    WHERE customer.customer_id = rental.customer_id
    AND rental.inventory_id = inventory.inventory_id
    AND inventory.film_id = film.film_id
    GROUP BY customer.customer_id, first_name, last_name, title
    HAVING count(*) = (SELECT max(nb) 
                       		FROM (SELECT customer_id, film_id, count(*) AS nb 
                                  	FROM rental, inventory
                                  	WHERE rental.inventory_id = inventory.inventory_id
                                    GROUP BY customer_id, film_id));
```

#### Combien de films avons-nous pour chaque nombre de copies de films ? 
On cherche ici à savoir combien de films on a en 1 exemplaire, 2 exemplaires, ...
```
SELECT nb_copies AS "Nb copies", count(*) AS "Nb films"
	FROM (SELECt film_id, COUNT(*) AS nb_copies
			from inventory
    		GROUP BY film_id)
    GROUP BY nb_copies
    order by 1;
```

#### Partant du principe que le prix de remplacement (replacement_cost) est une estimation du coût du film, et que pour chaque location, le bénéfice est de seulement 10% du prix, quels sont les 10 films les plus rentables ? les 10 les moins rentables ?

##### Les plus rentables
```
SELECT film_id, title, replacement_cost AS "Coût", ROUND(benefice, 2) AS "Bénéfice", 
		ROUND(benefice - replacement_cost, 2) AS "Rentabilité"
	FROM film NATURAL JOIN (SELECT film_id, .1 * sum(amount) AS benefice
								FROM payment, rental, inventory
    							WHERE payment.rental_id = rental.rental_id
    							AND rental.inventory_id = inventory.inventory_id
    							GROUP BY film_id)
    ORDER by "Rentabilité" DESC
    LIMIT 10;
```

##### Les moins rentables
idem, en enlevant la clause `"DESC"`.

#### Existe-t’il (si oui le(s)quel(s)) un paiement pour lequel le numéro de client est différent du numéro de client de la location associée ?
A priori, cela n'existe pas dans la base.
```
SELECT payment_id
	from payment INNER JOIN rental ON payment.rental_id = rental.rental_id
    WHERE payment.customer_id <> rental.customer_id;
```

#### Existe-t’il (si oui le(s)quel(s)) des clients qui ont commandé dans plusieurs magasins ?
```
SELECT customer.customer_id, first_name, last_name, COUNT(DISTINCT inventory.store_id) AS "Nb magasins"
	FROM customer, rental, inventory
    WHERE customer.customer_id = rental.customer_id
    AND rental.inventory_id = inventory.inventory_id
    GROUP BY customer.customer_id;
```

#### Est-il possible qu’un film puisse être loué à des prix différents ? Si oui, explorez un la table pour essayer de comprendre pourquoi.
Ici, on regarde le prix min et le prix max d'une location, en comparaison du prix "normal" (`rental_rate`).
```
SELECT film.film_id, title, rental_rate, prix_min, prix_max
	from film NATURAL JOIN (SELECT film_id, MIN(amount) as prix_min, MAX(amount) as prix_max
                            	FROM inventory, rental, payment
                            	WHERE inventory.inventory_id = rental.inventory_id
                            	AND rental.rental_id = payment.rental_id
                           		GROUP BY film_id);
```

Pour l'analyse et l'exploration, il faudrait inclure d'autres attributs dans le regroupement pour comparer.
