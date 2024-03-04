# DjangoRoutify : A mix of Django, Routify, Svelte and Vite

The initial goal for this project is to build a django app  using Svelte technology, that can be used to build easily production-ready apps.

 
Install Python dependencies using this command :
   

     pip install -r requirement.txt
     
Install NPM dependencies for the project :

    yarn install 
    or 
    npm install
  
The project architecture is the following : 

	 - assets : Folder where the source file will be located
	 - -  src : 
	 - - - pages : Folder where svelte pages will be loaded from by Routify
	 - - - - routes : Folder where generated routes for Routify
	 - - App.svelte : main entrypoint for Routify
	 - - main.js : main.js file entrypoint
	 - core : Django configuration files ( wsgi, settings.py, other ... )
	 - dist : Routify temporary output dist folder
	 - - client : Client
	 - - server : Server
	 - static : Folder where the assets CSS|JS will be stored
	 - web : custom django app
	 - vite.config.js : Vite configuration for routify


If you are in development mode, please change in the core/settings.py file the line where the constant **DEBUG** is defined : 

    DEBUG = True
If you want to run for production, change the **DEBUG** to : 

    DEBUG = False


To run the dev mode, run the command : 

    npm run dev
  or 

    yarn run dev

When running the app in development mode, the index.html used is coming from **web/templates/base.html** : 

````html
{% load django_vite %} Load django vite binary into the page

<!DOCTYPE  html>

<html  lang="en">

<head>

<meta  charset="UTF-8">

<meta  name="viewport"  content="width=device-width, initial-scale=1.0">

<title>Document</title>

{% vite_hmr_client %}  Load vite HMR files and deps

  

{% if debug %}
In debug mode, the manifest_json generated into static/dist/manifest.json reference this path as the entry point for routify.

{% vite_asset '.src/main.js' %}

{% else %}
In production mode, the manifest_json generated into static/dist/manifest.json reference this path as the entry point for routify.

{% vite_asset '.routify/render.js' %}

{% endif %}

</head>

<body>

</body>

</html>

````
In order to build for dev, you'll need to open two terminal windows. One to run Routify in dev mode and another for django server

    npm run dev

    python manage.py runserver

In order to build for production : 

    npm run build

    python manage.py collectstatic
    
    python manage.py runserver
    

Learn more about Django here : https://www.djangoproject.com/
Learn more about Django_Vite here : https://github.com/MrBin99/django-vite
