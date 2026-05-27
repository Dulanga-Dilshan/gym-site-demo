#!/bin/sh
set -e

chown -R appuser:appuser /app/static /app/media

echo "Running migrations..."
gosu appuser python manage.py migrate --noinput

echo "Collecting static files..."
gosu appuser python manage.py collectstatic --noinput --clear

echo "Creating superuser if needed..."
gosu appuser python manage.py shell << 'PYEOF'
from django.contrib.auth import get_user_model
import os

User = get_user_model()
username = os.environ.get('SUPERUSER_USERNAME')
password = os.environ.get('SUPERUSER_PASSWORD')
email    = os.environ.get('SUPERUSER_EMAIL')

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
    print('Superuser created.')
else:
    print('Superuser already exists.')
PYEOF

echo "Starting server..."
exec gosu appuser "$@"