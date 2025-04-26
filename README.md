# Yogshala - Yoga Teacher Training Platform

A modern web platform for yoga teacher training courses built with Next.js. Yogshala offers comprehensive yoga teacher training programs ranging from 50-hour to 300-hour certifications.

## Features

- Multiple course durations (50, 100, 200, and 300-hour programs)
- Registered Yoga School (RYS) certified courses
- Yoga Alliance approved training
- Modern, responsive user interface
- Secure authentication system

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- Prisma - Database ORM
- Tailwind CSS - Styling
- NextAuth.js - Authentication

## Getting Started

First, install all libs:
```bash
npm install
```

secondly, setup your env file:
```bash
mv .env.example .env
```
/* or change file name manually */

then, migrate schema to db:
```bash
npx prisma db push 
npx prisma generate client
```

finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

The project uses the Next.js App Router and is structured as follows:

- `/app` - Main application routes and pages
- `/components` - Reusable UI components
- `/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations
- `/public` - Static assets

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

The application can be deployed on [Vercel](https://vercel.com) or any other platform that supports Next.js applications.
