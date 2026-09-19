# Zuveriya Portfolio

Django portfolio for Zuveriya Khan using Django templates, Tailwind CSS, vanilla JavaScript, and SQLite.

## Local setup

```powershell
python -m pip install -r requirements.txt
npm install
npm run build:css
python manage.py migrate
python manage.py seed_portfolio
python manage.py runserver
```

Open http://127.0.0.1:8000/.

Use `npm run watch:css` in a second terminal while editing styles. Create an admin account with `python manage.py createsuperuser`, then open `/admin/` to edit portfolio content.

The contact form uses Django's console email backend during development. Configure a real email backend before deployment.
