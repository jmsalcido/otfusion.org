'use client'

import React from "react";
import posthog from 'posthog-js'
import { NextUIProvider } from '@nextui-org/react'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
  })
}


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </PostHogProvider>
  )
}