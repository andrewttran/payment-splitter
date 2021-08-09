# Payment Splitter Backend

## Install Dependencies 

Install [poetry](https://python-poetry.org/)
Run `poetry install`

## Run Dev Server

Run `uvicorn app.main:app --reload`
(you may need to activate your virtual environment first by running `poetry shell` and create/source a `.env` file based off of `.env.example`)

This will start the server at [http://localhost:8000](http://localhost:8000) and reload it on any edits.