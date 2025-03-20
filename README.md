# TP IP Address Tracker

TP dédié aux API Web.

Pour votre information, ce TP utilise deux API web différentes : 
- LeaftLet ;
- Ipify - **la création d'un compte est nécessaire**.

![Aperçu de la version ordinateur du TP de traqueur d'adresse IP](./desktop-preview.jpg)


## 1. Liens utiles

- [Lien vers la maquette Figma](https://www.figma.com/design/9LAfR3Y1ZieDqLVn1GwBJW/ip-address-tracker?node-id=0-1&t=S63xIcOAiD9agnRY-1) - Normalement, les élèves n'en ont pas forcément besoin. Le HTML et le CSS du projet sont déjà codés.
- [Lien vers l'API sur les adresses ip](https://geo.ipify.org/) : l'Ipify permet d'avoir des informations de localisation précises sur les adresses IP. Il est nécessaire de créer un compte pour s'en servir. Pour information, j'ai ajouté le format de réponse [dans un fichier json](./03-complete-solution/data/data.json). **Attention, l'API a une rate limit dans les comptes gratuits**.
- [Lien vers l'API de LeafLet](https://leafletjs.com) : LeafLet est une alternative gratuite et open-source à Google Map. Elle permet d'afficher une carte, de placer des marqueurs, etc.


## 2. Organisation des dossiers

- [01-startup-files](./01-startup-files/) - Le dossier sans le code HTML et CSS. Il contient uniquement les assets pour le projet.
- [02-with-css](./02-with-css/) - le projet tel qu'il est donné aux élèves. Le HTML et le CSS sont déjà présents. Ils n'ont plus qu'à travailler sur le JavaScript
- [03-complete-solution](./03-complete-solution/) - le projet complet avec le code HTML, CSS et JavaScript. Il peut servir de support de cours et de correction.


## 3. Requêter l'API Ipify

### 3.1. Format de requête

```bash
curl --location 'https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}'
```

Où :
- `${apiKey}` est la clé d'API ;
- `${ipAddress}` est l'adresse IP rechéchée, par exemple `64.233.160.1`.

### 3.2. Format de réponse

```json
{
  "ip": "64.233.160.1",
  "location": {
    "country": "US",
    "region": "California",
    "city": "The Greenhouse",
    "lat": 37.41889,
    "lng": -122.10361,
    "postalCode": "",
    "timezone": "-08:00",
    "geonameId": 7150361
  },
  "domains": ["sinomaster.org"],
  "as": {
    "asn": 15169,
    "name": "GOOGLE",
    "route": "64.233.160.0/24",
    "domain": "https://about.google/intl/en/",
    "type": "Content"
  },
  "isp": "Google LLC"
}
```

