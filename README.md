This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Project setup

```bash
npx create-next-app .
yarn add swr axios jotai
```
Tailwind setup ↓
https://tailwindcss.com/docs/guides/nextjs


## Overview

- Server data state management by useSWR
- Client state management by Jotai

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
Nowadays it's already main stream that React state management is splitted to "Server data state management" and "Client(UI) state management". In Nextjs, we can use useSWR for "Server data state management" as we can access cached data from any components or pages. For the "Client(UI) state management", in light weight application we can use "Jotai"/super light weight bundle size 2.5kB/v0.16.6 in stead of useContext. Jotai has advantage in terms of less code (no custom provider file), no counter measure needed for re-rendering (we face this issue in useContext), and super light weight bundle size over the useContext.

 
