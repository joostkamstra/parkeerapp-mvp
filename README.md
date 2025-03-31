# Parkeerapp MVP

Een minimale parkeerapp waarmee gebruikers kunnen inloggen, hun locatie zien, een parkeersessie kunnen starten/stoppen en kunnen betalen via Mollie.

## Stack
- Frontend: React + Vite
- Backend: Supabase
- Kaarten: Leaflet + OpenStreetMap
- Betaling: Mollie
- Hosting: Vercel

## Features (MVP)
- Inloggen met magic link (Supabase Auth)
- Kaart met huidige locatie
- Start en stop parkeersessie
- Betalen via Mollie
- Historie bekijken

## Setup
1. Clone deze repo
2. Run `npm install`
3. Maak een `.env` aan op basis van `.env.example`
4. Run `npm run dev`

## Supabase setup
- Voeg database tabellen toe via `supabase_schema.sql` (komt nog)
- Zet RLS policies aan
- Gebruik je project URL en anon key in `.env`

## Deploy
- Koppel met Vercel
- Voeg `.env` variabelen toe in dashboard
- Deploy direct vanaf GitHub

## Contact
Project door Joost Kamstra – 2025
