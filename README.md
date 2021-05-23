This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Project setup

```bash
npx create-next-app .
yarn add swr axios jotai
```
Tailwind setup →
https://tailwindcss.com/docs/guides/nextjs


## Overview

- "Server data state management" by useSWR
- "Client state management" by Jotai

This demo covers following simple use case 
- Fetched data from Json placeholder in index page is accessed/used by other page. 
- Read and write client state (isDark, selectedTask) from different components by "Jotai".



"Nowadays it's already main stream that React state management is treated separately into "Server data state management" and "Client(UI) state management". In Nextjs, we can use useSWR or react-query for "Server data state management" as we can access cached data from any components or pages. For the "Client(UI) state management", in light weight application we can use "Jotai" super light weight bundle size 2.5kB/v0.16.6 in stead of useContext. Jotai has advantages in terms of less code (no custom provider file), no counter measure needed for re-rendering (we face this issue in useContext), and super light weight bundle size. 

Nevertheless in larger/complicated application we need Redux Toolkit (bundle size 11kB v1.5.1) or potentially Recoil (bundle size 19.7kB v0.3.1) for "Client(UI) state management".

 
