/*
-- Quels sont les actrices ayant comme prénom “Penelope” ?
SELECT *
	FROM actor
    WHERE first_name LIKE "penelope";
    
-- Quels sont les clients inactifs (`active` est égal à 0) ?
SELECT *
	from customer
    WHERE active = 0;
    
-- Quels sont les 10 films les plus longs ?
SELECT title, length
	FROM film
    ORDER by 2 desc
    LIMIT 10;
    
-- Quels films ont le mot “dinosaur” dans leur titre ?
SELECT title
	from film
    WHERE title LIKE "%dinosaur%";
    
-- Quels sont les films ayant le mot “scientist” dans leur description ? (attention, cet attribut est de type BLOB - on ne peut pas chercher dedans une sous-chaine directement)
SELECT title, description
	from film
    where description like "%scientist%";
*/
/*
-- Afficher pour chaque film son titre, son “âge”, sa durée en heures (de type “1h43”)
SELECT title, 
		release_year, DATE("now") - release_year as Age,
        length, length / 60 as "Heures", length % 60 as "Minutes",
        (length / 60) || "h" || (CASE
        	WHEN (length % 60) < 10 THEN "0" || (length % 60)
            ELSE length % 60
        END) AS "Durée"
	FROM film;    
-- Calculer pour chaque location (rental) la durée en jours de celle-ci
SELECT rental_id, rental_date, return_date,
		ROUND(julianday(return_date) - julianday(rental_date)) AS "Nb jours arrondi",
        CEIL(julianday(return_date) - julianday(rental_date)) AS "Nb jours entamés",
        FLOOR(julianday(return_date) - julianday(rental_date)) AS "Nb jours complets"
	from rental;
*/
/*    
-- Pour chaque type de film (rating), donner le nombre de films
select rating, count(*) as "Nb films"
	from film
    group by rating
    order by 2 desc;
-- Quelle est l’année où il y a le plus de films sortis ?
SELECT release_year, count(*) as "Nb films"
	from film
    GROUP by release_year
    order by 2 desc;
-- Quels sont les 10 prénoms d’acteur/actrice les plus utilisés ?
select first_name, count(*) as "Nb"
	from actor
    group by first_name
    order by 2 DESC
    LIMIT 10;
*/
/*
-- Pour chaque catégorie, donner le nombre de films
SELECT name, count(*) as "Nb films"
	from category 
    	INNER JOIN film_category on category.category_id = film_category.category_id
    GROUP by name
    order by 2 desc;
-- Quels sont les 10 films dont on a le plus de copies en stock ?
SELECT title, count(*) as "Nb copies"
	from film
    	INNER JOIN inventory on film.film_id = inventory.film_id
    group by title
    order by 2 desc
    LIMIT 10;
-- Dans quels pays y a t’il des locations ?
SELECT DISTINCT country
	from country, city, address, customer, rental
    WHERE country.country_id = city.country_id
    and city.city_id = address.city_id
    and address.address_id = customer.address_id
    and customer.customer_id = rental.customer_id
    order by 1;
-- Quels sont les 10 acteurs ayant joué dans le plus de films ?
SELECT actor.actor_id, first_name, last_name, count(*) as "nb films"
	from actor INNER join film_actor on actor.actor_id = film_actor.actor_id
    group by actor.actor_id, first_name, last_name
    order by "nb films" DESC
    LIMIT 10;
-- Donner pour chaque client le nombre de ses réservations ?
SELECT customer.customer_id, first_name, last_name, count(rental_id) as "Nb réservations"
	from customer left outer join rental on customer.customer_id = rental.customer_id
    group by customer.customer_id, first_name, last_name
    order by "Nb réservations";
-- Donner le montant total des paiements par pays
select country, round(sum(amount), 2) as "Paiements"
	from country, city, address, customer, payment
    where country.country_id = city.country_id
    and city.city_id = address.city_id
    and address.address_id = customer.address_id
    and customer.customer_id = payment.customer_id
    group by country
    order by 2 desc;
-- Quels sont les 10 films les plus rentables (qui ont généré le plus gros montant de paiement) ?
SELECT film.film_id, title, round(sum(amount), 2) as "Paiements"
	from film, inventory, rental, payment
    where film.film_id = inventory.film_id
    and inventory.inventory_id = rental.inventory_id
    and rental.rental_id = payment.rental_id
    group by film.film_id, title
    order by "Paiements" desc
    LIMIT 10;
-- Quels sont les prix moyens de location par catégorie ?
SELECT name, round(avg(rental_rate), 2) as "Prix moyens"
	from category
    	inner JOIN film_category on category.category_id = film_category.category_id
        INNER JOIN film on film_category.film_id = film.film_id
    group by name
    order by name;
*/
-- Existe-t’il des clients ayant le même nom et le même prénom que des acteurs ? (si oui, lesquels)
select C.first_name, A.last_name
	from customer C, actor A
    where C.first_name = A.first_name
    AND C.last_name = A.last_name;
-- Existe-t’il un pays (si oui le(s)quel(s)) pour lequel nous avons des clients, sans avoir de magasins ?
SELECT country
	from country, city, address, customer
    where country.country_id = city.country_id
    and city.city_id = address.city_id 
    and address.address_id = customer.address_id
EXCEPT
SELECT country
	from country, city, address, store
    where country.country_id = city.country_id
    and city.city_id = address.city_id 
    and address.address_id = store.address_id;
-- Combien y a t’il de réservations en moyenne par client ? (donner aussi le minimum et le maximum)
SELECT ROUND(AVG(nb_res), 1) as "Nb réservations moyen", 
		min(nb_res) as "Nb réservations minimum", 
        max(nb_res) as "Nb réservations maximum"
	from (SELECT customer_id, count(*) as nb_res
			from rental
    		group by customer_id);
-- Des clients louent parfois plusieurs fois le même film : quel est le record ? Donner le nom des clients et des films concernés.
select customer.customer_id, first_name, last_name, title, count(*) as "Nb locations"
	from customer, rental, inventory, film
    where customer.customer_id = rental.customer_id
    and rental.inventory_id = inventory.inventory_id
    and inventory.film_id = film.film_id
    group by customer.customer_id, first_name, last_name, title
    having count(*) = (select max(nb) 
                       		from (select customer_id, film_id, count(*) as nb 
                                  	from rental, inventory
                                  	where rental.inventory_id = inventory.inventory_id
                                    group by customer_id, film_id));

-- Combien de films avons-nous pour chaque nombre de copies de films ?
-- Partant du principe que le prix de remplacement (replacement_cost) est une estimation du coût du film, et que pour chaque location, le bénéfice est de seulement 10% du prix, quels sont les 10 films les plus rentables ? les 10 les moins rentables ?
-- Existe-t’il (si oui le(s)quel(s)) un paiement pour lequel le numéro de client est différent du numéro de client de la location associée ?
-- Existe-t’il (si oui le(s)quel(s)) des clients qui ont commandé dans plusieurs magasins ?
-- Est-il possible qu’un film puisse être loué à des prix différents ? Si oui, explorez un la table pour essayer de comprendre pourquoi.
